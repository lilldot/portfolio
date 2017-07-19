<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Katherine Long, Product / User Experience / Interaction Designer, welcome to my portfolio. klong128@gmail.com">
    <title>
        <?php if(!$thisPage) echo "Page Not Found :("; else { echo ucfirst($thisPage)." - Katherine Long"; }?>
    </title>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/nv.d3.css" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="shortcut icon" href="favicon.ico" />
    <script src="bower_components/modernizr/modernizr.js"></script>
</head>

<body id="<?php echo $thisPage; ?>">
    <header>
        <div id="logo"><a href="index.php">klong</a>
        </div>
        <nav>
            <ul>
                <!-- <li><a href="photos.php" class="fade <?php if($thisPage=="photos" ) echo "selected"; ?>">PHOTOS</a></li> -->
                <li><a href="work.php" class="fade <?php if($thisPage=="work" ) echo "selected"; ?>">WORK</a></li>
                <li><a href="about.php " class="fade <?php if($thisPage=="about" ) echo "selected"; ?>">ABOUT</a></li>
                <li><a href="index.php" class="fade <?php if($thisPage=="home" ) echo "selected"; ?>">HOME</a></li>
            </ul>
        </nav>
    </header>
