-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.6.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `changeshifts`
--

DROP TABLE IF EXISTS `changeshifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `changeshifts`
--

LOCK TABLES `changeshifts` WRITE;
/*!40000 ALTER TABLE `changeshifts` DISABLE KEYS */;
INSERT INTO `changeshifts` VALUES (1,5,0,'0000-00-00',0,0,0,'2015-06-23 22:38:07'),(2,5,54,'0000-00-00',0,0,0,'2015-06-23 23:11:47');
/*!40000 ALTER TABLE `changeshifts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `head` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Operation - Combined Cycle',1510),(2,'Operation - Simple Cycle',1511),(3,'Operation - Switch Yard',1510),(4,'Operation - Chemical Dept.',1510),(5,'Maintenance',1510);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `refdate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Group A','2015-06-21'),(2,'Group B','2015-06-17'),(3,'Group C','2015-06-23'),(4,'Group D','2015-06-19'),(5,'Daily Group','0000-00-00');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `positions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `departmentid` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES (1,'CEO',0,1),(2,'Manager',0,2),(3,'Deputy Manager',0,3),(4,'Technical Manager',0,2),(5,'CCR Operator - S.C. Engineer',0,4),(6,'CCR Operator - Engineer',0,5),(7,'CCR Operator - Technician',0,8),(8,'Field Operator - Site S.V.',0,6),(9,'Field Operator - M. Engineer',0,6),(10,'Field Operator - E. Engineer',0,6),(11,'Field Operator - Technician',0,9),(12,'Switch Yard - E. Engineer',0,6),(13,'Chemist',0,7);
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'wisso.mechano','$2y$12$SolRqQz7p4p3XkqOceYw/uYfytlbToYOjlFm4C8XLyaKhGa1ZnXya',1510,'wisam.mae@gmail.com',1,9,1,'Wisam','Naji','1990-11-28','+9647702710512','IQ','Erbil, Bnaslawa','en-us','2015-07-01 21:47:21'),(2,'rizgar.ali','$2y$12$HPsP1rOl12g3/2DpHiFtieo0h1n755JSVxqt7JW3EQ5LK7wuS4aLe',1476,'rizgar_engineer91@yahoo.com',1,9,1,'Rizgar','Ali','1991-04-14','+9647504912902','IQ','Erbil, Kurdistan','en-us','2015-07-01 21:55:47'),(3,'eng.ali','$2y$12$tU3tjPQvlqEhMiPMlduC7eiK911cZzU5QCzbClcsziBx7U6IiGh4C',1337,'eng.alila@gmail.com',1,9,1,'Ali','Ismael','1989-05-25','+9647502134333','IQ','Erbil, Farmanbaran','en-us','2015-07-03 00:29:53'),(4,'ari.jamal','$2y$12$cw4gLWPK2ownRsytjzPHLOuQBXQd7O.S6mgIWVgoN6kEqJQGBnu1a',1493,'ari.jamal@yahoo.com',3,12,1,'Ari','Jamal','1991-04-04','+9647504917621','IQ','Erbil, Mardeen','en-us','2015-07-03 00:04:21'),(5,'ammarko','$2y$12$SqHt3NFDxMTQWk0PV4OfH.aK7vYmKTHBviG1sdrjlp/Zqatu.8fEK',1464,'ammar.n.shamel@gmail.com',4,13,5,'Ammar N.','Shamel','1983-10-21','+9647507293638','IQ','Erbil, Zanko','en-us','2015-07-07 07:38:10'),(6,'jwankar','$2y$12$Q72OMmZaOo64IhqqgtjLP.9s9KOINerC88VtY4QK9K63phkyfW4L2',1487,'jwankarchemist@yahoo.com',4,13,1,'Jwankar','Tawfeeq','1989-06-13','+9647504941885','IQ','Erbil, Bnaslawa','en-us','2015-07-03 00:01:10'),(7,'arash.azizi','$2y$12$cw4gLWPK2ownRsytjzPHLOuQBXQd7O.S6mgIWVgoN6kEqJQGBnu1a',1443,'arash.azizi@gmail.com',1,9,1,'Arash','Azizi','1982-06-21','+9647719249202','IR','West Azerbayejan, Sardasht, Piruzi St., Sepah Bank Alley, No. 789','en-us','2015-07-03 00:20:17');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zones`
--

DROP TABLE IF EXISTS `zones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `subsystems` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zones`
--

LOCK TABLES `zones` WRITE;
/*!40000 ALTER TABLE `zones` DISABLE KEYS */;
INSERT INTO `zones` VALUES (1,'Combined 1',0),(2,'Combined 2',0),(3,'Combined 3',0),(4,'GT 1-4',0),(5,'GT 5-8',0),(6,'Switch Gear',0),(7,'UEB 1-4',0),(8,'UEB 5-8',0),(9,'Switch Yard 1',0),(10,'Switch Yard 2',0),(11,'WTP',0);
/*!40000 ALTER TABLE `zones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-07-07 17:29:04
