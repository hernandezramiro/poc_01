
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

