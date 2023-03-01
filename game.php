<?php
session_start();
// var_dump($_SESSION['login']);
require_once('./assets/connect.php');


?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link CSS -->
    <link rel="stylesheet" href="./assets/style.css">
    <!-- Link JS  -->
    <script defer src="./assets/js/script.js"></script>
    <!-- API GOOGLE FONT  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>

    <!-- Title Document -->
    <title>Idle_game</title>
</head>

<body>

    <div class="main-container">
        <h1>IDLE GAME_</h1>
    </div>

    <?php require_once('./include/header.php') ?>


    <div class="count-container">

        <div class="score-count">
            <p id="para-count">C O I N S : </p>
            <span id="score-count-number"></span>
            <div class="btn-count-container">
                <button id="btn-incremation" class="fill">Click</button>
                <button id="remove-storage" class="fill">Reset</button>
                <div class="no-money">
                    <br>
                    <p id="no-money"></p>
                </div>
            </div>

        </div>

    </div>

    <div class="container-title-shop">
        <h2>SHOPPING</h2>
        <p>ITEM <span style="color:brown">S</span> </p>
    </div>



    <div class="item-container">
        <!-- ITEMS 1  -->
        <div class="article-item">
            <p>Prix du button : <span id="prix-item1" style="color:blue"></span> coins</p>
            <p>Multiplicateur : x <span id="multi-item-1" style="color:blue"></span></p>
            <button class="fill" id="btn-items-1">Buy</button>
        </div>
        <!-- ITEMS 2  -->
        <div class="article-item-2">

            <p>Prix du button : <span id="prix-item2" style="color:blue"></span> coins</p>
            <p>Multiplicateur : x <span id="multi-item-2" style="color:blue"></span></p>
            <p id="bonus">Bonus : <span id="count_bonus" style="color:blue"></span></p>
            <button class="fill" id="btn-items-2">Buy</button>
        </div>
        <!-- ITEMS 3  -->
        <div class="article-item-3">

            <p>Prix du button : <span id="prix-item3" style="color:blue"></span> coins</p>
            <p>Multiplicateur : x <span id="multi-item-3" style="color:blue"></span></p>
            <p id="bonus">Bonus : <span id="count_bonus" style="color:blue"></span></p>
            <button class="fill" id="btn-items-3">Buy</button>
        </div>

    </div>






</body>

</html>