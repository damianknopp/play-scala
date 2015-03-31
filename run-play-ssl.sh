#!/bin/bash

# increase DH keysize, see https://www.playframework.com/documentation/2.3.x/ConfiguringHttps
SERVER_OPTS="-Djavax.net.ssl.trustStore=./conf/exampletrust.jks -Djavax.net.ssl.trustStorePassword=changeit -Djdk.tls.ephemeralDHKeySize=2048 -Djdk.tls.rejectClientInitiatedRenegotiation=true"
# forward secrecy cipher suites, doesnt work w/ out bouncy castle jar?
#SERVER_OPTS="$SERVER_OPTS -Dhttps.cipherSuites=TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_AES_256_CBC_SHA"
# list pulled from Mozilla for "Modern" support,  https://wiki.mozilla.org/Security/Server_Side_TLS
SERVER_OPTS="$SERVER_OPTS -Dhttps.cipherSuites=ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-AES256-GCM-SHA384,DHE-RSA-AES128-GCM-SHA256,DHE-DSS-AES128-GCM-SHA256,kEDH+AESGCM,ECDHE-RSA-AES128-SHA256,ECDHE-ECDSA-AES128-SHA256,ECDHE-RSA-AES128-SHA,ECDHE-ECDSA-AES128-SHA,ECDHE-RSA-AES256-SHA384,ECDHE-ECDSA-AES256-SHA384,ECDHE-RSA-AES256-SHA,ECDHE-ECDSA-AES256-SHA,DHE-RSA-AES128-SHA256,DHE-RSA-AES128-SHA,DHE-DSS-AES128-SHA256,DHE-RSA-AES256-SHA256,DHE-DSS-AES256-SHA,DHE-RSA-AES256-SHA"
# disable http and enable https
SERVER_OPTS="$SERVER_OPTS -Dhttps.port=9443 -Dhttp.port=disabled -Djavax.net.ssl.keyStore=./conf/dmkselfsigned.jks -Djavax.net.ssl.keyStorePassword=password -Dplay.http.sslengineprovider=dmk.CustomSSLEngineProvider"
SERVER_OPTS="$SERVER_OPTS -Djavax.net.debug=all"
echo "activator $SERVER_OPTS ~run"
activator $SERVER_OPTS ~run

# https 1 way, no client auth
#activator -Djavax.net.debug=all -Dhttps.port=9443 -Dhttp.port=disabled -Dhttps.keyStore=./conf/dmkselfsigned.jks -Dhttps.keyStorePassword=password ~run
