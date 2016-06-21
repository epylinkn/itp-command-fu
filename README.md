10x Command Line Fu
===================

## Setup

```bash
npm install
brew install terminal-notifier   # for OSX growl notifications
```

## Check out the starter scripts

```bash
# Running the starter scripts
/bin/bash 01-hal.sh
node 02-long-job.js
node 03-superbole.js
node 04-cheerio-scraper.js

brew install phantomjs   # install phantomjs webdriver
phantomjs 05-phantom-example.js
```

## Go a step further and make things executable

```bash
# Marking files as executable
chmod +x 03-superbole.js
./superbole.js

# Adding your scripts to your personal bin folder
mkdir ~/bin                                             # Setup a personal bin folder
echo 'export PATH=$HOME/bin:$PATH' >> ~/.bash_profile   # Append your bin folder to your PATH
cp 03-superbole.js ~/bin/superbole.js
supberbole.js                                           # Run it!
watch -n5 superbole.js                                  # Use it like any command
```




