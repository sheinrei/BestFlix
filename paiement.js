$(function () {
    $("input[type=submit]").on("click", async function () {

        let valid = validFormulaire();


        if (valid) {

      

            //prendre le prix des formule d'abo
            const price = $("#formule option:selected").attr("date-price");
            const price_centime = Math.round(price * 100);

            //lance animation d'attente
            waitRepons();
            interval ??= setInterval(rotate, 10);




            //fetch vers php pour avoir la clientSecret
            const response = await fetch('create_payment_intent.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ amount: price_centime })
            }
            );


            const data = await response.json();

            if (data.error) {
                const message = 'Paiement echec!';
                openModale(message);
                return
            }
            const clientSecret = data.clientSecret;


            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                }
            });

            if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
                //arrete l'animation d'attent
                clearModaleWait();
                
                const message = `
                <span style="text-align:center; color:green">- Paiement réussis - </span><br>
                Merci ${$(nom).val() + " " + $(prenom).val()} pour vottre abonnement <br>

                <strong>${$(".custom-select option:selected").text()}</strong><br>

                Vous pouvez acceder à vos services sur <a href="#">BestFlix.com</a><br>
          
                Retrouver votre facture sur votre adresse mail : ${$("#exampleInputEmail1").val()}            
                `;
                openModale(message, "Confirmation");

                
                cardElement.clear();
                //fetch vers php pour link les elements admin à DB?


            } else {
                const message = 'Paiement echec !';
                openModale(message, "Warning");

                //clear annimation
                clearModaleWait()
            }

        }
    })
})