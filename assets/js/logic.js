var tasks = {};

var currentHour = moment().hour();
var currentDate = moment().format('MMMM d, YYYY');

$("#currentDay").text(currentDate);

// function to load tasks
var loadTasks = function () {

    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {

        tasks = {

            9: " ",
            10: " ",
            11: " ",
            12: " ",
            13: " ",
            14: " ",
            15: " ",
            16: " ",
            17: " "

        };

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    $('.description').each(function() {

        $(this).text(tasks[$(this).attr("id")]);

        if ($(this).attr("id") === currentHour) {

            $(this).addClass("present")
        }
        else if ($(this).attr("id") < currentHour) {

            $(this).addClass("future")

        } 
        else if ($(this).attr("id") > currentHour) {

            $(this).addClass("past")

        }
    
    })

}

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

// saves tasks when clicking off of task
$(".time-block").on("blur","textarea", function () {

    var text = $(this).val().trim();

    console.log(text)

    var time = $(this).attr("id");

    console.log(time);

    tasks[time] = text;
    console.log(tasks)

    var taskEl = $("<div>").addClass("description").addClass("col-10").text(text).attr('id', time)

    $(this).replaceWith(taskEl);

    loadTasks();

})

// saves tasks in local storage when save button is clicked
$(".saveBtn").on("click", function() {

    console.log("tasks saved!")

    saveTasks();

})

loadTasks();
