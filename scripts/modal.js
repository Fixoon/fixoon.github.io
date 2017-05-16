

function getData(div){
  var projectDiv = div;
  var fileName = (projectDiv.parent().parent()).data("value");
    $.ajax({
        url : "projects/" + fileName + ".txt",
        dataType: "text",
        success : function (data) {
          popUp($.parseHTML(data), projectDiv);
        }
    });
}

function popUp(popUpText, projectDiv){
  var newText = popUpText;
  //Project Div variables
  var projDiv = projectDiv.parent().parent();
  var clonedDiv = projDiv.clone().appendTo(projDiv.parent());

  //Window variables
  var wind = $(window);

  //Div properties variables
  var height = projDiv.outerHeight();
  var width = projDiv.outerWidth();

  //Remove the "more info" tag
  clonedDiv.find(".more-info").remove();

  //Make clonedDiv "position: fixed" and still be in same place
  clonedDiv.css("padding", clonedDiv.css("padding"))
  .css("width", clonedDiv.outerWidth())
  .css("height", clonedDiv.outerHeight())
  .css("top", (projDiv.offset().top - wind.scrollTop()))
  .css("left", Math.round(projDiv.offset().left))
  .css("margin", "0")
  .css("position", "fixed")
  .css("z-index", "999");

  //Set text in P to the final text to calculate final height and reset
  var clonedDivP = clonedDiv.find("p");
  clonedDivP.html(newText);
  clonedDiv.css("height", "auto").css("width", "100%");
  var newWidth = clonedDiv.outerWidth();
  var newHight = clonedDiv.outerHeight();
  /*if(clonedDiv.height() + 2 < (clonedDivP.height() + clonedDiv.find("h3").height())){
    clonedDivP.css("max-height", (clonedDiv.height() - clonedDiv.find("h3").height()));
  }*/
  clonedDiv.css("height", height).css("width", width);
  clonedDivP.css("display", "none");
  //Add a background to the modal
  $("<div id='popup-background'></div>").appendTo("body");
  $("<div id='modal-exit'><a href='javascript:undefined'></a></div>").appendTo(clonedDiv);
  $("#popup-background, #modal-exit").click(function (){
    $("#popup-background").remove();
    clonedDiv.remove();
    projDiv.css("opacity", "1");
  });
  projDiv.css("opacity", "0");


  clonedDiv.css("width");
  clonedDiv.addClass("test-animation");
  clonedDiv.css("top", "50%").css("left", "50%").css("margin-top", -(newHight/2)).css("margin-left", -(newWidth/2)).css("width", newWidth).css("height", newHight);


  clonedDiv.one("transitionend", function() {
      clonedDivP.css("display", "block");
  });
}
