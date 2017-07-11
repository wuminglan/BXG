<?php
header("content-type:text/html;charset=utf8");
// var_dump($_COOKIE);
echo json_encode($_COOKIE);
setcookie('gender','jahha');
?>