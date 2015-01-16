var regex = /^commit\s[\w|\d]+/;

var splitCommits = function(text){
    var commits = [],
        lines = text.split('\n'),
        holder = "";

    lines.forEach(function(line, i){
        if(regex.test(line) && i !== 0){
            commits.push(holder);
            holder = "";
        }

        holder += line + '\n';
    });

    return commits;
};

module.exports = function(patterns){

    var patts = patterns;

    return function(text){
        var commits = splitCommits(text)
                        .filter(function(commit){
                            return patts.every(function(patt){
                                return patt.test(commit);
                            });
                        });

        return commits;
    }
}; 