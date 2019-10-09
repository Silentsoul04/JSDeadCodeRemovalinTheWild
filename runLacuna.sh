#!/bin/bash

rm -r ./LacunaWebPages/*
while IFS= read line; do
  counter=0
  node ../lacuna ./webpages/unzipped/$line/$line -d lacunaWebPages/$line/0 -a dynamic tajs -o 0
  node ../lacuna ./webpages/unzipped/$line/$line -d lacunaWebPages/$line/1 -a dynamic tajs -o 1
  node ../lacuna ./webpages/unzipped/$line/$line -d lacunaWebPages/$line/2 -a dynamic tajs -o 2
  node ../lacuna ./webpages/unzipped/$line/$line -d lacunaWebPages/$line/3 -a dynamic tajs -o 3
  counter=$((counter+1))

done < "$1"
