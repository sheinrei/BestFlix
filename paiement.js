$(function () {
    $("input[type=submit]").on("click", async function () {

        let valid = validFormulaire()

        if (valid) {
            //prendre la valeurs euro des formule d'abo
            const price = $("#formule option:selected").attr("date-price");
            const price_centime = Math.round(price * 100)

            const response = await fetch('create_payment_intent.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ amount: price_centime })
            });

            const data = await response.json();

            if (data.error) {
                alert("Erreur : " + data.error);
                return;
            }
            const clientSecret = data.clientSecret;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                }
            })

            if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
                alert('Paiement réussi ! 🎉');
                cardElement.clear();
                //fetch vers php pour link les elements admin à DB?
            } else {
                alert('Paiement echec !')
            }

        }
    })
})