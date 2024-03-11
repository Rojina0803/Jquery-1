"use strict";

// $("p").hide(); hides all the element of p
// $("#class").hide(); hides all the element of id-"Class"
// $(".mn").hide(); hides all the element of class-"mn"

// $(document).ready(function(){

//     $(".mn").hide();
  
//   }); starts execution only after all the related document are loaded.

// Jquery allows to manipulate html by selecting it on the basis of class,id,types, attributes,.....

// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").hide();
//     });
//   });


// $(".") //class selector
// $("#") // id selector
// $("<p>") // element selector

// $("*")	//Selects all elements	
// $(this)	//Selects the current HTML element	
// $("p.intro")	//Selects all <p> elements with class="intro"	
// $("p:first")	//Selects the first <p> element	
// $("ul li:first")	//Selects the first <li> element of the first <ul>	
// $("ul li:first-child")	//Selects the first <li> element of every <ul>	
// $("[href]")	//Selects all elements with an href attribute	
// $("a[target='_blank']")	//Selects all <a> elements with a target attribute value equal to "_blank"	
// $("a[target!='_blank']")	//Selects all <a> elements with a target attribute value NOT equal to "_blank"	
// $(":button")	//Selects all <button> elements and <input> elements of type="button"	
// $("tr:even")	//Selects all even <tr> elements	
// $("tr:odd")	//Selects all odd <tr> elements


// $(document).ready(function(){// hides the elements in single click
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });
// $(document).ready(function(){
//     $("h2").dblclick(function(){
//       $(this).hide();
//     });
//   });

//   $(document).ready(function(){ // shows an alert when mouse is hovered around the specified element
//     $(".mn").mouseenter(function(){
//       alert("SAWARA nai de ne");
//     });
//   });


//   $("#class").mouseleave(function(){
//     alert("Ja a ne");
//   });
//   $("#class").mousedown(function(){
//     alert("Ja a ne");
//   });

//   $("#class").mouseup(function(){
//     alert("Ja a ne");
//   });