var open_details_init = function(){
  var openRequestedDetails = function(){
    var location_hash = location.hash.split('?')[0];

    if(location_hash != undefined && location_hash != '') {
      var requested_details = document.querySelector('details' + location_hash);
      if (requested_details != null) {
        requested_details.setAttribute("open","");
      }
    }
  }


var openTargetDetails = function(e) {
// check if link target is a target details on the same page.
// set the open attribute if it is

var anchor = e.target;
var href = anchor.getAttribute("href");
console.log('anchor-href: ' + href);

document.querySelector(href).setAttribute('open','open');

}

var links = document.querySelectorAll('a');
for (var i=0; i<links.length; i++) {
links[i].addEventListener('click',openTargetDetails,false);
}

openRequestedDetails();
}

window.addEventListener('load',open_details_init, false);
