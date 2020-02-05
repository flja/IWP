console.log("IWP lecture 1");
let width = 4, height = 8;
let s = "";
let sArray = ["12", "1234", "12", "1234", "12", "1234"];

//task 2.
let createChessTable = function test() {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i % 2 === 0)
                s = s.concat("# ");
            else
                s = s.concat(" #");
        }

        if (i < height - 1) { //avoid adding a new line feed when max height is reached.
            s = s.concat("\n");
        }
    }
}

createChessTable(); //enable to print out chess table.
console.log(s); //enable to print out chess table.

//task 3.
function AddTwoVariablesTogether(oldVal, newVal) {
    return oldVal + newVal;
}

let AverageStringLength = function CalcuLateAvgStrLgn(strArray) {
    let totalLgn = 0;

    if (Array.isArray(strArray)) {
        totalLgn = strArray.map(e => e.length).reduce(AddTwoVariablesTogether, 0);
        //console.log("Total:" + totalLgn);
        return totalLgn / strArray.length;
    }
    else {
        return -1;
    }
}
console.log("Average string length: " + AverageStringLength(sArray));

//Task 4. not finish
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(18));


//Task 5.
let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
    /* and so on... */
];

console.log(journal[2].events[4]);


//Task 6.
strInfo = { min: 0, max: 0, average: 0, median: 0 } //result obj

function StringArrayInfo(strArray) {
    if (Array.isArray(strArray)) {
        let s = strInfo
        strArray.sort(function(a, b){return a.length - b.length});
        s.min = strArray[0].length;
        s.max = strArray[strArray.length - 1].length
        s.average = AverageStringLength(strArray);

        if(strArray.length % 2 == 0)
        {
            let med = strArray.length / 2;
            let i = strArray[med].length;
            i += strArray[med -1].length;
            s.median = i / 2;
        }
        else
        {
            console.log("here2");
            s.median = strArray[strArray.length / 2 - 1].length;
        }
        console.log(strArray);

        return s;
    }
    return null;
}

console.log(StringArrayInfo(sArray));


