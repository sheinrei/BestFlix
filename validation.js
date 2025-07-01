$(function () {
    //met à jours le panier selon le custom-select
    $(".custom-select").on("change", function () {
        const formule = $(".custom-select option:selected").text();
        $('.list-group-item').text(formule)
    })
})





function validFormulaire() {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = (email) => emailRegex.test(email);

    //variable cherche les valeurs input
    const input_email = $("#exampleInputEmail1").val();
    const nom = $("#nom").val();
    const prenom = $("#prenom").val();
    const adress = $(".form-control").eq(3).val();
    const city = $(".form-control").eq(4).val();
    const city_zip = $(".form-control").eq(6).val();
    const formule = $(".custom-select option:selected").text();

    //compare si les input sont bien remplis
    let valid_formule = formule !== "Sélectionnez votre formule d'abonnement"
    let valid_email = isValidEmail(input_email);
    let valid_nom = nom.length > 0;
    let valid_prenom = prenom.length > 0;
    let valid_adress = adress.length > 0;
    let valid_city = city.length > 0;
    let valid_city_zip = city_zip.length > 0;
    let valid_cgv = $("#gridCheck1").is(':checked');

    //gestion des input non ok
    //email
    !valid_email ? $("#exampleInputEmail1").css("border", "2.5px solid red") : $("#exampleInputEmail1").css("border", "1px solid #ced4da")
    //nom
    !valid_nom ? $("#nom").css("border", "2.5px solid red") : $("#nom").css("border", "1px solid #ced4da")

    //prenom
    !valid_prenom ? $("#prenom").css("border", "2.5px solid red") : $("#prenom").css("border", "1px solid #ced4da")

    //adress
    !valid_adress ? $(".form-control").eq(3).css("border", "2.5px solid red") : $(".form-control").eq(3).css("border", "1px solid #ced4da")

    //ville
    !valid_city ? $(".form-control").eq(4).css("border", "2.5px solid red") : $(".form-control").eq(4).css("border", "1px solid #ced4da")

    //code zip de la ville
    !valid_city_zip ? $(".form-control").eq(6).css("border", "2.5px solid red") : $(".form-control").eq(6).css("border", "1px solid #ced4da")

    //une forule a bien été choisi
    if (!valid_formule || !valid_cgv){
        let message = ""
        if (!valid_formule){
            message += "-Veuillez choisir une formule d'abonnement <br>"
        }
        if(!valid_cgv){
            message += "-Veuillez accepter les CGV"
        }
        openModale(message)
    }



    //fin gestion des input nok
    let all_valid = [
        valid_email,
        valid_nom,
        valid_prenom,
        valid_adress,
        valid_city,
        valid_city_zip,
        valid_cgv
    ];

    return all_valid.every(Boolean);
}


