"use strict";

var proj1 = { header: "Min sida",
  description: "<p>Jag b\xF6rjade p\xE5 den h\xE4r sidan v\xE5ren 2015 mest f\xF6r\n            skojs skull. Jag hade inget direkt syfte med sidan utan tyckte det\n            skulle vara kul att ha en egen hemsida bara. Det har inte varit l\xE4tt\n            att skapa sidan d\xE5 jag inte riktigt vetat vad den ska inneh\xE5lla. Men\n            jag \xE4r r\xE4tt n\xF6jd med sidan som den \xE4r nu. Hela sidan \xE4r designad och\n            kodad av mig.</p>",
  images: [] };

var proj2 = { header: "Drinkerino",
  description: "<p>Drinkerino \xE4r en Android-app jag jobbat p\xE5 ett\n            litet tag. Jag utvecklade den mest f\xF6r skojs skull och f\xF6r att l\xE4ra mig.\n            Appen inneh\xE5ller recept p\xE5 drinkar och har funktioner\n            som filtrering och gillningar. Ut\xF6ver det \xE4r den v\xE4ldigt simpel.\n            Jag har designat och kodat appen sj\xE4lv. Den \xE4r skriven i\n            Kotlin och det \xE4r f\xF6rsta g\xE5ngen jag f\xF6rs\xF6ker mig p\xE5 det. Jag har\n            f\xF6rs\xF6kt f\xF6lja Googles riktlinjer \"Material Design\" s\xE5 gott det\n            g\xE5tt n\xE4r det kommer till designen. Det finns alltid saker att fixa\n            och f\xF6rb\xE4ttra med appen och jag uppdaterar den lite d\xE5 och d\xE5 n\xE4r jag\n            k\xE4nner f\xF6r det men featurem\xE4ssigt kommer jag nog inte g\xF6ra s\xE5 mycket p\xE5 ett tag.</p>\n            <p><a href='https://github.com/Fixoon/Drinkerino' target='_blank'>L\xE4nk till appen p\xE5 Github</a></p>",
  images: ["drinkerino_home.png", "drinkerino_liked.png", "drinkerino_filter.png", "drinkerino_recipe.png"] };

var projectObjects = [proj2, proj1];
var headers = $(".project-name");

headers.on("click", function () {
  var id = headers.index(this);
  var currentProject = projectObjects[id];
  headers.removeClass("project-name-active");
  $(this).toggleClass("project-name-active");

  showProject(currentProject);
});

showProject(projectObjects[0]);

function showProject(currentProject) {
  var fullProject = $(".full-project");
  var header = fullProject.find("h3");
  var description = fullProject.find("p");

  fullProject.empty();

  fullProject.append("<h3>" + currentProject.header + "</h3>", currentProject.description);

  if (currentProject.images.length > 0) {
    var imageWrapper = $(document.createElement("div")).addClass("project-images-wrapper");
    fullProject.append(imageWrapper);

    var _loop = function _loop(i) {
      imageDiv = $(document.createElement('div')).addClass("project-image");

      imageDiv.click(function () {
        zoomImage(currentProject.images[i]);
      });
      imageTag = $(document.createElement('img')).attr("src", "images/thumbs/" + currentProject.images[i]);

      imageDiv.append(imageTag);
      imageWrapper.append(imageDiv);
    };

    for (var i = 0; i < currentProject.images.length; i++) {
      var imageDiv;
      var imageTag;

      _loop(i);
    }
  }
}

function zoomImage(image) {
  var imageBackground = $(document.createElement("div")).addClass("image-zoomed-bg");
  var zoomImageWrapper = $(document.createElement("div")).addClass("image-zoom-wrapper");
  var zoomedImage = $(document.createElement("img")).attr("src", "images/" + image);
  var zoomClose = $(document.createElement("div")).addClass("image-zoom-close").attr("title", "Stäng");

  zoomImageWrapper.append(zoomedImage);

  $("body").append(imageBackground, zoomImageWrapper, zoomClose);

  imageBackground.click(removeZoomedImage);
  zoomClose.click(removeZoomedImage);
}

function removeZoomedImage() {
  $(".image-zoomed-bg").remove();
  $(".image-zoom-wrapper").remove();
  $(".image-zoom-close").remove();
}
