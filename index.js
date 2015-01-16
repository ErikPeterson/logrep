#!/usr/bin/env node

var exec = require('child_process').exec;

var processArgs = require('./processArgs.js');
var patterns = processArgs(process.argv);
var findCommits = require('./findCommits.js')(patterns);

var child = exec('git log', { maxBuffer: 10000*1024}, function(err, out, stderr){
    if(err) return console.error(err);

    var corpus = out.toString(),
        commits = findCommits(corpus);

        commits.forEach(function(commit){
            process.stdout.write(commit);
        });
});