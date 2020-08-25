<?php

require_once 'auth.php';

//print_r($_POST);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$postdata = file_get_contents("php://input");
//echo ("$postdata");
if(isset($postdata) && !empty($postdata)){
      $request = json_decode($postdata);
      $UserId=$request->$UserId
      $Firstname=$request->Firstname   
      $Middlename=$request->Middlename
      $Lastname=$request->Lastname
      $Gender=$request->Gender
      $DOB=$request->DOB
      $Bloodgroup=$request->Bloodgroup
      $Permanentaddress=$request->Permanentaddress
      $PhoneNumber=$request->PhoneNumber
      $Emailid=$request->Emailid
      $Fathername=$request->Fathername
      $FatherOccupation=$request->FatherOccupation
      $FatherContactNumber=$request->$FatherContactNumber
      $FatherMailid=$request->FatherMailid
      $Mothername=$request->Mothername
      $MotherOccupation=$request->MotherOccupation
      $MotherContactNumber=$request->$MotherContactNumber
      $MotherMailid=$request->$MotherMailid
      $ReservationCategory=$request->ReservationCategory

  // echo("<h1>$Type1</h1>");

$sql = "INSERT INTO personal_details_mdb (user_id,first_name,middle_name,last_name,gender,DOB,blood_group,permanent_address,phone_no,email_id,father_name,father_occupation,father_contact_no,father_email_id,mother_name,mother_occupation,mother_contact_no,mother_email_id,reservation_on_category) 
VALUES (
   ' $UserId',
      '$Firstname',
      '$Middlename',
      '$Lastname',
      '$Gender',
      '$DOB',
      '$Bloodgroup',
      '$Permanentaddress',
      '$PhoneNumber',
      '$Emailid',
      '$Fathername',
      '$FatherOccupation',
      '$FatherContactNumber',
      '$FatherMailid',
      '$Mothername',
      '$MotherOccupation',
      '$MotherContactNumber',
      '$MotherMailid',
      '$ReservationCategory'
)";

    if(mysqli_query($con,$sql)){
        //echo("$sql");
        echo("The data is inserted");
        http_response_code(201);
    }
    else{
        echo "$sql";
        http_response_code(422);
    }
}
