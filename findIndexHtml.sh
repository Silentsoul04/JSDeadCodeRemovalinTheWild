#!/bin/bash
cd ./new-100-webpages-unzipped/
for filename in *; do
  echo $filename
  find "$filename/$filename" -name '*.html' >> tmp
done
