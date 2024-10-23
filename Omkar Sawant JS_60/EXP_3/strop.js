function disp(){
    var a1 = document.getElementById("str").value;
    document.getElementById("op").innerHTML = a1;
}

function strrev(){
    var a1 = document.getElementById("str").value;
    var len = a1.length;
    var arr = "";
    for(var i = len ; i>=0; i--){
        arr += a1.substring(0+i,1+i);
    }
    document.getElementById("op").innerHTML=arr;
}

function charchange(){
    var a1 = document.getElementById("str").value;
    var len = a1.length;
    var ele1 = prompt("Which character should be replaced :");
    var ele2 = prompt("Replacing character :");
    var arr = "";
    for(var i=0;i<len;i++){
        arr += a1.substring(0+i,1+i);
        if(ch == ele1){
            ch = ele2;
            arr += ch;
        }
        else{
            arr += ch;
        }
    }
    document.getElementById("op").innerHTML=arr;   
}

function palindrome(){
    var a1 = document.getElementById("str").value;
    var arr = "";
    for(var i=a1.length;i>=0;i--){
        arr += a1.substring(0+i,1+i);
    }
        if(a1 == arr){
            document.getElementById("op").innerHTML="String is Palindrome";
        }
        else{
            document.getElementById("op").innerHTML="String is not Palindrome";
        }
}
