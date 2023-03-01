<?php
session_start();
//require_once('./assets/connect.php');

?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link Css -->
    <link rel="stylesheet" href="./assets/style.css">
    <!-- Link Js -->
    <script defer src="./assets/js/script.js"></script>
    <script defer src="./assets/js/inscription.js"></script>
    <script defer src="./assets/js/connexion.js"></script>
    <!-- API FONT GOOGLE -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet">
    <!-- Title Document -->
    <title>Idle_game</title>
</head>

<body>
    <div class="main-container">
        <h1>IDLE GAME_</h1>
    </div>

    <?php require_once('./include/header.php') ?>

    <div class="second-container">
        <div class="btn-container">
            <button class="fill" id="btn-subscribe">Inscription</button>
            <button class="fill" id="btn-connect">Connexion</button>
        </div>
      
        
    </div>

    <div class="form-container">
                
    </div>


</body>

</html>