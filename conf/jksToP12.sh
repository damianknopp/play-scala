#!/bin/bash
keytool -importkeystore -srckeystore $1 -destkeystore $1.p12 -srcstoretype JKS -deststoretype PKCS12 -srcstorepass $2 -deststorepass $2 -srcalias $3 -destalias $3 -srckeypass $2 -destkeypass $2 -noprompt
