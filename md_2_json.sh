#!/bin/bash

for file in src/data/md/*.md
do
  md_to_json -i 4 -o "${file//md/json}" "$file"
  echo "$file converted to ${file//md/json}"
done