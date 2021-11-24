
browser_info = navigator.appVersion;

//iOS back button
breadcrumb = ["front"];

//CSS Control
function responsive_display(page) {
	console.log("responsive_display()");
	console.log(window.innerWidth+" x "+window.innerHeight);
	window.fullWidth = window.innerWidth;
	window.fullHeight = window.innerHeight;

	if (page == "front") {
		$("#front_header, #front_footer, #front_footer .navitem").css({
			"height": (fullHeight/8)
		});

		$(".front_nav").css({
			"height": (fullHeight*0.75)
		});

		$(".front_nav a").css({
			"height": (fullHeight*0.375)
		});
	}	

	if (page == "read") {
		// CSS control for read
		
		$("#text-frame, #painting-frame").css({
			"height": (fullHeight*0.6)
		});

		$(".read-footer, .read-footer .ui-navbar").css({
			"height": (fullHeight*0.1)
		});
	}

	if (page == "list") {

		$(".gallery-footer, .gallery-footer .navitem").css({
			"height": (fullHeight*0.1)
		});

	}

	if (page == "info") {

		$("#about, #sean-scully, #poets").css({
			"height": (fullHeight*0.8)
		});
	}

};



//CLICK EVENTS 

$("a").click(function(){
	console.log("click!");
});

$(".about-link, .poets-link, .sean-scully-link").click(function() {
	console.log("info click");
	breadcrumb.push("info");
	responsive_display("info");
});

$(".front-link").click(function() {
	breadcrumb.push("front");
	responsive_display("read");
});

$(".hatton-link").click(function() {
	breadcrumb.push("hatton-list");
	$("#hatton-list .ui-content").css({"height" : $("#hatton-list").css("height") });
	responsive_display("list");
});

$(".laing-link").click(function() {
	breadcrumb.push("laing-list");
	$("#laing-list .ui-content").css({"height" : $("#laing-list").css("height") });
	responsive_display("list");
});

$("body").on("click", ".poem-link", function() {
	clicked = window[this.id];
	console.log("poem-link click");
	console.log(clicked.poemID);
	breadcrumb.push(clicked.poemID);

	$("#text-frame").removeClass("hidden");
	$("#painting-frame").addClass("hidden");
	$("#view-switch").html("View Painting");

	if (breadcrumb[breadcrumb.length-2] == "laing-list") {
		$("#read-header").css({
			"background-color":"#c77973"
		});
	} else {
		$("#read-header").css({
			"background-color":"#01bac4"
		});
	}
	
	$("#painting-name").html(clicked.artwork);
	$("#poem-view .ui-title").html(clicked.artwork);
	$("#audio-frame").html("<audio id='audio-player' controls controlsList='nodownload'><source src='audio/"+ clicked.audioSource +"'>Unable to load audio at this time.</audio>");
	$("#poem-title").html(clicked.poemTitle);
	$("#poet-name").html(clicked.poetFirstname+" "+clicked.poetLastname);
	$("#poem-text").html(clicked.poemText);

	//ADD IN IMAGE AND CREDIT

	$("#painting-frame img").attr("src","img/" + clicked.image)
	$("#credit").html(clicked.copyright);

	//audio player
	window.player = document.getElementById("audio-player");

	responsive_display("read");

	setTimeout(function(){
		$("#text-frame").scrollTop(0);
	},500);

});


// NAVIGATING TO AND AROUND THE INFORMATION PAGE

$(".poets-link").click(function(){
	$(".info_tab").addClass("hidden");
	$("#poets").removeClass("hidden");
	$(".info_navitem").removeClass("ui-btn-active");
	$("#poets-tab").addClass("ui-btn-active");
});

$(".sean-scully-link").click(function(){
	$(".info_tab").addClass("hidden");
	$("#sean-scully").removeClass("hidden");
	$(".info_navitem").removeClass("ui-btn-active");
	$("#sean-scully-tab").addClass("ui-btn-active");
});

$(".about-link").click(function(){
	$(".info_tab").addClass("hidden");
	$("#about").removeClass("hidden");
	$(".info_navitem").removeClass("ui-btn-active");
	$("#about-tab").addClass("ui-btn-active");
});

$(".info_navitem").click(function(){
	$(".info_navitem").removeClass("ui-btn-active");
	$(this).addClass("ui-btn-active");
});


// BACK BUTTON FUNCTIONALITY

$(".back-button").click(function(){
	console.log("back click");
	browser_info = navigator.appVersion;
	breadcrumb.pop();
	//FOR DEVICES UNABLE TO USE BROWSER HISTORY
	if (
		browser_info.indexOf("Macintosh") > -1 ||
		browser_info.indexOf("iPhone") > -1 ||
		browser_info.indexOf("Android 4") > -1 
	) {
		window.location.hash = breadcrumb[(breadcrumb.length - 1)];
	} else {
		history.go(-1);
	}

	player.pause();

	return false;


});

//Modifying back button for exceptions

if (
	browser_info.indexOf('iPhone 9_0') > -1 ||
	browser_info.indexOf('iPhone OS 9_0') > -1 ||
	browser_info.indexOf('Android 4') > -1
) {
	$(".convert-front").html('<a href="#front" class="front-link" data-transition="slide" data-direction="reverse">Home</a>');
	$(".convert-list").html('<a href="#list_view" class="list-link" data-transition="slide" data-direction="reverse">List</a>');
}


//TEXT CONTROLS
$( "#zoom" ).on('slidestop', function() {
	console.log("zoom slider");
	if ($("#zoom").val() == "on") {
		zoom_val = "on";
	}
	if ($("#zoom").val() == "off") {
		zoom_val = "off";
	}
});

$("#zoom-in").click(function(){
	console.log("zoom-in click");
	map.setZoom((map.getZoom()+1));
});

$("#zoom-out").click(function(){
	console.log("zoom-out click");
	map.setZoom((map.getZoom()-1));
});

$("#text-size-button").click(function(){
	console.log("text-size click");
	$("#text-size-panel").toggleClass("hidden");
	$(".read-footer").toggleClass("size-panel-open");
	if ($(".read-footer").hasClass("size-panel-open")) {
		$(".read-footer .ui-navbar").css({
			"height" : fullHeight*0.1
		})
	}
	else {
		$(".read-footer .ui-navbar").removeAttr("style");
		$("#text-size-button").removeClass("ui-btn-active");
	}
});

$("#text-smaller").click(function(){
	console.log("text-smaller click!");
	text_size("-");
});

$("#text-larger").click(function(){
	console.log("text-larger click!");
	text_size("+");
});

$("#view-switch").click(function(){
	console.log("switch!");
	if ($("#view-switch").html() == "View Painting") {
		$("#text-frame").addClass("hidden");
		$("#painting-frame").removeClass("hidden");
		$("#view-switch").html("View Poem");
	} else {
		$("#text-frame").removeClass("hidden");
		$("#painting-frame").addClass("hidden");
		$("#view-switch").html("View Painting");
	}
});

$("#read-header, #poem-container").click(function(){
	$(".read-footer .navitem").removeClass("ui-btn-active");
	$(".read-footer").removeClass("size-panel-open");
	$("#text-size-panel").addClass("hidden");
});


// DISPLAY FUNCTIONS


//Displaying the "Sean Scully" section
function display_howto() {
console.log("display sean-scully");
$("#about").addClass("hidden");
$("#sean-scully").removeClass("hidden");

$(".info_navitem").removeClass("ui-btn-active");
$("#sean-scully-tab").addClass("ui-btn-active");

};

//Displaying the "About" section
function display_about() {
console.log("display about");
$("#sean-scully").addClass("hidden");
$("#about").removeClass("hidden");

$(".info_navitem").removeClass("ui-btn-active");
$("#about-tab").addClass("ui-btn-active");
};


//Text size control function
function text_size(sym) {
console.log("text_size");
if (sym == "+") {
change_val = 1;
}
if (sym == "-") {
change_val = -1;
}

function change_size(elem) {
console.log("change_size");
fontSize = $(elem).css('font-size').split('px')[0];
newInt = parseInt(fontSize) + change_val;
newSize = newInt + 'px';
$(elem).css({"font-size" : newSize});
}

change_size("#poem-title");
change_size("#poet-name");
change_size("#poem-text");

}









var crossings = {};

crossings.app = {
// Application Constructor
initialize: function() {
console.log("initialize crossings.app");
document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},

// deviceready Event Handler
//
// Bind any cordova events here. Common events are:
// 'pause', 'resume', etc.
onDeviceReady: function() {
console.log("onDeviceReady");
//attaching fastclick.js (eliminating transition delay)
FastClick.attach(document.body);



}

};




// INITIALISING APP
crossings.app.initialize();


$(".poem-link").each(function(){
	$(this).html("<div>"+ window[this.id].artwork +"</div>");
	
});


$("#poets").html(function() {
	bios = "<div id='bios_container'>";
	for (p in poems_data) {
		bios = bios + "<div class='bio_panel'>" + "<div class='bio_photo' style='background-image: url(img/author_photos/" + poems_data[p].poet_photo + ")'></div>" + poems_data[p].poet_bio + "</div>";
	}
	bios = bios + "</div>";
	return bios
})

responsive_display("front");