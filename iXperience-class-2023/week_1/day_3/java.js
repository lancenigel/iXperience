const date = new Date();
console.log(date);

let perfectSquare = prompt("Please enter a square");
if(Math.ceil(Math.sqrt(perfectSquare)) == Math.floor(Math.sqrt(perfectSquare))){  
    alert("The Number is a perfect square")
 }
 else{
        alert('The Number is not a perfect square')
 }