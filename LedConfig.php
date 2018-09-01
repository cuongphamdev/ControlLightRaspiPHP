<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta name="viewport" content="width=device-width" />
	<title>KeyBoard Team - SmartHouse Project</title>
</head>
<body>
	<?php
        	$lights = array(17,18,22,23);
	
		if(isset($_POST['on'])) {
			if ($_POST['on'] != -1 && $_POST['on'] != -2) {
				$setmode = shell_exec("/usr/local/bin/gpio -g mode ".$_POST['on']." out");
	        	$gpio_on = shell_exec("/usr/local/bin/gpio -g write ".$_POST['on']." 0");
	        	echo "The light ".$_POST['on']." is on";
			}else if($_POST['on'] == -1) {
				for($i = 0; $i < count($lights); $i++) {
				$setmode = shell_exec("/usr/local/bin/gpio -g mode ".$lights[$i]." out");
	        	        $gpio_on = shell_exec("/usr/local/bin/gpio -g write ".$lights[$i]." 0");
			}
	        	echo "All lights have on";
			}
		}
		
		if(isset($_POST['off'])) {
			if ($_POST['off'] != -1 && $_POST['off'] != -2) {
				$setmode = shell_exec("/usr/local/bin/gpio -g mode ".$_POST['off']." out");
	        	$gpio_on = shell_exec("/usr/local/bin/gpio -g write ".$_POST['off']." 0");
	        	echo "The light ".$_POST['off']." is off";
			}else if($_POST['off'] == -1) {
				for($i = 0; $i < count($lights); $i++) {
				$setmode = shell_exec("/usr/local/bin/gpio -g mode ".$lights[$i]." out");
	        	        $gpio_off = shell_exec("/usr/local/bin/gpio -g write ".$lights[$i]." 0");
			}
	        	echo "All lights have off";
			}
        }
        ?>
</body>
</html>