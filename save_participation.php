<?php
// Autoriser le CORS si nécessaire
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Lire la requête JSON
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Données invalides']);
    exit;
}

$file = 'participations.json';
$participations = [];

if (file_exists($file)) {
    $participations = json_decode(file_get_contents($file), true);
}

$participations[] = $data;

if (file_put_contents($file, json_encode($participations, JSON_PRETTY_PRINT))) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'écriture']);
}

