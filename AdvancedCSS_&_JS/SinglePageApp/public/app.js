$(document).ready(function () {
    $.getJSON("/api")
    .then(showtodos)
    .catch(function (err){
        console.log(err);
    });

    $('#todoInput').keypress(function (event){ 
        if(event.which == 13){
            createTodo();
        }
    });

    $('.list').on('click', 'span', function(e){
        e.stopPropagation();
        var todoId = $(this).parent();
        //console.log(todoId);
        var deleteurl = "/api/" + todoId.data("id");
        $.ajax({
            type: "DELETE",
            url: deleteurl
        })
        .then(function(v){
            todoId.remove();
        })
        .catch(function(err){
            console.log(err);
        });
    });

    $('.list').on('click', 'li', function(event){
        var todo = $(this);
        updateTodo(todo);
    });
});

function showtodos(todos){
    todos.forEach(function(todo){
        addTodo(todo);
    });
};

function createTodo(){
    $.post("/api", {name: $('#todoInput').val()})
    .done(function(todo){
        $('#todoInput').val('');
        addTodo(todo);
    })
    .fail(function(err){
        console.log(err);
    });
};

function addTodo(todo){
    var newtodo = $('<li class="task"> ' + todo.name + ' <span>X</span> </li>');
    newtodo.data('id', todo._id);
    newtodo.data('completed', todo.completed);
    if(todo.completed === true){
        newtodo.addClass("done");
    }
    $('.list').append(newtodo);
};

function updateTodo(todo) {
    var updateurl = "/api/" + todo.data("id");
    var isdone = todo.data("completed");
    var updatedTodo = {completed: !isdone};
    $.ajax({
        type: "PUT",
        url: updateurl,
        data: updatedTodo
    })
    .then(function(v){
        todo.toggleClass("done");
    })
    .catch(function(err){
        console.log(err);
    });
};