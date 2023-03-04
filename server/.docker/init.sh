#!/bin/bash

php /var/www/bin/console doctrine:schema:update --force
#php bin/console lexik:jwt:generate-keypair --overwrite --quiet --env prod