var tasks = {};

// function to save tasks

var saveTasks = function () {

    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}

// function to edit tasks
$(".description").on("click", function() {

    var text = $(this).text().trim();

    var id = $(this).attr("id");
    
    var textInput = $("<textarea>").addClass("form-control").addClass("col-10").val(text).attr('id', id)

    $(this).replaceWith(textInput);
    textInput.trigger("focus");

});

$(".time-block").on("blur","textarea", function () {

    var text = $(this).val().trim();

    console.log(text)

    var time = $(this).attr("id");

    console.log(time);

    tasks[time] = text;
    console.log(tasks)

    var taskEl = $("<div>").addClass("description").addClass("col-10").text(text).attr('id', time)

    $(this).replaceWith(taskEl);

})

$(".saveBtn").on("click", function() {

    console.log("tasks saved!")

    saveTasks();
    
})