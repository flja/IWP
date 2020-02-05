console.log("IWP lecture 1");
let width = 4, height = 8;
let s = "";
let sArray = ["12", "1234", "12", "1234", "12", "1234"];

let createChessTable = function test() //task 2.
{
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


function AddTwoVariablesTogether(oldVal, newVal) {
    return oldVal + newVal;
}

let AverageStringLength = function CalcuLateAvgStrLgn(strArray) //task 3.
{
    let totalLgn = 0;

    if (Array.isArray(strArray)) {
        totalLgn = strArray.map(e => e.length).reduce(AddTwoVariablesTogether, 0);
        //console.log("Total:" + totalLgn);
        return totalLgn / strArray.length;
    }
    else
    {
        return -1;
    }
}
console.log("Average string length: " + AverageStringLength(sArray));


function findSolution(target) { //Task 4.
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

