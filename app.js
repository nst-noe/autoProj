let parcer = require("parcer.js");
let subject = [];
let semester = [];
let time = [];
let a, b, c, d, f, g, k;
parcer.pars(subject, semester, time);

for(i =0;i<subject.length;i++) {
    if((semester[i] === "Второй семестр") && (a===0)){
       a = i;
    }
    else if((semester[i] === "Третий семестр") && (b===0)){
        b = i;
    }
    else if((semester[i] === "Четвертый семестр") && (c===0)){
        c = i;
    }
    else if((semester[i] === "Пятый семестр") && (d===0)){
        d = i;
    }
    else if((semester[i] === "Шестой семестр") && (f===0)){
        f = i;
    }
    else if((semester[i] === "Седьмой семестр") && (g===0)){
        g = i;
    }
    else if((semester[i] === "Восьмой семестр") && (k===0)){
        k = i;
    }
}
var tbl = document.getElementById("table");
var element = document.getElementById("table");
for(var i =0;i<a;i++) {
    var row =  document.createElement("div");
    row.setAttribute("class", "row");
    row.appendChild(createElement(subject[i]));
    row.appendChild(createElement(subject[i+a]));
    row.appendChild(createElement(subject[i+b]));
    row.appendChild(createElement(subject[i+c]));
    row.appendChild(createElement(subject[i+d]));
    row.appendChild(createElement(subject[i+f]));
    row.appendChild(createElement(subject[i+g]));
    row.appendChild(createElement(subject[i+k]));
    tbl.appendChild(row);

}

function createElement(text) {
    var node =   document.createElement("div");
    node.setAttribute("class", "col-sm-3");
    node.appendChild(document.createTextNode(text));
    return node;
}