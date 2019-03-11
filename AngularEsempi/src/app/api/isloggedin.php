
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
session_start();

if(isset($_SESSION['user'])){
    echo '{"status": true}';
} else {
    echo '{"status": false}';
}
?>