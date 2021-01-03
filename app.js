alert("g")
var resturan ={
    location :'Seattle',
    minHourlyCustomers : 23 ,
    maxHourlyCustomers : 65 , 
    averageCookiesPer : 6.3, 
    array :['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'] ,
}
function getRandomInt(min, max) {
    min = resturan.minHourlyCustomers
    max = resturan.maxHourlyCustomers
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  getRandomInt(resturan.minHourlyCustomers, resturan.maxHourlyCustomers) ;
console.log(getRandomInt());

var parentelement = document.getElementById("cookies list");
var artile = document.createElement("article")
parentelement.appendChild(artile) ;
var list =document.createElement("ul")
artile.appendChild(list);

var resturan1 ={
    location :'tokyo' ,
    minHourlyCustomers : 3 ,
    maxHourlyCustomers : 24 ,
    averageCookiesPer : 1.2 ,
}
function getRandomIn(min, max) {
    min = resturan1.minHourlyCustomers
    max = resturan1.maxHourlyCustomers
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  getRandomIn(resturan1.minHourlyCustomers, resturan1.maxHourlyCustomers) ;
console.log(getRandomIn());

for (var index=0 ; index < resturan1.array.length ; index++){
  var listone= document.createElement("li") ;
  listone.textContent =resturan1.array[index]+" "+ getRandomIn() /resturan1.averageCookiesPer +" cookies" ;
  list.appendChild(listone) ;

var resturan2 ={
      location :'Dubai' ,
      minHourlyCustomers : 11 ,
      maxHourlyCustomers : 38 ,
      averageCookiesPer : 6.3 ,


}
function getRandomI(min, max) {
    min = resturan2.minHourlyCustomers
    max = resturan2.maxHourlyCustomers
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  getRandomI(resturan2.minHourlyCustomers, resturan2.maxHourlyCustomers) ;
console.log(getRandomI());
var resturan3 ={
    location :'Paris' ,
    minHourlyCustomers : 20 ,
    maxHourlyCustomers : 83 ,
    averageCookiesPer : 6.3 ,
   

}
function getRandom(min, max) {
    min = resturan3.minHourlyCustomers
    max = resturan3.maxHourlyCustomers
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  getRandom(resturan3.minHourlyCustomers, resturan3.maxHourlyCustomers) ;
console.log(getRandom());

var resturan4 ={
    location :'lima' ,
    minHourlyCustomers : 2 ,
    maxHourlyCustomers : 16 ,
    averageCookiesPer : 6.3 ,


}
function getRando(min, max) {
    min = resturan4.minHourlyCustomers
    max = resturan4.maxHourlyCustomers
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  getRando(resturan4.minHourlyCustomers, resturan4.maxHourlyCustomers) ;
console.log(getRando());

