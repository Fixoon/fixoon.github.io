var moreInfo = $(".moreinfo");

moreInfo.click(function () {
  var projectDiv = $(this);
  var fileName = (projectDiv.parent().parent()).data("value");
    $.ajax({
        url : "projects/" + fileName + ".txt",
        dataType: "text",
        success : function (data) {
          popUp(data, projectDiv);
        }
    });
});

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
  clonedDivP.text(newText);
  clonedDiv.css("height", "auto").css("width", "100%");
  var newWidth = clonedDiv.outerWidth();
  var newHight = clonedDiv.outerHeight();
  clonedDiv.css("height", height).css("width", width);
  clonedDivP.css("display", "none");

  //Add a background to the modal
  $("<div id='popUpBackground'></div>").appendTo("body");
  $("#popUpBackground").click(function (){
    $("#popUpBackground").remove();
    clonedDiv.remove();
    projDiv.css("opacity", "1");
  });

  projDiv.css("opacity", "0");

  TweenLite.to(clonedDiv, 0.4, {top: "50%", left: "50%", marginTop: -(newHight/2), marginLeft: -(newWidth/2), width: newWidth, height: newHight, onComplete:completeFunc, onCompleteParams:[clonedDivP]});

  function completeFunc(paragraph) {
    clonedDivP.css("display", "block");
  }
}
