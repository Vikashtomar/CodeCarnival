 let form = document.querySelector("form");

 form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let height = parseInt(document.getElementById("height").value);
    let weight  = parseInt(document.getElementById("weight").value);
    const result = document.querySelector("#result");
    console.log(result)

    
    if(isNaN(height) || height <=0){
        result.innerHTML = `please give valid height ${height}`
    }
    else if(isNaN(weight) || weight <=0)
    {
        result.innerHTML = `please give valid weight ${weight}`

    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        result.innerHTML = `<span> ${bmi} </span>`;
    }
 });