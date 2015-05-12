-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: May 12, 2015 at 12:19 AM
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
  `stickTitle` varchar(45) collate utf8_unicode_ci NOT NULL,
  `stickImage` varchar(45) collate utf8_unicode_ci default NULL,
  `stickTime` varchar(45) collate utf8_unicode_ci NOT NULL,
  `stickLocation` varchar(45) collate utf8_unicode_ci default 'unknown',
  `stickInfo` varchar(140) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`stickId`,`userId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `stick`
-- 


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
