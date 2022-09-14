
function weight() {
    let kg = (document.getElementById("digit").value)
    
    if (!isNaN(kg) && ( kg.length === 4 || kg.length === 6) )  { document.getElementById('pic').style.display = 'block'  && (document.getElementById('button').style.display = 'none') && (document.getElementById('button2').style.display = 'block')} 
     else  {document.getElementById('pic2').style.display = 'block'  && (document.getElementById('button').style.display = 'none') && (document.getElementById('button2').style.display = 'block')}  
   
}

function display() {
    let kg = (document.getElementById("digit").value)
    if (!isNaN(kg) &&( kg.length === 4 || kg.length === 6) )  {(document.getElementById('myWeight').innerHTML = alert(kg))} else { document.getElementById('myWeight').innerHTML = alert('nah')} 
}



function refreshPage(){
    window.location.reload();
} 


// document.getElementById("myForm").onreset = function() {myFunction()};

// function reset() {
//     if (document.getElementById('pic').style.display = 'block') {document.getElementById('pic2').style.display = 'none'} else {document.getElementById('pic').style.display = 'block'}
// }

// function reset2() {
//     if (document.getElementById('pic2').style.display = 'block') {document.getElementById('pic').style.display = 'none'} else {document.getElementById('pic2').style.display = 'block'}
// }

