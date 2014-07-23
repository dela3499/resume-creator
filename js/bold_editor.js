function refresh() {
	var layout = $("#s-layout").slider("value"),
	    texture = $("#s-texture").slider("value"),
	    color = $("#s-color").slider("value");
	// $(".layout").css("font-size", layout + "px");
	// $("#skill_title").css("font-size", layout + "px");
	// $(".job_tags").css("font-size", texture + "px");
	// $("p").css("font-size", color + "px");
	// $("#school_info").css("font-size", color + "px");
	// $("#skills").css("font-size", color + "px");
	// $("#email").css("font-size", color + "px");
	// $("#gpa").css("font-size", gpa_size + "px");
}

$(function() {
	$( "#s-layout").slider({
		orientation: "vertical",
		range: "min",
		min: 30,
		max: 60,
		value: 40,
		slide: refresh,
		change: refresh
	});
	$( "#s-texture").slider({
		orientation: "vertical",
		range: "min",
		min: 10,
		max: 30,
		value: 20,
		slide: refresh,
		change: refresh
	});	
	$( "#s-color").slider({
		orientation: "vertical",
		range: "min",
		min: 10,
		max: 20,
		value: 15,
		slide: refresh,
		change: refresh
	});	

	$( "#s-layout").slider( "value", 40);
	$( "#s-texture").slider( "value", 20);
	$( "#s-color").slider( "value", 15);	

});


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