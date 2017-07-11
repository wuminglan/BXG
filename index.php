<?php
header("content-type:text/html;charset=utf8");
// echo 'shijie';
// include 'http://www.studyit2.com/index.php/views/dashboard/index.html';
// include 'views/dashboard/login.html';
// var_dump($_SERVER);
$path=''; 
if(array_key_exists('PATH_INFO',$_SERVER)){
$path = $_SERVER['PATH_INFO'];//获取index.php后的路径
$path = substr($path,1);//截取字符串
$arr = explode("/",$path);//explode将字符串切割成数组
if(count($arr)==2){
    $path='views/'.$arr[0].'/'.$arr[1];
}else if(count($arr)==1){
    $path='views/dashboard/'.$arr[0];

}
    
}else{
    $path = 'views/dashboard/index';
}
include $path.'.html';
?>