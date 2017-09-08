## run tests

```
$ polymer test --local firefox,chrome --persistent
$ wct --local firefox,chrome --persistent --compile always
```

## setup on macos

install node, yarn, and polymer commands using homebrew package manager.

```
$ brew install node yarn
$ yarn global add polymer-cli
```

install chrome and firefox.

```
$ brew cask install --appdir="/Applications" google-chrome
$ brew cask install --appdir="/Applications" firefox
$ ln -s /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome /usr/local/bin/chrome
$ ln -s /Applications/Firefox.app/Contents/MacOS/firefox /usr/local/bin/firefox
```