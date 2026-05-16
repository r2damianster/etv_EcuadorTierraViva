#!/usr/bin/env python
"""
PostToolUse hook: verifies EN/ES key parity after editing any locales/*.json.
Exits 0 always (non-blocking). Prints a warning to stderr if keys diverge.
"""
import json
import os
import sys

LOCALES_DIR = os.path.join(
    os.path.dirname(__file__), '..', '..', 'locales'
)

EN_FILE = os.path.join(LOCALES_DIR, 'en.json')
ES_FILE = os.path.join(LOCALES_DIR, 'es.json')


def load(path):
    try:
        with open(path, encoding='utf-8') as f:
            return set(json.load(f).keys())
    except Exception as e:
        print(f'[i18n-check] Cannot read {path}: {e}', file=sys.stderr)
        return set()


def main():
    en_keys = load(EN_FILE)
    es_keys = load(ES_FILE)

    only_en = en_keys - es_keys
    only_es = es_keys - en_keys

    if not only_en and not only_es:
        print('[i18n-check] ✓ EN/ES keys in sync.', file=sys.stderr)
        sys.exit(0)

    print('\n[i18n-check] ⚠ Translation parity issue:', file=sys.stderr)
    if only_en:
        print(f'  Missing in es.json ({len(only_en)}):')
        for k in sorted(only_en):
            en_val = ''
            try:
                with open(EN_FILE, encoding='utf-8') as f:
                    en_val = json.load(f).get(k, '')[:60]
            except Exception:
                pass
            print(f'    "{k}": "{en_val}"')

    if only_es:
        print(f'  Missing in en.json ({len(only_es)}):', file=sys.stderr)
        for k in sorted(only_es):
            print(f'    "{k}"', file=sys.stderr)

    print('[i18n-check] Fix these keys to keep both languages in sync.\n', file=sys.stderr)
    sys.exit(0)  # non-blocking: never fail the tool call


if __name__ == '__main__':
    main()
