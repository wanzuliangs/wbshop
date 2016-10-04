<?php
date_default_timezone_set("Asia/Shanghai");
require("util/db.php");
$title = $_GET['title'];
$price = $_GET['price'];
$introduce = $_GET['introduce'];
$stock = $_GET['stock'];
$category = $_GET['category'];
$status = $_GET['status'];
$createtime = time();
$data = array(
    'title' => $title,
    'price' => $price,
    'introduce' => $introduce,
    'stock' => $stock,
    'category' => $category,
    'status' => $status,
    'createtime' => $createtime
);
$id = $db->insert("goods",$data);
if ($id > 0) {
    echo json_encode(array('success'=>true,'message'=>'保存成功'));
} else {
    echo json_encode(array('success'=>false,'message'=>'保存失败'));
}