var request = new XMLHttpRequest();
var latitude;
var longitude;


/*knophalte.onclick = function(){
var halte_id = document.getElementById("halte").innerHTML;

var url = 'https://www.delijn.be/rise-api-core/haltes/titel/' + halte_id;
console.log(url);

request.open('GET', url);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    //console.log('Status:', this.status);
    //console.log('Headers:', this.getAllResponseHeaders());
    //console.log('Body:', this.responseText);
    console.log(this.responseText);
  }
};
request.send();
};*/


navigator.geolocation.getCurrentPosition(function(position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          lathtml.innerHTML = "Latitude= " + latitude;
          longhtml.innerHTML = "Longitude= " + longitude;
    });
