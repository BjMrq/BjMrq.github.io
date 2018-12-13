// GO !

addEvents();

function addEvents(){
  // Check off Specific Todos by Clicking
  $("li").on("click", function(){
    $(this).toggleClass("completed");
  });
  // Click on X to delete TODO
  $(".binIcon").on("click", function() {
    $(this).parent().fadeOut(400, function() {
      $(this).remove();
    });
    event.stopPropagation();
  });
}

// Creating ToDo

$(".newToDo").on("keypress", function(e){
  if(e.which === 13) {
    var newToDoText = $(this).val();
    $(".container ul").prepend("<li class='toDo'><span class='binIcon'><i class='far fa-trash-alt'></i></span>" + newToDoText + "</li>");
    $(this).val("");
    }
  addEvents();
});

$(".icon").click(function(){
  $(".newToDo").fadeToggle();
});
