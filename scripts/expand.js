

  var isExpanded = false;
  var filesLoaded = false;

  $(".expand").click(function(){
    var expandThis = $(this);
    if(isExpanded){
      isExpanded = false;
      contractDivs();
      $("#expand-toggle").text("Visa fler projekt");
      $("#expand-toggle-img").attr("src", "images/arrow-down.svg")
    }else{
      isExpanded = true;
      getProjects();
      $("#expand-toggle").text("Dölj projekt");
      $("#expand-toggle-img").attr("src", "images/arrow-up.svg")
    }
  });
  function getProjects(){
    $.ajax({
        url : "projects/more.txt",
        dataType: "text",
        success : function (data) {
          var newDiv = $('<div/>').html($.parseHTML(data)).contents();
          expandDivs(newDiv);
        }
    });
  }
  var testvar;
  var projWrap = $(".project-wrap");
  var testHeight = projWrap.outerHeight();
  function expandDivs(loadedDiv){
    var newDiv = loadedDiv;
    if(!filesLoaded){
      projWrap.append(newDiv);
      filesLoaded = true;
      testvar = projWrap.height();
    }
    projWrap.css("height", testHeight);
    setTimeout(function(){
      projWrap.css("height");
      projWrap.addClass("wrap-animation");
      projWrap.css("height", testvar);
    }, 0);
    var moreInfo = $(".moreinfo");
    moreInfo.unbind("click");
    moreInfo.click(function () {
      getData($(this));
    });
  }
  function contractDivs(){
    projWrap.css("height", $(".project-wrap").height());
    projWrap.css("height");
    projWrap.css("height", testHeight);
  }
