#!/bin/bash

# 1, alias
# 2, selfsigned file
# 3, truststore file
#enter password for $2, then password for $3
keytool -export -alias $1 -file $2.cer -keystore $2
keytool -import -trustcacerts -alias $1 -file $2.cer -keystore $3
