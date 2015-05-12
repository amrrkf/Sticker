var key='userKey';
user='null';

//open the cache to write in
function openCache(){
WL.EncryptedCache.open(key, true, onOpenComplete, onOpenError);
}
function onOpenComplete(status){
alert("Encrypted cache successfully opened");
}
function onOpenError(status){

}


//write in the cache a specific value
function writeCache(value){
WL.EncryptedCache.write(key, value, onWriteSuccess, onWriteFailure);
}

function onWriteSuccess(status){
alert("Successfully encrypted into cache.");
}
function onWriteFailure(status){
if (status == WL.EncryptedCache.ERROR_EOC_CLOSED)
alert("cache closed. error code= " + status);
}

//read the cached value
function readCache(){
WL.EncryptedCache.read(key, onReadSuccess, onReadFailure);
}

function onReadSuccess(value){
user=value;
}
function onReadFailure(status){
user='null';
}


//remove cache
function removeCache(){
WL.EncryptedCache.remove(key, onRemoveSuccess, onRemoveFailure);
}

function onRemoveSuccess(status){
alert("Successfully removed from cache.");
}
function onRemoveFailure(status){
alert("Encrypted cache closed, remove failed");
}


//get the current logged in user
function getActiveUser(){
openCache();
readCache();
return user;
}
