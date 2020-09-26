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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_title` varchar(100) NOT NULL,
  `artist` varchar(100) NOT NULL,
  `date_completed` varchar(10) DEFAULT NULL,
  `image_contributor` varchar(100) NOT NULL,
  `image_category` varchar(50) NOT NULL,
  `image_path` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (0,'A Tent in the Rockies','John Singer Sargent','1916','Isabella Stewart Gardner Museum','','/images/1.png','2020-08-01 03:51:36'),(1,'El Jaleo','John Singer Sargent','1882','Isabella Stewart Gardner Museum','','/images/2.png','2020-08-01 03:51:41'),(2,'Nocturne, Blue and Silver: Battersea Reach','James McNeil Whistler','1916','Isabella Stewart Gardner Museum','','/images/3.png','2020-08-01 03:51:51'),(3,'YoYo Falls','John Singer Sargent','1916','Isabella Stewart Gardner Museum','','/images/4.png','2020-08-01 03:51:59'),(4,'Scenes from the Tale of Genji','Kano Tsunenobu','1677','','','/images/5.png','2020-08-01 03:52:05'),(5,'Porpoises','Charles Herbert Woodbury','1916','Isabella Stewart Gardner Museum','','/images/6.png','2020-08-01 03:52:10'),(6,'The Lido','Paul H. Tilton','1894','Isabella Stewart Gardner Museum','','/images/7.png','2020-08-01 03:52:15'),(7,'The Terrace, St. Tropez','Henri Matisse','1904','Isabella Stewart Gardner Museum','','/images/8.png','2020-08-01 03:52:24');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-18  0:53:51
