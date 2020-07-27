window.addEventListener("load", function () {
   
   // User clicks on a project screenshot
    $(".screenshotSlide").click(function () {
        
        
        $("#blackBackground").css({
            "background-color": "black",
            "width": "100%",
            "height": "5000px",
            "position": "absolute",
            "top": "0",
            "z-index" : "1",
            "opacity" : "0.8"
        });
        $("#blackBackground").toggle();
       //$("body").prepend(screenshotBackground);
       //$("#screenshotBackground").prependTo("body");
       // document.body.prepend(screenshotBackground);

        let imageSlide = document.createElement("div");
        imageSlide.setAttribute("id", "imageSlideContainer");
        
        imageSlide.style.width = "350";
        imageSlide.style.position = "relative";
        imageSlide.style.top = "-550";
        imageSlide.style.left ="50%";
        imageSlide.style.zIndex = "1";
        imageSlide.style.transform = "translate(-50%, 3%)";
        imageSlide.style.textAlign = "center";

        
        
        // Figure out a fix to stop IOS scrolling
        $("html").css("overflow", "hidden");

       // Get the image srouce from the click event
       // slice out 'thumbnail' and add '.png'
       // add into imageSlide Asset
        let imageSlideAsset = document.createElement("img");
        let imgSrc = $(this).attr("src");
        imgSrc= imgSrc.slice(0, imgSrc.search("-thumb"));
        imgSrc = imgSrc + ".png";

        imageSlideAsset.setAttribute("src", imgSrc);
        imageSlideAsset.setAttribute("id", "imageSlideAsset");
        imageSlideAsset.style.height = "600px";
        console.log("We got in here");
        $("#projectsContainer").append(imageSlide);
        $("#imageSlideContainer").append(imageSlideAsset);
    })

    // User clicks on screenshot, close screenshot
    $("#blackBackground").click(function() {
        $("#imageSlide").remove();
        $("#imageSlideAsset").remove();
        $("#blackBackground").css("display" , "none");
        $("html").css("overflow", "visible")
    })

    // Mouse cursor hovers a language / tool icon
    $(".languageIcon").mouseover(function() {
        let name = $(this).attr("alt");
        $(".toolName").html(name);
    })

    // Mouse cursor leaves a language / tool icon
    $(".languageIcon").mouseleave(function() {
        $(".toolName").html("&nbsp;");
    })

    // Scroll to about section when user clicks top navigation
    $("#about").click(function() {
        $("html, body").animate( {
            scrollTop: $("#aboutMeContainer").offset().top }, 1000)
        })

    // Scroll to projects section when user clicks top navigation
    $("#projects").click(function() {
        $("html, body").animate( {
            scrollTop: $("#projectsContainer").offset().top}, 1000)
        })
})