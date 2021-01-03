var total=document.createElement("ul")
artile.appendChild(total);
var total1 =document.createElement("li") ;
total1.textContent=sum(listone.textContent)
total.appendChild(total1)
for (var index=0 ; index < resturan1.array.length ; index++){
    var listone= document.createElement("li") ;
    listone.textContent =resturan1.array[index]+" "+ getRandomIn() /resturan1.averageCookiesPer +" cookies" ;
    list.appendChild(listone) ;
  