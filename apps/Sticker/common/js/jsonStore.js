


var collectionName='users';

/////////////////////////////////////////////////////////// JSONinit ////////////////////////////////////////////////////
	function JSONinit() {
		
		//Get values from the input fields
		var	username = 'root',
			password = '123456';

		//Create the optional options object passed to init
		var options = {};

		//Check if a username was passed
			options.username = username;
		//If if a password was passed
			options.password = password;
		

		//JSONStore collections metadata
		var collections = {};

		//Define the 'people' collection and list the search fields
		collections[collectionName] = {

			searchFields : {value: 'integer'},

		};

		
		//Initialize the people collection
		WL.JSONStore.init(collections, options)

		.then(function () {
			
			alert("Collection initialized");
		})

		.fail(function (errorObject) {
			alert(errorObject.msg);
		});
	}

/////////////////////////////////////////////////////////// JSONclose //////////////////////////////////////////////////
	//closeAll
function JSONclose () {

		WL.JSONStore.closeAll()

		.then(function () {
			alert('JSONStore closed');
		})

		.fail(function (errorObject) {
			alert(errorObject.msg);
		});
	}

//////////////////////////////////////////////////// JSONadd ////////////////////////////////////////////////////////


	//add
function JSONadd (value) {

		//Prepare the data object
		var data = {};

		//Check if an age was passed
			data.value = value;


		try	{
			//Call add on the JSONStore collection
			WL.JSONStore.get(collectionName).add(data)
			.then(function () {
				alert('Data added to the collection');
			})

			.fail(function (errorObject) {
				alert(errorObject.msg);
			});

			} catch (e) {
			alert('PERSISTENT_STORE_NOT_OPEN');
		}
		

	}

////////////////////////////////////////////////// JSONfind ////////////////////////////////////////////////////////

function JSONfind () {

	
		//Get value from the search field
		var limit = 10;

		//Create optional options object
		var options = {};

		//Check if limit was passed
		options.limit = limit;
		

		//Check if offset was passed

			//Alternative syntax:
			//WL.JSONStore.get(PEOPLE_COLLECTION_NAME).find({}, options)
			try {

			WL.JSONStore.get(collectionName).findAll(options)

			.then(function (res) {
				alert(res.length);
				alert(String(res[0].json.value));
			})

			.fail(function (errorObject) {
				alert(errorObject.msg);

			});


		} catch (e) {
			alert('PERSISTENT_STORE_NOT_OPEN');
		}

	}

//////////////////////////////////////////////////////JSONreplace//////////////////////////////////////////

//replace
	function JSONreplace(value) {

		//Get references to the input fields DOM elements
		
		var	id = 1;

		//Create the document object
		var doc = {
			_id : id,
			json : {}
		};

		doc.json.value = value;

		try {

			WL.JSONStore.get(collectionName).replace(doc)

			.then(function () {
				alert('Documents replaced');
			})

			.fail(function (errorObject) {
				alert(errorObject.msg);
			});

		} catch (e) {
			alert('PERSISTENT_STORE_NOT_OPEN');
		}
	}

	///////////////////////////////////////JSONremove////////////////////////////////////////////////
		//removeCollection
	function JSONremove() {

	try {

	WL.JSONStore.get(collectionName).removeCollection()

			.then(function () {
				alert('Removed all data in the collection');
			})

			.fail(function (errorObject) {
				alert(errorObject.msg);
			});

		} catch (e) {
			alert('PERSISTENT_STORE_NOT_OPEN');
		}
	}
