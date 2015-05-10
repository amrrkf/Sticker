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

var loginStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (email,password);");
function login(email,password) {
	//check the logged in user in the DB and return userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : loginStatement,
		parameters : [email,password]
	});
}

var getUserSticksStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (email,password);");
function getUserSticks(userId) {
	//get all the sticks of the user by userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getUserSticksStatement,
		parameters : [userId]
	});
}

var getUserAlbumsStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (email,password);");
function getUserAlbums(userId) {
	//get all the albums of the user by userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getUserAlbumsStatement,
		parameters : [userId]
	});
}

var getUserAlbumSticksStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (email,password);");
function getUserAlbumSticks(userId,albumId) {
	//get all the sticks in the album specified by albumID of the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : getUserAlbumSticksStatement,
		parameters : [userId,albumId]
	});
}


var signupStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function signup(email,password) {
	//add a new user to the DB
	return WL.Server.invokeSQLStatement({
		preparedStatement : signupStatement,
		parameters : [email,password]
	});
}

var addStickStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function addStick(userId,stick) {
	//add a new stick to the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStickStatement,
		parameters : [userId,stick]
	});
}

var addAlbumStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function addAlbum(userId,album) {
	//add a new album to the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : addAlbumStatement,
		parameters : [userId,album]
	});
}

var updateUserStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function updateUser(userId,password) {
	//update the user userId with a new password
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateUserStatement,
		parameters : [userId,password]
	});
}

var updateStickStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function updateStick(userId,stickId,stick) {
	//update a stick specified by stickId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStickStatement,
		parameters : [userId,stickId,stick]
	});
}

var updateAlbumStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function updateAlbum(userId,albumId,album) {
	//update an album specified by albumId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateAlbumStatement,
		parameters : [userId,albumId,album]
	});
}

var deleteStickStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function deleteStick(userId,stickId) {
	//delete a stick specified by stickId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStickStatement,
		parameters : [userId,stickId]
	});
}

var deleteAlbumStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function deleteAlbum(userId,albumId) {
	//delete an album specified by albumId for the user userId
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteAlbumStatement,
		parameters : [userId,albumId]
	});
}

var forgotPasswordStatement = WL.Server.createSQLStatement("INSERT INTO user (email, password)	VALUES (?,?);");
function forgotPassword(email) {
	//send a email to the email with its saved password
	return WL.Server.invokeSQLStatement({
		preparedStatement : forgotPasswordStatement,
		parameters : [email]
	});
}
