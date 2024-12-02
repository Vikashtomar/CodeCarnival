 
 let double = x => x*2;

 let addFive = x => x+5;

 let square = x => x*x;

 let compose = (...fns) => x => fns.reduceRight((v,f) => f(v),x);

 let result = compose(square,addFive,double)(3);

 console.log(result)