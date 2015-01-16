var process = function(argv){
    var args = argv.slice(2),
        flags = (args[0][0] === '-') ? args[0].slice(1) : "",
        terms = (flags === "") ? args : args.slice(1);

    return terms.map(function(term){
        return (new RegExp(term, flags));
    });
};

module.exports = process;