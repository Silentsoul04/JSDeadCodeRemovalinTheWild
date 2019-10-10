#!/bin/bash

unzip_d () {
    zipfile="$1"
    zipdir=${1%.zip}
    unzip -d "$zipdir" "$zipfile"
    rm -rf "$zipfile"
}

for file in new-100-webpages-unzipped/*
do
    unzip_d $file
done
