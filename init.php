<?php

// the main entry point for your web content
// note that this is not required on utils and api php scripts

chdir(__DIR__);
require_once '../const.php';

// initialize composer
$autoload_file = ROOT_PATH.'/vendor/autoload.php';
if (!file_exists($autoload_file)) {
	include_once '_install.php';
	exit;
}
// check folder permissions
if (!is_writable(ROOT_PATH)) {
	include_once '_permissions.php';
	exit;
}

require_once ROOT_PATH.'/root.php';
require_once 'init.ui.php';