
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevoured");

    var newDevourState = {
      devoured: newDevour
    };
    // PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevour);
        location.reload();
      }
    );
  });

  // Create POST request
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    console.log("delete-burger click test");
    var id = $(this).data("id");
    
    $.ajax("/api/burgers" + id, {
      type: "DELETE"
    }).then(function(){
      console.log("deleted burger", id);

      location.reload();
      }
    );
  });
});