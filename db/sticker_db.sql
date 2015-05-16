-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: May 16, 2015 at 04:08 AM
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `album`
-- 


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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table `user`
-- 

INSERT INTO `user` VALUES (1, '1', 'sakndlk');

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
