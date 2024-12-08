 function expect(otherVal){
    
    return {
        toBe: function(val){
            if(val === otherVal){
                console.log(true)
            }
            else {
                console.log("not euqal")
            }
        },
        notToBe : function(val){
            if(val !== otherVal){
                console.log(true)
            }
            else{
                console.log("equal in not to be section")
            }
        }
    }
 }
 try{
    expect(7).notToBe(7)
    
 }
 catch(e){
    console.log(e.message)
 }