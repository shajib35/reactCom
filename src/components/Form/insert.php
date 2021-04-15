<?php 
$server="localhost";
$username="root";
$password="";
$dbname="insert";
$con=mysqli_connect($server,$username,$password,$dbname);
if(isset($_POST['submit'])){
if (!empty($_POST['name'])&& !empty($_POST['email'])&& !empty($_POST['address'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $address= $_POST['address'];
    $query="insert into form(name,email,address) values('$name','$email','$address')";
    $run=mysqli_query($con,$query) or die(mysqli_error());
    if($run){
        echo "form submitted ";

    }
    else{
        echo "form not submitted";
    }
}
else{
    echo "all items required";
}
}