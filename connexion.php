<?php
require_once('./assets/connect.php');
require_once('./src/User.php');

if (isset($_POST['login_co']) && isset($_POST['password_co'])) {

    echo User::connect($_POST['login_co'], $_POST['password_co']);

    die();
}
?>


<!-- if true -> display : none -->

<form action="#" method="POST" id="form_connexion">
    <label for="login">Login</label>
    <input type="text" name="login_co">
    <label for="password">Mot de passe</label>
    <input type="password" name="password_co">
    <p id="mess_done"></p>
    <div class="container-btn-form">
        <button type="submit" class="fill">Connexion</button>
    </div>
</form>