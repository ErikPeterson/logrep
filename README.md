Logrep
======

Logrep is a command line utility to help you find commits in your Git log that
contain specified words or regular expressions. It spits back all matching log
entries in full.

##Requirements

NPM, node.js or io.js. Probably won't work on Windows (sorry suckers).

##Installation

````
$ npm install -g logrep

````

##Usage

````
$ logrep -gimy 'add terrible function' '\w\s(.*)[^function]'

````

**Options**

The options passed to logrep are translated directly into flags on the regular
expressions generated to search your Git log.

**Available Flags** [1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

- **-g** global match
- **-i** ignore case
- **-m** multiline; treat beginning and end characters (^ and $) as working over
 multiple lines (i.e., match the beginning or end of each line (delimited by \n 
 or \r), not only the very beginning or end of the whole input string)
- **-y** sticky; matches only from the index indicated by the lastIndex property
 of this regular expression in the target string (and does not attempt to match 
 from any later indexes).

**Matchers**

Matchers are converted to JavaScript regular expressions, and can use regex syntax.
Escape any characters considered 'special' in regex patterns. Each matcher acts
as a filter, so only commits with messages that pass all the filters will show up.