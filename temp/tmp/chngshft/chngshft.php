<?php
include_once './inc/db.inc.php';
$error='';
if(isset($_GET['term']))
{
	try
	{
		is_numeric($_REQUEST['term'])? $c='eid':$c='un'	;	
		
		$sql = 'SELECT id, un, eid
		FROM usr
		WHERE groupid < "5"
		AND ' . $c . ' LIKE :name;';
		$s = $pdo->prepare($sql);
		$s->bindValue(':name',  $_REQUEST['term'] . '%');
		$s->execute();
	}
	catch (PDOException $e)
	{
		$error = 'Error fetching names: ' . $e->getMessage();
		echo $error;//include 'error.html.php';
		exit();
	}
	$names=array();
	$i=0;
 	while($row=$s->fetch(PDO::FETCH_ASSOC))
	{
		$names[$i]['value'] = $row['id'];
		$names[$i]['label'] = $row['un'] ;//. '-' . $row['eid'];
		$names[$i]['desc'] = $row['eid'];
		$i++;
	}
	echo json_encode($names);
	exit();
}
if(isset($_POST['action']) and $_POST['action'] == 'Submit')
{
	$uid = intval($_POST['uid']);
	$sid = intval($_POST['sid']);
	$date = date_create($_POST['date']);
	$time = $_POST['time'];
	$err=valid_chng($uid,$sid,$date,$time) ;
	if($err=='')
	{
		try
		{
			$sql = 'INSERT INTO chngshft
			(appid, subid, date, time)
			VALUES (:uid, :sid, :date, :time);';
			$s = $pdo->prepare($sql);
			$s->bindValue(':uid', $uid);
			$s->bindValue(':sid', $sid);
			$s->bindValue(':date', date_format($date, 'd-m-Y'));
			$s->bindValue(':time', $time);
			$s->execute();
		}
		catch (PDOException $e)
		{
			$error = 'Error fetching names: ' . $e->getMessage();
			echo $error;//include 'error.html.php';
			exit();
		}
		echo 'Change Shift Submitted Successfully';
	}
	else echo $err;
}

function valid_chng($u,$s,$d,$t)
{
	global $pdo;
	global $error;
	//Applicant has shift that day?
	{
	try
	{
		$sql = 'SELECT groupid, name, refdate
		FROM usr INNER JOIN groups
		ON groups.id = groupid
		WHERE usr.id = :uid ;';
		$st = $pdo->prepare($sql);
		$st->bindValue(':uid',  $u, PDO::PARAM_INT);
		$st->execute();
	}
	catch (PDOException $e)
	{
		$error = 'Error fetching names: ' . $e->getMessage();
		echo $error;//include 'error.html.php';
		exit();
	}
	$row=$st->fetch(PDO::FETCH_ASSOC);
	$refDate = date_create($row['refdate']);
	$interval = $refDate->diff($d);
	$diff = intval($interval->format('%a'));
	switch ($diff % 8) {
/*     case 0:
        $error='This Date is you\'re 1st day shift';
        break;
    case 1:
        $error='This Date is you\'re 2nd day shift';
        break;
    case 2:
        $error='This Date is you\'re 1st night shift';
        break;
    case 3:
        $error='This Date is you\'re 2nd night shift';
        break;  */
    case 4:
        return $error='This Date is you\'re 1st OFF';
        break;
    case 5:
        return $error='This Date is you\'re 2nd OFF';
        break;
    case 6:
        return $error='This Date is you\'re 3rd OFF';
        break;
    case 7:
        return $error='This Date is you\'re 4th OFF';
        break;

    default:
        $error='';
	}
	}	

	//User Free That Day?
	{
	//Has Duty?
	{
	try
	{
		$sql = 'SELECT refdate
		FROM usr INNER JOIN groups
		ON groups.id = groupid
		WHERE usr.id = :uid ;';
		$st = $pdo->prepare($sql);
		$st->bindValue(':uid',  $s, PDO::PARAM_INT);
		$st->execute();
	}
	catch (PDOException $e)
	{
		$error = 'Error fetching names: ' . $e->getMessage();
		echo $error;//include 'error.html.php';
		exit();
	}
	
	$row=$st->fetch(PDO::FETCH_ASSOC);
	$refDate = date_create($row['refdate']);
	$interval = $refDate->diff($d);
	$diff = intval($interval->format('%a'));
	
	switch ($diff % 8) {
    case 0:
        return $error='This Date is his 1st day shift';
        break;
    case 1:
        return $error='This Date is his 2nd day shift';
        break;
    case 2:
        return $error='This Date is his 1st night shift';
        break;
    case 3:
        return $error='This Date is his 2nd night shift';
        break; 
	case 4:
		if($t=='d'){ return $error='He Has Just gone back from a night shift!' ;}
		break;
	case 7:
		if($t=='n') {return $error='He has a day shift next day!';}
		break;
	default:
        $error='';
	}	
	}

	//Has ChangeShift?
	{
	try
	{
		$sql = 'SELECT id, appid, subid, date, time
		FROM chngshft
		WHERE subid = :sid
		AND date LIKE :date
		AND time LIKE :time
		AND usrApprov != 1;';
		$st = $pdo->prepare($sql);
		$st->bindValue(':sid',  $s, PDO::PARAM_INT);
		$st->bindValue(':date', date_format($d, 'd-m-Y'));
		$st->bindValue(':time', $t);
		$st->execute();
	}
	catch (PDOException $e)
	{
		$error = 'Error fetching names: ' . $e->getMessage();
		echo $error;//include 'error.html.php';
		exit();
	}
	if($st->rowCount() > 0) return $error='has change shift on that day!';
	}
	}
	
}

?>