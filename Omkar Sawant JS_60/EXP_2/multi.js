function generateTable(){
    var tableBody= document.getElementById("tablebody");
    var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);

    var row = tableBody.insertRow(0);
    for(var j=0;j<n2;j++){
        if(n1<0 || n2<0){
            document.getElementById("op").innerHTML="Invalid.......!";
            break;
        }

        var temp=row.insertCell(j);
        for(var i =1;i<=10;i++){
            temp.innerHTML=temp.innerHTML+i*n1+"<br>";
        }
        if(n1==n2){
            break;
        }
        n1++;
    }
}