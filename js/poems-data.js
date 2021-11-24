

//This JS file contains an array of information on the poet, their poem and associated assets such as author photo, and uses this to build a series of Poem() objects that are then called by the main JS file to populate the interface (see index.js).

function Poem(data) {
	this.poemID = data.poem_id;
	this.location = data.location;
	this.artwork = data.artwork;
	this.image = data.image;
	this.copyright = data.copyright;
	this.poetFirstname = data.poet_firstname;
	this.poetLastname = data.poet_lastname;
	this.poetBio = data.poet_bio;
	this.poemTitle = data.poem_title;
	this.poemText = data.poem_text;
	this.audioSource = data.audio_source;
}

// This is an example of the data array, containing two dummy entries
poems_data = [
	{
		"poem_id" : "Hatton_1",
		"location" : "Hatton Art Gallery",
		"artwork" : "Bridge",
		"image" : "bridge.jpg",
		"copyright" : "&copy; Sean Scully, <em>Bridge</em>, 1970. Acrylic on canvas, 274.3 x 182.9 cm / 108 x 72 inches. Private collection",
		"poet_firstname" : "Joe",
		"poet_lastname" : "Smith",
		"poet_bio" : "<p>Some information about Joe</p>",
		"poet_photo": "joe.jpg",
		"poem_title" : "Joe's Poem",
		"poem_text" : "<p>Joe's poem</p><p>goes here!</p>",
		"audio_source" : "joe-reading.mp3"
	},
	{
		"poem_id" : "Hatton_2",
		"location" : "Hatton Art Gallery",
		"artwork" : "Soft Ending",
		"image" : "soft-ending.jpg",
		"copyright" : "&copy; Sean Scully, <em>Soft Ending</em>, 1969.  Acrylic on canvas, 226.1 x 226.1 cm / 89 x 89 inches. Private collection",
		"poet_firstname" : "Sally",
		"poet_lastname" : "Brown",
		"poet_bio" : "<p>Some information about Sally</p>",
		"poet_photo": "sally.jpg",
		"poem_title" : "Sally's Poem",
		"poem_text" : "<p>Sally's poem</p><p>goes here!</p>",
		"audio_source" : "sally-reading.mp3"
	}
];


//Using eval to construct Poem objects named after the poem_id property of each object in poems_data 
//e.g. Hatton_1 = new Poem(poems_data[0]);
for (i = 0; i < poems_data.length; i++) {
	eval(poems_data[i].poem_id + "= new Poem(poems_data[" + i + "]);" );
};
