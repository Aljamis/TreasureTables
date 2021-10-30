
//  Individual treasure tables	
    var Individual = 
    [
        //  Challenge rating 0 - -3
        [
			[30 , '5d6 (17)' , '-' , '-' , '-' , '-'] ,
			[60 , '-' , '4d6 (14)' , '-' , '-' , '-'] ,
			[70 , '-' , '-' , '3d6 (10)' , '-' , '-'] ,
			[95 , '-' , '-' , '-' , '3d6 (10)' , '-'] ,
			[100 , '-' , '-' , '-' , '-' , '1d6 (3)']
        ]
        // Challenge rating 5 - 10
        ,[
            [30 , '4d6 x 100 (1,400)' , '-' , '1d6 x 10 (35)' , '-' , '-' ] ,
            [60 , '-' , '6d6 x 10 (210)' , '-' , '2d6 x 10 (70)' , '-' ] ,
            [70 , '-' , '-' , '1d6 x 100 (350)' , '2d6 x 10 (70)' , '-' ] ,
            [95 , '-' , '-' , '-' , '4d6 x 10 (140)' , '-' ] ,
            [100 , '-' , '-' , '-' , '2d6 x 10 (70)' , '3d6 (10)' ]
        ]
        // Challenge rating 11 - 16
        ,[
            [20 , '-' , '4d6 x 100 (1,400)' , '-' , '1d6 x 100 (35)' , '-' ] ,
            [35 , '-' , '-' , '1d6 x 100 (350)' , '1d6 x 100 (350)' , '-' ] ,
            [75 , '-' , '-' , '-' , '2d6 x 100 (700)' , '1d6 x 10 (35)' ] ,
            [100 , '-' , '-' , '-' , '2d6 x 100 (700)' , '2d6 x 10 (70)' ] 
        ]
        // Challenge rating 17 -
        ,[
            [15 , '-' , '-' , '2d6 x 1000 (7000)' , '8d6 x 100 (2800)' , '-' ] ,
            [55 , '-' , '-' , '-' , '1d6 x 1000 (3500)' , '1d6 x 100 (350)' ] ,
            [100 , '-' , '-' , '-' , '1d6 x 1000 (3500)' , '2d6 x 100 (700)' ]
        ]
    ];
    

//  Hoard Treasure tables
    var HOARD=
    [
        //  Challenge rating 0 - 4
        [
			['Coins' , '6d6 × 100 (2,100)' , '3d6 × 100 (1,050)' , '-' , '2d6 × 10 (70)' , '-' ] , 
            [
                [6 , '-' , '-'] , 
                [16 , '2d6 (7) 10 gp gems' , '-'] , 
                [26 , '2d4 (5) 25 gp art objects' , '-'] ,
                [36 , '2d6 (7) 50 gp gems' , '-'] , 
                [44 , '2d6 (7) 10 gp gems' , 'Roll 1d6 times on Magic Item Table A.'] ,
                [52 , '2d4 (5) 25 gp art objects' , 'Roll 1d6 times on Magic Item Table A.'] , 
                [60 , '2d6 (7) 50 gp gems' , 'Roll 1d6 times on Magic Item Table A.'] , 
                [65 , '2d6 (7) 10 gp gems' , 'Roll 1d4 times on Magic Item Table B.'] , 
                [70 , '2d4 (5) 25 gp art objects' , 'Roll 1d4 times on Magic Item Table B.'] , 
                [75 , '2d6 (7) 50 gp gems' , 'Roll 1d4 times on Magic Item Table B.'] , 
                [78 , '2d6 (7) 10 gp gems' , 'Roll 1d4 times on Magic Item Table C.'] , 
                [80 , '2d4 (5) 25 gp art objects' , 'Roll 1d4 times on Magic Item Table C.'] , 
                [85 , '2d6 (7) 50 gp gems' , 'Roll 1d4 times on Magic Item Table C.'] , 
                [92 , '2d4 (5) 25 gp art objects' , 'Roll 1d4 times on Magic Item Table F.'] , 
                [97 , '2d6 (7) 50 gp gems' , 'Roll 1d4 times on Magic Item Table F.'] , 
                [99 , '2d4 (5) 25 gp art objects' , 'Roll once on Magic Item Table G.'] , 
                [100 , '2d6 (7) 50 gp gems' , 'Roll once on Magic Item Table G.']
            ]
        ]
        // Challenge rating 5 - 10
        ,[
            ['Coins' , '2d6 X 100 (700)' , '2d6 X 1000 (7000)' , '-' , '6d6 X 100 (2100)' , '3d6 x 10 (105)'] ,
            [
                [4 , '-' , '-'] , 
                [10 , '2d4 (5) 25 gp art objects' , '-'] , 
                [16 , '3d6 (10) 50 gp gems' , '-'] , 
                [22 , '3d6 (10) 100 gp gems' , '-'] , 
                [28 , '2d4 (5) 25 gp art objects' , '-'] , 
                [32 , '2d4 (5) 25 gp art objects' , 'Roll 1d6 times on Magic Item Table A.'] , 
                [36 , '3d6 (10) 50 gp gems' , 'Roll 1d6 times on Magic Item Table A.'] , 
                [40 , '3d6 (10) 100 gp gems' , 'Roll 1d6 times on Magic Item Table A.'] , 
                [44 , '2d4 (5) 250 gp art objects' , 'Roll 1d6 times on Magic Item Table A.'] , 
                [49 , '2d4 (5) 25 gp art objects' , 'Roll 1d4 times on Magic Item Table B.'] , 
                [54 , '3d6 (10) 50 gp gems' , 'Roll 1d4 times on Magic Item Table B.'] , 
                [59 , '3d6 (10) 100 gp gems' , 'Roll 1d4 times on Magic Item Table B.'] , 
                [63 , '2d4 (5) 250 gp art objects' , 'Roll 1d4 times on Magic Item Table B.'] , 
                [66 , '2d4 (5) 25 gp art objects' , 'Roll 1d4 times on Magic Item Table C.'] , 
                [69 , '3d6 (l0) 50 gp gems' , 'Roll 1d4 times on Magic Item Table C.'] , 
                [72 , '3d6 (10) 100 gp gems' , 'Roll 1d4 times on Magic Item Table C.'] , 
                [74 , '2d4 (5) 250 gp art objects' , 'Roll 1d4 times on Magic Item Table C.'] , 
                [76 , '2d4 (5) 25 gp art objects' , 'Roll once on Magic Item Table D.'] , 
                [78 , '3d6 (10) 50 gp gems' , 'Roll once on Magic Item Table D.'] , 
                [79 , '3d6 (10) 100 gp gems' , 'Roll once on Magic Item Table D.'] , 
                [80 , '2d4 (5) 250 gp art objects' , 'Roll once on Magic Item Table D.'] , 
                [84 , '2d4 (5) 25 gp art objects' , 'Roll 1d4 times on Magic Item Table F.'] , 
                [88 , '3d6 (10) 50 gp gems' , 'Roll 1d4 times on Magic Item Table F.'] , 
                [91 , '3d6 (10) 100 gp gems' , 'Roll 1d4 times on Magic Item Table F.'] , 
                [94 , '2d4 (5) 250 gp art objects' , 'Roll 1d4 times on Magic Item Table F.'] , 
                [96 , '3d6 (10) 100 gp gems' , 'Roll 1d4 times on Magic Item Table G.'] , 
                [98 , '2d4 (5) 250 gp art objects' , 'Roll 1d6 times on Magic Item Table G.'] , 
                [99 , '3d6 (10) 100 gp gems' , 'Roll once on Magic Item Table H.'] , 
                [100 , '2d4 (5) 250 gp art objects' , 'Roll once on Magic Item Table H.'] 
            ]
        ]
        // Challenge rating 11 - 16
        ,[
			['Coins' , '-' , '-' , '-' , '4d6 × 1,000 (14,000)' , '5d6 × 100 (1,750) pp' ] , 
            [
                [3 , '-' , '-'] , 
                [6 , '2d4 (5) 250 gp art objects' , '-'] , 
                [10 , '2d4 (5) 750 gp art objects' , '-'] , 
                [12 , '3d6 (10) 500 gp gems' , '-'] , 
                [15 , '3d6 (10) 1,000 gp gems' , '-'] , 
                [19 , '2d4 (5) 250 gp art objects' , 'Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.'] , 
                [23 , '2d4 (5) 750 gp art objects' , 'Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.'] , 
                [26 , '3d6 (10) 500 gp gems' , 'Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.'] , 
                [29 , '3d6 (10) 1,000 gp gems' , 'Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.'] , 
                [35 , '2d4 (5) 250 gp art objects' , 'Roll 1d6 times on Magic Item Table C.'] , 
                [40 , '2d4 (5) 750 gp art objects' , 'Roll 1d6 times on Magic Item Table C.'] , 
                [45 , '3d6 (10) 500 gp gems' , 'Roll 1d6 times on Magic Item Table C.'] , 
                [50 , '3d6 (10) 1,000 gp gems' , 'Roll 1d6 times on Magic Item Table C.'] , 
                [54 , '2d4 (5) 250 gp art objects' , 'Roll 1d4 times on Magic Item Table D'] , 
                [58 , '2d4 (5) 750 gp art objects' , 'Roll 1d4 times on Magic Item Table D.'] , 
                [62 , '3d6 (10) 500 gp gems' , 'Roll 1d4 times on Magic Item Table D.'] , 
                [66 , '3d6 (10) 1,000 gp gems' , 'Roll 1d4 times on Magic Item Table D.'] , 
                [68 , '2d4 (5) 250 gp art objects' , 'Roll once on Magic Item Table E.'] , 
                [70 , '2d4 (5) 750 gp art objects' , 'Roll once on Magic Item Table E.'] , 
                [72 , '3d6 (10) 500 gp gems' , 'Roll once on Magic Item Table E.'] , 
                [74 , '3d6 (10) 1,000 gp gems' , 'Roll once on Magic Item Table E.'] , 
                [76 , '2d4 (5) 250 gp art objects' , 'Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.'] , 
                [78 , '2d4 (5) 750 gp art objects' , 'Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.'] , 
                [80 , '3d6 (10) 500 gp gems' , 'Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.'] , 
                [82 , '3d6 (10) 1,000 gp gems' , 'Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.'] , 
                [85 , '2d4 (5) 250 gp art objects' , 'Roll1d4 times on Magic Item Table H.'] , 
                [88 , '2d4 (5) 750 gp art objects' , 'Roll 1d4 times on Magic Item Table H.'] , 
                [90 , '3d6 (10) 500 gp gems' , 'Roll 1d4 times on Magic Item Table H.'] , 
                [92 , '3d6 (10) 1,000 gp gems' , 'Roll 1d4 times on Magic Item Table H.'] , 
                [94 , '2d4 (5) 250 gp art objects' , 'Roll once on Magic Item Table I.'] , 
                [96 , '3d6 (10) 500 gp gems' , 'Roll once on Magic Item Table I.'] , 
                [98 , '3d6 (10) 1,000 gp gems' , 'Roll once on Magic Item Table I.'] , 
                [100 , '3d6 (10) 1,000 gp gems' , 'Roll once on Magic Item Table I.'] 
            ]

        ]
        // Challenge rating 17 - 
        ,[
			['Coins' , '-' , '-' , '-' , '12d6 × 1,000 (42,000)' , '8d6 × 1,000 (28,000)' ] , 
            [
                [2 , '-' , '-'] , 
                [5 , '3d6 (10) 1,000 gp gems' , 'Roll 1d8 times on Magic Item Table C.'] , 
                [8 , '1d10 (5) 2,500 gp art objects' , 'Roll 1d8 times on Magic Item Table C.'] , 
                [11 , '1d4 (2) 7,500 gp art objects' , 'Roll 1d8 times on Magic Item Table C.'] , 
                [14 , '1d8 (4) 5,000 gp gems' , 'Roll 1d8 times on Magic Item Table C.'] , 
                [22 , '3d6 (10) 1,000 gp gems' , 'Roll 1d6 times on Magic Item Table D.'] , 
                [30 , '1dl0 (5) 2,500 gp art objects' , 'Roll 1d6 times on Magic Item Table D.'] , 
                [38 , '1d4 (2) 7,500 gp art objects' , 'Roll 1d6 times on Magic Item Table D.'] , 
                [46 , '1d8 (4) 5,000 gp gems' , 'Roll 1d6 times on Magic Item Table D'] , 
                [52 , '3d6 (10) 1,000 gp gems' , 'Roll 1d6 times on Magic Item Table E.'] , 
                [58 , '1d10 (5) 2,500 gp art objects' , 'Roll1d6 times on Magic Item Table E.'] , 
                [63 , '1d4 (2) 7,500 gp art objects' , 'Roll 1d6 times on Magic Item Table E.'] , 
                [68 , '1d8 (4) 5,000 gp gems' , 'Roll 1d6 times on Magic Item Table E.'] , 
                [69 , '3d6 (10) 1,000 gp gems' , 'Roll 1d4 times on Magic Item Table G.'] , 
                [70 , '1d10 (5) 2,500 gp art objects' , 'Roll 1d4 times on Magic Item Table G.'] , 
                [71 , '1d4 (2) 7,500 gp art objects' , 'Roll1d4 times on Magic Item Table G.'] , 
                [72 , '1d8 (4) 5,000 gp gems' , 'Roll 1d4 times on Magic Item Table G.'] , 
                [74 , '3d6 (10) 1,000 gp gems' , 'Roll 1d4 times on Magic Item Table H.'] , 
                [76 , 'ld10 (5) 2,500 gp art objects' , 'Roll 1d4 times on Magic Item Table H.'] , 
                [78 , '1d4 (2) 7,500 gp art objects' , 'Roll 1d4 times on Magic Item Table H.'] , 
                [80 , '1d8 (4) 5,000 gp gems' , 'Roll 1d4 times on Magic Item Table H.'] , 
                [85 , '3d6 (10) 1,000 gp gems' , 'Roll 1d4 times on Magic Item Table I.'] , 
                [90 , '1d10 (5) 2,500 gp art objects' , 'Roll 1d4 times on Magic Item Table I.'] ,
                [95 , 'ld4 (2) 7,500 gp art objects' , 'Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.'] , 
                [100 , '1d8 (4) 5,000 gp gems' , 'Roll 1d4 times on Magic Item Table I.'] 
            ]

        ]
    ];



//  Gem Tables
	var gems10GP=
	[ 'd12' , 
		[
			[ 1 , 'Azurite (opaque mottled deep blue)' ] , 
			[ 2 , 'Banded agate (translucent striped brown, blue, white, or red)' ] , 
			[ 3 , 'Blue quartz (transparent pale blue)' ] , 
			[ 4 , 'Eye agate (translucent circles of gray, white, brown, blue, or green)' ] , 
			[ 5 , 'Hematite (opaque gray-black)' ] , 
			[ 6 , 'Lapis lazuli (opaque light and dark blue with yellow flecks)' ] , 
			[ 7 , 'Malachite (opaque striated light and dark green)' ] , 
			[ 8 , 'Moss agate (translucent pink or yellow-white with mossy gray or green markings)' ] , 
			[ 9 , 'Obsidian (opaque black)' ] , 
			[ 10 , 'Rhodochrosite (opaque light pink)' ] , 
			[ 11 , 'Tiger eye (translucent brown with golden center)' ] , 
			[ 12 , 'Turquoise (opaque light blue-green)' ]
		]
	];
	var gems50GP=
	[ 'd12' , 
		[
			[ 1 , 'Bloodstone (opaque dark gray with red flecks)' ] , 
			[ 2 , 'Carnelian (opaque orange to red-brown)' ] , 
			[ 3 , 'Chalcedony (opaque white)' ] , 
			[ 4 , 'Chrysoprase (translucent green)' ] , 
			[ 5 , 'Citrine (transparent pale yellow-brown)' ] , 
			[ 6 , 'Jasper (opaque blue, black, or brown)' ] , 
			[ 7 , 'Moonstone (translucent white with pale blue glow)' ] , 
			[ 8 , 'Onyx (opaque bands of black and white, or pure black or white)' ] , 
			[ 9 , 'Quartz (transparent white, smoky gray, or yellow)' ] , 
			[ 10 , 'Sardonyx (opaque bands of red and white)' ] , 
			[ 11 , 'Star rose quartz (translucent rosy stone with white star-shaped center)' ] , 
			[ 12 , 'Zircon (transparent pale blue-green)' ] 
		]
	];
	var gems100GP=
	[ 'd10' , 
		[
			[ 1 , 'Amber (transparent watery gold to rich gold)' ] , 
			[ 2 , 'Amethyst (transparent deep purple)' ] , 
			[ 3 , 'Chrysoberyl (transparent yellow-green to pale green)' ] , 
			[ 4 , 'Coral (opaque crimson)' ] , 
			[ 5 , 'Garnet (transparent red, brown-green, or violet)' ] , 
			[ 6 , 'Jade (translucent light green, deep green, or white)' ] , 
			[ 7 , 'Jet (opaque deep black)' ] , 
			[ 8 , 'Pearl (opaque lustrous white, yellow, or pink)' ] , 
			[ 9 , 'Spinel (transparent red, red-brown, or deep green)' ] , 
			[ 10 , 'Tourmaline (transparent pale green, blue, brown, or red)' ] 
		]
	];
	var gems500GP=
	[ 'd6' , 
		[
			[ 1 , 'Alexandrite (transparent dark green)' ] , 
			[ 2 , 'Aquamarine (transparent pale blue-green)' ] , 
			[ 3 , 'Black pearl (opaque pure black)' ] , 
			[ 4 , 'Blue spinel (transparent deep blue)' ] , 
			[ 5 , 'Peridot (transparent rich olive green)' ] , 
			[ 6 , 'Topaz (transparent golden yellow)' ] 
		]
	];
	var gems1000GP=
	[ 'd8' , 
		[
			[ 1 , 'Black opal (translucent dark green with black mottling and golden flecks)' ] , 
			[ 2 , 'Blue sapphire (transparent blue-white to medium blue)' ] , 
			[ 3 , 'Emerald (transparent deep bright green)' ] , 
			[ 4 , 'Fire opal (translucent fiery red)' ] , 
			[ 5 , 'Opal (translucent pale blue with green and golden mottling)' ] , 
			[ 6 , 'Star ruby (translucent ruby with white star-shaped center)' ] , 
			[ 7 , 'Star sapphire (translucent blue sapphire with white star-shaped center)' ] , 
			[ 8 , 'Yellow sapphire (transparent fiery yellow or yellow-green)' ] 
		]
	];
	var gems5000GP=
	[ 'd4' , 
		[
			[ 1 , 'Black sapphire (translucent lustrous black with glowing highlights)' ] , 
			[ 2 , 'Diamond (transparent blue-white, canary, pink, brown, or blue)' ] , 
			[ 3 , 'Jacinth (transparent fiery orange)' ] , 
			[ 4 , 'Ruby (transparent clear red to deep crimson)' ] 
		]
	];



//  Art Tables
	var art25GP=
	[ 'd10' , 
		[
			[ 1 , 'Silver ewer' ] , 
			[ 2 , 'Carved bone statuette' ] , 
			[ 3 , 'Small gold bracelet' ] , 
			[ 4 , 'Cloth-of-gold vestments' ] , 
			[ 5 , 'Black velvet mask stitched with silver thread' ] , 
			[ 6 , 'Copper chalice with silver filigree' ] , 
			[ 7 , 'Pair of engraved bone dice' ] , 
			[ 8 , 'Small mirror set in a painted wooden frame' ] , 
			[ 9 , 'Embroidered silk handkerchief' ] , 
			[ 10 , 'Gold locket with a painted portrait inside' ] 
		]
	];
	var art250GP=
	[ 'd10' , 
		[
			[ 1 , 'Gold ring set with bloodstones' ] , 
			[ 2 , 'Carved ivory statuette' ] , 
			[ 3 , 'Large gold bracelet' ] , 
			[ 4 , 'Silver necklace with a gemstone pendant' ] , 
			[ 5 , 'Bronze crown' ] , 
			[ 6 , 'Silk robe with gold embroidery' ] , 
			[ 7 , 'Large well-made tapestry' ] , 
			[ 8 , 'Brass mug with jade inlay' ] , 
			[ 9 , 'Box of turquoise animal figurines' ] , 
			[ 10 , 'Gold bird cage with electrum filigree' ]
		]
	];
	var art750GP=
	[ 'd10' , 
		[
			[ 1 , 'Silver chalice set with moonstones' ] , 
			[ 2 , 'Silver-plated steel longsword with jet set in hilt' ] , 
			[ 3 , 'Carved harp of exotic wood with ivory inlay and zircon gems' ] , 
			[ 4 , 'Small gold idol' ] , 
			[ 5 , 'Gold dragon comb set with red garnets as eyes' ] , 
			[ 6 , 'Bottle stopper cork embossed with gold leaf and set with amethysts' ] , 
			[ 7 , 'Ceremonial electrum dagger with a black pearl in the pommel' ] , 
			[ 8 , 'Silver and gold brooch' ] , 
			[ 9 , 'Obsidian statuette with gold fittings and inlay' ] , 
			[ 10 , 'Painted gold war mask' ]
		]
	];
	var art2500GP=
	[ 'd10' , 
		[
			[ 1 , 'Fine gold chain set with a fire opal' ] , 
			[ 2 , 'Old masterpiece painting' ] , 
			[ 3 , 'Embroidered silk and velvet mantle set with numerous moonstones' ] , 
			[ 4 , 'Platinum bracelet set with a sapphire' ] , 
			[ 5 , 'Embroidered glove set with jewel chips' ] , 
			[ 6 , 'Jeweled anklet' ] , 
			[ 7 , 'Gold music box' ] , 
			[ 8 , 'Gold circlet set with four aquamarines' ] , 
			[ 9 , 'Eye patch with a mock eye set in blue sapphire and moonstone' ] , 
			[ 10 , 'A necklace string of small pink pearls' ]
		]
	];
	var art7500GP=
	[ 'd10' , 
		[
			[ 1 , 'Fine gold chain set with a fire opal' ] , 
			[ 2 , 'Old masterpiece painting' ] , 
			[ 3 , 'Embroidered silk and velvet mantle set with numerous moonstones' ] , 
			[ 4 , 'Platinum bracelet set with a sapphire' ] , 
			[ 5 , 'Embroidered glove set with jewel chips' ] , 
			[ 6 , 'Jeweled anklet' ] , 
			[ 7 , 'Gold music box' ] , 
			[ 8 , 'Gold circlet set with four aquamarines' ] , 
			[ 9 , 'Eye patch with a mock eye set in blue sapphire and moonstone' ] , 
			[ 10 , 'A necklace string of small pink pearls' ] 
		]
	];

const GEMS = new Map();
	GEMS.set('10 gp gems' , gems10GP );
	GEMS.set('50 gp gems' , gems50GP );
	GEMS.set('100 gp gems' , gems100GP );
	GEMS.set('500 gp gems' , gems500GP );
	GEMS.set('1,000 gp gems' , gems1000GP );
	GEMS.set('5,000 gp gems' , gems5000GP );

	GEMS.set('25 gp art' , art25GP );
	GEMS.set('250 gp art' , art250GP );
	GEMS.set('750 gp art' , art750GP );
	GEMS.set('2,500 gp art' , art2500GP );
	GEMS.set('7,500 gp art' , art7500GP );




//  Magic Items
	var MagicItemsA=
	[
		[ 50 , 'Potion of healing' ] , 
		[ 60 , 'Spell scroll (cantrip)' ] , 
		[ 70 , 'Potion of climbing' ] , 
		[ 90 , 'Spell scroll (1st level)' ] , 
		[ 94 , 'Spell scroll (2nd level)' ] , 
		[ 98 , 'Potion of healing (greater)' ] , 
		[ 99 , 'Bag of holding' ] , 
		[ 100 , 'Driftglobe' ]
	];
	var MagicItemsB=
	[
		[ 15 , 'Potion of healing (greater)' ] , 
		[ 22 , 'Potion of fire breath' ] , 
		[ 29 , 'Potion of resistance' ] , 
		[ 34 , 'Ammunition, +1' ] , 
		[ 39 , 'Potion of animal friendship' ] , 
		[ 44 , 'Potion of hill giant strength' ] , 
		[ 49 , 'Potion of growth' ] , 
		[ 54 , 'Potion of water breathing' ] , 
		[ 59 , 'Spell scroll (2nd level)' ] , 
		[ 64 , 'Spell scroll (3rd level)' ] , 
		[ 67 , 'Bag of holding' ] , 
		[ 70 , 'Keoghtom’s ointment' ] , 
		[ 73 , 'Oil of slipperiness' ] , 
		[ 75 , 'Dust of disappearance' ] , 
		[ 77 , 'Dust of dryness' ] , 
		[ 79 , 'Dust of sneezing and choking' ] , 
		[ 81 , 'Elemental gem' ] , 
		[ 83 , 'Philter of love' ] , 
		[ 84 , 'Alchemy jug' ] , 
		[ 85 , 'Cap of water breathing' ] , 
		[ 86 , 'Cloak of the manta ray' ] , 
		[ 87 , 'Driftglobe' ] , 
		[ 88 , 'Goggles of night' ] , 
		[ 89 , 'Helm of comprehending languages' ] , 
		[ 90 , 'Immovable rod' ] , 
		[ 91 , 'Lantern of revealing' ] , 
		[ 92 , 'Mariner’s armor' ] , 
		[ 93 , 'Mithral armor' ] , 
		[ 94 , 'Potion of poison' ] , 
		[ 95 , 'Ring of swimming' ] , 
		[ 96 , 'Robe of useful items' ] , 
		[ 97 , 'Rope of climbing' ] , 
		[ 98 , 'Saddle of the cavalier' ] , 
		[ 99 , 'Wand of magic detection' ] , 
		[ 100 , 'Wand of secrets' ]
	];
	var MagicItemsC=
	[
		[ 15 , 'Potion of healing (superior)' ] , 
		[ 22 , 'Spell scroll (4th level)' ] , 
		[ 27 , 'Ammunition, +2' ] , 
		[ 32 , 'Potion of clairvoyance' ] , 
		[ 37 , 'Potion of diminution' ] , 
		[ 42 , 'Potion of gaseous form' ] , 
		[ 47 , 'Potion of frost giant strength' ] , 
		[ 52 , 'Potion of stone giant strength' ] , 
		[ 57 , 'Potion of heroism' ] , 
		[ 62 , 'Potion of invulnerability' ] , 
		[ 67 , 'Potion of mind reading' ] , 
		[ 72 , 'Spell scroll (5th level)' ] , 
		[ 75 , 'Elixir of health' ] , 
		[ 78 , 'Oil of etherealness' ] , 
		[ 81 , 'Potion of fire giant strength' ] , 
		[ 84 , 'Quaal’s feather token' ] , 
		[ 87 , 'Scroll of protection' ] , 
		[ 89 , 'Bag of beans' ] , 
		[ 91 , 'Bead of force' ] , 
		[ 92 , 'Chime of opening' ] , 
		[ 93 , 'Decanter of endless water' ] , 
		[ 94 , 'Eyes of minute seeing' ] , 
		[ 95 , 'Folding boat' ] , 
		[ 96 , 'Heward’s handy haversack' ] , 
		[ 97 , 'Horseshoes of speed' ] , 
		[ 98 , 'Necklace of fireballs' ] , 
		[ 99 , 'Periapt of health' ] , 
		[ 100 , 'Sending stones' ]
	];
	var MagicItemsD=
	[
		[ 20 , 'Potion of healing (supreme)' ] , 
		[ 30 , 'Potion of invisibility' ] , 
		[ 40 , 'Potion of speed' ] , 
		[ 50 , 'Spell scroll (6th level)' ] , 
		[ 57 , 'Spell scroll (7th level)' ] , 
		[ 62 , 'Ammunition, +3' ] , 
		[ 67 , 'Oil of sharpness' ] , 
		[ 72 , 'Potion of flying' ] , 
		[ 77 , 'Potion of cloud giant strength' ] , 
		[ 82 , 'Potion of longevity' ] , 
		[ 87 , 'Potion of vitality' ] , 
		[ 92 , 'Spell scroll (8th level)' ] , 
		[ 95 , 'Horseshoes of a zephyr' ] , 
		[ 98 , 'Nolzur’s marvelous pigments' ] , 
		[ 99 , 'Bag of devouring' ] , 
		[ 100 , 'Portable hole' ]
	];
	var MagicItemsE=
	[
		[ 20 , 'Potion of healing (supreme)' ] , 
		[ 30 , 'Potion of invisibility' ] , 
		[ 40 , 'Potion of speed' ] , 
		[ 50 , 'Spell scroll (6th level)' ] , 
		[ 57 , 'Spell scroll (7th level)' ] , 
		[ 62 , 'Ammunition, +3' ] , 
		[ 67 , 'Oil of sharpness' ] , 
		[ 72 , 'Potion of flying' ] , 
		[ 77 , 'Potion of cloud giant strength' ] , 
		[ 82 , 'Potion of longevity' ] , 
		[ 87 , 'Potion of vitality' ] , 
		[ 92 , 'Spell scroll (8th level)' ] , 
		[ 95 , 'Horseshoes of a zephyr' ] , 
		[ 98 , 'Nolzur’s marvelous pigments' ] , 
		[ 99 , 'Bag of devouring' ] , 
		[ 100 , 'Portable hole' ]
	];
	var MagicItemsF=
	[
		[ 15 , 'Weapon, +1' ] , 
		[ 18 , 'Shield, +1' ] , 
		[ 21 , 'Sentinel shield' ] , 
		[ 23 , 'Amulet of proof against detection and location' ] , 
		[ 25 , 'Boots of elvenkind' ] , 
		[ 27 , 'Boots of striding and springing' ] , 
		[ 29 , 'Bracers of archery' ] , 
		[ 31 , 'Brooch of shielding' ] , 
		[ 33 , 'Broom of flying' ] , 
		[ 35 , 'Cloak of elvenkind' ] , 
		[ 37 , 'Cloak of protection' ] , 
		[ 39 , 'Gauntlets of ogre power' ] , 
		[ 41 , 'Hat of disguise' ] , 
		[ 43 , 'Javelin of lightning' ] , 
		[ 45 , 'Pearl of power' ] , 
		[ 47 , 'Rod of the pact keeper, +1' ] , 
		[ 49 , 'Slippers of spider climbing' ] , 
		[ 51 , 'Staff of the adder' ] , 
		[ 53 , 'Staff of the python' ] , 
		[ 55 , 'Sword of vengeance' ] , 
		[ 57 , 'Trident of fish command' ] , 
		[ 59 , 'Wand of magic missiles' ] , 
		[ 61 , 'Wand of the war mage, +1' ] , 
		[ 63 , 'Wand of web' ] , 
		[ 65 , 'Weapon of warning' ] , 
		[ 66 , 'Adamantine armor (chain mail)' ] , 
		[ 67 , 'Adamantine armor (chain shirt)' ] , 
		[ 68 , 'Adamantine armor (scale mail)' ] , 
		[ 69 , 'Bag of tricks (gray)' ] , 
		[ 70 , 'Bag of tricks (rust)' ] , 
		[ 71 , 'Bag of tricks (tan)' ] , 
		[ 72 , 'Boots of the winterlands' ] , 
		[ 73 , 'Circlet of blasting' ] , 
		[ 74 , 'Deck of illusions' ] , 
		[ 75 , 'Eversmoking bottle' ] , 
		[ 76 , 'Eyes of charming' ] , 
		[ 77 , 'Eyes of the eagle' ] , 
		[ 78 , 'Figurine of wondrous power (silver raven)' ] , 
		[ 79 , 'Gem of brightness' ] , 
		[ 80 , 'Gloves of missile snaring' ] , 
		[ 81 , 'Gloves of swimming and climbing' ] , 
		[ 82 , 'Gloves of thievery' ] , 
		[ 83 , 'Headband of intellect' ] , 
		[ 84 , 'Helm of telepathy' ] , 
		[ 85 , 'Instrument of the bards (Doss lute)' ] , 
		[ 86 , 'Instrument of the bards (Fochlucan bandore)' ] , 
		[ 87 , 'Instrument of the bards (Mac-Fuimidh cittern)' ] , 
		[ 88 , 'Medallion of thoughts' ] , 
		[ 89 , 'Necklace of adaptation' ] , 
		[ 90 , 'Periapt of wound closure' ] , 
		[ 91 , 'Pipes of haunting' ] , 
		[ 92 , 'Pipes of the sewers' ] , 
		[ 93 , 'Ring of jumping' ] , 
		[ 94 , 'Ring of mind shielding' ] , 
		[ 95 , 'Ring of warmth' ] , 
		[ 96 , 'Ring of water walking' ] , 
		[ 97 , 'Quiver of Ehlonna' ] , 
		[ 98 , 'Stone of good luck (luckstone)' ] , 
		[ 99 , 'Wind fan' ] , 
		[ 100 , 'Winged boots' ] , 
	];
	var MagicItemsG=
	[
		[ 11 , 'Weapon, +2' ] , 
		[ 14 , 'Figurine of wondrous power (roll d8)' , 
			[
				[ 1 , 'Figurine of wondrous power (Bronze griffon)' ] , 
				[ 2 , 'Figurine of wondrous power (Ebony fly)' ] , 
				[ 3 , 'Figurine of wondrous power (Golden lions)' ] , 
				[ 4 , 'Figurine of wondrous power (Ivory goats)' ] , 
				[ 5 , 'Figurine of wondrous power (Marble elephant)' ] , 
				[ 7 , 'Figurine of wondrous power (Onyx dog)' ] , 
				[ 8 , 'Figurine of wondrous power (Serpentine owl)' ]
			]
		] , 
		[ 15 , 'Adamantine armor (breastplate)' ] , 
		[ 16 , 'Adamantine armor (splint)' ] , 
		[ 17 , 'Amulet of health' ] , 
		[ 18 , 'Armor of vulnerability' ] , 
		[ 19 , 'Arrow-catching shield' ] , 
		[ 20 , 'Belt of dwarvenkind' ] , 
		[ 21 , 'Belt of hill giant strength' ] , 
		[ 22 , 'Berserker axe' ] , 
		[ 23 , 'Boots of levitation' ] , 
		[ 24 , 'Boots of speed' ] , 
		[ 25 , 'Bowl of commanding water elementals' ] , 
		[ 26 , 'Bracers of defense' ] , 
		[ 27 , 'Brazier of commanding fire elementals' ] , 
		[ 28 , 'Cape of the mountebank' ] , 
		[ 29 , 'Censer of controlling air elementals' ] , 
		[ 30 , 'Armor, +1 chain mail' ] , 
		[ 31 , 'Armor of resistance (chain mail)' ] , 
		[ 32 , 'Armor, +1 chain shirt' ] , 
		[ 33 , 'Armor of resistance (chain shirt)' ] , 
		[ 34 , 'Cloak of displacement' ] , 
		[ 35 , 'Cloak of the bat' ] , 
		[ 36 , 'Cube of force' ] , 
		[ 37 , 'Daern’s instant fortress' ] , 
		[ 38 , 'Dagger of venom' ] , 
		[ 39 , 'Dimensional shackles' ] , 
		[ 40 , 'Dragon slayer' ] , 
		[ 41 , 'Elven chain' ] , 
		[ 42 , 'Flame tongue' ] , 
		[ 43 , 'Gem of seeing' ] , 
		[ 44 , 'Giant slayer' ] , 
		[ 45 , 'Glamoured studded leather' ] , 
		[ 46 , 'Helm of teleportation' ] , 
		[ 47 , 'Horn of blasting' ] , 
		[ 48 , 'Horn of Valhalla (silver or brass)' ] , 
		[ 49 , 'Instrument of the bards (Canaith mandolin)' ] , 
		[ 50 , 'Instrument of the bards (Cli lyre)' ] , 
		[ 51 , 'Ioun stone (awareness)' ] , 
		[ 52 , 'Ioun stone (protection)' ] , 
		[ 53 , 'Ioun stone (reserve)' ] , 
		[ 54 , 'Ioun stone (sustenance)' ] , 
		[ 55 , 'Iron bands of Bilarro' ] , 
		[ 56 , 'Armor, +1 leather' ] , 
		[ 57 , 'Armor of resistance (leather)' ] , 
		[ 58 , 'Mace of disruption' ] , 
		[ 59 , 'Mace of smiting' ] , 
		[ 60 , 'Mace of terror' ] , 
		[ 61 , 'Mantle of spell resistance' ] , 
		[ 62 , 'Necklace of prayer beads' ] , 
		[ 63 , 'Periapt of proof against poison' ] , 
		[ 64 , 'Ring of animal influence' ] , 
		[ 65 , 'Ring of evasion' ] , 
		[ 66 , 'Ring of feather falling' ] , 
		[ 67 , 'Ring of free action' ] , 
		[ 68 , 'Ring of protection' ] , 
		[ 69 , 'Ring of resistance' ] , 
		[ 70 , 'Ring of spell storing' ] , 
		[ 71 , 'Ring of the ram' ] , 
		[ 72 , 'Ring of X-ray vision' ] , 
		[ 73 , 'Robe of eyes' ] , 
		[ 74 , 'Rod of rulership' ] , 
		[ 75 , 'Rod of the pact keeper, +2' ] , 
		[ 76 , 'Rope of entanglement' ] , 
		[ 77 , 'Armor, +1 scale mail' ] , 
		[ 78 , 'Armor of resistance (scale mail)' ] , 
		[ 79 , 'Shield, +2' ] , 
		[ 80 , 'Shield of missile attraction' ] , 
		[ 81 , 'Staff of charming' ] , 
		[ 82 , 'Staff of healing' ] , 
		[ 83 , 'Staff of swarming insects' ] , 
		[ 84 , 'Staff of the woodlands' ] , 
		[ 85 , 'Staff of withering' ] , 
		[ 86 , 'Stone of controlling earth elementals' ] , 
		[ 87 , 'Sun blade' ] , 
		[ 88 , 'Sword of life stealing' ] , 
		[ 89 , 'Sword of wounding' ] , 
		[ 90 , 'Tentacle rod' ] , 
		[ 91 , 'Vicious weapon' ] , 
		[ 92 , 'Wand of binding' ] , 
		[ 93 , 'Wand of enemy detection' ] , 
		[ 94 , 'Wand of fear' ] , 
		[ 95 , 'Wand of fireballs' ] , 
		[ 96 , 'Wand of lightning bolts' ] , 
		[ 97 , 'Wand of paralysis' ] , 
		[ 98 , 'Wand of the war mage, +2' ] , 
		[ 99 , 'Wand of wonder' ] , 
		[ 100 , 'Wings of flying' ] , 
	];
	var MagicItemsH=
	[
		[ 10 , 'Weapon, +3' ] , 
		[ 12 , 'Amulet of the planes' ] , 
		[ 14 , 'Carpet of flying' ] , 
		[ 16 , 'Crystal ball (very rare version)' ] , 
		[ 18 , 'Ring of regeneration' ] , 
		[ 20 , 'Ring of shooting stars' ] , 
		[ 22 , 'Ring of telekinesis' ] , 
		[ 24 , 'Robe of scintillating colors' ] , 
		[ 26 , 'Robe of stars' ] , 
		[ 28 , 'Rod of absorption' ] , 
		[ 30 , 'Rod of alertness' ] , 
		[ 32 , 'Rod of security' ] , 
		[ 34 , 'Rod of the pact keeper, +3' ] , 
		[ 36 , 'Scimitar of speed' ] , 
		[ 38 , 'Shield, +3' ] , 
		[ 40 , 'Staff of fire' ] , 
		[ 42 , 'Staff of frost' ] , 
		[ 44 , 'Staff of power' ] , 
		[ 46 , 'Staff of striking' ] , 
		[ 48 , 'Staff of thunder and lightning' ] , 
		[ 50 , 'Sword of sharpness' ] , 
		[ 52 , 'Wand of polymorph' ] , 
		[ 54 , 'Wand of the war mage, +3' ] , 
		[ 55 , 'Adamantine armor (half plate)' ] , 
		[ 56 , 'Adamantine armor (plate)' ] , 
		[ 57 , 'Animated shield' ] , 
		[ 58 , 'Belt of fire giant strength' ] , 
		[ 59 , 'Belt of frost giant strength (or stone)' ] , 
		[ 60 , 'Armor, +1 breastplate' ] , 
		[ 61 , 'Armor of resistance (breastplate)' ] , 
		[ 62 , 'Candle of invocation' ] , 
		[ 63 , 'Armor, +2 chain mail' ] , 
		[ 64 , 'Armor, +2 chain shirt' ] , 
		[ 65 , 'Cloak of arachnida' ] , 
		[ 66 , 'Dancing sword' ] , 
		[ 67 , 'Demon armor' ] , 
		[ 68 , 'Dragon scale mail' ] , 
		[ 69 , 'Dwarven plate' ] , 
		[ 70 , 'Dwarven thrower' ] , 
		[ 71 , 'Efreeti bottle' ] , 
		[ 72 , 'Figurine of wondrous power (obsidian steed)' ] , 
		[ 73 , 'Frost brand' ] , 
		[ 74 , 'Helm of brilliance' ] , 
		[ 75 , 'Horn of Valhalla (bronze)' ] , 
		[ 76 , 'Instrument of the bards (Anstruth harp)' ] , 
		[ 77 , 'Ioun stone (absorption)' ] , 
		[ 78 , 'Ioun stone (agility)' ] , 
		[ 79 , 'Ioun stone (fortitude)' ] , 
		[ 80 , 'Ioun stone (insight)' ] , 
		[ 81 , 'Ioun stone (intellect)' ] , 
		[ 82 , 'Ioun stone (leadership)' ] , 
		[ 83 , 'Ioun stone (strength)' ] , 
		[ 84 , 'Armor, +2 leather' ] , 
		[ 85 , 'Manual of bodily health' ] , 
		[ 86 , 'Manual of gainful exercise' ] , 
		[ 87 , 'Manual of golems' ] , 
		[ 88 , 'Manual of quickness of action' ] , 
		[ 89 , 'Mirror of life trapping' ] , 
		[ 90 , 'Nine lives stealer' ] , 
		[ 91 , 'Oathbow' ] , 
		[ 92 , 'Armor, +2 scale mail' ] , 
		[ 93 , 'Spellguard shield' ] , 
		[ 94 , 'Armor, +1 splint' ] , 
		[ 95 , 'Armor of resistance (splint)' ] , 
		[ 96 , 'Armor, +1 studded leather' ] , 
		[ 97 , 'Armor of resistance (studded leather)' ] , 
		[ 98 , 'Tome of clear thought' ] , 
		[ 99 , 'Tome of leadership and influence' ] , 
		[ 100 , 'Tome of understanding' ]
	];
	var MagicItemsI=
	[
		[ 5 , 'Defender' ] , 
		[ 10 , 'Hammer of thunderbolts' ] , 
		[ 15 , 'Luck blade' ] , 
		[ 20 , 'Sword of answering' ] , 
		[ 23 , 'Holy avenger' ] , 
		[ 26 , 'Ring of djinni summoning' ] , 
		[ 29 , 'Ring of invisibility' ] , 
		[ 32 , 'Ring of spell turning' ] , 
		[ 35 , 'Rod of lordly might' ] , 
		[ 38 , 'Staff of the magi' ] , 
		[ 41 , 'Vorpal sword' ] , 
		[ 43 , 'Belt of cloud giant strength' ] , 
		[ 45 , 'Armor, +2 breastplate' ] , 
		[ 47 , 'Armor, +3 chain mail' ] , 
		[ 49 , 'Armor, +3 chain shirt' ] , 
		[ 51 , 'Cloak of invisibility' ] , 
		[ 53 , 'Crystal ball (legendary version)' ] , 
		[ 55 , 'Armor, +1 half plate' ] , 
		[ 57 , 'Iron flask' ] , 
		[ 59 , 'Armor, +3 leather' ] , 
		[ 61 , 'Armor, +1 plate' ] , 
		[ 63 , 'Robe of the archmagi' ] , 
		[ 65 , 'Rod of resurrection' ] , 
		[ 67 , 'Armor, +1 scale mail' ] , 
		[ 69 , 'Scarab of protection' ] , 
		[ 71 , 'Armor, +2 splint' ] , 
		[ 73 , 'Armor, +2 studded leather' ] , 
		[ 75 , 'Well of many worlds' ] , 
		[ 76 , 'Magic armor (roll d12)' , 
			[
				[ 2 , 'Armor, +2 half plate' ] , 
				[ 4 , 'Armor, +2 plate' ] , 
				[ 6 , 'Armor, +3 studded leather' ] , 
				[ 8 , 'Armor, +3 breastplate' ] , 
				[ 10 , 'Armor, +3 splint' ] , 
				[ 11 , 'Armor, +3 half plate' ] , 
				[ 12 , 'Armor, +3 plate' ] 
			]
		] , 
		[ 77 , 'Apparatus of Kwalish' ] , 
		[ 78 , 'Armor of invulnerability' ] , 
		[ 79 , 'Belt of storm giant strength' ] , 
		[ 80 , 'Cubic gate' ] , 
		[ 81 , 'Deck of many things' ] , 
		[ 82 , 'Efreeti chain' ] , 
		[ 83 , 'Armor of resistance (half plate)' ] , 
		[ 84 , 'Horn of Valhalla (iron)' ] , 
		[ 85 , 'Instrument of the bards (Ollamh harp)' ] , 
		[ 86 , 'Ioun stone (greater absorption)' ] , 
		[ 87 , 'Ioun stone (mastery)' ] , 
		[ 88 , 'Ioun stone (regeneration)' ] , 
		[ 89 , 'Plate armor of etherealness' ] , 
		[ 90 , 'Armor of resistance (plate)' ] , 
		[ 91 , 'Ring of air elemental command' ] , 
		[ 92 , 'Ring of earth elemental command' ] , 
		[ 93 , 'Ring of fire elemental command' ] , 
		[ 94 , 'Ring of three wishes' ] , 
		[ 95 , 'Ring of water elemental command' ] , 
		[ 96 , 'Sphere of annihilation' ] , 
		[ 97 , 'Talisman of pure good' ] , 
		[ 98 , 'Talisman of the sphere' ] , 
		[ 99 , 'Talisman of ultimate evil' ] , 
		[ 100 , 'Tome of the stilled tongue' ] , 
	];

const MAGICitems = new Map();
	MAGICitems.set('Magic Item Table A.' , MagicItemsA);
	MAGICitems.set('Magic Item Table B.' , MagicItemsB);
	MAGICitems.set('Magic Item Table C.' , MagicItemsC);
	MAGICitems.set('Magic Item Table D.' , MagicItemsD);
	MAGICitems.set('Magic Item Table E.' , MagicItemsE);
	MAGICitems.set('Magic Item Table F.' , MagicItemsF);
	MAGICitems.set('Magic Item Table G.' , MagicItemsG);
	MAGICitems.set('Magic Item Table H.' , MagicItemsH);
	MAGICitems.set('Magic Item Table I.' , MagicItemsI);
	
	
	
	
/* ______________
  /   Logic      \____________________________________________________________________________
*/
	//  Seed the d100
	let d100= rollDice(100);
	
	
	//  Roll a 'dSided' dice
	function rollDice( dSided ) {
		return Math.floor(Math.random() *dSided) +1;
	}
    
    //  The main()
    function findRandomTreasure() {
        // Which table to use:  Individual or hoard ???
        var whichTable = document.getElementById("IndOrHoard");
        // Which Challenge Rating
        var ChRat = document.getElementById("ChallengeRating");
        
        var thisArray = null;
        if (whichTable.value == 0) {
			//  Use Individual treasure tables
			calculateCoins( whichArray( Individual[ChRat.value] , d100 ) );
			clearTreasures();
        } else {
			//  Use Hoard treasure tables
			calculateCoins( HOARD[ChRat.value][0] );
			calculateTreasures( whichArray( HOARD[ChRat.value][1] , d100 ) );
        }
    }

	
	
	//  Which array of treasures/coins matches the d100?
	function whichArray( d110Array , dieRoll ) {
		for (let x=0 ; x < d110Array.length ; x++) {
            if (dieRoll <= d110Array[x][0]) {
                return d110Array[x];
            }
        }
	}
	
	
	
	function calculateCoins( coinStr ) {
		document.getElementById("copperDiv").innerHTML   = 'Copper : '+ coinStr[1];
		document.getElementById("silverDiv").innerHTML   = 'Silver : '+ coinStr[2];
		document.getElementById("electrumDiv").innerHTML = 'Electrum : '+ coinStr[3];
		document.getElementById("goldDiv").innerHTML     = 'Gold : '+ coinStr[4];
		document.getElementById("platDiv").innerHTML     = 'Platinum : '+ coinStr[5];
	}
	
	function calculateTreasures( treasureStr ) {
		document.getElementById("gemDiv").innerHTML = '';
		document.getElementById("magicItemsDiv").innerHTML = 'Magic Items : '+ treasureStr[2];
		
		calculateArtNgems( treasureStr[1] );
		calculateMagicItems( treasureStr[2] );
	}
	
	//  Parse through the string [how many] of which items
	function calculateArtNgems( gemsOrArt ) {
		const myArr = gemsOrArt.split(" ");
		if (myArr.length < 3) return;
		
		let HowMany = 0;
		for ( numOfRolls = 0 ; numOfRolls < myArr[0].split('d')[0] ; numOfRolls++) {
			HowMany += rollDice( myArr[0].split('d')[1] );
		}
		
		dRoll = rollDice( GEMS.get( myArr[2] +" "+ myArr[3] +" "+ myArr[4] ) [0] .split('d')[1] );
		document.getElementById("artDiv").innerHTML = 'Art : '+ GEMS.get( myArr[2] +" "+ myArr[3] +" "+ myArr[4] ) [1] [dRoll -1] [1]   +" x"+ HowMany +" worth "+ myArr[2] +" "+ myArr[3] +" "+ myArr[4] ;

	}
	
	//  There might be 2 tables to roll from 
	function calculateMagicItems( magItemsSTR ) {
		//  Clear out previous DIV
		document.getElementById("magicItemsDiv").innerHTML = "Magic Items :";
		if ( magItemsSTR.split(" ").length < 3) return;		// ZERO magic items possible
		
		//  Look for 2 tables to roll against
		let myArr = magItemsSTR.split(' and ');
		if ( myArr[1] ) {
//			document.getElementById("magicItemsDiv").innerHTML += "</br>"+ myArr[1];
			
			parseMagicItems( myArr[1].split(" ")[0] , myArr[1].split(" on ")[1] );
		}
//		document.getElementById("magicItemsDiv").innerHTML += "</br>"+ myArr[0];
		parseMagicItems( myArr[0].split(" ")[1] , myArr[0].split(" on ")[1] );
		
		/*
		Gonna have some problems here:
		Magic Items :Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.
		1d6 times on Magic Item Table B.
		Roll 1d4 times on Magic Item Table A
		
		1)  The second element does not start with "Roll"
		2)  The first element does not end with a period
		
		*/
	}
	
	function parseMagicItems( howManyDice , whichTable ) {
		//  How many times to roll on the Magic Item table
		let HowMany = 0;
		if ( howManyDice == 'once' ) {  
			HowMany=1;
		} else {
			for ( numOfRolls = 0 ; numOfRolls < howManyDice.split('d')[0] ; numOfRolls++) {
				HowMany += rollDice( howManyDice.split('d')[1] );
			}
		}
		
		//  If whichTable does not end with a period, append one
		if ( whichTable.endsWith('.') ) {} else whichTable += '.';
		
		for (Z=0 ; Z < HowMany ; Z++) {
			let magicd100 = rollDice(100);
			if ( whichArray( MAGICitems.get( whichTable ) , magicd100 ) [2] ) {
				//  Some magic items have a list to select from  (eg Table G and I)
				let superDice = rollDice( whichArray( MAGICitems.get( whichTable ) , magicd100 ) [1] .split("(roll d") [1] .split(')')[0] );
				let item = whichArray( whichArray( MAGICitems.get( whichTable ) , magicd100 ) [2] , superDice ) [1];
				document.getElementById("magicItemsDiv").innerHTML += "</br>"+ item ;
			} else {
				document.getElementById("magicItemsDiv").innerHTML += "</br>"+ whichArray( MAGICitems.get( whichTable ) , magicd100 ) [1] ;
			}
		}
	}
	
	function clearTreasures( ) {
		document.getElementById("artDiv").innerHTML = '';
		document.getElementById("gemDiv").innerHTML = '';
		document.getElementById("magicItemsDiv").innerHTML = '';
	}
	
	
	//  Iterate through the HOARD arrays looking for any undefined values
	function validateTables() {
		for (chlngRating=0 ; chlngRating< HOARD.length ; chlngRating++) {
			for (x=0 ; x < HOARD[chlngRating][1].length ; x++) {
				calculateArtNgems( HOARD[chlngRating][1][x][1] );
			}
		}
	}
	function validateMagicItems() {
		for (chlngRating=0 ; chlngRating< HOARD.length ; chlngRating++) {
			for (x=0 ; x < HOARD[chlngRating][1].length ; x++) {
				calculateMagicItems( HOARD[chlngRating][1][x][2] );
			}
		}
	}
