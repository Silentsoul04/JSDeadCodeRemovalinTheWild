#!/bin/bash

rm -r ./LacunaWebPages1/*
while IFS= read line; do
  counter=0
  node ../lacuna ./90-top-webpages-unzip/$line/$line -d lacunaWebPages1/$line/0 -a dynamic tajs -o 0
  node ../lacuna ./90-top-webpages-unzip/$line/$line -d lacunaWebPages1/$line/1 -a dynamic tajs -o 1
  node ../lacuna ./90-top-webpages-unzip/$line/$line -d lacunaWebPages1/$line/2 -a dynamic tajs -o 2
  node ../lacuna ./90-top-webpages-unzip/$line/$line -d lacunaWebPages1/$line/3 -a dynamic tajs -o 3
  counter=$((counter+1))

done < "$1"
