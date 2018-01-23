var obj = {header: "Drinkerino",
          description: `<p>Drinkerino är en Android-app jag gjorde för skojs
          skull. Det är en simpel app som innehåller recept på drinkar. Den har
          funktioner som filtrering och gillningar men inte direkt några
          avancerade funktioner. Appen är skriven i Kotlin och jag har skrivit
          all kod själv. Designen har jag också gjort själv och jag har försökt
          gå så mycket som möjligt efter Googles riktlinjer Material Design. Det
          finns en del jag skulle kunna förbättra och en del funktioner jag
          skulle kunna lägga till och det kanske kommer i framtiden men just nu
          får den vara som den är. Ni hittar appen på Github på länken nedan.</p>
          <p><a href=\'https://github.com/Fixoon/fixoon.github.io\'>Länk till appen på Github</a></p>`,
          images: ["drinkscreen1.png", "drinkscreen2.png", "drinkscreen3.png", "drinkscreen4.png"]}

var obj2 = {header:"Kommer snart", description: `Jag har skapat en Android-app som jag
            tänkte visa upp här snart.`, images: []}

var obj3 = {header: "Min sida",
            description: `<p>Jag började på den här sidan våren 2015 mest för
            skojs skull. Jag hade inget direkt syfte med sidan utan tyckte det
            skulle vara kul att ha en egen hemsida bara. Sidan har gått igenom
            många ändringar. Jag har ändrat designen många gånger och innehållet
            en del gånger också. Designen som är nu har jag haft ett tag och är
            den första designen jag känner mig riktigt nöjd med. All design och
            JavaScript har jag gjort själv. Innehållet på sidan uppdateras då
            och då.</p>`,
            images: [], thumbs: []}

var projectObjects = [obj3, obj2]


var headers = $(".project-name");

headers.on("click", function(){
  var id = headers.index(this)
  var currentProject = projectObjects[id]
  headers.removeClass("project-name-active")
  $(this).toggleClass("project-name-active")

  showProject(currentProject)
})

showProject(obj3)

function showProject(currentProject){
  var fullProject = $(".full-project")
  var header = fullProject.find("h3")
  var description = fullProject.find("p")

  fullProject.empty()

  fullProject.append("<h3>" + currentProject.header + "</h3>", currentProject.description)

  if(currentProject.images.length > 0){
    var imageWrapper = $(document.createElement("div")).addClass("project-images-wrapper")
    fullProject.append(imageWrapper)
    for(let i = 0; i < currentProject.images.length; i++){
        var imageDiv = $(document.createElement('div')).addClass("project-image")
        imageDiv.click(function(){
          zoomImage(currentProject.images[i])
        })
        var imageTag = $(document.createElement('img')).attr("src", "images/thumbs/" + currentProject.images[i])
        imageDiv.append(imageTag);
        imageWrapper.append(imageDiv);
    }
  }
}

function zoomImage(image){
  var imageBackground = $(document.createElement("div")).addClass("image-zoomed-bg")
  var zoomImageWrapper = $(document.createElement("div")).addClass("image-zoom-wrapper")
  var zoomedImage = $(document.createElement("img")).attr("src", "images/" + image)
  var zoomClose = $(document.createElement("div")).addClass("image-zoom-close").attr("title", "Stäng")

  zoomImageWrapper.append(zoomedImage)

  $("body").append(imageBackground, zoomImageWrapper, zoomClose)

  imageBackground.click(removeZoomedImage);
  zoomClose.click(removeZoomedImage);
}

function removeZoomedImage(){
  $(".image-zoomed-bg").remove()
  $(".image-zoom-wrapper").remove()
  $(".image-zoom-close").remove()
}
