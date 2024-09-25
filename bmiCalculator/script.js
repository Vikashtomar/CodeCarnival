let form = document.querySelector("form")



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let weightt = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.getElementById("height").value)
    const results = document.querySelector("#result")
    console.log(results)
    if(height === "", height >=0 || isNaN(height))
    {
    
        results.innerHTML = `height value ${height}`
    }

     else if(weightt === "", weightt <0 || isNaN(weightt))
        {
            results.innerHTML = `weight value ${weightt}`
        }

        else{
            const bmi = (weightt / ((height * height)/ 10000)).toFixed(2);
            results.innerHTML = `<h2>${bmi} </h2>`
        }
})