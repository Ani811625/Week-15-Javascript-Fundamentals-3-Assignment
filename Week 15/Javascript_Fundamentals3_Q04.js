const student={
    name:"Aniruddha",
    age:20,
    grade:'A',
    height:5.6,
    Percentage:90
}
function checkpropertyisthere(prop){
    if(prop in student){
        console.log("The property is present in the object.");
    }
    else{
        console.log("The property is not present in the object.");
    }
}
checkpropertyisthere('grade');