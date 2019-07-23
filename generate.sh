openapi-generator generate -g typescript-angular -c config.json -i spec.json

npm install
npm run build
tar -cvzf dist.tgz dist

git add --all
git commit -m "update api client"
git push
