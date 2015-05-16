/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */

// check for user cardenalities, if exist return user id, else return null -- done
var loginStatement = WL.Server.createSQLStatement("SELECT userId FROM user WHERE email = (?) and password = (?) ;");
function login(email,password) {
	//check the logged in user in the DB and return userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : loginStatement,
		parameters : [email,password]
	});
}

// return userid from a given email -- done
var getUserIdStatement = WL.Server.createSQLStatement("SELECT userId FROM user WHERE email = (?);");
function getUserId(email){
	// get the Id of a user with specified email
	return WL.Server.invokeSQLStatement({
		preparedStatement : getUserIdStatement,
		parameters : [email]
	});	
}

// return all sticks assigend to a single user. -- done
var getUserSticksStatement = WL.Server.createSQLStatement("SELECT * FROM stick WHERE userid = (?);");
function getUserSticks(userId) {
	//get all the sticks of the user by userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getUserSticksStatement,
		parameters : [userId]
	});
}
// return all albums related to a single user -- done
var getUserAlbumsStatement = WL.Server.createSQLStatement("SELECT * FROM album WHERE userid = (?);");
function getUserAlbums(userId) {
	//get all the albums of the user by userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getUserAlbumsStatement,
		parameters : [userId]
	});
}

// return sticks related to user/album from usa -- done
var getUserAlbumSticksStatement = WL.Server.createSQLStatement("SELECT * FROM stick WHERE stickId IN ( SELECT stickId FROM usa WHERE userId = (?) and albumId = (?) );");
function getUserAlbumSticks(userId,albumId) {
	//get all the sticks in the album specified by albumID of the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getUserAlbumSticksStatement,
		parameters : [userId,albumId]
	});
}

// insert a user and email into DB, creating new user -- done
var signupStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function signup(email,password) {
	//add a new user to the DB
	return WL.Server.invokeSQLStatement({
		preparedStatement : signupStatement,
		parameters : [email,password]
	});
}

// inserts a new stick into table,
// a stickid isn't given to stickid, as it's auto incremented. -- done
var addStickStatement = WL.Server.createSQLStatement("INSERT INTO stick (userId, stickTitle, stickImage, stickTime, stickLocation, stickInfo)	VALUES (?,?,?,?,?,?);");
function addStick(userId, stickTitle, stickImage, stickTime, stickLocation, stickInfo) {
	//add a new stick to the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStickStatement,
		parameters : [userId, stickTitle, stickImage, stickTime, stickLocation, stickInfo]
	});
}

// inserts a new album in the DB -- done
var addAlbumStatement = WL.Server.createSQLStatement("INSERT INTO album (userId, albumTitle, albumInfo)	VALUES (?,?,?);");
function addAlbum(userId, albumTitle, albumInfo) {
	//add a new album to the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : addAlbumStatement,
		parameters : [userId, albumTitle, albumInfo]
	});
}


// done
var getAlbumsStatement = WL.Server.createSQLStatement("SELECT albumTitle, albumInfo FROM album WHERE userId = (?) and albumId = (?);");
function getAlbums(userId, albumId) {
	//add a new album to the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getAlbumsStatement,
		parameters : [userId, albumId]
	});
}


// done
var getStickStatement = WL.Server.createSQLStatement("SELECT * FROM stick WHERE userId = (?) and stickId = (?);");
function getStick(userId, stickId) {
	//get stick by stickId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getStickStatement,
		parameters : [userId, stickId]
	});
}

// updates user's password -- done
var updateUserStatement = WL.Server.createSQLStatement("UPDATE user SET password = (?) WHERE userId = (?);");
function updateUser(userId,password) {
	//update the user userId with a new password
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateUserStatement,
		parameters : [password,userId]
	});
}

// updates a stick due its id .. change some variables -- done
var updateStickStatement = WL.Server.createSQLStatement("UPDATE stick SET stickTitle = (?), stickImage = (?), stickInfo = (?)  WHERE stickId = (?);");
function updateStick(stickId, stickTitle, stickImage, stickInfo) {
	//update a stick specified by stickId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStickStatement,
		parameters : [stickTitle, stickImage, stickInfo, stickId]
	});
}

// updates an album due to its id .. change some variables -- done
var updateAlbumStatement = WL.Server.createSQLStatement("UPDATE album SET albumTitle = (?), albumInfo = (?) WHERE albumId = (?);");
function updateAlbum(albumId, albumTitle, albumInfo) {
	//update an album specified by albumId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateAlbumStatement,
		parameters : [albumTitle, albumInfo, albumId]
	});
}

var updateUSAStatement = WL.Server.createSQLStatement("INSERT INTO usa (userId, albumId, stickId) VALUES(?,?,?);")
function updateUSA(userId, albumId, stickId) {
		return WL.Server.invokeSQLStatement({
			preparedStatement : updateUSAStatement,
			parameters : [userId, albumId, stickId]
		})
}

// deletes a stick due to its id and updates other tables -- done
var deleteStickStatement = WL.Server.createSQLStatement("DELETE FROM stick WHERE stickId = (?);");
function deleteStick(stickId) {
	//delete a stick specified by stickId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStickStatement,
		parameters : [stickId]
	});
}

// deletes an album due to its id and updates other tables -- done
var deleteAlbumStatement = WL.Server.createSQLStatement("DELETE FROM album WHERE albumId = (?);");
function deleteAlbum(albumId) {
	//delete an album specified by albumId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteAlbumStatement,
		parameters : [albumId]
	});
}

//delete from USA
var deleteUSAStatement = WL.Server.createSQLStatement("DELETE FROM usa WHERE userId = (?) and albumId = (?);");
function deleteUSA(userId,albumId) {
	//delete an entry from USA
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteUSAStatement,
		parameters : [userId,albumId]
	});
}

var forgotPasswordStatement = WL.Server.createSQLStatement("SELECT password,email FROM user WHERE email = (?);");
function forgotPassword(email) {
	//send a email to the email with its saved password
	return WL.Server.invokeSQLStatement({
		preparedStatement : forgotPasswordStatement,
		parameters : [email]
	});
}
