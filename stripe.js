const stripe = Stripe('pk_test_51RfjQLPrzOZSqMwzc5gH9M5OIusKvmUejyBEnTrye5hXBNAevvJ5sxJV8x14A2srWnReDboLKjAWG9PQgRv1HBnm00g4MCOXmQ');
const elements = stripe.elements();
const cardElement = elements.create('card', {
    style: {
        base: {
            fontSize: '18px',
            color: '#32325d',
            '::placeholder': {
                color: '#a0aec0',

            },
        },
    },
});

$(function () {
// Crée un cardElement (champ carte bancaire)
            cardElement.mount('#card-element');
        })