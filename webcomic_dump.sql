-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: webcomic
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comic`
--

DROP TABLE IF EXISTS `comic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comic` (
  `precio` double NOT NULL,
  `stock` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `autor` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comic`
--

LOCK TABLES `comic` WRITE;
/*!40000 ALTER TABLE `comic` DISABLE KEYS */;
INSERT INTO `comic` VALUES (1000,10,8,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155245654_aot-1.jpg','Attack on Titan Vol.1'),(1000,8,9,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155282381_aot2.jpg','Attack on Titan Vol.2'),(1000,9,10,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155344533_aot3.jpg','Attack on Titan Vol.3'),(1000,11,11,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155401977_aot4.jpg','Attack on Titan Vol.4'),(1000,10,12,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155438300_aot5.jpg','Attack on Titan Vol.5'),(1000,7,14,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155618300_aot6.jpg','Attack on Titan Vol.6'),(1000,13,15,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155648693_aot7.jpg','Attack on Titan Vol.7'),(1000,10,16,'Hajime Isayama','Acción, fantasía oscura, drama post-apocalíptico','/imagenes/1731155705598_aot8.jpg','Attack on Titan Vol.8'),(1100,6,17,'Donny Cates','Superhero','/imagenes/1731155822878_KIB-1.jpg','Venom: King in Black'),(1100,5,18,'Donny Cates','Superhero','/imagenes/1731155940527_KIB-2.jpg','Venom King in Black 2'),(1100,5,19,'Donny Cates','Superhero','/imagenes/1731156382515_KIB-3.jpg','Venom: King in Black 3'),(1100,8,20,'Donny Cates','Superhero','/imagenes/1731156494003_KIB-4.jpg','Venom: King in Black 4'),(1100,9,21,'Donny Cates','Superhero','/imagenes/1731156570185_KIB-5.jpg','Venom: King in Black 5'),(1200,3,22,'Alan Moore','	Cómic de superhéroes,Thriller psicológico','/imagenes/1731156814824_killing-joke.jpg','Batman: The Killing Joke'),(1300,1,23,'Jeph Loeb','Accion','/imagenes/1731156952269_TLH-batman-1.jpg','Batman: The Long Halloween'),(900,15,24,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157051638_tokio-ghoul-1.jpg','Tokyo Ghoul Vol.1'),(900,10,25,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157089133_tokio-ghoul-2.jpg','Tokyo Ghoul Vol.2 '),(900,16,26,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157733761_tokio-ghoul-3.jpg','Tokyo Ghoul Vol.3'),(900,12,28,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731157896167_tokio-ghoul-4.jpg','Tokyo Ghoul Vol.4'),(900,7,29,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158009851_tokio-ghoul-5.jpg','Tokyo Ghoul Vol.5'),(900,9,30,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158051657_tokio-ghoul-6.jpg','Tokyo Ghoul Vol.6'),(900,9,31,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158109668_tokio-ghoul-7.jpg','Tokyo Ghoul Vol.7'),(900,6,32,'Sue Ishida','Fantasía oscura, horror, thriller​ acción, drama, romance','/imagenes/1731158306487_tokio-ghoul-8.jpg','Tokyo Ghoul Vol.8'),(1350,1,33,'Greg Pak, John Romita Sr','crossover ficcional','/imagenes/1731158466051_wwhulk.jpg','World War Hulk'),(1600,2,34,'J. M. DeMatteis y Mike Zeck','Accion, Cazeria','/imagenes/1731158608508_spider-kraven.jpg',' Amazing Spider-Man: Kraven\'s Last Hunt Novela'),(1000,14,35,'Dan Slott','SuperHero','/imagenes/1731158782440_supspider-1.jpg','The Superior Spider-Man'),(1000,8,37,'Dan Slott','SuperHero','/imagenes/1731159014294_supspider-2.jpg','The Superior Spider-Man 2'),(1000,10,38,'Dan Slott','SuperHero','/imagenes/1731159386522_supspider-3.jpg','The Superior Spider-Man 3'),(1000,6,41,'Dan Slott','SuperHero','/imagenes/1731162482414_supspider-4.jpg','The Superior Spider-Man 4'),(1000,13,42,'Dan Slott','SuperHero','/imagenes/1731162552639_supspider-5.jpg','The Superior Spider-Man 5'),(1000,13,43,'Dan Slott','SuperHero','/imagenes/1731162668538_supspider-6.jpg','The Superior Spider-Man 6'),(1000,10,44,'Dan Slott','SuperHero','/imagenes/1731162734419_supspider-7.jpg','The Superior Spider-Man 7'),(1000,8,45,'Dan Slott','SuperHero','/imagenes/1731162789247_supspider-8.jpg','The Superior Spider-Man 8');
/*!40000 ALTER TABLE `comic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `fecha_registro` date DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `calle` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `codigo_postal` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('2024-11-07',1,NULL,NULL,NULL,'admin@example.com','$2a$10$O.uaQvR4bPHC0rN8QpAG0u645UcUDvp99OIlGvnZPBjWHUDaP0Ddu','ADMIN','admin'),('2024-11-07',2,'calahorra','Madrid','28032','james200327@gmail.com','$2a$10$mgBeZ9TolZRUX0IWcAqsAuwdaZ.I3K1w3jtYvkZvNdbsTZk.GY/Nq','USER','james'),('2024-11-09',3,'Calahorra','Madrid','28032','johan2003@gmail.com','$2a$10$7Jh5n8hyIa.RhGfnm9rLnuEPIQebTr1ohEONMA2Xh2G6mST8v5eWW','USER','Johan');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-09 15:51:09
