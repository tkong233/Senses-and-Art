CREATE DATABASE  IF NOT EXISTS `senses_and_art` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `senses_and_art`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: senses_and_art
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `song_id` int NOT NULL AUTO_INCREMENT,
  `song_title` varchar(100) NOT NULL,
  `song_performer` varchar(100) DEFAULT NULL,
  `song_composer` varchar(100) DEFAULT NULL,
  `song_instrument` varchar(100) DEFAULT NULL,
  `song_contributor` varchar(100) DEFAULT NULL,
  `song_path` varchar(300) NOT NULL,
  PRIMARY KEY (`song_id`),
  UNIQUE KEY `song_title` (`song_title`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'Air on the G String','','Johann Sebastian Bach','Flute, Harpsichord','Isabella Stewart Gardner Museum','/songs/Air on the G String.mp3'),(2,'Alone','Tomas Vallejo','Tomas Vallejo','Guitar','Tomas Vallejo','/songs/Alone.wav'),(3,'Amazing Grace','David Deveau, Richard Stoltzman','John Newton','Clarinet, Piano','Isabella Stewart Gardner Museum','/songs/Amazing Grace.mp3'),(4,'Ancient Battle Field','Yang Wei','Various','Pipa','Isabella Stewart Gardner Museum','/songs/Ancient Battle Field.mp3'),(5,'Arabeske for Piano in C Major, Op. 18','Robert Shumann','Various','Pipa','Isabella Stewart Gardner Museum','/songs/Arasbeske for Piano in C Major.mp3'),(6,'Aria Fantasy for Piano Quartet','Musicians from Ravinia s Steans Institute','David Ludwig','Pianos','Isabella Stewart Gardner Museum','/songs/Aria Fantasy for Piano Quartet.mp3'),(8,'Auf Dem Wasser Zu Singen - Piano Transcription of Schubert s Song','Alexander Ghindin','Franz Liszt','Piano','Isabella Stewart Gardner Museum','/songs/Auf Dem Wasser Du Singen.mp3'),(9,'Ballade','Catrin Finch','Carlos Salzedo','Harp','Isabella Stewart Gardner Museum','/songs/Ballade by Carlos Salzedo.mp3'),(10,'Chanson de Bilitis','Mariko Anraku and Paula Robison','Claude Debussy','Flute, Harp','Isabella Stewart Gardner Museum','/songs/Chanson de Bilitis.mp3'),(11,'Concerto in F Major BWV 1057','Gardner Chamber Orchestra with Paula Robison','Johann Sebastian Bach','Harpsichord, Orchestra','Isabella Stewart Gardner Museum','/songs/Concerto in F Major BWV 1057.mp3'),(12,'East Meets West Via Double Bass','DaXun Zhang and Yang Wei','Various','Double Bass, Pipa','Isabella Stewart Gardner Museum','/songs/East Meets West.mp3'),(13,'Her','Tomas Vallejo','Tomas Vallejo','Guitar','Tomas Vallejo','/songs/Her.wav'),(14,'Lark Song','Irina Nuzova and Wendy Warner','Johannes Brahms','Strings','Isabella Stewart Gardner Museum','/songs/Lark Song.mp3'),(15,'Melodie Op. 42, No. 3','Narek Hakhnazaryan and Noreen Polera','Pyotr Ilych Tchaikovsky','Cello, Piano','Isabella Stewart Gardner Museum','/songs/Melodie Op. 42 No. 3.mp3'),(16,'A Swedish Set','A Far Cry (chamber orchestra)','Mikael and Mia Marin, arr. Eric Higgins','Strings','Isabella Stewart Gardner Museum','/songs/A Swedish Set.mp3');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-18  0:53:52
