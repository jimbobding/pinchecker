
function weight() {
    let kg = (document.getElementById("digit").value)
   
    
    if (!isNaN(kg) &&( kg.length === 4 || kg.length === 6) )  { document.getElementById('myWeight').innerHTML = alert(kg) } else { document.getElementById('myWeight').innerHTML = 'no'}
    


   
    console.log(typeof(kg))
    return kg
}

