
        // approach 1
// document.getElementById("myself").onclick = function(){
//     alert("Vikash Tomar")
// }

// approach 2
// document.getElementById("myself").addEventListener("click", function(){
// alert("Vikash Tomar by add event")
// })

// approach 3

// document.getElementById("mypics").addEventListener("click",function(e){
//     console.log("clicked ul elements")
// })
// document.getElementById("myself").addEventListener("click",function(e){
//     console.log("Vikash Tom")
//     e.stopPropagation()
// })

document.querySelector("#pics").addEventListener("click",function(e){
    console.log(e.target.tagName)
    if(e.target.tagName == 'IMG'){
        console.log(e.target.id);
        let removeit = e.target.parentNode;
        removeit.remove()
    }
})