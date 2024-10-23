
function using_operatr() {
    let a1 = document.getElementById("str1").value;
    let a2 = document.getElementById("str2").value;

    if (a1 === a2) {
        document.getElementById("op").innerHTML = "Same strings";
    }
    else {
        document.getElementById("op").innerHTML = "Different strings";
    }
}

function using_localeComparefun() {
    let a1 = document.getElementById("str1").value;
    let a2 = document.getElementById("str2").value;

    if ((a1.localeCompare(a2)) == 0) { //If similar string => returns 0
        document.getElementById("op").innerHTML = "Same strings";
    }

    else {
        document.getElementById("op").innerHTML = "Different strings";
    }
}

function using_len() {
    let a1 = document.getElementById("str1").value;
    let a2 = document.getElementById("str2").value;
    let len1 = a1.length;
    let len2 = a2.length;

    if (len1 == len2) {
        for (var i = 0; i < len1; i++) {
            if ((a1.substring(i, 1 + i)) != (a2.substring(i, 1 + i))) {
                document.getElementById("op").innerHTML = "Different strings";
                break;
            }
            else {
                document.getElementById("op").innerHTML = "Same strings";
            }
        }
    }

    else {
        document.getElementById("op").innerHTML = "Different strings";
    }
}