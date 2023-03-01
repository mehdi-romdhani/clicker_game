<?php  if(isset($_SESSION['login'])): ?>
<header>
        <nav>
            <ul>
                <li><a href="game.php">G A M <span style="color:brown">E</span></a></li>
                <li><a href="logout.php">D E C O N N E X I O <span style="color:brown">N</a></li>
            </ul>
        </nav>
    </header>
 <?php ;else : ?>       
<header>
        <nav>
            <ul>
                <li><a href="index.php">H O M <span style="color:brown;">E</span></a></li>
            </ul>
        </nav>
    </header>
<?php endif ?>