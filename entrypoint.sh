#!/bin/sh

set -e

PREFIX='REPLACE_'
SUBSTITUTES=$(cat .env | grep "%$PREFIX" | sed -E "s/APP_([a-zA-Z_]+)=%$PREFIX([a-zA-Z_]+)%/s|%$PREFIX\1%|$\{\1\}|g; /")

echo "Substituting %$PREFIX*% with env variables..."

grep -lr "%$PREFIX" /var/www | \
  xargs sed "$(eval "echo \"$SUBSTITUTES\"")" -i

echo "done"

exec "$@"
