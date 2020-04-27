#!/bin/sh
#
#  script to get, build and deploy music-player to OtherTools
#
WORK_DIR="/Users/jv/tmp/music-player"
PRODUCTION_DIR="/Users/jv/Desktop/OtherTools/music-player"
#
CLONES_DIR=$WORK_DIR/clones
#
echo "Creating Music Player in $PRODUCTION_DIR"
#
echo "Removing $WORK_DIR"
rm -rf $WORK_DIR
#
echo "Creating $WORK_DIR"
mkdir -p $WORK_DIR
#
echo "Creating $CLONES_DIR"
mkdir $CLONES_DIR
#
echo "Git clone desired repositories"
git clone git@github.com:johnvincentio/music-player $CLONES_DIR
#
echo "Make the client"
cd $CLONES_DIR/client
cp prod.env .env
#
echo "Npm install the client"
npm install
#
echo "Make client production"
npm run production
#
echo "Make the server"
cd $CLONES_DIR/server
cp prod.env .env
#
echo "Npm install the server"
npm install
#
echo "Copy client distribution to the server"
cp -r $CLONES_DIR/client/dist $CLONES_DIR/server/dist
#
echo "Removing Production $PRODUCTION_DIR"
rm -rf $PRODUCTION_DIR
#
echo "Make $PRODUCTION_DIR"
mkdir $PRODUCTION_DIR
#
echo "Copying to Production $PRODUCTION_DIR"
cp -r $CLONES_DIR/server $PRODUCTION_DIR
#
echo "Removing $WORK_DIR"
rm -rf $WORK_DIR
#
echo "Completed"
#
