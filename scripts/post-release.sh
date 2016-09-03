#!/usr/bin/env bash

VERSION=$(cat package.json | grep '"version":' | grep -o '\d\+\.\d\+\.\d\+')
GIT_BRANCH=$(git symbolic-ref HEAD | sed -e 's|^refs/heads/||')
GIT_TAG="${VERSION}"
RELEASE_BRANCH="release-$VERSION"

trap '{ echo -e "\nError: $BASH_COMMAND" >&2; cleanup; exit 1; }' ERR
trap '{ echo -e "\nExit" >&2; cleanup; exit 1; }' SIGQUIT SIGTERM SIGINT

cleanup() {
  rm -rf ./dist
  git checkout $GIT_BRANCH
  git branch -D $RELEASE_BRANCH
}

git checkout -b $RELEASE_BRANCH
npm run build
git add --force ./dist
git commit -m "Build $VERSION"
git tag $GIT_TAG --force -m "Release $VERSION"

printf "Push release? [yN] "
read -n 1 push
printf "\n"

if [ $push == "y" ]
then
  git push origin $GIT_TAG
  npm publish
fi

cleanup
