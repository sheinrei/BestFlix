<?php
require 'vendor/autoload.php';
include("planqued.php");

\Stripe\Stripe::setApiKey($sk_stripe); // remplace par ta clé secrète

// Récupérer le montant envoyé depuis le front (en centimes)
$amount = $_POST['amount'];

try {
    $paymentIntent = \Stripe\PaymentIntent::create([
        'amount' => $amount,
        'currency' => 'eur',
    ]);
    
    header('Content-Type: application/json');
    echo json_encode(['clientSecret' => $paymentIntent->client_secret]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
