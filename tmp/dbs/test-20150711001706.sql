-- Generation time: Sat, 11 Jul 2015 00:17:06 +0000
-- Host: localhost
-- DB name: test
/*!40030 SET NAMES UTF8 */;

DROP TABLE IF EXISTS `changeshifts`;
CREATE TABLE `changeshifts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` tinyint(1) NOT NULL DEFAULT '1',
  `subApprove` tinyint(1) NOT NULL DEFAULT '0',
  `managerApprove` tinyint(1) NOT NULL DEFAULT '0',
  `dateAdded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO `changeshifts` VALUES ('1','5','0','0000-00-00','0','0','0','2015-06-24 01:38:07'),
('2','5','54','0000-00-00','0','0','0','2015-06-24 02:11:47'); 


DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `head` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

INSERT INTO `departments` VALUES ('1','Operation - Combined Cycle','1510'),
('2','Operation - Simple Cycle','1511'),
('3','Operation - Switch Yard','1510'),
('4','Operation - Chemical Dept.','1510'),
('5','Maintenance','1510'); 


DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `refdate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

INSERT INTO `groups` VALUES ('1','Group A','2015-06-21'),
('2','Group B','2015-06-17'),
('3','Group C','2015-06-23'),
('4','Group D','2015-06-19'),
('5','Daily Group','0000-00-00'); 


DROP TABLE IF EXISTS `logsheets`;
CREATE TABLE `logsheets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemName` varchar(255) NOT NULL,
  `blocks` int(11) NOT NULL,
  `zoneID` int(11) NOT NULL,
  `subsystemsNo` int(11) NOT NULL,
  `data` mediumtext NOT NULL,
  `addedBy` int(11) NOT NULL,
  `added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

INSERT INTO `logsheets` VALUES ('1','HRSG #1','3','1','5','{\"Diverter Damper PLC\":{\"item\":[\"Diverter Damper Position\",\"Oil Accumulator Pressure\",\"Oil Tank Temperature\",\"Oil Level\",\"Seal Differential Pressure\",\"Alarm Status\"],\"tag\":[\"01MBR01AA001\",\"01MBR01CP103\",\"01MBR01CT101\",\"01MBR01CL001\",\"01MBR01CP101\",\"null\"],\"type\":[\"pos\",\"p\",\"t\",\"l\",\"p\",\"yesno\"],\"unit\":[\"%\",\"bar\",\"c\",\"%\",\"mbar\",\"Unitless\"],\"setpoint\":[\"null\",\"170\",\"null\",\"100\",\"null\",\"null\"],\"alarm\":[\"null\",\"155\",\"null\",\"10\",\"null\",\"null\"]},\"Preheater Pump 1\":{\"item\":[\"Discharge Pressure\",\"Oil Level\",\"Bypass Control Valve Position\",\"Outlet Water Temperature\",\"Recirculation Control Valve Position\"],\"tag\":[\"01HAA19CP500\",\"null\",\"01HAA09AA503\",\"01HAA09CT501\",\"01HAA09AA504\"],\"type\":[\"p\",\"l\",\"pos\",\"t\",\"pos\"],\"unit\":[\"bar\",\"%\",\"%\",\"c\",\"%\"],\"setpoint\":[\"null\",\"100\",\"null\",\"null\",\"null\"],\"alarm\":[\"null\",\"10\",\"null\",\"null\",\"null\"]},\"Preheater Pump 2\":{\"item\":[\"Discharge Pressure\",\"Oil Level\",\"Bypass Control Valve Position\",\"Outlet Water Temperature\",\"Recirculation Control Valve Position\"],\"tag\":[\"01HAA29CP500\",\"null\",\"01HAA09AA503\",\"01HAA09CT501\",\"01HAA09AA504\"],\"type\":[\"p\",\"l\",\"pos\",\"t\",\"pos\"],\"unit\":[\"bar\",\"%\",\"%\",\"c\",\"%\"],\"setpoint\":[\"null\",\"100\",\"null\",\"null\",\"null\"],\"alarm\":[\"null\",\"10\",\"null\",\"null\",\"null\"]},\"HP Drum\":{\"item\":[\"Pressure\",\"Temperature\",\"Level\"],\"tag\":[\"01HAD01CP500\",\"01HAD01CT500\",\"01HAD01CL501\"],\"type\":[\"p\",\"t\",\"l\"],\"unit\":[\"bar\",\"c\",\"mm\"],\"setpoint\":[\"null\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\"]},\"LP Drum\":{\"item\":[\"Pressure\",\"Temperature\",\"Level\"],\"tag\":[\"01HAD08CP500\",\"01HAD08CT500\",\"01HAD08CL501\"],\"type\":[\"p\",\"t\",\"l\"],\"unit\":[\"bar\",\"c\",\"%\"],\"setpoint\":[\"null\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\"]}}','1','2015-07-10 23:57:23'),
('2','Close Cooling Water','3','1','3','{\"Common\":{\"item\":[\"Expansion Tank Level\",\"Bundle Inlet Temperature\",\"Bundle Outlet Pressure\",\"Bundle Outlet Temperature\"],\"tag\":[\"10PGA00CL001\",\"10PGA00CT500\",\"10PGA00CP001\",\"10PGA00CT002\"],\"type\":[\"l\",\"t\",\"p\",\"t\"],\"unit\":[\"mm\",\"c\",\"bar\",\"c\"],\"setpoint\":[\"null\",\"null\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\",\"55\"]},\"Pump 1\":{\"item\":[\"Suction Pressure\",\"Discharge Pressure\",\"Oil Level\",\"Strainer Differential Pressure\"],\"tag\":[\"10PGA10CP701\",\"10PGA10CP702\",\"null\",\"10PGA10CP001\"],\"type\":[\"p\",\"p\",\"l\",\"p\"],\"unit\":[\"bar\",\"bar\",\"%\",\"bar\"],\"setpoint\":[\"null\",\"6.5\",\"100\",\"null\"],\"alarm\":[\"null\",\"8\",\"10\",\"null\"]},\"Pump 2\":{\"item\":[\"Suction Pressure\",\"Discharge Pressure\",\"Oil Level\",\"Strainer Differential Pressure\"],\"tag\":[\"10PGA20CP701\",\"10PGA20CP702\",\"null\",\"10PGA20CP001\"],\"type\":[\"p\",\"p\",\"l\",\"p\"],\"unit\":[\"bar\",\"bar\",\"%\",\"bar\"],\"setpoint\":[\"null\",\"6.5\",\"100\",\"null\"],\"alarm\":[\"null\",\"8\",\"10\",\"null\"]}}','1','2015-07-11 01:18:15'),
('3','Boiler Feed Pumps','3','1','6','{\"Pump 1\":{\"item\":[\"Suction Pressure\",\"LP Discharge\",\"HP Discharge\",\"Strainer Differential Pressure\",\"Motor Bearing Oil Level\",\"Oil Tank Temperature\",\"Oil Outlet Temperature\",\"Oil Tank Level\",\"Oil Filter Differential Pressure\",\"Oil Pump Output Pressure\"],\"tag\":[\"11LAC10CP201\",\"11LAC10CP202\",\"11LAC10CP203\",\"11LAB10CP001\",\"null\",\"11LAC10CT251\",\"11LAC10CT252\",\"11LAC10CL252\",\"11LAC10CP251\",\"11LAC10CP252\"],\"type\":[\"p\",\"p\",\"p\",\"dp\",\"l\",\"t\",\"t\",\"l\",\"dp\",\"p\"],\"unit\":[\"bar\",\"bar\",\"bar\",\"mbar\",\"%\",\"c\",\"c\",\"%\",\"bar\",\"bar\"],\"setpoint\":[\"null\",\"null\",\"null\",\"null\",\"100\",\"null\",\"null\",\"100\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\",\"null\",\"10\",\"null\",\"null\",\"10\",\"null\",\"null\"]},\"Pump 2\":{\"item\":[\"Suction Pressure\",\"LP Discharge\",\"HP Discharge\",\"Strainer Differential Pressure\",\"Motor Bearing Oil Level\",\"Oil Tank Temperature\",\"Oil Outlet Temperature\",\"Oil Tank Level\",\"Oil Filter Differential Pressure\",\"Oil Pump Output Pressure\"],\"tag\":[\"11LAC20CP201\",\"11LAC20CP202\",\"11LAC20CP203\",\"11LAB20CP001\",\"null\",\"11LAC20CT251\",\"11LAC20CT252\",\"11LAC20CL252\",\"11LAC20CP251\",\"11LAC20CP252\"],\"type\":[\"p\",\"p\",\"p\",\"dp\",\"l\",\"t\",\"t\",\"l\",\"dp\",\"p\"],\"unit\":[\"bar\",\"bar\",\"bar\",\"mbar\",\"%\",\"c\",\"c\",\"%\",\"bar\",\"bar\"],\"setpoint\":[\"null\",\"null\",\"null\",\"null\",\"100\",\"null\",\"null\",\"100\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\",\"null\",\"10\",\"null\",\"null\",\"10\",\"null\",\"null\"]},\"Pump 3\":{\"item\":[\"Suction Pressure\",\"LP Discharge\",\"HP Discharge\",\"Strainer Differential Pressure\",\"Motor Bearing Oil Level\",\"Oil Tank Temperature\",\"Oil Outlet Temperature\",\"Oil Tank Level\",\"Oil Filter Differential Pressure\",\"Oil Pump Output Pressure\"],\"tag\":[\"11LAC30CP201\",\"11LAC30CP202\",\"11LAC30CP203\",\"11LAB30CP001\",\"null\",\"11LAC30CT251\",\"11LAC30CT252\",\"11LAC30CL252\",\"11LAC30CP251\",\"11LAC30CP252\"],\"type\":[\"p\",\"p\",\"p\",\"dp\",\"l\",\"t\",\"t\",\"l\",\"dp\",\"p\"],\"unit\":[\"bar\",\"bar\",\"bar\",\"mbar\",\"%\",\"c\",\"c\",\"%\",\"bar\",\"bar\"],\"setpoint\":[\"null\",\"null\",\"null\",\"null\",\"100\",\"null\",\"null\",\"100\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\",\"null\",\"10\",\"null\",\"null\",\"10\",\"null\",\"null\"]},\"Pump 4\":{\"item\":[\"Suction Pressure\",\"LP Discharge\",\"HP Discharge\",\"Strainer Differential Pressure\",\"Motor Bearing Oil Level\",\"Oil Tank Temperature\",\"Oil Outlet Temperature\",\"Oil Tank Level\",\"Oil Filter Differential Pressure\",\"Oil Pump Output Pressure\"],\"tag\":[\"12LAC10CP201\",\"12LAC10CP202\",\"12LAC10CP203\",\"12LAB10CP001\",\"null\",\"12LAC10CT251\",\"12LAC10CT252\",\"12LAC10CL252\",\"12LAC10CP251\",\"12LAC10CP252\"],\"type\":[\"p\",\"p\",\"p\",\"dp\",\"l\",\"t\",\"t\",\"l\",\"dp\",\"p\"],\"unit\":[\"bar\",\"bar\",\"bar\",\"mbar\",\"%\",\"c\",\"c\",\"%\",\"bar\",\"bar\"],\"setpoint\":[\"null\",\"null\",\"null\",\"null\",\"100\",\"null\",\"null\",\"100\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\",\"null\",\"10\",\"null\",\"null\",\"10\",\"null\",\"null\"]},\"Pump 5\":{\"item\":[\"Suction Pressure\",\"LP Discharge\",\"HP Discharge\",\"Strainer Differential Pressure\",\"Motor Bearing Oil Level\",\"Oil Tank Temperature\",\"Oil Outlet Temperature\",\"Oil Tank Level\",\"Oil Filter Differential Pressure\",\"Oil Pump Output Pressure\"],\"tag\":[\"12LAC20CP201\",\"12LAC20CP202\",\"12LAC20CP203\",\"12LAB20CP001\",\"null\",\"12LAC20CT251\",\"12LAC20CT252\",\"12LAC20CL252\",\"12LAC20CP251\",\"12LAC20CP252\"],\"type\":[\"p\",\"p\",\"p\",\"dp\",\"l\",\"t\",\"t\",\"l\",\"dp\",\"p\"],\"unit\":[\"bar\",\"bar\",\"bar\",\"mbar\",\"%\",\"c\",\"c\",\"%\",\"bar\",\"bar\"],\"setpoint\":[\"null\",\"null\",\"null\",\"null\",\"100\",\"null\",\"null\",\"100\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\",\"null\",\"10\",\"null\",\"null\",\"10\",\"null\",\"null\"]},\"Pump 6\":{\"item\":[\"Suction Pressure\",\"LP Discharge\",\"HP Discharge\",\"Strainer Differential Pressure\",\"Motor Bearing Oil Level\",\"Oil Tank Temperature\",\"Oil Outlet Temperature\",\"Oil Tank Level\",\"Oil Filter Differential Pressure\",\"Oil Pump Output Pressure\"],\"tag\":[\"12LAC30CP201\",\"12LAC30CP202\",\"12LAC30CP203\",\"12LAB30CP001\",\"null\",\"12LAC30CT251\",\"12LAC30CT252\",\"12LAC30CL252\",\"12LAC30CP251\",\"12LAC30CP252\"],\"type\":[\"p\",\"p\",\"p\",\"dp\",\"l\",\"t\",\"t\",\"l\",\"dp\",\"p\"],\"unit\":[\"bar\",\"bar\",\"bar\",\"mbar\",\"%\",\"c\",\"c\",\"%\",\"bar\",\"bar\"],\"setpoint\":[\"null\",\"null\",\"null\",\"null\",\"100\",\"null\",\"null\",\"100\",\"null\",\"null\"],\"alarm\":[\"null\",\"null\",\"null\",\"null\",\"10\",\"null\",\"null\",\"10\",\"null\",\"null\"]}}','1','2015-07-11 02:24:31'); 


DROP TABLE IF EXISTS `positions`;
CREATE TABLE `positions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `departmentid` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

INSERT INTO `positions` VALUES ('1','CEO','0','1'),
('2','Manager','0','2'),
('3','Deputy Manager','0','3'),
('4','Technical Manager','0','2'),
('5','CCR Operator - S.C. Engineer','0','4'),
('6','CCR Operator - Engineer','0','5'),
('7','CCR Operator - Technician','0','8'),
('8','Field Operator - Site S.V.','0','6'),
('9','Field Operator - M. Engineer','0','6'),
('10','Field Operator - E. Engineer','0','6'),
('11','Field Operator - Technician','0','9'),
('12','Switch Yard - E. Engineer','0','6'),
('13','Chemist','0','7'); 


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `password` varchar(70) NOT NULL,
  `employmentid` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `departmentid` int(11) DEFAULT NULL,
  `positionid` int(11) DEFAULT NULL,
  `groupid` int(11) DEFAULT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `birthdate` date NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `country` varchar(5) NOT NULL,
  `address` varchar(255) NOT NULL,
  `lang` varchar(6) NOT NULL DEFAULT 'en-us',
  `added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`,`employmentid`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

INSERT INTO `users` VALUES ('1','wisso.mechano','$2y$12$SolRqQz7p4p3XkqOceYw/uYfytlbToYOjlFm4C8XLyaKhGa1ZnXya','1510','wisam.mae@gmail.com','1','9','1','Wisam','Naji','1990-11-28','+9647702710512','IQ','Erbil, Bnaslawa','en-us','2015-07-02 00:47:21'),
('2','rizgar.ali','$2y$12$HPsP1rOl12g3/2DpHiFtieo0h1n755JSVxqt7JW3EQ5LK7wuS4aLe','1476','rizgar_engineer91@yahoo.com','1','9','1','Rizgar','Ali','1991-04-14','+9647504912902','IQ','Erbil, Kurdistan','en-us','2015-07-02 00:55:47'),
('3','eng.ali','$2y$12$tU3tjPQvlqEhMiPMlduC7eiK911cZzU5QCzbClcsziBx7U6IiGh4C','1337','eng.alila@gmail.com','1','9','1','Ali','Ismael','1989-05-25','+9647502134333','IQ','Erbil, Farmanbaran','en-us','2015-07-03 03:29:53'),
('4','ari.jamal','$2y$12$cw4gLWPK2ownRsytjzPHLOuQBXQd7O.S6mgIWVgoN6kEqJQGBnu1a','1493','ari.jamal@yahoo.com','3','12','1','Ari','Jamal','1991-04-04','+9647504917621','IQ','Erbil, Mardeen','en-us','2015-07-03 03:04:21'),
('5','ammarko','$2y$12$SqHt3NFDxMTQWk0PV4OfH.aK7vYmKTHBviG1sdrjlp/Zqatu.8fEK','1464','ammar.n.shamel@gmail.com','4','13','5','Ammar N.','Shamel','1983-10-21','+9647507293638','IQ','Erbil, Zanko','en-us','2015-07-07 10:38:10'),
('6','jwankar','$2y$12$Q72OMmZaOo64IhqqgtjLP.9s9KOINerC88VtY4QK9K63phkyfW4L2','1487','jwankarchemist@yahoo.com','4','13','1','Jwankar','Tawfeeq','1989-06-13','+9647504941885','IQ','Erbil, Bnaslawa','en-us','2015-07-03 03:01:10'),
('7','arash.azizi','$2y$12$cw4gLWPK2ownRsytjzPHLOuQBXQd7O.S6mgIWVgoN6kEqJQGBnu1a','1443','arash.azizi@gmail.com','1','9','1','Arash','Azizi','1982-06-21','+9647719249202','IR','West Azerbayejan, Sardasht, Piruzi St., Sepah Bank Alley, No. 789','en-us','2015-07-03 03:20:17'); 


DROP TABLE IF EXISTS `zones`;
CREATE TABLE `zones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `subsystems` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

INSERT INTO `zones` VALUES ('1','Combined 1','0'),
('2','Combined 2','0'),
('3','Combined 3','0'),
('4','GT 1-4','0'),
('5','GT 5-8','0'),
('6','Switch Gear','0'),
('7','UEB 1-4','0'),
('8','UEB 5-8','0'),
('9','Switch Yard 1','0'),
('10','Switch Yard 2','0'),
('11','WTP','0'); 


