$(document).ready(function () {

    // create new field for data with edit types

    $("#insert_input").keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();

            var new_input_text = $("#insert_input").val(),
                new_input = '<input class="form-control" type="text" id="new_data" value="' + new_input_text + '">',
                checkbox = '<div><div class="input-group"> <span class="input-group-addon"> <input type="checkbox" class="check"> </span>',
                remove = '<span class="input-group-addon" id="basic-addon2"> <a href="#">X</a> </span> </div></div>',
                edit_input = checkbox + new_input + remove;

            // alert if insert_input is emty

            if (new_input_text === '') {
                alert("Tusčias įvedimo laukas");
            } else {

                // insert new data in new field from insert_input with edit types

                $(".input_field").append(edit_input);
            };

            // clear insert_input after inserting new data

            $("#insert_input").val('');

            // remove new_input

            $(".input_field").on("click", "#basic-addon2", function () {
                $(this).parent().remove();
            });

            // check new_input data

            $(".input_field").on("click", ".check", function () {
                if ($(this).is(":checked")) {
                    $("#new_data").addClass("selected");
                } else {
                    $("#new_data").removeClass("selected");

                };
            });
        };
    });
});
