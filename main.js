$(document).ready(function () {

    $("#insert_input").on("keypress", function (e) {
        var $this = $(this);
        var newInputText = $this.val();

        if (e.which === 13) {
            e.preventDefault();

            $this.val("");

            if (newInputText === '') {
                alert("Tuscias ivedimo laukas");
            } else {
                $(".input_field").append(getNewLineItem(newInputText));
            }
        }
    });

    $(document).on("click", ".input-remove", function () {
        $(this).parent().remove();
    });

    $(document).on("click", ".input-checkbox", function () {
        var $this = $(this);
        if ($this.is(":checked")) {
            $this.addClass("selected");
        } else {
            $this.removeClass("selected");
        }
    });

    function getNewLineItem(inputText) {
        return '<div class="input-group">' +
            '<span class="input-group-addon">' +
            '<input class="input-checkbox" type="checkbox" >' +
            '</span>' +
            '<input class="form-control" type="text" value="' + inputText + '">' +
            '<span class="input-remove input-group-addon">' +
            '<a href="#">X</a>' +
            '</span>' +
            '</div>';
    }
});
