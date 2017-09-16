
$("#divContent").ready(function () {
    var greensock_whole_image = document.getElementById("greensock_whole_image");
    if(greensock_whole_image != null) {
        TweenLite.from(greensock_whole_image, 1, {opacity:0, left:"300px"});
    }
});

$("#divContent").ready(function () {
    TweenMax.staggerFrom(".greensock_collapsible_item_opt1", 1, {
        cycle:{
          //an array of values
          //backgroundColor:["red", "white", "#00f"],
          //function that returns a value
          x:function(index){
            return index * 40;
          }
        },
        delay:0
      }, 0);
});

$("#divContent").ready(function () {
    TweenMax.staggerFrom(".greensock_collapsible_item_opt2", 1, {
        cycle:{
          //an array of values
          //backgroundColor:["red", "white", "#00f"],
          //function that returns a value
          y:function(index){
            return index * 40;
          }
        },
        delay:0
      }, 0);
});

$("#divContent").ready(function () {
    TweenMax.staggerFrom(".greensock_collapsible_item_opt3", 1, {
        cycle:{
          //an array of values
          //backgroundColor:["red", "white", "#00f"],
          //function that returns a value
          x:function(index){
            return index * 40;
          },
          y:function(index){
            return index * 40;
          }
        },
        opacity:0,
        delay:0
      }, 0);
});

$("#divContent").ready(function () {
    TweenMax.staggerFrom(".greensock_collapsible_item_opt4", 1, {
        cycle:{
          //an array of values
          //backgroundColor:["red", "white", "#00f"],
          //function that returns a value
          y:function(index){
            return index * 40;
          }
        },
        delay:0,
        ease:Back.easeOut
      }, 0);
});

$("#divContent").ready(function () {
    TweenMax.staggerFrom(".greensock_collapsible_item_opt5", 1, {
        cycle:{
          //an array of values
          //backgroundColor:["red", "white", "#00f"],
          //function that returns a value
          y:function(index){
            return index * -40;
          }
        },
        delay:0,
        ease:Back.easeOut
      }, 0);
});


////////////////////PROPOSAL ONE - BEGINS
function openIppaAttribute(attributePopupId){
  var inputs = document.getElementsByClassName("boxModalLeft");
  
  for (var i = 0; i < inputs.length; i++) {
      if(inputs[i].style.display == "block" ) {
          $(`#${inputs[i].id}`).css('display', 'none');
      }
  }

  var inputsRight = document.getElementsByClassName("boxModalRight");
  
  for (var i = 0; i < inputsRight.length; i++) {
      if(inputsRight[i].style.display == "block" ) {
          $(`#${inputsRight[i].id}`).css('display', 'none');
      }
  }

  $(`#${attributePopupId}`).css('display', 'block');
  TweenLite.fromTo(document.getElementById(attributePopupId), 0.5, {opacity:0, width: 0, height:0}, {opacity:1, width: "20%", height:"400px"});
}

function closeIppaAttribute(attributePopupId){
  TweenLite.to(document.getElementById(attributePopupId), 0.5, {opacity:0, width:0, height:0, onComplete:tweenComplete, onCompleteParams:[attributePopupId]});
}

window.onclick = function(event) {
  
    var inputs = document.getElementsByClassName("boxModalLeft");
  
    for (var i = 0; i < inputs.length; i++) {
      if(inputs[i].style.display == "block" && event.target != inputs[i] && event.target.id != "ippaAttributeBtn") {
        TweenLite.to(document.getElementById(inputs[i].id), 0.5, {opacity:0, width:0, height:0, onComplete:tweenComplete, onCompleteParams:[inputs[i].id]});
      }
    }
    
    var inputsRight = document.getElementsByClassName("boxModalRight");
    
    for (var i = 0; i < inputsRight.length; i++) {
      if(inputsRight[i].style.display == "block" && event.target != inputsRight[i] && event.target.id != "ippaAttributeBtn") {
        TweenLite.to(document.getElementById(inputsRight[i].id), 0.5, {opacity:0, width:0, height:0, onComplete:tweenComplete, onCompleteParams:[inputsRight[i].id]});
      }
    }
  }
  
  function tweenComplete(attributePopupId){
    $(`#${attributePopupId}`).css('display', 'none');
  }

////////////////////PROPOSAL ONE - ENDS

////////////////////PROPOSAL TWO - BEGINS

//instantiate a TimelineLite    
var slideHistory = "ippaListItem-1";
var position;
var percentLeft;
var auxPercentLeft = 0;

function showIppaSlide(attributeSlideId, ippaAttributeBtnId){

  if(attributeSlideId != slideHistory){

    if(attributeSlideId === "ippaListItem-1")
      TweenLite.set(document.getElementById(attributeSlideId), {clearProps:"xPercent", delay:1});
    else
      TweenLite.set(document.getElementById(attributeSlideId), {clearProps:"xPercent"});

    position = $('#' + attributeSlideId).position();
    percentLeft = position.left/$(window).width() * 100;

    console.log("position", position);
    console.log("window width", $(window).width());
    

    console.log("current position attributeSlideId", percentLeft);
    percentLeft = percentLeft * -1;
    console.log("current position attributeSlideId in negative", percentLeft);
    
    console.log(auxPercentLeft);

    if(auxPercentLeft === -0)
      auxPercentLeft = -100;

    TweenLite.to(document.getElementById(slideHistory), 1, {xPercent: auxPercentLeft, force3D: true});
    
    auxPercentLeft = percentLeft - 100;

    console.log("position to quit the current attribute", auxPercentLeft);
    
    if(attributeSlideId != "ippaListItem-1")
      TweenLite.to(document.getElementById(attributeSlideId), 1, {xPercent: percentLeft, force3D: true});
    slideHistory = attributeSlideId;

    //To rotate the circle's elements - Begins

    var ippaButton = document.getElementById(ippaAttributeBtnId);

    var inputs = document.getElementsByClassName("ippaAttributeBtn");

    for (var i = 0; i < inputs.length; i++) {
      var currentDegree = inputs[i].getAttribute("itemid");

      switch(ippaButton.title) {
        case "toLeft-1":
            (currentDegree == 342) ? currentDegree = Number(currentDegree) - Number(360) : currentDegree = currentDegree;
            currentDegree = Number(currentDegree) + Number(36);
          break;
        case "toLeft-2":
            (currentDegree == 342) ? currentDegree = Number(currentDegree) - Number(360) : currentDegree = currentDegree;
            (currentDegree == 306) ? currentDegree = Number(currentDegree) - Number(360) : currentDegree = currentDegree;
            currentDegree = Number(currentDegree) + Number(72);
          break;
        case "toRight-1":
            (currentDegree == 18) ? currentDegree = Number(currentDegree) + Number(360) : currentDegree = currentDegree;
            currentDegree = currentDegree - 36;
          break;
        case "toRight-2":
            (currentDegree == 18) ? currentDegree = Number(currentDegree) + Number(360) : currentDegree = currentDegree;
            (currentDegree == 54) ? currentDegree = Number(currentDegree) + Number(360) : currentDegree = currentDegree;
            currentDegree = currentDegree - 72;
          break;
      }

      //inputs[i].style.transform = "rotate(" + currentDegree + "deg) translate(15em) rotate(-" + currentDegree + "deg)";
      TweenLite.to(document.getElementById(inputs[i].id), 1, {transform: "rotate(" + currentDegree + "deg) translate(15em) rotate(-" + currentDegree + "deg)"});
      
      inputs[i].setAttribute("itemid", currentDegree);

      switch(currentDegree) {
        case 126:
            inputs[i].setAttribute("title", "toRight-1");
          break;
        case 162:
            inputs[i].setAttribute("title", "toRight-2");
          break;
        case 54:
            inputs[i].setAttribute("title", "toLeft-1");
          break;
        case 18:
            inputs[i].setAttribute("title", "toLeft-2");
          break;
      }
    }

    var inputsAux = document.getElementsByClassName("ippaAttributeBtn");

    for (var i = 0; i < inputsAux.length; i++) {
      var currentDegree = inputsAux[i].getAttribute("itemid");

      if(currentDegree != 126 && currentDegree != 162 && currentDegree != 54 && currentDegree != 18){
        inputsAux[i].setAttribute("title", "empty");
      }
    }

    //To rotate the circle's elements - Ends

  }
}

////////////////////PROPOSAL TWO - ENDS


//IMG 01
$("#divContent").ready(function () {
  var greensock_whole_image_01 = document.getElementById("prop_01_img_div");
  if(greensock_whole_image_01 != null) {
    TweenLite.fromTo(greensock_whole_image_01, 1, {transform: "translate(50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
  }

  var greensock_whole_image_02 = document.getElementById("prop_01_img_01");
  if(greensock_whole_image_02 != null) {
    TweenLite.fromTo(greensock_whole_image_02, 1, {transform: "translate(-50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
  }

  var greensock_whole_image_03 = document.getElementById("prop_01_img_02");
  if(greensock_whole_image_03 != null) {
    TweenLite.fromTo(greensock_whole_image_03, 1, {transform: "translateY(50em)", opacity:0}, {transform: "translateY(0em)", opacity:1});
  }
});

/////////////////////////////////////

//IMG 02
$("#divContent").ready(function () {

  var greensock_whole_image_00 = document.getElementById("prop_02_img_div");
  if(greensock_whole_image_00 != null) {
    TweenLite.fromTo(greensock_whole_image_00, 1, {transform: "translate(50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
  }

  var greensock_whole_image_01 = document.getElementById("prop_02_img_01");
  if(greensock_whole_image_01 != null) {
    TweenLite.fromTo(greensock_whole_image_01, 1, {rotation: "-180deg", opacity:0, transformOrigin:"0% 100%"}, {rotation: "0deg", opacity:1});
  }

  var greensock_whole_image_02 = document.getElementById("prop_02_img_02");
  if(greensock_whole_image_02 != null) {
    TweenLite.fromTo(greensock_whole_image_02, 1, {rotation: "180deg", opacity:0, transformOrigin:"100% 100%"}, {rotation: "0deg", opacity:1});
  }

  var greensock_whole_image_03 = document.getElementById("prop_02_img_03");
  if(greensock_whole_image_03 != null) {
    TweenLite.fromTo(greensock_whole_image_03, 1, {rotation: "180deg", opacity:0, transformOrigin:"0% 100%"}, {rotation: "0deg", opacity:1});
  }

  var greensock_whole_image_04 = document.getElementById("prop_02_img_04");
  if(greensock_whole_image_04 != null) {
    TweenLite.fromTo(greensock_whole_image_04, 1, {rotation: "-180deg", opacity:0, transformOrigin:"100% 100%"}, {rotation: "0deg", opacity:1});
  }

});

/////////////////////////////////////

//IMG 03

$("#divContent").ready(function () {
  
    var greensock_whole_image_00 = document.getElementById("prop_03_img_div_01");
    if(greensock_whole_image_00 != null) {
      TweenLite.fromTo(greensock_whole_image_00, 1, 
        {
          transform: "translate(50em)", 
          opacity:0
        }, 
        {
          transform: "translate(0em)", 
          opacity:1, delay:1
        });
    }
  
    var greensock_whole_image_01 = document.getElementById("prop_03_img_01");
    if(greensock_whole_image_01 != null) {
      TweenLite.fromTo(greensock_whole_image_01, 1, {transform: "translateY(50em)", opacity:0}, {transform: "translateY(0em)", opacity:1});
    }

    var greensock_whole_image_02 = document.getElementById("prop_03_img_02");
    if(greensock_whole_image_02 != null) {
      TweenLite.fromTo(greensock_whole_image_02, 1, {transform: "translateY(-50em)", opacity:0}, {transform: "translateY(0em)", opacity:1});
    }

    var greensock_whole_image_03 = document.getElementById("prop_03_img_03");
    if(greensock_whole_image_03 != null) {
      TweenLite.fromTo(greensock_whole_image_03, 1, {transform: "translateY(50em)", opacity:0}, {transform: "translateY(0em)", opacity:1});
    }

    var greensock_whole_image_04 = document.getElementById("prop_03_img_04");
    if(greensock_whole_image_04 != null) {
      TweenLite.fromTo(greensock_whole_image_04, 1, {transform: "translateY(-50em)", opacity:0}, {transform: "translateY(0em)", opacity:1});
    }
  
  
  });

  //IMG 04

$("#divContent").ready(function () {
  
    var greensock_whole_image_00 = document.getElementById("prop_04_img_div_01");
    if(greensock_whole_image_00 != null) {
      TweenLite.fromTo(greensock_whole_image_00, 1, 
        {
          transform: "translate(50em)", 
          opacity: 0
        }, 
        {
          transform: "translate(0em)",
          opacity: 1
        });
    }
  
    var greensock_whole_image_01 = document.getElementById("prop_04_img_01");
    if(greensock_whole_image_01 != null) {
      TweenLite.fromTo(greensock_whole_image_01, 1, {transform: "translate(-50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
    }

    var greensock_whole_image_02 = document.getElementById("prop_04_img_02");
    if(greensock_whole_image_02 != null) {
      TweenLite.fromTo(greensock_whole_image_02, 1, {transform: "translate(50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
    }

    var greensock_whole_image_03 = document.getElementById("prop_04_img_03");
    if(greensock_whole_image_03 != null) {
      TweenLite.fromTo(greensock_whole_image_03, 1, {transform: "translate(-50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
    }

    var greensock_whole_image_04 = document.getElementById("prop_04_img_04");
    if(greensock_whole_image_04 != null) {
      TweenLite.fromTo(greensock_whole_image_04, 1, {transform: "translate(50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
    }
  
  
  });

  //IMG 05

  $("#divContent").ready(function () {
    
      var greensock_whole_image_00 = document.getElementById("prop_05_img_div_01");
      if(greensock_whole_image_00 != null) {
        TweenLite.fromTo(greensock_whole_image_00, 1, 
          {
            transform: "translate(50em)", 
            opacity: 0
          }, 
          {
            transform: "translate(0em)",
            opacity: 1,
            delay: 1
          });
      }
    
      var greensock_whole_image_01 = document.getElementById("prop_05_img_01");
      if(greensock_whole_image_01 != null) {
        TweenLite.fromTo(greensock_whole_image_01, 1, {transform: "translate(-50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
      }
  
      var greensock_whole_image_02 = document.getElementById("prop_05_img_02");
      if(greensock_whole_image_02 != null) {
        TweenLite.fromTo(greensock_whole_image_02, 1, {transform: "translateY(-50em)", opacity:0}, {transform: "translateY(0em)", opacity:1});
      }
  
      var greensock_whole_image_03 = document.getElementById("prop_05_img_03");
      if(greensock_whole_image_03 != null) {
        TweenLite.fromTo(greensock_whole_image_03, 1, {transform: "translateY(50em)", opacity:0}, {transform: "translateY(0em)", opacity:1});
      }
  
      var greensock_whole_image_04 = document.getElementById("prop_05_img_04");
      if(greensock_whole_image_04 != null) {
        TweenLite.fromTo(greensock_whole_image_04, 1, {transform: "translate(50em)", opacity:0}, {transform: "translate(0em)", opacity:1});
      }
    
    
    });
  
  