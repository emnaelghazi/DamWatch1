<?php

$host = 'localhost';
$dbname = 'DamWatch'; 
$username = 'postgres'; 
$password = 'nadagouja'; 


try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}


$data = json_decode(file_get_contents("php://input"), true);

$waterquality = $data['waterquality'] ?? null;
$city = $data['city'] ?? null;
$waterlevel = $data['waterlevel'] ?? null;
$constructionYear = $data['constructionYear'] ?? null;
$capacity = $data['capacity'] ?? null;
$operationalstatus = $data['operationalstatus'] ?? null;

$query = "SELECT * FROM damdata WHERE 1=1";
$parameters = [];

if ($waterquality) {
    $query .= " AND waterquality = :waterquality";
    $parameters[':waterquality'] = $waterquality;
}
if ($city) {
    $query .= " AND city = :city";
    $parameters[':city'] = $city;
}
if ($waterlevel) {
    $query .= " AND waterlevel = :waterlevel";
    $parameters[':waterlevel'] = $waterlevel;
}
if ($constructionYear) {
    $query .= " AND constructionyear = :constructionYear";
    $parameters[':constructionYear'] = $constructionYear;
}
if ($capacity) {
    $query .= " AND capacity = :capacity";
    $parameters[':capacity'] = $capacity;
}
if ($operationalstatus) {
    $query .= " AND operationalstatus = :operationalstatus";
    $parameters[':operationalstatus'] = $operationalstatus;
}

$stmt = $pdo->prepare($query);
$stmt->execute($parameters);


$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results);
?>
