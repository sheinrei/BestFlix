
//variable pour rotate
let interval;
let compteur = 0;
let rotate2 = 90;

function rotate() {
    $(".test").css("rotate", `${compteur}deg`)
    $(".test2").css("transform", `translateY(-136%) rotate(${rotate2}deg)`);
    compteur++;
    rotate2++;
}



$(function () {
    //change le texte de panier avec option selec
    $(".custom-select").on("change", function () {
        const formule = $(".custom-select option:selected").text();
        $('.list-group-item').text(formule).css("backgroundColor", "cornflowerblue")
    })

    //ferme une boite modale
    $(document).on("click", function (event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".modal").length) {

            $("body").find(".modal").remove();
        }
    });



    //efface la modale sur clic close
    $("body").on("click", function (e) {
        const id = $(e.target).attr("id");
        if (id === "fermer-modale") {
            $(".modale").remove()

        }
    })




    //bouger la boite modale
    const position = {
        last_x: 0,
        last_y: 0,
        new_x: 0,
        new_y: 0,
    }
    let activ_move = false;
    let target = null;


    $("body").on("mousedown", function (e) {
        const element = $(e.target);

        if ($(element).hasClass("top-modale")) {
            activ_move = true;
            target = element;
            position.last_x = e.pageX;
            position.last_y = e.pageY;
        }
    })


    // part 2 mouse move
    $("body").on("mousemove", function (e) {
        if (activ_move && target) {
            target = $(".modale");
            const decal_x = e.pageX - position.last_x;
            const decal_y = e.pageY - position.last_y;

            // mise à jour position modale
            const currentLeft = parseInt($(target).css("left")) || 0;
            const currentTop = parseInt($(target).css("top")) || 0;


            $(target).css({
                "left": currentLeft + decal_x,
                "top": currentTop + decal_y
            });

            position.last_x = e.pageX;
            position.last_y = e.pageY;
        }
    })

    $("body").on("mouseup", function () {
        activ_move = false;
        target = null;
    });


});

// fin de move reseat

