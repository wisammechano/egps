<?php

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));

require_once(ROOT.DS.'conf'.DS.'config.php');

#$backupFile = DB_NAME.'_data'.date("-YmdHis").'.db';
#$command = 'mysqldump --opt -h'.DB_HOST.' -u'.DB_USER.' -p'.DB_PASSWORD.' '.DB_NAME.' no-data add-drop-table > '.$backupFile;
#system($command);

$backupFile = ROOT.DS.'tmp'.DS.'dbs'.DS.DB_NAME.date("-YmdHis").'.sql';
//echo $backupFile;
$command = 'mysqldump --opt -h'.DB_HOST.' -u '.DB_USER.' -p'.DB_PASSWORD.' '.DB_NAME.' > '.$backupFile;
echo $command;
system($command);

