let filter = function(arr,fn){
    let newarr = []

    for(let i=0; i < arr.length; i++){
        if(fn(arr[i], i)){
            newarr.push(arr[i])
        }
    } 
    return newarr
};
