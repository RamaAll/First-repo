let output = document.getElementById("calc")

function display(num) {
    output.value += num;
}
function Clear() {
    output.value = "";
}
function Delete() {
    output.value = output.value.slice(0, -1);
}
//let number = "1234512345";
//console.log(number.slice(0,-1));عملية الحذف لاخر عنصر فقط
function calc() {
    try {
        output.value = eval(output.value);
    }
    catch(err) {
        output.value = "Error";
    }
}