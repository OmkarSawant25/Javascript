const arr = [];
let arrlen = arr.length;

function disp()
{
    document.getElementById("op").innerHTML = arr ;
}

function addarr()
{
    var a1 = document.getElementById("ipno").value;
    arr.push(a1);
    arrlen+=1;
    disp();
}

function searr(){
    var ipel = document.getElementById("ipno").value;

    for(var i=0;i<arrlen;i++)
    {
        if(ipel == arr[i])
        {
            document.getElementById("op").innerHTML = "Array Elements Is At Location : " + (i+1);
            break;
        }
        else{
            document.getElementById("op").innerHTML = "Elements is Absent";
        }
    }
}

function removarr()
{
    var a1 = document.getElementById("ipno").value;

    for(var i=1;i<arrlen;i++)
    {
        if(a1===arr[i])
        {
            delete arr[i];
            document.getElementById("op").innerHTML = "Deleted";
            arrlen -= 1;
            continue;

        }

        else{
            document.getElementById("op").innerHTML = "Element Is Absent";
        }
    }
    disp();
}

function empty()
{
    var a1 = document.getElementById("ipno").value;
    for(var i=0;i<arrlen;i++)
    {
        arr.pop();
    }
    disp();
}