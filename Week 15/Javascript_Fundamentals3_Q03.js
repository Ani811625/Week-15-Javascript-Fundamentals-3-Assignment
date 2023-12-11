const student={
    name:"Aniruddha",
    age:20,
    grade:'A',
    height:5.6,
    Percentage:90
}
function calculatenumberofproperties(){
    let arrayofkeys=Object.keys(student);
    let numberofkeys=arrayofkeys.length;
    console.log("The array properties are:",arrayofkeys);
    console.log("The number of properties are:",numberofkeys);
}
calculatenumberofproperties();