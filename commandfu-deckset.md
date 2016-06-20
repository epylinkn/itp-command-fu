theme: Sketchnote

# [fit] 10x Command Line-Fu

## [fit] How to look cooler at Starbucks

## [fit] How to understand more XKCD comics

^ Welcome. Initially a class about intermediate command line things. Now it's a mix of that and things I think you guys might find useful in your workflow.

---

![](11th_grade.png)

^ Let's jump into it. I like this XKCD comic because I think it speaks to what we're doing here at ITP. Many times I find that the stuff we learn in a weekend is infinitely more useful than the textbooks I read in college. For me, the command line is one of those tools. We neglect it because it seems arcane and scary. Many people think it's for programmers and developers but I want you to know that it can be for you too!

---

## Why am I here? Why practice command-fu?

- You use the command line at work -- servers and interface-less computers
- You use it to bootstrap your projects yet don't understand it
- Automating tasks you do frequently
- Anthony seems like a cool guy I wonder what he has to say

^ Let's quickly talk about why we're here. I've been programming for a while and I've always found it fun to automate things.

^ I want to give you a sampling of what the command-line is capable of, with an emphasis on things that you guys might use.

---

> The command line is incredibly expressive and powerful. It's a fundamental tool that once learned can unlock new levels of productivity and automation.

---

## Our Roadmap

- Standard unix bash commands
- Pipes and redirection
- alias, shell functions, and your first shell script
- write a second shell script
- cron
- customizing, `PATH`, `.bashrc`, and `.bash_profile`
- homebrew - the package manager for OSX

---

## /bin/bash

Mac's run Unix.
Developers love Unix.
Unix is awesome.
You can be awesome.

---

## Standard unix bash commands

### The basics

```
cd - change directory
ls - list files
pwd - current working directory
cp - copy
mv - move
mkdir - make directory
rm - remove
cat - concatenate
```

^ We won't cover these because I expect you already know these elementary commands. And if you don't know them now might be a good time to leave. J/K but you can follow along with the examples and pick up some practice with these too.

---

## Standard unix bash commands

### More advanced commands

```
say
history
head / tail
grep
curl
watch
xargs
ssh
```

---

## Structure of a command

```bash
$ command --option option_argument x (y z ...)
```

---

## `say` cheese

Simple command to make terminal say something.

```
say why cant we be friends
```

Extra credit:

```
say --voice ?
say --voice "Bad News" The light you see at the end of the tunnel is the
headlamp of a fast approaching train.
```

---

## `history` repeats itself

```
history
echo goodbye world
history
!-2
history
```

- UP-ARROW
- CTRL + R
- !$, !!

---

## `heads` or `tails`

```
head camp.txt
head -n50 camp.txt
tail camp.txt
```

Extra Credit:

```
tail -f camp.txt
echo foo >> camp.txt
```

## `curl`*y* fries

```bash
curl buoydontfloat.com/itp-calendar
curl wttr.in
open -a "Google Chrome" http://wttr.in
curl -I ideas.ted.com
```

#### Extra Credit

```bash
curl -XPOST slack webhook
curl -o itp-calendar.html http://itp.nyu.edu/camp2016/session/238
# try recursive downloading a site with wget
# copy a cURL command from  chrome inspector
```

---

## Chaining commands

```
$ false || echo "Oops, fail"
Oops fail

$ true || echo "Will not be printed"
$  

$ true && echo "Things went well"
Things went well

$ false ; echo "This will always run"
This will always run
```

---

## Steal an entire site with wget

http://www.linuxjournal.com/content/downloading-entire-web-site-wget

```bash
$ wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
     --domains blankslate.io \
     --no-parent \
         www.blankslate.io
```

---

# Resources

- https://github.com/jlevy/the-art-of-command-line

![background filtered](kid-terminal.gif)

---

^
Intermediate Command-Fu (Terminal for Mac)

Alternative working titles:
A bash-ful good time
How to look cooler at Starbucks

What if I told you the terminal can do just about everything?
Unfortunately, no one can be told what the Matrix is. You have to see it
for yourself.

We'll take a whirlwind tour of some of the things that command line can
do for you tomorrow. We'll cover:

* intermediate commands: history, CTRL-R, say, grep, alias, curl, watch,
  time
* up, tab, !$, !!
* writing your first alias
* git better
* |, &&, and output redirection
* what does `cat` do anyway? and writing your first shell script
  - function go() { open -a 'Atom' && open -a 'MAMP' &&
    positive-message.rb }
* writing your second shell script using javascript
* ~/.bash_profile and understanding the PATH
* cron
* homebrew - a package manager for OSX and why you should've used it
  yesterday
  - jq
  - tree

fun things:
activate power mode
js callback hell and consider using python or ruby for scripting
slack webhooks
