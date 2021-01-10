const button=document.getElementById("button");
var numberInShape=1;
var oldValue=0;

button.onclick=()=>{
 let n=document.getElementById("number").value;
 let circle =document.getElementById("circle");
 let square = document.getElementById("square");
 let rectangle = document.getElementById("rectangle");
 const $box = document.getElementById("box");
 let j;
 n=Number(oldValue)+Number(n);
 for (let j=numberInShape;j<=n; j++){
     var shape=document.createElement("div");
     shape.innerHTML+=numberInShape;
     if(square.checked){
        shape.classList.add("square");
    }else if(circle.checked){
       shape.classList.add("circle");
    }else if(rectangle.checked){
       shape.classList.add("rectangle");
    }else{
        document.write("invalid-input")
    }
$box.append(shape);
numberInShape++;
oldValue=document.getElementById("box").lastElementChild.innerHTML;
  }

};


