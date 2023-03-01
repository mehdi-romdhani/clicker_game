<?php
require_once('./assets/connect.php');
require_once('./src/User.php');

if (isset($_POST['login_sub']) && isset($_POST['password_sub'])) {

    echo User::register($_POST['login_sub'], $_POST['password_sub']);
    die();
}
?>



<form action="#" method="POST" id="form_subscribe">
    <label for="login">Login</label>
    <input type="text" name="login_sub">
    <label for="password">Mot de passe</label>
    <input type="password" name="password_sub">
    <label for="confpassword">Confirmation Mot de Passe</label>
    <input type="password" name="conf_password">
    <p id="mess_done"></p>

    <div class="container-btn-form">

        <button type="submit" class="fill">Subscribe</button>
        <button type="reset" class="fill">Effacer</button>
    </div>


</form>
