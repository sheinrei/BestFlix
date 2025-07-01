$(function () {
    //change le texte de panier avec option selec
    $(".custom-select").on("change", function () {
        const formule = $(".custom-select option:selected").text();
        $('.list-group-item').text(formule).css("backgroundColor", "cornflowerblue")
    })

    //ferme une boite modale
    $(document).click(function (event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".modal").length) {
            $("body").find(".modal").remove();
        }
    });

    $("body").click(function(e){
        const element = e.target;
        const id = $(element).attr("id");

        if(id === "fermer-modale"){
            $(".modale").remove()
        }
    })
})