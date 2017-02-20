// Check Off Specific Todos by Clicking


// LONG JAVASCRIPT SOLUTION TO TOGGLE PROBLEM - NOT IDEAL, USE CSS CLASS TOGGLE!
// $("li").click(function() {
// 	// if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		// turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else {
// 		// turn it gray
// 		$(this).css({
// 		color: "gray",
// 		// JS doesn't accept "-" in property names. Must use camelCase.
// 		textDecoration: "line-through"
// 		});
//   	}

// });

// CSS TOGGLE SOLUTION - MUCH BETTER
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// ==========================================================

// DELETING TODO LIST ITEMS

$("ul").on("click", "span", function(event){
// select the span clicked, then the parent "li" element, then the fadeOut method.
	$(this).parent().fadeOut(1000, function(){
// removes the whole li element, including span, because parent was selected above.
		$(this).remove();
// stop the click event from bubbling up through the parent 
// elements and triggering their click functions.
		event.stopPropagation();
	});
});

// ADDING TODOS

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var toDoText = $(this).val();
		$("input[type='text']").val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText + "</li>");
	};
});

// TOGGLING THE INPUT

$(".fa-arrows-v").click(function(){
	$("input[type='text']").fadeToggle();
});
