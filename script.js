function dataOut() {
//alert(document.getElementById("insData").value); /*세미콜론, 구분자(seperator, delimiter)*/
    var data =document.getElementById("insData").value;
//    alert(data);

    document.getElementById("output").innerText = data;
    document.getElementById("output").style.color = "#f00";
    document.getElementById("output").style.fontSize = "50px";
    document.getElementById("output").style.fontStyle = "italic";
}
