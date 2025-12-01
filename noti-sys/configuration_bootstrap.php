<?php

define('M_HOST', getenv('mHost'));
define('M_USER', getenv('mUser'));
define('M_PASSWORD', getenv('mPassword')); 

define('SENDER_EMAIL', getenv('SENDER_EMAIL'));

include("email_functions.php");

?>