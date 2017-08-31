
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
