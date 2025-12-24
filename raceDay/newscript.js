let raceNumber = Math.floor(Math.random()*1000)

console.log(raceNumber)
let early = false;
let age = 18;

if(early && age> 18){
    raceNumber += 1000;
}
if(!early && age){
    raceNumber += 1000;
}
if(early && age> 18){
    console.log(`Your race starts at 9:30 and racenumber is : ${raceNumber}`);
    
}

else if(!early && age> 18){
    console.log(`Late adults at 11: 00 AM, Your number is : ${raceNumber} `)
}
 else if(age<18){
    console.log(`They ll race at 12:30PM and your number is : ${raceNumber}`)
 }

 else{
    console.log(`See the ragistration desk`)
 }