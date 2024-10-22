#!/bin/sh

npm pack
cd ..
cd codepedia
npm i ../codepedia-types/codepedia-types-$1.tgz
cd ..
cd codepedia-api
npm i ../codepedia-types/codepedia-types-$1.tgz