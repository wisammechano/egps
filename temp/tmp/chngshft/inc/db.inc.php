<?php
try
{
$pdo = new PDO('mysql:host=localhost;dbname=egps', 'root',
'');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
$error = 'Unable to connect to the database server.';
echo $error ;//include 'error.html.php';
exit();
}
?>