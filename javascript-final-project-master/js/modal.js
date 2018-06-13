$(function() {
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn11");
var btn12 = document.getElementById("myBtn12");
var btn13 = document.getElementById("myBtn13");
var btn14 = document.getElementById("myBtn14");
var btn15 = document.getElementById("myBtn15");
var btn16 = document.getElementById("myBtn16");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
 $( ".myBtn" ).click(function(event) {
   $( "#myModal" ).fadeIn( "slow", function() {
  // Animation complete
 });
  var chosen = parseInt(event.target.id.substring(5))-1;
  document.getElementById('address').innerHTML = addresses[chosen];
  document.getElementById('url').innerHTML = urls[chosen];
  document.getElementById('image1').src = imgs1[chosen];
  document.getElementById('image2').src = imgs2[chosen];
  modal.style.display = "block";  
});

// When the user clicks on <span> (x), close the modal
$( ".close" ).click(function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target != modal) {
        //modal.style.display = "none";
    }
}
});

//Modal Details and Images
var addresses = [
  "Bog Iron Brewing<br/>33 West Main Street<br/>Norton, MA 02766<br/>(508) 952-0555<br/>info@bogironbrewing.com",
  "CraftRoots Brewing<br>4 Industrial Road<br>Milford, MA 01757<br>(508) 381-1920<br>info@craftrootsbrewing.com",
  "Jack's Abby Craft Lagers<br>100 Clinton Street<br>Framingham, MA 01702<br>(508) 872-0900<br>info@jacksabby.com",
  "Trillium Brewing<br>110 Shawmut Road<br>Canton, MA 02021<br>(781) 562-0073<br>info@trilliumbrewing.com",
  "Allagash Brewing<br>50 Industrial Way<br>Portland, ME 04103<br>(207) 878-5385<br>info@allagash.com",
  "Lone Pine Brewing<br>219 Anderson Street<br>Portland, ME 04101<br>(207) 536-4952<br>info@lonepinebrewery.com",
  "Sea Dog Brewing<br>26 Front Street<br>Bangor, ME 04401<br>(207) 947-8009<br>info@seadogbrewing.com",
  "Shipyard Brewing Company<br>86 Newbury Street<br>Portland, ME 04101<br>(207) 761-0807<br>info@shipyard.com",
  "Henniker Brewing<br>129 Centervale Road<br>Henniker, NH 03242<br>(603) 428-3579<br>info@hennikerbrewing.com",
  "Smuttynose Brewing<br>105 Towle Farm Road<br>Hampton, NH 03842<br>(603) 436-4026<br>info@smuttynose.com",
  "Stoneface Brewing<br>436 Shattuck Way<br>Newington, NH 03801<br>(603) 570-2603<br>info@stonefacebrewing.com",
  "White Birch Brewing<br>460 Amherst Street<br>Nashua, NH 03063<br>(603) 206-5260<br>info@whitebirchbrewing.com",
  "Foolproof Brewing<br>241 Grotto Ave #1<br>Pawtucket, RI 02860<br>(401) 721-5970<br>info@foolproofbrewing.com",
  "Grey Sail Brewing<br>63 Canal Street<br>Westerly, RI 02891<br>(401) 212-7592<br>info@greysailbrewing.com",
  "Narragansett Brewery<br>461 Main Street<br>Pawtucket, RI 02860<br>(401) 437-8970<br>info@narragansettbeer.com",
  "Revival Brewing<br>505 Atwood Ave<br>Cranston, RI 02920<br>(401) 372-7009<br>info@revivalbrewing.com"
];
var urls = [
  "<a href='https://www.bogironbrewing.com/'>BogIronBrewing.com</a>",
  "<a href='https://www.craftrootsbrewing.com/'>CraftRootsBrewing.com</a>",
  "<a href='https://jacksabby.com/'>JacksAbby.com</a>",
  "<a href='http://www.trilliumbrewing.com/'>TrilliumBrewing.com/</a>",
  "<a href='https://allagash.com/'>Allagash.com</a>",
  "<a href='https://lonepinebrewery.com/'>LonePineBrewery.com</a>",  
  "<a href='https://seadogbrewing.com/'>SeaDogBrewing.com</a>",  
  "<a href='https://shipyard.com/'>Shipyard.com</a>",
  "<a href='https://hennikerbrewing.com/'>HennikerBrewing.com</a>",
  "<a href='https://smuttynose.com/'>Smuttynose.com</a>",
  "<a href='https://stonefacebrewing.com/'>StoneFaceBrewing.com</a>",
  "<a href='https://whitebirchbrewing.com/'>WhiteBirchBrewing.com</a>",
  "<a href='https://foolproofbrewing.com/'>FoolProofBrewing.com</a>",
  "<a href='https://greysailbrewing.com/'>GreySailBrewing.com</a>",
  "<a href='http://www.narragansettbeer.com/'>NarragansettBeer.com</a>",
  "<a href='https://revivalbrewing.com/'>RevivalBrewing.com</a>"
];
var imgs1 = [
  "images/comparison-slider/bog-iron-1.jpg",
  "images/comparison-slider/craft-roots-1.jpg",
  "images/comparison-slider/jacks-abby-1.jpg",
  "images/comparison-slider/trillium-1.jpg",  
  "images/comparison-slider/allagash-1.jpg",
  "images/comparison-slider/lonepine-1.jpg",
  "images/comparison-slider/sea-dog-1.jpg",
  "images/comparison-slider/shipyard-1.jpg",
  "images/comparison-slider/henniker-1.jpg",
  "images/comparison-slider/smuttynose-1.jpg",
  "images/comparison-slider/stoneface-1.jpg",
  "images/comparison-slider/whitebirch-1.jpg",
  "images/comparison-slider/foolproof-1.jpg",
  "images/comparison-slider/greysail-1.jpg",
  "images/comparison-slider/narragansett-1.jpg",
  "images/comparison-slider/revival-1.jpg"
];
var imgs2 = [
  "images/comparison-slider/bog-iron-2.jpg",
  "images/comparison-slider/craft-roots-2.jpg",
  "images/comparison-slider/jacks-abby-2.jpg",
  "images/comparison-slider/trillium-2.jpg",
  "images/comparison-slider/allagash-2.jpg",
  "images/comparison-slider/lonepine-2.jpg",
  "images/comparison-slider/sea-dog-2.jpg",
  "images/comparison-slider/shipyard-2.jpg",
  "images/comparison-slider/henniker-2.jpg",
  "images/comparison-slider/smuttynose-2.jpg",
  "images/comparison-slider/stoneface-2.jpg",
  "images/comparison-slider/whitebirch-2.jpg",
  "images/comparison-slider/foolproof-2.jpg",
  "images/comparison-slider/greysail-2.jpg",
  "images/comparison-slider/narragansett-2.jpg",
  "images/comparison-slider/revival-2.jpg"
];