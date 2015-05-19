-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: May 19, 2015 at 05:25 PM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Database: `sticker_db`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `album`
-- 

CREATE TABLE `album` (
  `albumId` int(11) NOT NULL auto_increment,
  `userId` int(11) NOT NULL,
  `albumTitle` varchar(45) collate utf8_unicode_ci NOT NULL,
  `albumInfo` varchar(140) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`albumId`,`userId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

-- 
-- Dumping data for table `album`
-- 

INSERT INTO `album` VALUES (7, 2, 'dsnlkandas', 'skdlnalksknklsa');
INSERT INTO `album` VALUES (8, 3, 'gsggrr', 'Cdssgt');
INSERT INTO `album` VALUES (9, 4, 'jfxd', 'Zgjhf');

-- --------------------------------------------------------

-- 
-- Table structure for table `stick`
-- 

CREATE TABLE `stick` (
  `stickId` int(11) NOT NULL auto_increment,
  `userId` int(11) NOT NULL,
  `stickTitle` varchar(140) collate utf8_unicode_ci NOT NULL,
  `stickImage` varchar(140) collate utf8_unicode_ci default NULL,
  `stickTime` varchar(140) collate utf8_unicode_ci NOT NULL,
  `stickLocation` varchar(140) collate utf8_unicode_ci default 'unknown',
  `stickInfo` varchar(140) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`stickId`,`userId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=55 ;

-- 
-- Dumping data for table `stick`
-- 

INSERT INTO `stick` VALUES (17, 1, 'Stick1', '', ' Fri May 15 2015 22:27:11', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Stick 1 Status');
INSERT INTO `stick` VALUES (18, 1, 'dajsdnjlsa', '', ' Sat May 16 2015 01:51:14', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'dnsalnldasknldnaskas');
INSERT INTO `stick` VALUES (19, 1, 'gsdvhugfd', '', ' Sat May 16 2015 02:41:57', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Eadfvutrgdsgh');
INSERT INTO `stick` VALUES (20, 1, 'yalahova', '1431737084762.jpg', ' Sat May 16 2015 02:44:26', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'El7');
INSERT INTO `stick` VALUES (21, 1, 'hshxijdd', '', ' Sat May 16 2015 02:46:00', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Noozy');
INSERT INTO `stick` VALUES (22, 1, 'stickroot', '', ' Sat May 16 2015 02:55:41', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Body 5neeeeeee2');
INSERT INTO `stick` VALUES (23, 1, 'beeb', '1431738156522.jpg', ' Sat May 16 2015 03:02:03', '', 'hobba');
INSERT INTO `stick` VALUES (24, 1, 'utdfhurd', '', ' Sat May 16 2015 03:02:49', '', 'gfddddfdfffrffffff');
INSERT INTO `stick` VALUES (25, 1, 'lgddjkvxfhjkkkkkkkk', '', ' Sat May 16 2015 03:03:06', '', 'gggggggggggfgffggggggg');
INSERT INTO `stick` VALUES (26, 1, 'booba', '1431743428227.jpg', ' Sat May 16 2015 04:29:40', '', 'yasser face');
INSERT INTO `stick` VALUES (27, 1, 'stick gdeeda', '20819', ' Sat May 16 2015 04:32:38', '', 'tooot');
INSERT INTO `stick` VALUES (30, 2, 'xbcjsajsdas', '', ' Sat May 16 2015 23:48:32', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'xxxxxxxxxxxxxxxxxxxxxxxx');
INSERT INTO `stick` VALUES (31, 3, 'new', '', ' Sun May 17 2015 20:59:42', '', 'Bta3');
INSERT INTO `stick` VALUES (33, 3, 'booby', '1431892084450.jpg', ' Sun May 17 2015 21:47:04', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Jsvsbdochdbdjcdjd');
INSERT INTO `stick` VALUES (42, 4, 'cfdfhsdfg', '', ' Mon May 18 2015 00:02:01', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Denormalizing');
INSERT INTO `stick` VALUES (43, 4, 'hsvsijxvsj', '', ' Mon May 18 2015 00:49:58', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Jsbsjh');
INSERT INTO `stick` VALUES (45, 4, 'jg', '1431903746964.jpg', ' Mon May 18 2015 01:02:05', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Fh');
INSERT INTO `stick` VALUES (46, 4, 'fh', '1431905385792.jpg', ' Mon May 18 2015 01:28:39', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Gur');
INSERT INTO `stick` VALUES (47, 4, 'ajs', '1431906372214.jpg', ' Mon May 18 2015 01:45:38', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Bahsiz');
INSERT INTO `stick` VALUES (49, 5, 'Eshta8l el7', '1431910743988.jpg', ' Mon May 18 2015 02:57:34', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'El7 :D');
INSERT INTO `stick` VALUES (50, 5, 'gxuyxhhd', '1431910812317.jpg', ' Mon May 18 2015 02:59:49', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Gxhhxjjxjx');
INSERT INTO `stick` VALUES (51, 4, 'fhhz', '1431983531832.jpg', ' Mon May 18 2015 23:11:43', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Dfhffg');
INSERT INTO `stick` VALUES (52, 4, 'ggdfhvv', '1432001119286.jpg', ' Tue May 19 2015 04:04:39', '  Al Qanater Al Khayreyah, Al Qalyubia Governorate, Egypt', 'Vxdghf');
INSERT INTO `stick` VALUES (53, 4, 'gdfjug', '1432002806089.jpg', ' Tue May 19 2015 04:32:15', '', 'vgcfjdffjdd');
INSERT INTO `stick` VALUES (54, 4, 'fxsdf', '1432011233107.jpg', ' Tue May 19 2015 06:52:51', '', 'dfghhdf');

-- --------------------------------------------------------

-- 
-- Table structure for table `usa`
-- 

CREATE TABLE `usa` (
  `userId` int(11) NOT NULL,
  `albumId` int(11) NOT NULL,
  `stickId` int(11) NOT NULL,
  PRIMARY KEY  (`userId`,`albumId`,`stickId`),
  KEY `albumId` (`albumId`),
  KEY `stickId` (`stickId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 
-- Dumping data for table `usa`
-- 

INSERT INTO `usa` VALUES (2, 7, 30);
INSERT INTO `usa` VALUES (3, 8, 31);
INSERT INTO `usa` VALUES (4, 9, 42);

-- --------------------------------------------------------

-- 
-- Table structure for table `user`
-- 

CREATE TABLE `user` (
  `userId` int(11) NOT NULL auto_increment,
  `email` varchar(45) collate utf8_unicode_ci NOT NULL,
  `password` varchar(45) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

-- 
-- Dumping data for table `user`
-- 

INSERT INTO `user` VALUES (1, '1', 'sakndlk');
INSERT INTO `user` VALUES (2, 'b@z.com', '12345678');
INSERT INTO `user` VALUES (3, 'abc@g.com', '55555555');
INSERT INTO `user` VALUES (4, 'feze@d.com', '12345678');
INSERT INTO `user` VALUES (5, 'boody@g.com', '11111111');
INSERT INTO `user` VALUES (6, 'w@s.com', '12345678');
INSERT INTO `user` VALUES (7, 'a@z.com', '11111111');
INSERT INTO `user` VALUES (8, 'a@l.com', '12345678');
INSERT INTO `user` VALUES (9, 'f@n.com', '12345678');

-- 
-- Constraints for dumped tables
-- 

-- 
-- Constraints for table `album`
-- 
ALTER TABLE `album`
  ADD CONSTRAINT `album_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- 
-- Constraints for table `stick`
-- 
ALTER TABLE `stick`
  ADD CONSTRAINT `stick_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- 
-- Constraints for table `usa`
-- 
ALTER TABLE `usa`
  ADD CONSTRAINT `usa_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usa_ibfk_2` FOREIGN KEY (`albumId`) REFERENCES `album` (`albumId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usa_ibfk_3` FOREIGN KEY (`stickId`) REFERENCES `stick` (`stickId`) ON DELETE CASCADE ON UPDATE CASCADE;
