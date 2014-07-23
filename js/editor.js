function refresh() {

	// Colors
	var colors = color_map($("#s-color").slider("value"));
	$("#swatch :nth-child(1)").css("background-color", colors[0]);
	$("#swatch :nth-child(2)").css("background-color", colors[1]);
	$("#swatch :nth-child(3)").css("background-color", colors[2]);
	$("#swatch :nth-child(4)").css("background-color", colors[3]);
	$("#swatch :nth-child(5)").css("background-color", colors[4]);
	$("#col1").css("background-color", colors[0]);
	$("#col2").css("background-color", colors[1]);
	$("#col1 :nth-child(-n+5)").addClass("color1");
	$(".job :nth-child(n+2)").addClass("color1");
	$("#col1 :nth-child(6)").addClass("color2");
	$(".job :nth-child(1)").addClass("color2");
	$(".color1").css("color", colors[2]);
	$(".color2").css("color", colors[4]);

	// Editor Formatting
	$("#s1").css("background-color", color_map2(200,.5,.4));
	$("#s2").css("background-color", color_map2(100,.5,.5));
	$("#s3").css("background-color", color_map2(400,.5,.5));

	// Background
	$("#col2background").css("background", bmap($("#s-texture").slider("value")));
	// $("#col2background").html($("#s-color").slider("option","value").toString());

	// $("#col2").css("background", 'green' );
	// $("#col2background").css("background-image", "url(../img/mist.png)");
	// $('#col2a').css("opacity", $("#s-texture").slider("value")/100)

/*background: url('../img/wood.jpg') darkgrey;*/
}

$(function() {
	$( "#s-layout").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
		slide: refresh,
		change: refresh
	});
	$( "#s-texture").slider({
		orientation: "vertical",
		range: "min",
		min: 1,
		max: 50,
		value: 25,
		slide: refresh,
		change: refresh
	});	
	$( "#s-color").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 50,
		slide: refresh,
		change: refresh
	});	

	$( "#s-layout").slider( "value", 40);
	$( "#s-texture").slider( "value", 20);
	$( "#s-color").slider( "value", 15);	

});


function color_map(p) {
	var sval = 0.2; 
	if (p>70)
	  {
	  sval = 0; // allow grayscale color scheme
	  }
 	var e = tinycolor({ h: p*5, s: sval, l: .6}).toHexString();
	var colors = $.xcolor.monochromatic(e);
	return colors;
}


function color_map2(x,y,z) {
	return tinycolor({ h: x, s: y, l: z}).toHexString();
}

function bmap(x) {
	// return "'url(img/patterns/png/"+ 1 +".png)'";
	return 'url(img/patterns/png/' + x + '.png)';
}

// function background_map(p) {

// }

  // function hexFromRGB(r, g, b) {
  //   var hex = [
  //     r.toString( 16 ),
  //     g.toString( 16 ),
  //     b.toString( 16 )
  //   ];
  //   $.each( hex, function( nr, val ) {
  //     if ( val.length === 1 ) {
  //       hex[ nr ] = "0" + val;
  //     }
  //   });
  //   return hex.join( "" ).toUpperCase();
  // }
  // function refreshSwatch() {
  //   var red = $( "#red" ).slider( "value" ),
  //     green = $( "#green" ).slider( "value" ),
  //     blue = $( "#blue" ).slider( "value" ),
  //     hex = hexFromRGB( red, green, blue );
  //   $( "#swatch" ).css( "background-color", "#" + hex );
  // }
  // $(function() {
  //   $( "#red, #green" ).slider({
  //     orientation: "vertical",
  //     range: "min",
  //     max: 255,
  //     value: 127,
  //     slide: refreshSwatch,
  //     change: refreshSwatch
  //   });
  //   $( "#blue" ).slider({
  //     orientation: "vertical",
  //     range: "min",
  //     max: 255,
  //     value: 127,
  //     slide: refreshSwatch,
  //     change: refreshSwatch
  //   });
  //   $( "#red" ).slider( "value", 255 );
  //   $( "#green" ).slider( "value", 140 );
  //   $( "#blue" ).slider( "value", 60 );
  // });