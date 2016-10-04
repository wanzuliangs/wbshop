<?php
require_once('MysqliDb.php');

$host = $_SERVER['HTTP_HOST'];

/*测试环境*/
if (strpos($host, 'localhost') > -1) {
    $param = Array (
        'host' => 'localhost',
        'username' => 'root',
        'password' => 'root',
        'db'=> 'shop',
        // 'db'=> 'test',
        'port' => 3306,
        /*'prefix' => 'my_',*/
        'charset' => 'utf8'
    );
} else {
    $param = Array (
        'host' => 'localhost',
        'username' => 'root',
        'password' => 'root',
        'db'=> 'shop',
        'port' => 3306,
        'charset' => 'utf8'
    );
}

$db = new MysqliDb($param);
?>