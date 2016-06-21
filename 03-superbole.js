#!/usr/bin/env node
var superb = require('superb');
var exec = require('child_process').exec;
var growl = require('growl');

var superbole = superb();
//console.log("You are " + superbole);
exec("say you are " + superbole);
growl("You are " + superbole + "!");
