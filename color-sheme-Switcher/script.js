let btns = document.querySelectorAll('.buttons')
let body = document.querySelector("body");

btns.forEach(function(btn){
    console.log(btn)

    btn.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target.id == "grey")
        {
            body.style.backgroundColor = "grey"
        }
        if(e.target.id == "white")
            {
                body.style.backgroundColor = "pink"
            }
            if(e.target.id == "blue")
                {
                    body.style.backgroundColor = e.target.id;
                }
                if(e.target.id == "yellow")
                    {
                        body.style.backgroundColor = "yellow"
                    }
                    
                

    })
})
