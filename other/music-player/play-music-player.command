#!/bin/sh
#
#  script to play the music player
#
PRODUCTION_DIR="/Users/jv/Desktop/OtherTools/music-player/server"
#
cd $PRODUCTION_DIR
#
export NODE_PATH=/usr/local/lib/node_modules
export PATH=$PATH:/usr/local/bin
#
/usr/local/bin/npm start
#
