

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


poems_data = [
	{
		"poem_id" : "Hatton_1",
		"location" : "Hatton Art Gallery",
		"artwork" : "Bridge",
		"image" : "bridge.jpg",
		"copyright" : "&copy; Sean Scully, <em>Bridge</em>, 1970. Acrylic on canvas, 274.3 x 182.9 cm / 108 x 72 inches. Private collection",
		"poet_firstname" : "Imtiaz",
		"poet_lastname" : "Dharker",
		"poet_bio" : "<p>Imtiaz Dharker is a poet, artist and documentary film-maker. Awarded the Queen’s Gold Medal for Poetry in 2014, she has received the Cholmondley Award and an Honorary Doctorate from SOAS. Her collections include <em>Postcards from god</em>, <em>I speak for the devil</em>, <em>The terrorist at my table</em>, <em>Leaving Fingerprints</em>, <em>Over the Moon</em> and the latest, <em>Luck Is the Hook</em>, all published by Bloodaxe Books. She has had eleven solo exhibitions of drawings in India, London, New York and Hong Kong, and also scripts and directs video films, many of them for non-government organisations working in the area of shelter, education and health for women and children in India.</p>",
		"poet_photo": "dharker.jpg",
		"poem_title" : "Cross",
		"poem_text" : "<p class='note'>after Sean Scully, <em>Bridge</em></p><p>&nbsp;</p><p>&nbsp;</p><p>Stop in the space between criss and cross.</p><p>The North East light shears in</p><p>&nbsp;</p><p>and divides your face. Slices of sky and Tyne</p><p>fall through the angles cut out of time. </p><p>&nbsp;</p><p>And time looks like nothing, </p><p>from where you are, but a feat of engineering, 	</p><p>&nbsp;</p><p>riveted to the moon, held up by belief. </p><p>Lean in and the minutes flicker, seconds flare.</p><p>&nbsp;</p><p>A hum begins down in the girders and climbs up </p><p>the ribs like a thief, swings on horizontals, </p><p>&nbsp;</p><p>skims up verticals, steals all the stripes in the world </p><p>and wants more: the living thing that slithers between.</p><p>&nbsp;</p><p>It takes calligraphy off the wall of a mosque</p><p>and rewrites it as music; recalibrates the geometry</p><p>&nbsp;</p><p>of presence and loss. </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close your eyes. </p><p>&nbsp;</p><p>Behind the lids you still own the span of line on line </p><p>and time that stretches over a borderline. </p><p>&nbsp;</p><p>The dazzle of it. </p><p>Open your arms and run across.</p>",
		"audio_source" : "dharker.mp3"
	},
	{
		"poem_id" : "Hatton_2",
		"location" : "Hatton Art Gallery",
		"artwork" : "Soft Ending",
		"image" : "soft-ending.jpg",
		"copyright" : "&copy; Sean Scully, <em>Soft Ending</em>, 1969.  Acrylic on canvas, 226.1 x 226.1 cm / 89 x 89 inches. Private collection",
		"poet_firstname" : "Sasha",
		"poet_lastname" : "Dugdale",
		"poet_bio" : "<p>Sasha Dugdale is a poet, translator and editor. She has published four collections of poetry, most recently <em>Joy</em> (Carcanet, 2017) which was a PBS Choice. <em>Joy</em>’s title poem was the recipient of the Forward Prize for Best Single Poem in 2016. In the same year Sasha Dugdale received a Cholmondeley Award for her poetry. She has translated many Russian contemporary women poets, including Elena Shvarts, whose collection <em>Birdsong on the Seabed</em> (Bloodaxe, 2011), was a PBS Recommended Translation and shortlisted for the Popescu Prize. She is currently working on a collection of Maria Stepanova’s poems to be published by Bloodaxe in 2019. She was editor of <em>Modern Poetry in Translation</em> 2012-2017 and co-editor of the international anthology <em>Centres of Cataclysm</em> (Bloodaxe, 2016). She lives and works in Sussex.</p>",
		"poet_photo": "dugdale.jpg",
		"poem_title" : "Pigment",
		"poem_text" : "<p class='note'>after Sean Scully, <em>Soft Ending</em></p><p>&nbsp;</p><p class='note'><em>I always go to yellow to fight death</em> – Sean Scully</p><p>&nbsp;</p><p>&nbsp;</p><p>I always go to red to fight insomnia</p><p>and blue to fight addiction, and green</p><p>feeds my need for approval. But the semitones –</p><p>they get under my skin, the nipple pink of palimpsest</p><p>sage for the menopause, navy blue for rape</p><p>grey for greased rope and buttercream for infanticide</p><p>&nbsp;</p><p>the ochres give me a long history of antisemitism</p><p>and when they flare and crumble then I see battlefields</p><p>no, not red, but violet-black is the mortal colour</p><p>sparrow brown is the day dawning on the field</p><p>mint green beds the broken flints. I always go to</p><p>gold to feel disgust and desire: the desert road</p><p>planked with barracks is gold, mucus is dirt gold</p><p>corn is tooth gold, but scythed it yields to ash</p><p>&nbsp;</p><p>When a train passes I crouch down on the embankment</p><p>to watch the uniform black stars raining on the ballast</p><p>Fight exile with indigo, gauze white, and the maroon weal</p><p>of an old wound. When I go to yellow</p><p>it is the debased colour of survival, sulphurous,</p><p>bankrupt and sometimes tinged with a green</p><p>that borders on darkness. Darkness is a hymn</p><p>I go to when I wish to fight light, when</p><p>reasonable light shovels itself </p><p>brick red over all the cities and hills</p><p>and the clouds look like dust, which looks like</p><p>smoke</p>",
		"audio_source" : "dugdale.mp3"
	},
	{
		"poem_id" : "Hatton_3",
		"location" : "Hatton Art Gallery",
		"artwork" : "Cream Red Cream",
		"image" : "cream-red-cream.jpg",
		"copyright" : "&copy; Sean Scully, <em>Cream Red Cream</em>, 1973. Acrylic on canvas, 213.4 x 365.8 cm / 84 x 144 inches. Private collection",
		"poet_firstname" : "Luke",
		"poet_lastname" : "Kennard",
		"poet_bio" : "<p>Luke Kennard is a poet and writer of fiction who was born in Kingston Upon Thames in 1981 and grew up in Luton. He won an Eric Gregory Award from the Society of Authors in 2005 and his first collection of prose poems <em>The Solex Brothers</em> was published later that year by Stride. His second collection <em>The Harbour Beyond the Movie</em> was published by Salt in 2007 and was shortlisted for the Forward Prize for Best Collection, making him the youngest writer ever to be shortlisted. He has a PhD in English from the University of Exeter and lectures at the University of Birmingham. In 2014 he was named one of the Next Generation Poets by the Poetry Book Society in their once per-decade list. His fifth collection of poems, <em>Cain</em>, was published by Penned in the Margins in 2016 and selected as a book of the year by The Guardian and The Sunday Times and shortlisted for the 2017 International Dylan Thomas Prize. His first novel, <em>The Transition</em>, was published by 4th Estate in January 2017 and longlisted for the Desmond Elliott First Novel Award.</p>",
		"poet_photo": "kennard.jpg",
		"poem_title" : "Another Dream in Which I Turn Out to be the Monster",
		"poem_text" : "<p class='note'>after Sean Scully, <em>Cream Red Cream</em></p><p>&nbsp;</p><p>&nbsp;</p><p>It starts in a dark clearing,</p><p>upended cooking pot and hastily extinguished fire,</p><p>footfalls punch the soft earth.</p><p>Where is everyone?</p><p>I look down at my body. Oh. Ok.</p><p>I try to apologise but what comes out</p><p>are the fat clouds of a meteor, </p><p>the sound a hot air balloon makes </p><p>as it approaches something sharp.</p><p>&nbsp;</p><p>It starts with a toppled lectern,</p><p>swinging theatre door, guttering neon EXIT sign.</p><p>I shuffle my papers, clear my throat:</p><p>“How harmless I am,</p><p>and how guileless.</p><p>What an injustice to be treated so.</p><p>I can and will take anything I want.”</p><p>My vision serrates, I see the light</p><p>glance off a backrow blowdart.</p><p>&nbsp;</p><p>In Russia it goes better.</p><p>Long straight approaches of the mind.</p><p>They put a starchy blanket round my shoulders</p><p>embroidered with isometric streets.</p><p>They toss me a heel of bread.</p><p>‘In our city we have a saying,’ they tell me.</p><p>‘Monster at your table, angel in your soup.’</p><p>‘That’s beautiful,’ I try to say, </p><p>but it comes out as some toxic </p><p>sex vibe, the wave form of lust.</p><p>They run me through with a letter opener.</p>",
		"audio_source" : "kennard.mp3"
	},
	{
		"poem_id" : "Hatton_4",
		"location" : "Hatton Art Gallery",
		"artwork" : "Inset #2",
		"image" : "inset.jpg",
		"copyright" : "&copy; Sean Scully, <em>Inset #2</em>, 1973. Acrylic on canvas, 243.8 x 243.8 cm / 96 x 96 inches. Private collection",
		"poet_firstname" : "Sean",
		"poet_lastname" : "O'Brien",
		"poet_bio" : "<p>Sean O’Brien’s <em>Collected Poems</em> appeared in 2012. His work has received various awards including the T.S. Eliot, Forward and Roehampton Poetry prizes. In 2016 his second novel, <em>Once Again Assembled Here</em>, was published, as was a chapbook of poetry and photographs, <em>Hammersmith</em>. His second collection of short stories, <em>Quartier Perdu</em>, is due to be published in 2018. He is a critic, translator, editor, playwright, novelist, broadcaster, and experienced tutor and mentor. He lives in Newcastle upon Tyne, is Professor of Creative Writing at Newcastle University and a Fellow of the Royal Society of Literature. His most recent collection is <em>Europa</em> (Picador, 2018).</p>",
		"poet_photo": "obrien.jpg",
		"poem_title" : "Archonography",
		"poem_text" : "<p class='note'>after Sean Scully, <em>Inset #2</em></p><p>&nbsp;</p><p>&nbsp;</p><p>Believe you me, we understand the urge</p><p>To rectify.  So much is chaos, so much</p><p>Mere filler to surround the thrust of things</p><p>&nbsp;</p><p>Across the next horizon. So then, let</p><p>The field be unified, each part the whole.</p><p>Let ground be figure; figure, ground.</p><p>&nbsp;</p><p>We can foresee – but somehow in reverse -</p><p>An empire’s late cartography in this,</p><p>Minute and rectilinear, layered on itself</p><p>&nbsp;</p><p>As if to charge and frame a sudden depth</p><p>That has no room for cities such as ours,</p><p>Nor for the names of those who build</p><p>&nbsp;</p><p>And bring them low. Here geometry</p><p>Is God in all but name, and where we stand </p><p>And what we stand on must be nothingness,</p><p>&nbsp;</p><p>Which leaves us with the meantime</p><p>In the latticework of ‘ordinary life’, to reach</p><p>Across the gulf, as though we ever could. </p><p>&nbsp;</p><p>There is an art to this, as absolute</p><p>And terrible as politics or music,</p><p>And it must be very late, the harmonies </p><p>&nbsp;</p><p>About to shriek themselves apart,</p><p>The old simplicities, the muted greens</p><p>And browns of pastoral retirement,</p><p>&nbsp;</p><p>Long dead but honoured in the parody.</p><p>Much more of this and we’ll have neither</p><p>History nor grievance, cause nor consolation.</p><p>&nbsp;</p><p>So for a moment you delight us, yet</p><p>Whichever dispensation operates,</p><p>The corridors by which you came</p><p>&nbsp;</p><p>Lead only here, to this small chamber</p><p>Where, when you’ve been shown the instruments,</p><p>We put you to the question once again.</p>",
		"audio_source" : "obrien.mp3"
	},
	{
		"poem_id" : "Laing_1",
		"location" : "Laing Art Gallery",
		"artwork" : "East Coast Light 2",
		"image" : "east-coast-light.jpg",
		"copyright" : "&copy; Sean Scully, <em>East Coast Light 2</em>, 1973. Acrylic on canvas, 213.4 x 243.8 cm / 84 x 96 inches. Private collection",
		"poet_firstname" : "Ciaran",
		"poet_lastname" : "Carson",
		"poet_bio" : "<p>Ciaran Carson has published some two dozen books of poetry, prose and translation, most recently <em>From Elsewhere</em>, translations from the work of the French poet Jean Follain, paired with poems inspired by the translations (Gallery Press 2014). His work has won many prizes including the T. S. Eliot Award and the Forward Prize. He is a member of Aosdána, a Fellow of the Royal Society of Literature, and holds the Seamus Heaney Centre Chair of Poetry at Queen’s University Belfast.</p>",
		"poet_photo": "carson.jpg",
		"poem_title" : "Masking Tape",
		"poem_text" : "<p class='note'>after Sean Scully, <em>East Coast Light 2</em></p><p>&nbsp;</p><p>&nbsp;</p><p>From Belfast West to East the coast is never clear.</p><p>The bias binding edges North from seam to seem.</p><p>On building sites they’re driving piles into the sleech.</p><p>They find a concrete definition in the deep.   </p><p>The office blocks rise up into the blogosphere. </p><p>The windows tremble to the sound waves made by speech.</p><p>A laser mike translates the beam from real to reel.</p><p>The more the warp the weft comes out as woof and tweet.</p><p>There’s level after level of semantic creep. </p><p>It’s punctuated by the bleep of radar sweep. </p><p>The bomb-disposal expert saw it in a dream.</p><p>The colour-coded wires were crucial to the meme.</p><p>The isogloss of which is what the lines reveal.</p><p>The pattern reads repeat repeat repeat repeat. </p>",
		"audio_source" : "carson.mp3"
	},
	{
		"poem_id" : "Laing_2",
		"location" : "Laing Art Gallery",
		"artwork" : "Backcloth",
		"image" : "backcloth.jpg",
		"copyright" : "&copy; Sean Scully, <em>Backcloth</em>, 1970. Acrylic on canvas, 198.1 x 304.8 cm / 78 x 120 inches. Private collection",
		"poet_firstname" : "Ian",
		"poet_lastname" : "Duhig",
		"poet_bio" : "<p>Ian Duhig has written seven books of poetry, most recently <em>The Blind Roadmaker</em> (Picador 2016), a Poetry Book Society Recommendation shortlisted for the Roehampton, Forward Best Collection and TS Eliot Prizes. A former homelessness worker, Duhig still works with socially excluded and immigrant groups, contributing to Comma’s ‘Refugee Tales’ series. He is a Fellow of the Royal Society of Literature and a Cholmondeley Award recipient, has won the Forward Prize for Best Single Poem once and the National Poetry Competition twice.</p>",
		"poet_photo": "duhig.jpg",
		"poem_title" : "Multitracked",
		"poem_text" : "<p class='note'>after Sean Scully, <em>Backcloth</em></p><p>&nbsp;</p><p class='note'><em>What Scully does is restore poetry to geometrical abstraction.</em><br/>Donald Kuspit, <em>Sean Scully: A Retrospective</em></p><p>&nbsp;</p><p class='note'><em>Scully is a great storyteller.</em><br/>David Carrier, <em>Sean Scully</em></p><p>&nbsp;</p><p>&nbsp;</p><p>To Don Quixote, translations are tapestries seen from the back: </p><p>Scully’s name comes from <em>sceulaidhe</em>, storyteller, kin to skäld, </p><p>Old Norse, poet. Google Translate renders <em>sceulaidhe</em> as ‘holes’</p><p>but this text is all holes, what’s lost in a Quixotic quest to catch </p><p>echoes of Scully’s shapeshifting visual poetry in a word-mesh, </p><p>a medium, his friend Heaney wrote, like nets moving in water.</p><p>&nbsp;</p><p>Moving beyond poetry, <em>Backcloth</em> upstages theatre: we are cast </p><p>in its racked perspectives, blocks of flats like magic carpet pages </p><p>change scenes from Cubist jungle via a Pandemoniac tube map</p><p>to DNA chart and loom for Scully’s “personal universal” tartan,</p><p>boxing his paradoxical compass across warps and wefts of space </p><p>shot with skyflakes, honey-mustard glowing like icon gold leaf.</p><p>&nbsp;</p><p><em>Backcloth</em> is also its own orchestra: stacked bands of colour play </p><p>rock and roll compositions in reds, blues and yellows, light jigs, </p><p>mathematical set dances; it’s Hilbert’s Hotel music, Bach for lifts, </p><p>jazz for the ballroom, boogie woogie for the Mondrian car park </p><p>and Motown for the drive: walls of sound become walls of light</p><p>multiplying Phil Spector’s layers into a rainbow of new spectra.</p><p>&nbsp;</p><p>My black-and-white spectrum loses all this, but even its cracked </p><p>glass or obtuse angles might reflect on the light from <em>Backcloth</em>,</p><p>an infinity mirror where all Scully’s past and futures dance still,</p><p>its wired grids the syntaxes of languages from parallel universes </p><p>telling stories translated by the artist’s craft out of the marvellous </p><p>as we have known it, the marvellous as we have never known it.</p>",
		"audio_source" : "duhig.mp3"
	},
	{
		"poem_id" : "Laing_3",
		"location" : "Laing Art Gallery",
		"artwork" : "Red Light",
		"image" : "red-light.jpg",
		"copyright" : "&copy; Sean Scully, <em>Red Light</em>, 1971. Acrylic on canvas, 274.3 x 183 cm / 108 x 72 inches. British Council Collection",
		"poet_firstname" : "Degna",
		"poet_lastname" : "Stone",
		"poet_bio" : "<p>Originally from the Midlands, Degna Stone now lives in Tyne &amp; Wear. She is a co-founder of <em>Butcher’s Dog</em> poetry magazine and a contributing editor at <em>The Rialto</em>. She holds an MA in Creative Writing from Newcastle University and received a Northern Writers Award in 2015. She has appeared at Durham Book Festival, StAnza International Poetry Festival, London Literature Festival and on BBC Radio 3s The Verb. She is supported by Peepal Tree Press’s Inscribe programme and is a fellow of The Complete Works III.</p>",
		"poet_photo": "stone.jpg",
		"poem_title" : "Red Light",
		"poem_text" : "<p class='note'>after Sean Scully, <em>Red Light</em></p><p>&nbsp;</p><p>&nbsp;</p><p>When the news leaves you feeling overshadowed,</p><p>leaves you living in the ruins of avoidable disasters,</p><p>you find sanctuary, find salvation, in the Laing.</p><p>&nbsp;</p><p>Inside the gallery there is never total peace. </p><p>The air conditioning stage-whispers white noise,</p><p>the type that might soothe a fretful baby.</p><p>&nbsp;</p><p>Standing in front of <em>Red Light</em> you want to scream, </p><p>want the red lines to absorb the pain ripping your throat, </p><p>hollowing your lungs. You want to be heard.</p><p>&nbsp;</p><p>You shrink until the painting holds the menace </p><p>of a tower block, with all the horror that brings ⎯</p><p>The thought of being trapped, being afraid to die.</p><p>&nbsp;</p><p>To calm yourself, you count the colours, count the lines, </p><p>try to figure out which was laid down first. </p><p>You want to disappear into this painting.</p><p>&nbsp;</p><p>At the lower right corner there is a luminescence.</p><p>The spaces between the lines seem bigger,</p><p>there’s more room to think, more room to be yourself.</p><p>&nbsp;</p><p>You wait until you are completely alone </p><p>then cross the border of the painting,</p><p>picking your way under each stripe of acrylic,</p><p>&nbsp;</p><p>challenging yourself to travel further in</p><p>until you reach the ground, the first layer of paint,</p><p>with its complexity of colour, its sinuous waves.</p><p>&nbsp;</p><p>You still cannot find rest, your mind is too full </p><p>of where you have been, of what you have left behind.</p><p>You realise each red line links you to someone you’ve loved </p><p>&nbsp;</p><p>even as these same red lines hold you hostage,</p><p>keep you caged inside the painting </p><p>with no way to get back through. </p>",
		"audio_source" : "stone.mp3"
	},
	{
		"poem_id" : "Laing_4",
		"location" : "Laing Art Gallery",
		"artwork" : "Diagonal Light",
		"image" : "diagonal-light.jpg",
		"copyright" : "&copy; Sean Scully, <em>Diagonal Light</em>, 1972. Acrylic on canvas, 223.5 x 351.8 cm  / 88 x 138.5 inches. Private collection",
		"poet_firstname" : "Karen",
		"poet_lastname" : "McCarthy Woolf",
		"poet_bio" : "<p>Karen McCarthy Woolf was born in London to an English mother and a Jamaican father. She is the recipient of the Kate Betts Memorial Prize and an Arts and Humanities Research Council scholarship from Royal Holloway, where she was awarded her PhD. Her celebrated début <em>An Aviary of Small Birds</em> was shortlisted for the 2015 Felix Dennis Prize for Best First Collection and the Fenton Aldeburgh First Collection Prize, as well as being a Guardian Book of the Year and a Poetry Book Society Recommendation. Her latest collection <em>Seasonal Disturbances</em> (2017) is a Poetry Book Society Recommendation. Karen is the editor of four literary anthologies, most recently <em>Ten: The New Wave</em> (Bloodaxe, 2014).</p>",
		"poet_photo": "mccarthywoolf.jpg",
		"poem_title" : "Diagonal Light / A Coupling",
		"poem_text" : "<p class='note'>after Sean Scully, <em>Diagonal Light</em></p><p>&nbsp;</p><p>&nbsp;</p<p>It is a story of uncertainty</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in which they became irresistibly enmeshed</p><p>&nbsp;</p><p>He was a hunter who knew what he was interested in</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;what she was interested in she did not know how to express</p><p>&nbsp;</p><p>and what he wasn’t interested in</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flashed like lightning in a text</p><p>&nbsp;</p><p>Its multiple iron layers creating a flickering, jittering effect</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;layer upon layer of unspokenness, unchecked</p><p>&nbsp;</p><p>by a ‘brilliant razzle dazzle impact’</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leaving their pink and yellow chasms almost intact</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>American in scale</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;these fissures were excitable,</p><p>&nbsp;</p><p>they were probably more extreme than anything yet seen</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ultimately predictable, so that she or</p><p>&nbsp;</p><p>he moved from a world of ideas into a world that was grey, hard</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;––All very confusing! &amp; Beautifully simple</p><p>&nbsp;</p><p>Here too he encountered a different</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;layer, thin as Rizla papers, translucent in a different</p><p>&nbsp;</p><p>kind of light</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kinda like Frankie Knuckles’ ‘Baby Wants to Ride’ in mood </p><p>&nbsp;</p><p>and atmosphere</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;followed by ‘A Passage to the Other Side’</p><p>&nbsp;</p><p>The light of the North East</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;like the sound of the South East</p><p>&nbsp;</p><p>is clear and bright</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Within it, once (on the dancefloor) she fainted with delight, within it</p><p>&nbsp;</p><p>he seemed to be sweetness personified, tender yet</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amplified, especially when unduly</p><p>&nbsp;</p><p>absent</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;…</p><p>&nbsp;</p><p>The mystery of beauty, and what beauty was </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;––swiping to the right</p><p>&nbsp;</p><p>when it was beautiful and</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;then swiping left, left, left––</p><p>&nbsp;</p><p>what it was when it wasn’t beautiful </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;––swipe it to the left, shake it to the right–– these moves</p><p>&nbsp;</p><p>seemed to colour his world</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to dislocate their shimmering discotheque</p><p>&nbsp;</p><p>&nbsp;</p><p>He wore a white jean jacket, usually</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– as befitted a creature of crepuscular habit, the night</p><p>&nbsp;</p><p>‘a jarring mass’ of red, green, blue and yellow grids</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;they mutually adored ––How to resist ––How to be</p><p>&nbsp;</p><p>a person who seemed to be unaffected by any of it,</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;losing control, feeling conflicted</p><p>&nbsp;</p><p>interested only in</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Or not</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p class='note'><strong><em>Notes:</em></strong> The poem is a ‘coupling’ – an intertextual form I devised, from which I take samples of pre-existing prose, lineate them and then write a response line underneath. The formal criteria of the response line is to create an asymmetric mirror of the original, through a mixture of repetition, assonance and rhyme; the idea being to co-opt the existing narrative through a process of amplification or subversion and sometimes both. While reading Sean Scully’s catalogue notes, I was struck by the evocative tone of his description of Ian Stephenson whom he met at Newcastle. The source lines, which constitute the first line of the couplet, are drawn from this. At the same time the rigidity of the grid painting, and Scully’s process as documented, reflected the formal tensions between prose and lyric that play out in the coupling and in this case, its capacity to express the underlying antagonisms between control and desire.<em></p><p class='note'><em><a href='http://mccarthywoolf.com/projects/mslexia-interview'>More on the coupling.</a></em></p>",
		"audio_source" : "mccarthy-woolf.mp3"
	}
];


//Using eval to construct Poem objects named after the poem_id property of each object in poems_data 
//e.g. Hatton_1 = new Poem(poems_data[0]);
for (i = 0; i < poems_data.length; i++) {
	eval(poems_data[i].poem_id + "= new Poem(poems_data[" + i + "]);" );
};
