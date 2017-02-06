// my scripts


// var primartyBtn = document.getElementsByClassName("button")[i];



$("#prBtn").click(function(){
	$("#wheelSVG polygon").css("opacity", "1");
	// $("#wheelSVG path").css("fill", "black");
	// $("#blue").css("fill", "#0054A6");
	// $("#red").css("fill", "#ED1D25");
	// $("#yellow").css("fill", "#FEF200");
	$("#wheelSVG polygon").css("opacity", ".15");
	$("#outsideStar").css("opacity", "1");
	$("#innerStar").css("opacity", "1");
	$("#blue").css("opacity", "1");
	$("#red").css("opacity", "1");
	$("#yellow").css("opacity", "1");
});
$("#scBtn").click(function(){
	$("#wheelSVG polygon").css("opacity", "1");
	// $("#wheelSVG path").css("fill", "black");
	// $("#blue").css("fill", "#0054A6");
	// $("#red").css("fill", "#ED1D25");
	// $("#yellow").css("fill", "#FEF200");
	$("#wheelSVG polygon").css("opacity", ".15");
	$("#outsideStar").css("opacity", "1");
	$("#innerStar").css("opacity", "1");
	$("#green").css("opacity", "1");
	$("#violet").css("opacity", "1");
	$("#orange").css("opacity", "1");
});
$("#trBtn").click(function(){
	$("#wheelSVG polygon").css("opacity", "1");
	// $("#wheelSVG path").css("fill", "black");
	// $("#blue").css("fill", "#0054A6");
	// $("#red").css("fill", "#ED1D25");
	// $("#yellow").css("fill", "#FEF200");
	$("#wheelSVG polygon").css("opacity", ".15");
	$("#outsideStar").css("opacity", "1");
	$("#innerStar").css("opacity", "1");
	$("#yellowGreen").css("opacity", "1");
	$("#blueGreen").css("opacity", "1");
	$("#blueViolet").css("opacity", "1");
	$("#redViolet").css("opacity", "1");
	$("#redOrange").css("opacity", "1");
	$("#yellowOrange").css("opacity", "1");
});

$("#warmBtn").click(function(){
	$("#wheelSVG polygon").css("opacity", "1");
	// $("#wheelSVG path").css("fill", "black");
	// $("#blue").css("fill", "#0054A6");
	// $("#red").css("fill", "#ED1D25");
	// $("#yellow").css("fill", "#FEF200");
	$("#wheelSVG polygon").css("opacity", ".15");
	$("#outsideStar").css("opacity", "1");
	$("#innerStar").css("opacity", "1");
	$("#yellow").css("opacity", "1");
	$("#yellowOrange").css("opacity", "1");
	$("#orange").css("opacity", "1");
	$("#redOrange").css("opacity", "1");
	$("#red").css("opacity", "1");
	$("#redViolet").css("opacity", "1");
});

$("#coolBtn").click(function(){
	$("#wheelSVG polygon").css("opacity", "1");
	// $("#wheelSVG path").css("fill", "black");
	// $("#blue").css("fill", "#0054A6");
	// $("#red").css("fill", "#ED1D25");
	// $("#yellow").css("fill", "#FEF200");
	$("#wheelSVG polygon").css("opacity", ".15");
	$("#outsideStar").css("opacity", "1");
	$("#innerStar").css("opacity", "1");
	$("#violet").css("opacity", "1");
	$("#blueViolet").css("opacity", "1");
	$("#blue").css("opacity", "1");
	$("#blueGreen").css("opacity", "1");
	$("#green").css("opacity", "1");
	$("#yellowGreen").css("opacity", "1");
});


$("#text").click(function(){
	$("#wheelSVG polygon").css("opacity", "1");
	$("#innerStar").css("fill", "#FFF");
	// $("#wheelSVG path").css("fill", "black");
	// $("#blue").css("fill", "#0054A6");
	// $("#red").css("fill", "#ED1D25");
	// $("#yellow").css("fill", "#FEF200");
	// $("#wheelSVG polygon").css("opacity", ".15");
	// $("#outsideStar").css("opacity", "1");
	// $("#innerStar").css("opacity", "1");
	// $("#blue").css("opacity", "1");
	// $("#red").css("opacity", "1");
	// $("#yellow").css("opacity", "1");
});

var selectedColor;

$("#blue").click(function(){
	$("#innerStar").css("fill", "#0054A6");
	selectedColor = "b";
});
$("#orange").click(function(){
	$("#innerStar").css("fill", "#FF9400");
	selectedColor = "o";
});

$("#blueViolet").click(function(){
	$("#innerStar").css("fill", "#2E3192");
	selectedColor = "bv";
});
$("#yellowOrange").click(function(){
	$("#innerStar").css("fill", "#FFC500");
	selectedColor = "yo";
});

$("#violet").click(function(){
	$("#innerStar").css("fill", "#662E91");
	selectedColor = "v";
});
$("#yellow").click(function(){
	$("#innerStar").css("fill", "#FEF200");
	selectedColor = "y";
});

$("#redViolet").click(function(){
	$("#innerStar").css("fill", "#92278F");
	selectedColor = "rv";
});
$("#yellowGreen").click(function(){
	$("#innerStar").css("fill", "#8DC701");
	selectedColor = "yg";
});

$("#red").click(function(){
	$("#innerStar").css("fill", "#ED1D25");
	selectedColor = "r";
});
$("#green").click(function(){
	$("#innerStar").css("fill", "#01A652");
	selectedColor = "g";
});

$("#redOrange").click(function(){
	$("#innerStar").css("fill", "#F26623");
	selectedColor = "ro";
});
$("#blueGreen").click(function(){
	$("#innerStar").css("fill", "#01A89E");
	selectedColor = "bg";
});




$("#compBtn").click(function(){
	if(selectedColor == "b") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blue").css("opacity", "1");
		$("#orange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
	else if(selectedColor == "o"){
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blue").css("opacity", "1");
		$("#orange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#compBtn").click(function(){
	if(selectedColor == "bv") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blueViolet").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
	else if(selectedColor == "yo"){
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blueViolet").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#compBtn").click(function(){
	if(selectedColor == "v") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#violet").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
	else if(selectedColor == "y"){
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#violet").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#compBtn").click(function(){
	if(selectedColor == "rv") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#yellowGreen").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
	else if(selectedColor == "yg"){
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#yellowGreen").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#compBtn").click(function(){
	if(selectedColor == "r") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#red").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
	else if(selectedColor == "g"){
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#red").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#compBtn").click(function(){
	if(selectedColor == "ro") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redOrange").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
	else if(selectedColor == "bg"){
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redOrange").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});


$("#analogousBtn").click(function(){
	if(selectedColor == "b") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blue").css("opacity", "1");
		$("#blueViolet").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "bv") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blue").css("opacity", "1");
		$("#blueViolet").css("opacity", "1");
		$("#violet").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "v") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#blueViolet").css("opacity", "1");
		$("#violet").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "rv") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#red").css("opacity", "1");
		$("#violet").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "r") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#red").css("opacity", "1");
		$("#redOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "ro") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#orange").css("opacity", "1");
		$("#red").css("opacity", "1");
		$("#redOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "o") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#orange").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#redOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "yo") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#orange").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "y") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#yellowGreen").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "yg") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#yellowGreen").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "g") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#yellowGreen").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#analogousBtn").click(function(){
	if(selectedColor == "bg") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blue").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});


$("#triadBtn").click(function(){
	if(selectedColor == "y") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blue").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#red").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "yg") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blueViolet").css("opacity", "1");
		$("#yellowGreen").css("opacity", "1");
		$("#redOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "g") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#violet").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#orange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "bg") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "b") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blue").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#red").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "bv") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blueViolet").css("opacity", "1");
		$("#yellowGreen").css("opacity", "1");
		$("#redOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "v") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#violet").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#orange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "rv") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "r") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#red").css("opacity", "1");
		$("#blue").css("opacity", "1");
		$("#yellow").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "ro") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#blueViolet").css("opacity", "1");
		$("#yellowGreen").css("opacity", "1");
		$("#redOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "o") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#violet").css("opacity", "1");
		$("#green").css("opacity", "1");
		$("#orange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

$("#triadBtn").click(function(){
	if(selectedColor == "yo") {
		$("#wheelSVG polygon").css("opacity", ".15");
		$("#redViolet").css("opacity", "1");
		$("#blueGreen").css("opacity", "1");
		$("#yellowOrange").css("opacity", "1");
		$("#innerStar").css("opacity", "1");
		$("#outsideStar").css("opacity", "1");
	}
});

// $(".button").css("color", "red");
// $("#wheel").css("width", "900px");
// $("#wheel").css("height", "900px");

// $("#red").mouseenter(function(){
// 	$("#red").css("fill", "black");
// });
// $("#red").mouseleave(function(){
// 	$("#red").css("fill", "#ED1D25");
// });