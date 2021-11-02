var XLSX = require("xlsx");
var workbook = XLSX.readFile("03-5760_-_KIS_2021-AUP_s_KP_1.xlsx")
let array = [];
let worksheet = workbook.Sheets[workbook.SheetNames[0]];
let item = "B";
let key = 66;
let name;
for (let indexA = 66; indexA < 74; indexA++) {
    item = item + String.fromCharCode(indexA);
    for (let index = 34; index < 96; index++) {
        if (index == 65) index++;
        let sem = worksheet[`${item}${index}`];
        if (sem != undefined) {
            name = worksheet[`F${index}`].v;
            sem = worksheet[`${item}${index}`].v
            array.push(name + " " + sem + '\n');
        }
        key++;
    }
    console.log("K " + (indexA - 65) + " семестру относится\n\n" + array + "\n\n");
    array = [];
    key = 66
    item = "B";
}