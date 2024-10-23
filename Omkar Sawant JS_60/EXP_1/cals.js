function arearect(){
    var length = document.getElementById('length').value;
    var breadth = document.getElementById('breadth').value;   

    var arearect = document.getElementById('output1');
    arearect.textContent= "Area of rectangle: "+ length*breadth;
}

function areatriangle(){
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;   

    var areatri = document.getElementById('output2');
    areatri.textContent= "Area of triangle: "+ 0.5*base*height;
}

function areacircle(){
    var radius = document.getElementById('radius').value;

    var areacircle = document.getElementById('output3');
    areacircle.textContent= "Area of circle: "+ 3.1415*radius*radius;
}