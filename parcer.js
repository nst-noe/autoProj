var XLSX = require("xlsx");
var workbook = XLSX.readFile("./1c.xlsx")
let array = [];
let sem = [];
let suppArray = [];
let worksheet = workbook.Sheets[workbook.SheetNames[0]];
let item = "A";
let key;
let name;
let num;
let free = 0;
let answer = [];
let stop;
let A = [];
module.exports = {
    pars: function (answer, sem, A){
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
        for(key = 2; key < 1000; key++){
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
                A.push(free);
                answer.push(array[1]);
                sem.push(array[2]);
                free = num;
                num = 0;
            }
            array = [];
            if(isNaN(free) && key > 10){
                stop = key;
                break;
            }
        }
        for(key = stop - 1; key > 0; key--){
            free = worksheet[`G${key}`];
            if(free != undefined){
                free = worksheet[`G${key}`].v;
                num += free;
            }else{
                A.push(num);
                break;
            }
        }
        answer.pop();
    }
}