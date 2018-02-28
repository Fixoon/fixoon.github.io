
var proj1 = {header: "Min sida",
            description: `<p>Jag började på den här sidan våren 2015 mest för
            skojs skull. Jag hade inget direkt syfte med sidan utan tyckte det
            skulle vara kul att ha en egen hemsida bara. Det har inte varit lätt
            att skapa sidan då jag inte riktigt vetat vad den ska innehålla. Men
            jag är rätt nöjd med sidan som den är nu, mest designmässigt dock,
            innehållet är väl sådär. Hela sidan är designad (om man bortser från
            ikonerna då) och kodad av mig.</p>`,
            images: []}

var proj2 = {header:"Drinkerino",
            description: `<p>Drinkerino är en Android-app jag jobbat på ett
            litet tag. Jag utvecklade den mest för skojs skull och för att lära mig.
            Appen innehåller recept på drinkar och har funktioner
            som filtrering och gillningar. Utöver det är den väldigt simpel.
            Jag har designat och kodat appen själv. Den är skriven i
            Kotlin och det här är första gången jag försöker mig på det. Jag har försökt
            följa Googles riktlinjer \"Material Design\" så gott det gått. Det
            finns en hel del jag skulle kunna gjort bättre och jag kanske fixar
            det framöver men nu får den vara som den är.</p>
            <p><a href='https://github.com/Fixoon/Drinkerino' target='_blank'>Länk till appen på Github</a></p>`,
            images: ["drinkerino_home.png", "drinkerino_liked.png", "drinkerino_filter.png", "drinkerino_recipe.png"]}

var projectObjects = [proj1, proj2]
var headers = $(".project-name");

headers.on("click", function(){
  var id = headers.index(this)
  var currentProject = projectObjects[id]
  headers.removeClass("project-name-active")
  $(this).toggleClass("project-name-active")

  showProject(currentProject)
})

showProject(projectObjects[0])

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
