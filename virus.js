const fs = require('fs');

var readable = fs.createReadStream ('foo.txt');
readable.resume ();
readable.setEncoding ('utf-8');

let inputString = '';
let currentLine = 0;

readable.on ('data', inputStdin => {
    inputString += inputStdin;
});

readable.on ('end', _ => {
    inputString = inputString.trim().split ('\n').map (string => {
        return string.trim();
    });

    main ();
});

function readLine () {
    return inputString[currentLine++];
}

function main () {
    var virus = readLine();
    const n = +readLine();
    var b_composition = [];
    for (let i = 0; i < n; i++) {
        b_composition.push (readLine());
    }

    Object.defineProperties (Array.prototype, {
        count: {
            value: function (value) {
                return this.filter (v => v == value).length;
            },
            enumerable: true,
            writable: true,
            configurable: true,
        },
    });

    // const countChar = function (blood, virusAR) {
    //     let count = 0;
    //     for (const char of blood) {
    //         if (virusAR.includes (char)) {
    //             count += 1;
    //         }
    //     }
    //     return count;
    // };
    
    
    const check = function (string, virus) {
        let dup = [...virus];
        for (let i = 0; i < string.length-1; i++) {
            var curr = string[i], next = string[i+1];
            if (dup.indexOf (curr) > dup.indexOf (next))
                return false;
            else
                dup.splice (0, dup.indexOf (curr) + 1);
        }
        return true;
    }

    for (const value of b_composition) {
        // var c = countChar (value, virus.split(''));
        var bool = check (value, virus);
        if (bool) console.log ('POSITIVE');
        else console.log ('NEGATIVE');
    }
}

/**
coronavirus
3
abcde
crnarus
ravus
onarous
**/
