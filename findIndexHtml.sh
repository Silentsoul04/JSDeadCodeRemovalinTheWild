#!/bin/bash
cd ./new-100-webpages-unzipped/
for filename in *; do
  echo $filename
  find "$(pwd)/$filename/$filename" -name '*.html' >> tmp
done
