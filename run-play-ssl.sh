#!/bin/bash

#activator -Dhttps.port=9443 -Dhttp.port=disabled -Dhttps.keyStore=./conf/example.com.jks -Dhttps.keyStorePassword=dmkcert -Dplay.http.sslengineprovider=dmk.CustomSSLEngineProvider ~run
#activator -Dhttps.port=9443 -Dhttp.port=disabled -Dhttps.keyStore=./conf/dmkselfsigned.jks -Dhttps.keyStorePassword=password -Dplay.http.sslengineprovider=dmk.CustomSSLEngineProvider ~run
activator -Dhttps.port=9443 -Dhttp.port=disabled -Dhttps.keyStore=./conf/dmkselfsigned.jks -Dhttps.keyStorePassword=password ~run
