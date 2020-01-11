export interface BandEvent {
  id: number;
  name: string;
  description: string;
  logo?: string;
  location?: FestivalLocation;
  datetime?: Date;
}

export enum FestivalLocation {
  main = 'Main Stage',
  dome = 'The Dome',
  pumpui = 'Pumpui',
  ambyss = 'Ambyss',
  circus = 'Circus',
  mirador = 'Mirador',
  artibarn = 'Artibarn',
  pyramid = 'Pyramid',
  healion = 'Helion'
}

export const LINEUP: Array<BandEvent> = [
  {
    id: 7326803210,
    name: 'Carbon Based Lifeforms Live Band',
    // tslint:disable-next-line: max-line-length
    description: 'The two Swedish scientists of Carbon Based Lifeforms are accompanied by 3 musicians to perform as a band for the first time ever! Carbon Based Lifeforms was founded in Gothenburg in 1996 by Daniel Ringström & Johannes Hedberg, initially as an offshoot of Notch, their group with Mikael Lindqvist. The 1998 album The Path (initially released as a Notch recording) combined atmospheric synthesizers, downtempo beats, acid basslines from a Roland TB-303, didgeridoo and field recordings. The album was released under the CBL moniker as The Phat #000001/The Phat #000002 online in 1999. The duo signed with French ambient/trance label Ultimae Records in 2002, and released a proper debut, Hydroponic Garden in 2003. The album’s downtempo acid ambient style proved to be a cult favorite and the follow-up, World of Sleepers arrived in 2006. In November of 2009, CBL played two sold-out concerts at IMAX dome/planetarium Cosmonova inside Stockholm’s Museum of Natural History. After scrapping sessions for a third album in 2009, the less acid-tinged Interloper finally appeared in 2010, at which point Ringström was known as Daniel Segerstad. CBL switched to beatless ambient music in 2011 with the release of a fourth album, Twentythree, as well as the hour-long drone piece VLA. The duo’s first soundtrack, for suspense-thriller Refuge, was released by Leftfield Records in 2013. In 2015 the duo signed with Blood Music and began remastering some of their older albums for release on vinyl.',
    logo: '5a928fe1c15f151586c92a3dafcb48675605415a.jfif',
    location: FestivalLocation.main
  },
  {
    id: 5789127371,
    name: 'Out of Orbit',
    // tslint:disable-next-line: max-line-length
    description: 'Eitan Reiter goes Out of Orbit! One of the more prolific and diverse voices in electronic music has a new project. Out of Orbit sees Eitan venture into the world of Psychedelic Trance from a different perspective, the outcome of exploring music and sound while extrapolating them into Psytrance. Eitan is well known as one half of LOUD in the Psytrance world and from his ventures into Techno, Acid & Downtempo music as well as a sought-after remixer under his own name. After performing under his many projects all around the globe in every possible venue and festival, such as: Boom Festival, Ozora Festival, Rainbow Serpent, Burning Man, Symbiosis Gathering, Airbeat One, Urban Artforms, XXXperience, Tribe, Dommune, AgeHa, The Block, Gare, Glade Festival, Noisily Festival, Antaris Project, Universo Paralelo Festival and many more, Eitan now takes it up a notch. Out of Orbit is about a musical story deep into trance, a trip through sound that shatters borders between genres. Some of the musicians involved in this project include: Shpongle, Art of Trance (Simon Berry), X-Dream, Shulman, Astrix, Astral Projection, Cosma, Perfect Stranger, Gorovich, Dekel , Rocky Tilbor and more. Out of Orbit will see the release of his debut album on Astrix’s new label Shamanic Tales Records in the beginning of 2020. He will also be performing around the globe with his DJ act as well as with a special live show that includes Synths and cutting edge visuals.',
    logo: '9c01c797063954c18529f5a1ccdba35c184ffbce.jfif',
    location: FestivalLocation.main
  },
  {
    id: 7815234554,
    name: 'Shpongle',
    // tslint:disable-next-line: max-line-length
    description: 'Shpongle is a psychedelic downtempo or Psybient music project. The members are Simon Posford (aka Hallucinogen) and Raja Ram (one third of The Infinity Project). Simon takes care of the production, instrumentation and programming, while Raja Ram is the flautist and Cunning Linguist. They DJ separately and together, Simon having just completed 52 shows in the USA touring with a visual extravaganza known as ‘The Shpongletron’.',
    logo: '7f5f331bacc18aee833dedd6f4c637da890d0001.jfif',
    location: FestivalLocation.main
  },
  {
    id: 1746477158,
    name: 'Hilight Tribe',
    // tslint:disable-next-line: max-line-length
    description: 'Undoubtedly the European icons of electro-instrumental bands, Hilight Tribeʼs destiny is to unleash their message of peace and unity between all cultures. Their 100% Live performances have converted the fiercest skeptics into dancing and singing as one with the rest of the crowd. Throughout their epic journeys from San Paolo to Bombay and Tokyo their values align with the tribes and ancient civilizations they look up to and reinterpret throughout their albums and live shows. On top of their 8 albums and more than 700 shows, their recent collaborations with Armin Van Buuren and Vini Vici (Free Tibet Rmx, Great Spirit, Moyoni) have expanded the Tribeʼs visibility on a wider scale worldwide yet creating more momentum for the Tribe to pass their message to a greater audience.',
    logo: 'fe1816c44970b27716e4e68c6ac2c631103881f6.jfif',
    location: FestivalLocation.main
  },
  {
    id: 4286250764,
    name: 'Vlastur Band',
    // tslint:disable-next-line: max-line-length
    description: 'Vlastur started his journey into music as a bass player. Back in the mid-80’s he was a founding member of the Cohash Funk, an underground funky Athenian group. In 1998 alongside Frequency Freak, fellow Cohash funk guitarist and Spiris, a dubby drummer, formed “Apeuthias Syndesi” now known as Direct Connection, a dub experimental laboratory. They released “Dub Infection” in 2007. Even though he started as a bassist in Direct Connection, he was the main FX sound engineer of the band. Vlastur Dub Band is his fully live project. The active members right now are: Dark Elf (Synth/Machines) , Adil Smaali on vox and Moroccan instruments, Nikos Korkovilis on drums, Nickolas Yiakoumis on guitars and special guest for our last gigs has been Daniel Symon a.k.a. Dymons on percussions. In September 2019 he released the EP ” Vlastur Dub Band in Trance”(Parvati Records) which is based on the live performance of the band at O.Z.O.R.A. Festival Hungary (Main Stage) 2018.',
    logo: 'a8e507eb418edd8a10d108818c73d82800c862d8.jfif',
    location: FestivalLocation.main
  },
  {
    id: 3263441296,
    name: 'Tsuyoshi Suzuki',
    // tslint:disable-next-line: max-line-length
    description: 'Landed in London in 1993 and set up the legendary trance label Matsuri Productions, and has had many smash hit stuff since then. His regular event Return To The Source in London was a big success and he has traveled everywhere in the world. He became one of the world-wide known, top DJs from Japan. He produced Issey Miyake Tokyo / Paris collection in ’98, his electro-rock band Joujouka started in the same year as well. He moved his base to Tokyo in 2000 and started to organize global genre-less parties, “Tokio Drome” Liquid Room in Tokyo, setting up electro-rock label Madskippers. Madskippers are now doing events as a mix between club concept and rock concert style together with Club Asia in Shibuya Tokyo. Joujouka is preparing their new album and world tour later this year.',
    logo: 'ab67616d0000b273f19a376a5c1e36bc99978deb.jpeg',
    location: FestivalLocation.main
  },
  {
    id: 5000935723,
    name: 'James Monro',
    // tslint:disable-next-line: max-line-length
    description: 'Born in the UK and now settled in South America, James Monro’s immersion within the music industry goes back some 30 years. Having been classically trained at school, James’ musical influences diverged into a long and keen love affair with all things electronic. From his initiation into the otherworldly sounds of Yello, Jean Michelle Jarre, Tangerine Dream, Visage, Human League, Brian Eno, Georgio Moroder and the more left field electronic experimental bands of the early 80’s, and combined with a deep love of the psychedelic bands of the 70’s, disco and early hip hop, it was inevitable that he fall into a passionate relationship with electronic dance music. He entered into club land, journeyed through the early daze of Acid House, the uk’s “summers of love” in ’88 and ’89 , onto the beaches of Goa in the early ’90’s and out into the global circuit of parties and festivals that have since become his playground. All the while collecting the music as he went, finding and forging his own sound, and starting up the now legendary Flying Rhino Records with 2 friends in 1995.',
    logo: '46521316_2375891612452994_3506728191731433472_n.jpg',
    location: FestivalLocation.main
  },
  {
    id: 4243019753,
    name: 'Altruism',
    // tslint:disable-next-line: max-line-length
    description: 'With over a decade as DJ, Thatha is considered one the top Djs in the world, she puts all her love into her music and it shows in the crowd’s respect and affection. Also her Dj sets are mixed with a lot of harmony and versatility allied to a very good technic, she’s able to take the dancefloor where she wants with her charm and lightness.',
    logo: '1f4227d59817606c4f06a4a617e8aa2cfd2fdc45.jfif',
    location: FestivalLocation.main
  },
  {
    id: 1523800231,
    name: 'Brian Sentient',
    // tslint:disable-next-line: max-line-length
    description: 'Label administrator and resident DJ of Zero One Music, Brian Sentient hails from Los Angeles, California, where he has been one of the top psytrance DJs for many years. He started DJing in San Francisco in 2001, with the legendary (((Thump))) crew. Since then, he has been deeply involved in the psychedelic trance community of California, and has also brought his DJing to a global audience, not only as a psytrance DJ, but also playing a mesh of techno/tech-house for gigs that require a slower BPM.',
    logo: 'avatars-000737087491-v5tw12-t500x500.jpg',
    location: FestivalLocation.main
  },
  {
    id: 6337195739,
    name: 'Filteria',
    // tslint:disable-next-line: max-line-length
    description: 'Jannis Tzikas is a musician and sound designer based in Sweden. Growing up in the synthesizer era, the 80’s, left its musical marks in his life and a desire to produce electronic music. This would naturally lead him to start collecting equipment and composing at the age of 13. A few years later Filteria was formed. His first album “Sky Input” was released in November 2004 on Suntrip Records. It immediately obtained an immense recognition from the Goa scene. In retrospect, Filteria is considered as the spearhead of the NewSchool trend. Jannis discography consists in 2014 of 5 full-length albums and a number of tracks on compilations. During 2007 the side project K.O.B. standing for Kind Of Behaviour was created with a more experimental and arguably darker side than Filteria. Besides the uptempo material, there are also downtempo and ambient beats in the making for an upcoming album. From the ageHa club in Tokyo to the paradise beaches of Brazil to the northern parts of America, all over Europe and more. Jannis had gigs worldwide in over 30 countries and in many of the major festivals. The quest continues…',
    logo: 'Filteria.jpg',
    location: FestivalLocation.main
  },
  {
    id: 4891074491,
    name: 'Ace Ventura',
    // tslint:disable-next-line: max-line-length
    description: 'Ace Ventura is one of the leading and busiest DJs & artists in the progressive and psytrance scene. His music has been topping the charts and he has been touring constantly all over the globe, playing in every possible venue and headlining all major festivals. He is well known for his highly popular mixes, and involved in four other highly successful projects: Alpha Portal (with Astrix), Easy Riders (with Rocky Tilbor), Liquid Ace (with Liquid Soul) and Zentura (with Zen Mechanics).',
    logo: 'cb2cadb6cf2d2782d413aab838e723ceac09d265.jfif',
    location: FestivalLocation.main
  },
  {
    id: 4180438385,
    name: 'Dekel',
    // tslint:disable-next-line: max-line-length
    description: 'The phenomena of DEKEL is not easy to explain in words but when you listen to his music, everything adds up. Every track of the ‘Junior Shaman’ is a perfect combination of tension and intelligent beat drops wrapped in a deep psychedelic atmosphere. In a very short time since launching the project, DEKEL managed to create a real sound signature and a solid fan base. His 1st EP ‘Technoid’ was one of the most successful debut releases in the history of HOMmega Records and DEKEL has become a local sensation in the Israeli scene. The EP was followed by deep banger tunes like ‘Magneto’ and ‘Twister’, which gave DEKEL international recognition. DEKEL is already touring excessively around the world and 2019 is expected to be a very busy year for him as the work on his anticipated debut album is already in process as well.',
    logo: 'd50d0bd65e8d9b178ef5bb407be5218dfac895a8.jfif',
    location: FestivalLocation.main
  },
  {
    id: 5204941639,
    name: 'ON3',
    // tslint:disable-next-line: max-line-length
    description: 'ON3 (One) aka Samuel Wallerstein, has been producing original and innovative psytrance and electronic music since 1996. With well known projects such as PPS Project, Sam Waller and Black & White, Samuel has made a long journey, exploring a high range of musical genres and sounds. While avoiding fashions and mainstream trends, Samuel has been paving his own road in the electronic scene with his own special approach to electronic dance music and his unique sound. Samuel has been performing around the globe for almost two decades, and has released 5 albums and countless EPs and compilation tracks on all leading psytrance labels and beyond. Along the way he has collaborated and exchanged remixes with the likes of Juno Reactor, Art of Trance, Union Jack, Ace Ventura, LOUD, Freedom Fighters, Ticon, Sub6, Pixel, Space Cat and many others.',
    logo: 'ab67616d0000b273083270155a89a0d077bd34cd.jfif',
    location: FestivalLocation.main
  },
  {
    id: 5433049858,
    name: 'Mandala',
    // tslint:disable-next-line: max-line-length
    description: 'Angus Young is a producer from the U.K. whose passion is creating high quality psychedelic trance with an original organic twist. Since the early nineties Angus has been at the heart of the underground psychedelic scene, and was often to be found loading up pack-horses or camels with sound systems to play 14 hour DAT sets in various mountain ranges, deserts and roadless beaches around the world. His music reflects his genuine passion for life itself and his love of pushing the boundaries of experience with faith and relentless positivity wherever he goes.',
    logo: 'a41ab1a9-mandala.jpg',
    location: FestivalLocation.main
  },
  {
    id: 2795098301,
    name: 'Drury Nevil',
    // tslint:disable-next-line: max-line-length
    description: 'Dennis, aka DrURy NeViL, was born and grew up in Athens (Greece). Dennis has been following psychedelic culture since the late 90s. As the scene was evolving, he felt the need to express his vision. So after a long fermentation period, Dennis started composing his seriously groovy tunes under the name DrURy NeViL. DrURy NeViL’s first release came in 2007 with the track “Borderlines”. From then on, he has been constantly present in the scene, collaborating with various labels, such as Mighty Quinn Records, Tantrum Records, Insomnia Records, Sonic Loom Music and many others. Meanwhile he has shared time in studio with many artists, including Orestis, Petran, Freak Planet, Tromo and Antonymous.',
    logo: 'ab67616d0000b2732a2a9c3d62c1115dc4375c93.jfif',
    location: FestivalLocation.main
  },
  {
    id: 4040884093,
    name: 'Yabba Dabba',
    // tslint:disable-next-line: max-line-length
    description: 'Yabba Dabba is the French project of Frederick B and Jeremy Q, who both grew up in New Caledonia. They explored the psychedelic world together and this experience brought several connections. Now based in France, they are making a groovy deep and trippy sounds filled with communicative energy.',
    logo: '9647a7a2d2a81ae62083b35026fdae355395d6ec.jfif',
    location: FestivalLocation.main
  }
];

export const DATES = [
  new Date('2020-06-20 20:30'),
  new Date('2020-06-20 22:00'),
  new Date('2020-06-20 23:30'),
  new Date('2020-06-21 01:00'),
  new Date('2020-06-21 02:30'),
  new Date('2020-06-21 04:00'),
  new Date('2020-06-21 05:00'),
  new Date('2020-06-21 06:30'),
  new Date('2020-06-21 08:00'),
  new Date('2020-06-21 09:30'),
  new Date('2020-06-21 11:00'),
  new Date('2020-06-21 13:00'),
  new Date('2020-06-21 14:30'),
  new Date('2020-06-21 20:30'),
  new Date('2020-06-21 22:00'),
  new Date('2020-06-21 23:30'),
  new Date('2020-06-22 01:00'),
  new Date('2020-06-22 02:30'),
  new Date('2020-06-22 03:30'),
  new Date('2020-06-22 04:30'),
  new Date('2020-06-22 05:30'),
  new Date('2020-06-22 07:00'),
  new Date('2020-06-22 09:30'),
  new Date('2020-06-22 11:00'),
  new Date('2020-06-22 12:30'),
  new Date('2020-06-22 14:00'),
  new Date('2020-06-22 15:30'),
  new Date('2020-06-22 20:30'),
  new Date('2020-06-22 22:00'),
  new Date('2020-06-22 23:00'),
  new Date('2020-06-23 00:00'),
  new Date('2020-06-23 01:00'),
  new Date('2020-06-23 02:30'),
  new Date('2020-06-23 03:30'),
  new Date('2020-06-23 06:00'),
  new Date('2020-06-23 07:00'),
  new Date('2020-06-23 08:30'),
  new Date('2020-06-23 10:00'),
  new Date('2020-06-23 11:30'),
  new Date('2020-06-23 13:00'),
  new Date('2020-06-23 14:30'),
  new Date('2020-06-23 16:00'),
  new Date('2020-06-23 20:30'),
  new Date('2020-06-23 22:00'),
  new Date('2020-06-23 23:30')
];
