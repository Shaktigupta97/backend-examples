// $.ajax({
//   method: "GET",
//   url: "test.data",
//   data: {}
// }).done(function(data) {
//   $('.ajax-result').html(data);
// }).fail(function(error){
//   console.log(error);
// }).always(function(){
//   console.log('Ajax Process Finished!');
// });


// $.ajax({
//   method: "",
//   url: "",
//   data: {}
// }).done(function(response) {
//   // On Success
// }).fail(function(error){
//   // On Failure
// }).always(function(){
//   // Always
// }).complete(function(){
//   // On Complete
// });

function loadTemplate(){
  /** var element = $(".class, #id, [attribute], tag"); */

  var ajaxElements = $('[data-load-template]');

  // Each loop
  ajaxElements.each(function(index, element){
    var theElement = $(element);

    $.ajax({
      method: "GET",
      url: theElement.data('load-template'),
      data: {}
    }).done(function(response) {
      theElement.html(response);
    })
    
  });
}

loadTemplate();

// function basicJQueryExample(){
  // var elements = $("p");
  
  // // console.log(element.text());

  // elements.each(function(index, element){
  //   var singlePElement = $(element);

  //   console.log('This is ' + index + ' loop. And p text is :' + singlePElement.text());
  // });

  // var flower = $('.flower');

  // // console.log(flower.attr("data-flower-name"));
  // console.log(flower.data("flower-name"));
// }

// basicJQueryExample();

$('#form-ajax-submit').on('submit', function(){
  $.ajax({
    method: "POST",
    url: "/process-request.php",
    data: {
      "name-field": $('#nameField').val(),
      "address-field": $('#inputAddress').val(),
      "city-field": $('#inputCity').val()
    }
  }).done(function(response) {
    if('success' == response){

    } else  {

    }
    // $('#ajax-success').css('display', 'block').find('p').html(response);
  }).fail(function(error){
    $('#ajax-failed').css('display', 'block').find('p').html(error);
  });

 return false;
});