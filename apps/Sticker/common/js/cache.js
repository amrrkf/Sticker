user=null;

//open the cache to write in
function openCache(){
var key='userKey';
WL.EncryptedCache.open(key,true, onOpenComplete, onOpenError);

}
function onOpenComplete(status){
alert("Encrypted cache successfully opened");
//WL.Toast.show("Encrypted cache successfully opened");
}
function onOpenError(status){
switch(status){
case WL.EncryptedCache.ERROR_KEY_CREATION_IN_PROGRESS:
alert("ERROR: KEY CREATION IN PROGRESS");
//WL.Toast.show("ERROR: KEY CREATION IN PROGRESS");
break;
case WL.EncryptedCache.ERROR_LOCAL_STORAGE_NOT_SUPPORTED:
alert("ERROR: LOCAL STORAGE NOT SUPPORTED");
//WL.Toast.show("ERROR: LOCAL STORAGE NOT SUPPORTED");
break;
case WL.EncryptedCache.ERROR_NO_EOC:
alert("ERROR: NO EOC");
//WL.Toast.show("ERROR: NO EOC");
break;
case WL.EncryptedCache.ERROR_COULD_NOT_GENERATE_KEY:
alert("ERROR: COULD NOT GENERATE KEY");
//WL.Toast.show("ERROR: COULD NOT GENERATE KEY");
break;
case WL.EncryptedCache.ERROR_CREDENTIALS_MISMATCH:
alert("ERROR: CREDENTIALS MISMATCH");
//WL.Toast.show("ERROR: CREDENTIALS MISMATCH");
break;
}
}


//write in the cache a specific value
function writeCache(value){
var key='userKey';
WL.EncryptedCache.write(key, value, onWriteSuccess, onWriteFailure);
}

function onWriteSuccess(status){
alert("Successfully encrypted into cache.");
//WL.Toast.show("Successfully encrypted into cache.");
}
function onWriteFailure(status){
alert("cache closed. error code= " + status);
//WL.Toast.show("cache closed. error code= " + status);
}

//read the cached value
function readCache(){
var key='userKey';
WL.EncryptedCache.read(key, onReadSuccess, onReadFailure);
}

function onReadSuccess(value){
user=value;
}
function onReadFailure(status){
user=null;
}


//remove cache
function removeCache(){
var key='userKey';
WL.EncryptedCache.remove(key, onRemoveSuccess, onRemoveFailure);
}

function onRemoveSuccess(status){
alert("Successfully removed from cache.");
//WL.Toast.show("Successfully removed from cache.");
}
function onRemoveFailure(status){
alert("Encrypted cache closed, remove failed");
//WL.Toast.show("Encrypted cache closed, remove failed");
}

//close cache
function closeCache(){
	WL.EncryptedCache.close(onCloseCompleteHandler,onCloseFailureHandler);
}

function onCloseCompleteHandler(status){
alert("Encrypted cache closed successfully");
//WL.Toast.show("Encrypted cache closed successfully");
}
function onCloseFailureHandler(status){
alert("Could not close Encrypted cache");
//WL.Toast.show("Could not close Encrypted cache");
}

function destroyCache(){
WL.EncryptedCache.destroy(onDestroyCompleteHandler,
onDestroyErrorHandler)
}
function onDestroyCompleteHandler(status){
alert("Encrypted cache destroyed");
//WL.Toast.show("Encrypted cache destroyed");
}
function onDestroyErrorHandler(status){
alert("Error destroying Encrypted cache");
//WL.Toast.show("Error destroying Encrypted cache");
}

//get the current logged in user
function getActiveUser(){
closeCache();
openCache();
readCache();
closeCache();
return user;
}
