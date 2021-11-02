var XLSX = require("xlsx");
var workbook = XLSX.readFile("1c.xlsx");
let array = [];
let suppArray = [];
let worksheet = workbook.Sheets[workbook.SheetNames[0]];
let item = "A";
let key;
let name;
let num;
let free;
let answer = [];
let A = [];
for (let indexA = 65; indexA < 72; indexA++) {
    if(indexA != 69){
    item = String.fromCharCode(indexA);
    name = worksheet[`${item}1`];
    if(name != undefined){
        name = worksheet[`${item}1`].v;
        suppArray.push(name);
        }
    }
}
suppArray.push(0);
for(key = 2; key < 300; key++){
    for (let indexA = 65; indexA < 72; indexA++){
    if(indexA != 69){
        item = String.fromCharCode(indexA);
        name = worksheet[`${item}${key}`];
        if(name != undefined){
                name = worksheet[`${item}${key}`].v;
                array.push(name);
            }
        }
    }
    array.push(0);
    suppArray.push(0);
    if(array[5] != 0){
        array.pop();
        suppArray.pop();
        num += array[5];
    }
    if(array[1] != suppArray[1]){
        array.pop();
        suppArray = array;
        A.push(num);
        answer.push(array[1] + ", " + array[2]);
        num = 0;
    }
    array = [];
}
for(let i = 0; i < A.length; i++){
    console.log(answer[i] + ", " + A[i + 1] + "\n");
}