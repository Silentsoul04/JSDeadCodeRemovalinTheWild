#!/bin/bash

cd 90-top-webpages-unzip
for file in *
do
    echo $file >> WebNames.txt
done
mv WebNames.txt ..
