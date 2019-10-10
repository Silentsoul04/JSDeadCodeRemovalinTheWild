#!/bin/bash

rm -r ./LacunaWebPages2/*
while IFS= read line; do
  DIR=$(dirname "${line}")
  FILENAME=$(basename "${line}")
  node ../lacuna new-100-webpages-unzipped/$DIR -e $FILENAME -d lacunaWebPages2/$DIR/0 -a dynamic tajs -o 0
  node ../lacuna new-100-webpages-unzipped/$DIR -e $FILENAME  -d lacunaWebPages2/$DIR/1 -a dynamic tajs -o 1
  node ../lacuna new-100-webpages-unzipped/$DIR -e $FILENAME  -d lacunaWebPages2/$DIR/2 -a dynamic tajs -o 2
  node ../lacuna new-100-webpages-unzipped/$DIR -e $FILENAME  -d lacunaWebPages2/$DIR/3 -a dynamic tajs -o 3


done < "$1"
