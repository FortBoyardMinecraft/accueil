<?php
header('Content-Type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data) throw new Exception("Données invalides");

    $file = 'participations.json';
    $participations = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

    $participations[] = $data;

    if (file_put_contents($file, json_encode($participations, JSON_PRETTY_PRINT)) === false) {
        throw new Exception("Erreur d'écriture");
    }

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
