<?php

// if you're planning to use the php-models class, you can put code below to the init.php file so this gets intiated globally
// connect the Model to the database
try {
	require_once ROOT_PATH.'/db.php';
} catch (Exception $ex) {
	$_db_error = $ex->getMessage();
	include_once '_database.php';
	exit;
}