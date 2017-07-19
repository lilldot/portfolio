
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $message = $_POST['message'];
    $from = $email; 
    $to = 'klong128@gmail.com'; 
    $subject = 'Portfolio Contact';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
        if ($name != '' && $email != '' && $message != '' ) {
                if (mail ($to, $subject, $body, $from)) { 
?>
<script>
        $(document).ready(function(){$('#thank-you').foundation('reveal', 'open')});
</script>
<?php
}
        } else {
            ?>
<script>
        $(document).ready(function(){$('#contact-me').foundation('reveal', 'open')});
        $('.form-error').html('<p>You need to fill in all required fields!!</p>');
</script>
<?php
            echo '';
        }
    } 
?>
    <div id="contact-me" class="reveal-modal medium" data-reveal>

        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <div class="form-error"></div>
            <div class="row">
                <div class="columns">
                    <h2>Contact me</h2>
                </div>
            </div>
            <div class="row">
                <div class="small-3 columns">
                    <label for="name" class="left inline">Name *</label>
                </div>
                <div class="small-9 columns">
                    <input type="text" id="name" placeholder="Your Name">
                </div>
            </div>
            <div class="row">
                <div class="small-3 columns">
                    <label for="email" class="left inline">Email *</label>
                </div>
                <div class="small-9 columns">
                    <input type="text" id="email" placeholder="Your Email">
                </div>
            </div>
            <div class="row">
                <div class="small-3 columns">
                    <label for="website" class="left inline">Website</label>
                </div>
                <div class="small-9 columns">
                    <input type="text" id="website" placeholder="Your Website">
                </div>
            </div>
            <div class="row">
                <div class="small-3 columns">
                    <label for="message" class="left inline">Message *</label>
                </div>
                <div class="small-9 columns">
                    <textarea id="message" placeholder="Send me a message :)"></textarea>
                </div>
                <div class="columns">
                    <input aria-label="submit form" class="button small black" id="submit" name="submit" type="submit" value="Submit">
                </div>
            </div>
        </form>
        <a class="close-reveal-modal">&#215;</a>
    </div>

    <div id="thank-you" class="reveal-modal medium" data-reveal>
            <div class="row">
                <div class="columns">
                    <h2>Thank You!</h2>
                </div>
            </div>
            
        <a class="close-reveal-modal">&#215;</a>
    </div>

