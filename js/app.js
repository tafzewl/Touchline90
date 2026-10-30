const LEAGUES=[
 {name:"Premier League",country:"England",icon:"PL",clubs:[["Arsenal","ARS",87,"#ef5b4f"],["Aston Villa","AVL",82,"#8e5ca8"],["Bournemouth","BOU",77,"#e85a58"],["Brentford","BRE",78,"#e85a58"],["Brighton & Hove Albion","BHA",80,"#4d83e8"],["Chelsea","CHE",84,"#4d83e8"],["Coventry City","COV",74,"#4d83e8"],["Crystal Palace","CRY",79,"#4d83e8"],["Everton","EVE",77,"#4d83e8"],["Fulham","FUL",78,"#dce5ef"],["Hull City","HUL",73,"#e5b847"],["Ipswich Town","IPS",75,"#4d83e8"],["Leeds United","LEE",76,"#dce5ef"],["Liverpool","LIV",89,"#d64242"],["Manchester City","MCI",91,"#78c9e9"],["Manchester United","MUN",82,"#db3939"],["Newcastle United","NEW",82,"#dce5ef"],["Nottingham Forest","NFO",77,"#db3939"],["Sunderland","SUN",75,"#db3939"],["Tottenham Hotspur","TOT",80,"#dce5ef"]]},
 {name:"La Liga",country:"Spain",icon:"LL",clubs:[["Athletic Club","ATH",80,"#e85a58"],["Atlético Madrid","ATM",86,"#e85a58"],["Osasuna","OSA",76,"#db3939"],["Celta Vigo","CEL",78,"#78c9e9"],["Alavés","ALA",75,"#4d83e8"],["Elche","ELC",74,"#63a77a"],["Barcelona","BAR",89,"#4d72d9"],["Getafe","GET",75,"#4d83e8"],["Levante","LEV",74,"#db3939"],["Málaga","MAL",73,"#78c9e9"],["Racing Santander","RAC",73,"#63a77a"],["Rayo Vallecano","RAY",76,"#e85a58"],["Deportivo La Coruña","DEP",74,"#78c9e9"],["Espanyol","ESP",76,"#78c9e9"],["Real Betis","BET",80,"#63a77a"],["Real Madrid","RMA",92,"#e7d9a7"],["Real Sociedad","RSO",80,"#6da9dc"],["Sevilla","SEV",78,"#e85a58"],["Valencia","VAL",78,"#e5b847"],["Villarreal","VIL",82,"#e5b847"]]},
 {name:"Serie A",country:"Italy",icon:"SA",clubs:[["Inter Milan","INT",88,"#4e83e8"],["AC Milan","MIL",86,"#e85a58"],["Juventus","JUV",85,"#e3e8e3"],["Napoli","NAP",84,"#66b9e9"],["Roma","ROM",81,"#e3a24f"],["Atalanta","ATA",82,"#4d82dc"],["Lazio","LAZ",80,"#78c9e9"],["Fiorentina","FIO",79,"#8e5ca8"],["Bologna","BOL",79,"#e85a58"],["Torino","TOR",77,"#8e5ca8"],["Como","COM",78,"#78c9e9"],["Parma","PAR",75,"#78c9e9"],["Genoa","GEN",76,"#e85a58"],["Udinese","UDI",76,"#dce5ef"],["Cagliari","CAG",74,"#db3939"],["Lecce","LEC",74,"#e5b847"],["Sassuolo","SAS",75,"#63a77a"],["Cremonese","CRE",73,"#e85a58"],["Pisa","PIS",73,"#dce5ef"],["Hellas Verona","VER",74,"#e5b847"]]},
 {name:"Bundesliga",country:"Germany",icon:"BL",clubs:[["Bayern Munich","BAY",91,"#e85a58"],["Borussia Dortmund","BVB",85,"#e5db43"],["FC Schalke 04","S04",78,"#4d83e8"],["Bayer Leverkusen","LEV",84,"#d94b4b"],["RB Leipzig","RBL",83,"#e85a58"],["Eintracht Frankfurt","SGE",80,"#d9e2e1"],["VfB Stuttgart","VFB",81,"#e85a58"],["SC Paderborn 07","SCP",74,"#dce5ef"],["SV Elversberg","ELV",74,"#dce5ef"],["SC Freiburg","SCF",78,"#dce5ef"],["TSG Hoffenheim","TSG",77,"#4d83e8"],["SV Werder Bremen","SVW",77,"#63a77a"],["1. FSV Mainz 05","M05",76,"#e85a58"],["FC Augsburg","FCA",75,"#e85a58"],["1. FC Union Berlin","FCU",76,"#e85a58"],["Hamburger SV","HSV",76,"#4d83e8"],["1. FC Köln","KOE",76,"#e85a58"],["Borussia Mönchengladbach","BMG",77,"#63a77a"]]},
 {name:"Ligue 1",country:"France",icon:"L1",clubs:[["Paris Saint-Germain","PSG",89,"#4c7edb"],["Monaco","ASM",82,"#e85a58"],["Paris FC","PFC",76,"#4d83e8"],["Lille","LIL",81,"#e85a58"],["Rennes","REN",79,"#e85a58"],["Lyon","OL",80,"#4f7bdb"],["Angers","SCO",73,"#dce5ef"],["Strasbourg","STR",78,"#78c9e9"],["Le Mans FC","LEM",73,"#e85a58"],["Auxerre","AJA",74,"#dce5ef"],["Brest","SB29",77,"#e85a58"],["Lorient","FCL",74,"#e5b847"],["Toulouse","TFC",76,"#8e5ca8"],["Nice","OGC",78,"#e85a58"],["Lens","RCL",80,"#e5b847"],["Marseille","OM",82,"#dce7e8"],["Troyes","ESTAC",73,"#4d83e8"],["Le Havre","HAC",73,"#4d83e8"]]},
]
const POSITIONS=["GK","RB","CB","CB","LB","DM","CM","CM","RW","ST","LW","GK","CB","DM","CM","AM","RW","ST","LB","RB","ST"];
const NAMES={
 "Coventry City":["Oliver Dovin","Ben Wilson","Milan van Ewijk","Bobby Thomas","Liam Kitching","Jake Bidwell","Jay Dasilva","Matt Grimes","Ben Sheaf","Victor Torp","Jack Rudoni","Haji Wright","Ellis Simms","Brandon Thomas-Asante","Tatsuhiro Sakamoto","Ephron Mason-Clark"],
 "Hull City":["Konstantinos Tzolakis","Dillon Phillips","Lewie Coyle","Ryan Giles","John Egan","Charles Hughes","Patrick McNair","Brooke Norton-Cuffy","Regan Slater","Hidemasa Morita","Tim Iroegbunam","Abdulkadir Ömür","Matt Crooks","Oliver McBurnie","Joe Gelhardt","Mohamed-Ali Cho","Ilyas Ansah","Nobel Mendy"],
 "Ipswich Town":["Alex Palmer","Christian Walton","Darnell Furlong","Leif Davis","Cedric Kipré","Issa Diop","Jacob Greaves","Dara O'Shea","Azor Matusiwa","Sasa Lukic","Florentino","Jack Taylor","Abdul Fatawu","Jaden Philogene","Julio Enciso","Zian Flemming","Chuba Akpom","Daizen Maeda","Anis Mehmeti","Kjell Scherpen"],
 "Chelsea":["Damián Emiliano Martínez","Mike Penders","Gabriel Slonina","Teddy Sharman-Lowe","Reece James","Malo Gusto","Levi Colwill","Wesley Fofana","Maxence Lacroix","Valentin Barco","Pep Chavarría","Marco Palestra","Moisés Caicedo","Roméo Lavia","Cole Palmer","Morgan Rogers","Pedro Neto","Jamie Bynoe-Gittens","João Pedro","Emmanuel Emegha","Jordan Henderson","Danny Welbeck","Estêvão","Geovany Quenda","Jorrel Hato","Aaron Anselmino"],
 "Manchester United":["Senne Lammens","Karl Darlow","Tom Heaton","Diogo Dalot","Noussair Mazraoui","Matthijs de Ligt","Lisandro Martínez","Harry Maguire","Luke Shaw","Patrick Dorgu","Leny Yoro","Ayden Heaven","Bruno Fernandes","Carlos Baleba","Andrey Santos","Youri Tielemans","Kobbie Mainoo","Manuel Ugarte","Mason Mount","Amad Diallo","Bryan Mbeumo","Matheus Cunha","Marcus Rashford","Benjamin Šeško","Joshua Zirkzee","Shea Lacey","Alejandro Garnacho"],
  "Arsenal":["David Raya","William Saliba","Cristhian Mosquera","Ben White","Piero Hincapié","Gabriel Magalhães","Bukayo Saka","Martin Ødegaard","Eberechi Eze","Viktor Gyökeres","Kai Havertz","Kepa Arrizabalaga","Riccardo Calafiori","Mikel Merino","Illan Meslier","Jurrien Timber","Christos Tzolis","Noni Madueke","Martin Zubimendi","Declan Rice","Myles Lewis-Skelly"],
 "Manchester City":["Gianluigi Donnarumma","Marcus Bettinelli","Gerónimo Rulli","Rico Lewis","Rúben Dias","Marc Guéhi","Joško Gvardiol","Abdukodir Khusanov","Vitor Reis","Rayan Aït-Nouri","Elliot Anderson","Enzo Fernández","Mateo Kovačić","Matheus Nunes","Ayyoub Bouaddi","Allan","Nico O’Reilly","Phil Foden","Rayan Cherki","Jérémy Doku","Iliman Ndiaye","Erling Haaland","Antoine Semenyo","Claudio Echeverri","Tirenioluwa Aiyegbusi"],
 "Liverpool":["Alisson Becker","Joe Gomez","Wataru Endo","Virgil van Dijk","Jeremy Jacquet","Milos Kerkez","Florian Wirtz","Dominik Szoboszlai","Alexander Isak","Alexis Mac Allister","Conor Bradley","Federico Chiesa","Giovanni Leoni","Cody Gakpo","Kostas Tsimikas","Hugo Ekitike","Victor Muñoz","Giorgi Mamardashvili","Freddie Woodman","Jeremie Frimpong","Ryan Gravenberch"],


 "Aston Villa":["Zion Suzuki","Marco Bizot","Matty Cash","Aaron Wan-Bissaka","Pau Torres","Tyrone Mings","Victor Lindelöf","Ian Maatsen","Matteo Ruggeri","Boubacar Kamara","Amadou Onana","Leon Goretzka","John McGinn","Ross Barkley","Emiliano Buendía","Morgan Rogers","Jadon Sancho","Alejandro Garnacho","Nicolas Jackson","Ollie Watkins","Tammy Abraham"],
 "Leeds United":["James Trafford","Michael Zetterer","Jayden Bogle","James Justin","Joe Rodon","Jaka Bijol","Nico Elvedi","Gabriel Gudmundsson","Ethan Ampadu","Ao Tanaka","Anton Stach","Ilia Gruev","Sean Longstaff","Brenden Aaronson","Daniel James","Noah Okafor","Lukas Nmecha","Dominic Calvert-Lewin","Mateo Joseph","Harry Wilson"]
 ,
 "Bournemouth":["Djordje Petrovic","Fraser Forster","Adam Smith","Max Aarons","Marcos Senesi","Illia Zabarnyi","Dean Huijsen","Milos Kerkez","Adrien Truffert","Lewis Cook","Tyler Adams","Alex Scott","Ryan Christie","Marcus Tavernier","Justin Kluivert","Antoine Semenyo","David Brooks","Evanilson","Dango Ouattara","Amine Adli","Ben Doak"],
 "Brentford":["Caoimhin Kelleher","Hakon Valdimarsson","Aaron Hickey","Michael Kayode","Nathan Collins","Sepp van den Berg","Kristoffer Ajer","Rico Henry","Vitaly Janelt","Yehor Yarmoliuk","Mathias Jensen","Mikkel Damsgaard","Kevin Schade","Dango Ouattara","Igor Thiago","Yoane Wissa","Keane Lewis-Potter","Jaidon Anthony","Fabio Carvalho","Milos Kerkez"],
 "Brighton & Hove Albion":["Bart Verbruggen","Jason Steele","Ferdi Kadioglu","Joel Veltman","Lewis Dunk","Jan Paul van Hecke","Olivier Boscagli","Maxim De Cuyper","Mats Wieffer","Carlos Baleba","Yasin Ayari","Matt O'Riley","Pascal Gross","Kaoru Mitoma","Yankuba Minteh","Georginio Rutter","João Pedro","Evan Ferguson","Ibrahim Osman","Charalampos Kostoulas"],
 "Burnley":["James Trafford","Martin Dubravka","Kyle Walker","Connor Roberts","Maxime Estève","Joe Worrall","Hjalmar Ekdal","Lucas Pires","Josh Brownhill","Josh Cullen","Lesley Ugochukwu","Florentino Luís","Jaidon Anthony","Jacob Bruun Larsen","Lyle Foster","Zeki Amdouni","Armando Broja","Marcus Edwards","Luca Koleosho","Wilson Odobert"],
 "Crystal Palace":["Dean Henderson","Walter Benítez","Daniel Muñoz","Tyrick Mitchell","Marc Guéhi","Chris Richards","Maxence Lacroix","Jefferson Lerma","Adam Wharton","Cheick Doucouré","Daichi Kamada","Eberechi Eze","Ismaïla Sarr","Yeremy Pino","Jean-Philippe Mateta","Eddie Nketiah","Evann Guessand","Dwight McNeil","Romain Esse","Matheus França"],
 "Everton":["Jordan Pickford","Mark Travers","Nathan Patterson","Jake O'Brien","James Tarkowski","Jarrad Branthwaite","Vitalii Mykolenko","Michael Keane","James Garner","Idrissa Gueye","Kiernan Dewsbury-Hall","Merlin Röhl","Jack Grealish","Iliman Ndiaye","Dwight McNeil","Beto","Thierno Barry","Carlos Alcaraz","Brennan Johnson","Ainsley Maitland-Niles"],
 "Fulham":["Bernd Leno","Benjamin Lecomte","Kenny Tete","Timothy Castagne","Joachim Andersen","Calvin Bassey","Antonee Robinson","Jorge Cuenca","Sander Berge","Harrison Reed","Alex Iwobi","Emile Smith Rowe","Harry Wilson","Oscar Bobb","Adama Traoré","Raúl Jiménez","Rodrigo Muniz","Samuel Chukwueze","Hugo Larsson","Kevin Santos"],
 "Nottingham Forest":["Matz Sels","Stefan Ortega","Ola Aina","Neco Williams","Murillo","Nikola Milenković","Morato","Nicolò Savona","Douglas Luiz","Elliot Anderson","Ryan Yates","Morgan Gibbs-White","Danilo","Callum Hudson-Odoi","Anthony Elanga","Jota Silva","Chris Wood","Taiwo Awoniyi","Igor Jesus","Omari Hutchinson"],
 "Newcastle United":["Nick Pope","Lukas Hornicek","Kieran Trippier","Tino Livramento","Sven Botman","Fabian Schär","Malick Thiaw","Dan Burn","Lewis Hall","Bruno Guimarães","Sandro Tonali","Joelinton","Jacob Ramsey","Harvey Barnes","Anthony Gordon","Anthony Elanga","Jacob Murphy","Yoane Wissa","William Osula","Nick Woltemade"],
 "Sunderland":["Robin Roefs","Melker Ellborg","Trai Hume","Nordi Mukiele","Omar Alderete","Daniel Ballard","Reinildo","Dennis Cirkin","Granit Xhaka","Noah Sadiki","Enzo Le Fée","Habib Diarra","Chris Rigg","Romaine Mundle","Wilson Isidor","Brian Brobbey","Eliezer Mayenda","Simon Adingra","Chemsdine Talbi","Nilson Angulo"],
 "Tottenham Hotspur":["Guglielmo Vicario","Antonín Kinský","Pedro Porro","Djed Spence","Micky van de Ven","Cristian Romero","Radu Drăgușin","Destiny Udogie","João Palhinha","Pape Matar Sarr","James Maddison","Lucas Bergvall","Xavi Simons","Dejan Kulusevski","Mohammed Kudus","Brennan Johnson","Wilson Odobert","Dominic Solanke","Richarlison","Mathys Tel"],
 "West Ham United":["Alphonse Areola","Mads Hermansen","Aaron Wan-Bissaka","Kyle Walker-Peters","Max Kilman","Jean-Clair Todibo","Konstantinos Mavropanos","El Hadji Malick Diouf","Edson Álvarez","Tomáš Souček","Lucas Paquetá","Mateus Fernandes","Jarrod Bowen","Crysencio Summerville","Mohammed Kudus","Callum Wilson","Niclas Füllkrug","Luis Guilherme","Andy Irving","Freddie Potts"],
 "Wolverhampton Wanderers":["José Sá","Sam Johnstone","Matt Doherty","Nélson Semedo","Toti Gomes","Santiago Bueno","Emmanuel Agbadou","Hugo Bueno","João Gomes","André","Mario Lemina","Jean-Ricner Bellegarde","Jørgen Strand Larsen","Matheus Cunha","Hwang Hee-chan","Rodrigo Gomes","Tolu Arokodare","Marshall Munetsi","Daniel Podence","Fer López"]
 ,
 "Real Madrid":["Thibaut Courtois","Andriy Lunin","Dani Carvajal","Trent Alexander-Arnold","Éder Militão","Antonio Rüdiger","Dean Huijsen","Ibrahima Konaté","Álvaro Carreras","Ferland Mendy","Jude Bellingham","Federico Valverde","Aurélien Tchouaméni","Eduardo Camavinga","Arda Güler","Bernardo Silva","Kylian Mbappé","Vinícius Júnior","Yan Diomandé","Brahim Díaz","Carlos Espí","Denzel Dumfries","Marc Cucurella"],
 "Barcelona":["Dominik Livaković","Joan García","Marc-André ter Stegen","Jules Koundé","Pau Cubarsí","Ronald Araújo","Andreas Christensen","Alejandro Balde","Gerard Martín","Eric García","Rodrigo Hernández","Frenkie de Jong","Pedri","Gavi","Marc Casadó","Fermín López","Lamine Yamal","Raphinha","Anthony Gordon","Karim Adeyemi","Gabriel Jesus","João Cancelo","Ferran Torres","Robert Lewandowski","Roony Bardghji"],
 "Bayern Munich":["Manuel Neuer","Joshua Kimmich","Dayot Upamecano","Kim Min-jae","Alphonso Davies","Aleksandar Pavlović","Leon Goretzka","Jamal Musiala","Michael Olise","Harry Kane","Kingsley Coman","Sven Ulreich","Eric Dier","Raphaël Guerreiro","Konrad Laimer","Thomas Müller","Serge Gnabry","Leroy Sané","Hiroki Ito","Mathys Tel","Bryan Zaragoza"],
 "Paris Saint-Germain":["Lucas Chevalier","Matvey Safonov","Alessandro Longoni","Achraf Hakimi","Marquinhos","Lucas Beraldo","Illia Zabarnyi","Lucas Digne","Lucas Hernández","Nuno Mendes","Willian Pacho","Vitinha","Warren Zaïre-Emery","João Neves","Fabián Ruiz","Senny Mayulu","Dro Fernández","Ousmane Dembélé","Khvicha Kvaratskhelia","Désiré Doué","Ferran Torres","Maghnes Akliouche","Mika Godts","Quentin Ndjantou"],
 "Monaco":["Philipp Köhn","Lukas Hradecky","Vanderson","Wilfried Singo","Thilo Kehrer","Christian Mawissa","Caio Henrique","Denis Zakaria","Lamine Camara","Aladji Bamba","Maghnes Akliouche","Aleksandr Golovin","Takumi Minamino","Ansu Fati","Folarin Balogun","Mika Biereth","George Ilenikhena"],
 "Paris FC":["Obed Nkambadio","Kevin Trapp","Thibault De Smet","Moustapha Mbow","Timothée Kolodziejczak","Samir Chergui","Nhoa Sangui","Maxime Lopez","Ilan Kebbal","Pierre Lees-Melou","Alimami Gory","Jean-Philippe Krasso","Willem Geubbels","Jonathan Ikoné","Ciro Immobile","Luca Koleosho"],
 "Lille":["Berke Özer","Vito Mannone","Thomas Meunier","Aïssa Mandi","Alexsandro","Nathan Ngoy","Romain Perraud","Ismaily","Benjamin André","Ngal'ayel Mukau","Hakon Haraldsson","Angel Gomes","Osame Sahraoui","Matías Fernández-Pardo","Ethan Mbappé","Olivier Giroud","Hamza Igamane","Jonathan David"],
 "Rennes":["Brice Samba","Steve Mandanda","Przemysław Frankowski","Lilian Brassier","Jérémy Jacquet","Anthony Rouault","Adrien Truffert","Mahamadou Nagida","Valentin Rongier","Djaoui Cissé","Seko Fofana","Ludovic Blas","Arnaud Kalimuendo","Mousa Al-Tamari","Kader Meïté","Esteban Lepaul","Breel Embolo"],
 "Lyon":["Dominik Greif","Rémy Descamps","Clinton Mata","Moussa Niakhaté","Duje Ćaleta-Car","Nicolás Tagliafico","Ainsley Maitland-Niles","Corentin Tolisso","Tyler Morton","Tanner Tessmann","Rachid Ghezzal","Malick Fofana","Afonso Moreira","Ernest Nuamah","Endrick","Roman Yaremchuk","Alexandre Lacazette"],
 "Angers":["Hervé Koffi","Melvin Zinga","Carlens Arcus","Jordan Lefort","Ousmane Camara","Jacques Ekomié","Florent Hanin","Himad Abdelli","Yassin Belkhdim","Louis Mouton","Pierrick Capelle","Jim Allevinah","Amine Sbaï","Farid El Melali","Esteban Lepaul","Bamba Dieng","Lilian Raolisoa"],
 "Strasbourg":["Mike Penders","Karl-Johan Johnsson","Guéla Doué","Mamadou Sarr","Ismaël Doukouré","Andrew Omobamidele","Ben Chilwell","Valentin Barco","Habib Diarra","Andrey Santos","Junior Mwanga","Sebastian Nanasi","Dilane Bakwa","Diego Moreira","Emmanuel Emegha","Joaquin Panichelli","Sékou Mara"],
 "Le Mans FC":["Nicolas Kocik","Yannick Liénard","Samuel Yohou","Edwin Quarshie","Dorian Guérin","Hugo Vargas-Ríos","Alexandre Lauray","Dylan Tavares","Dame Guèye","Antoine Rabillard","Edwin Quarshie","Thibaut Rambaud","Patrick Videira","Mathis Touho","Lucas Calodat"],
 "Auxerre":["Donovan Léon","Théo De Percin","Marvin Senaya","Jubal","Sinaly Diomandé","Clément Akpa","Gideon Mensah","Elisha Owusu","Hamed Junior Traorè","Kévin Danois","Assane Dioussé","Lassine Sinayoko","Gaëtan Perrin","Ado Onaiwu","Danny Namaso","Josué Casimir","Florian Ayé"],
 "Brest":["Grégoire Coudert","Radosław Majecki","Kenny Lala","Brendan Chardonnet","Julien Le Cardinal","Soumaïla Coulibaly","Bradley Locko","Jordan Amavi","Hugo Magnetti","Pierre Lees-Melou","Kamory Doumbia","Romain Del Castillo","Mama Baldé","Ludovic Ajorque","Rémy Labeau-Lascary","Abdallah Sima","Romain Faivre"],
 "Lorient":["Yvon Mvogo","Bingourou Kamara","Montassar Talbi","Bamo Meïté","Darlin Yongwa","Igor Silva","Théo Le Bris","Laurent Abergel","Arthur Avom","Laurent Abergel","Pablo Pagis","Jean-Victor Makengo","Aiyegun Tosin","Mohamed Bamba","Sambou Soumano","Eli Junior Kroupi","Bamba Dieng"],
 "Toulouse":["Guillaume Restes","Alex Domínguez","Mark McKenzie","Rasmus Nicolaisen","Charlie Cresswell","Djibril Sidibé","Warren Kamanzi","Cristian Cásseres Jr.","Alexis Vossah","Vincent Sierro","Aron Dønnum","Yann Gboho","Frank Magri","Shavy Babicka","Emersonn","Joshua King","Zakaria Aboukhlal"],
 "Nice":["Yehvann Diouf","Maxime Dupé","Dante","Moïse Bombito","Youssouf Ndayishimiye","Melvin Bard","Jonathan Clauss","Antoine Mendy","Hicham Boudaoui","Tanguy Ndombele","Morgan Sanson","Sofiane Diop","Jérémie Boga","Gaëtan Laborde","Terem Moffi","Evann Guessand","Mohamed-Ali Cho"],
 "Lens":["Robin Risser","Mathew Ryan","Jonathan Gradit","Facundo Medina","Malang Sarr","Deiver Machado","Przemysław Frankowski","Ruben Aguilar","Adrien Thomasson","Andy Diouf","Neil El Aynaoui","Florian Sotoca","Wesley Saïd","Goduine Koyalipou","Odsonne Édouard","Rémy Labeau-Lascary","Mamadou Sangaré"],
 "Marseille":["Gerónimo Rulli","Jeffrey de Lange","Leonardo Balerdi","Benjamin Pavard","Nayef Aguerd","Facundo Medina","Emerson Palmieri","Timothy Weah","Pierre-Emile Højbjerg","Geoffrey Kondogbia","Quinten Timber","Mason Greenwood","Amine Gouiri","Igor Paixão","Pierre-Emerick Aubameyang","Ethan Nwaneri","Robinio Vaz"],
 "Troyes":["Nicolas Lemaitre","Hillel Konaté","Adil Rami","Mehdi Tahrat","Ismaël Boura","Yvann Titi","Kyliane Dong","Renaud Ripart","Youssouf M'Changama","Martin Adeline","Rafiki Saïd","Tanguy Zoukrou","Mouhamed Diop","Alexis Lefebvre","Ilan Kebbal"],
 "Le Havre":["Mory Diaw","Mathieu Gorgelin","Arouna Sanganté","Gautier Lloris","Étienne Youte Kinkoué","Yoann Salmier","Oualid El Hajjam","Christopher Opéri","Abdoulaye Touré","Yassine Kechta","Rassoul Ndiaye","Josué Casimir","Issa Soumaré","André Ayew","Emmanuel Sabbi","Daler Kuzyaev","Koka"],
 "Athletic Club":["Unai Simón","Julen Agirrezabala","Andoni Gorosabel","Dani Vivian","Aitor Paredes","Yuri Berchiche","Iñigo Lekue","Oihan Sancet","Mikel Jauregizar","Beñat Prados","Iñaki Williams","Nico Williams","Gorka Guruzeta","Álex Berenguer","Unai Gómez","Yeray Álvarez"],
 "Atlético Madrid":["Jan Oblak","Juan Musso","Nahuel Molina","Marcos Llorente","Robin Le Normand","José María Giménez","Clement Lenglet","David Hancko","Matteo Ruggeri","Koke","Pablo Barrios","Rodrigo De Paul","Conor Gallagher","Antoine Griezmann","Julián Álvarez","Alexander Sørloth","Giuliano Simeone","Álex Baena","Thiago Almada","Ademola Lookman"],
 "Osasuna":["Sergio Herrera","Aitor Fernández","Jesús Areso","Alejandro Catena","David García","Jorge Herrando","Juan Cruz","Abel Bretones","Lucas Torró","Jon Moncayola","Aimar Oroz","Moi Gómez","Rubén García","Ante Budimir","Raúl García de Haro","Kike Barja","Bryan Zaragoza","Iker Muñoz"],
 "Celta Vigo":["Ionut Radu","Iván Villar","Javi Rodríguez","Carl Starfelt","Joseph Aidoo","Marcos Alonso","Óscar Mingueza","Sergio Carreira","Fran Beltrán","Ilaix Moriba","Hugo Sotelo","Ferran Jutglà","Iago Aspas","Borja Iglesias","Pablo Durán","Williot Swedberg","Hugo Álvarez","Bryan Zaragoza"],
 "Alavés":["Antonio Sivera","Jesús Owono","Nahuel Tenaglia","Abdel Abqar","Santiago Mouriño","Rafa Marín","Manu Sánchez","Jonny Otto","Antonio Blanco","Ander Guevara","Carlos Benavídez","Denis Suárez","Carles Aleñá","Toni Martínez","Kike García","Carlos Vicente","Abde Rebbach","Stoichkov"],
 "Elche":["Matías Dituro","Iñaki Peña","Héctor Fort","Pedro Bigas","David Affengruber","John Donald","Adrià Pedrosa","Carlos Clerc","Aleix Febas","Marc Aguado","Nicolás Fernández Mercau","Josan","Tete Morente","Rafa Mir","André Silva","Mourad El Ghezouani","Álvaro Rodríguez","Germán Valera"],
 "Getafe":["David Soria","Jiri Letacek","Djené Dakonam","Domingos Duarte","Abdel Abqar","Juan Iglesias","Diego Rico","Allan Nyom","Luis Milla","Mauro Arambarri","Mario Martín","Borja Mayoral","Christantus Uche","Adrián Liso","Juanmi","Alex Sancris","Coba da Costa","Peter Federico"],
 "Levante":["Pablo Campos","Mathew Ryan","Andrés García","Unai Elgezabal","Adrián de la Fuente","Manu Sánchez","Diego Pampín","Roger Brugué","Oriol Rey","Pablo Martínez","Kervin Arriaga","José Luis Morales","Carlos Álvarez","Iván Romero","Etta Eyong","Brugui","Iker Losada","Víctor García"],
 "Málaga":["Alfonso Herrero","Carlos López","Nelson Monte","Álex Pastor","Juande Rivas","Nelson Monte","Víctor García","Dani Sánchez","Rafa Rodríguez","Luismi","Dioni","David Larrubia","Antoñito Cordero","Loren Zúñiga","Juanpe","Sergio Castel","Ramón Enríquez","Kevin Medina"],
 "Racing Santander":["Jokin Ezkieta","Álvaro Mantilla","Manu Hernando","Pablo Ramón","Mario García","Saúl García","Aritz Aldasoro","Íñigo Sainz-Maza","Andrés Martín","Peque Fernández","Arana","Juan Carlos Arana","Jeremy Arévalo","Marco Sangalli","Germán Sánchez","Unai Vencedor","Clément Michelin","Lago Junior"],
 "Rayo Vallecano":["Augusto Batalla","Dani Cárdenas","Andrei Rațiu","Florian Lejeune","Abdul Mumin","Pep Chavarría","Alfonso Espino","Pathé Ciss","Óscar Valentín","Unai López","Isi Palazón","Álvaro García","Jorge de Frutos","Sergio Camello","Randy Nteka","Adrián Embarba","Pedro Díaz","Fran Pérez"],
 "Deportivo La Coruña":["Germán Parreño","Eric Puerto","Ximo Navarro","Pablo Vázquez","Dani Barcia","Pablo Martínez","Rafael Obrador","Sergio Escudero","Diego Villares","José Ángel","Mario Soriano","Yeremay Hernández","David Mella","Cristian Herrera","Iván Barbero","Zakaria Eddahchouri","Lucas Noubi","Charlie Patiño"],
 "Espanyol":["Joan García","Fernando Pacheco","Omar El Hilali","Marash Kumbulla","Leandro Cabrera","Fernando Calero","Carlos Romero","Brian Oliván","Pol Lozano","Urko González de Zárate","Edu Expósito","Javi Puado","Pere Milla","Tyrhys Dolan","Roberto Fernández","Antoniu Roca","Jofre Carreras","Kike García"],
 "Real Betis":["Álvaro Valles","Adrián","Héctor Bellerín","Marc Bartra","Diego Llorente","Natan","Ricardo Rodríguez","Junior Firpo","Sergi Altimira","Marc Roca","Pablo Fornals","Isco","Giovani Lo Celso","Antony","Abde Ezzalzouli","Aitor Ruibal","Cédric Bakambu","Cucho Hernández","Ángel Ortiz","Nelson Deossa"],
 "Real Sociedad":["Álex Remiro","Unai Marrero","Hamari Traoré","Igor Zubeldia","Jon Martín","Aritz Elustondo","Aihen Muñoz","Sergio Gómez","Martín Zubimendi","Brais Méndez","Takefusa Kubo","Mikel Oyarzabal","Ander Barrenetxea","Orri Óskarsson","Sheraldo Becker","Pablo Marín","Luka Sučić","Carlos Soler"],
 "Sevilla":["Odysseas Vlachodimos","Ørjan Nyland","José Ángel Carmona","Loïc Badé","Kike Salas","Nemanja Gudelj","Marcao","Adrià Pedrosa","Juanlu Sánchez","Lucien Agoumé","Djibril Sow","Sambi Lokonga","Isaac Romero","Dodi Lukébakio","Rubén Vargas","Peque Fernández","Chidera Ejuke","Alexis Sánchez"],
 "Valencia":["Julen Agirrezabala","Stole Dimitrievski","Dimitri Foulquier","Mouctar Diakhaby","Cristhian Mosquera","César Tárrega","José Gayà","Jesús Vázquez","Pepelu","Javi Guerra","André Almeida","Diego López","Luis Rioja","Hugo Duro","Arnaut Danjuma","Hugo Guillamón","Fran Pérez","Lucas Beltrán"],
 "Villarreal":["Luiz Júnior","Diego Conde","Juan Foyth","Pau Navarro","Logan Costa","Renato Veiga","Sergi Cardona","Alfonso Pedraza","Santi Comesaña","Dani Parejo","Pape Gueye","Álex Baena","Tajon Buchanan","Nicolas Pépé","Ayoze Pérez","Gerard Moreno","Thierno Barry","Georges Mikautadze","Ilias Akhomach","Yeremy Pino"],
 "Inter Milan":["Yann Sommer", "Josep Martínez", "Alessandro Bastoni", "Benjamin Pavard", "Francesco Acerbi", "Yann Bisseck", "Federico Dimarco", "Denzel Dumfries", "Hakan Çalhanoğlu", "Nicolò Barella", "Henrikh Mkhitaryan", "Piotr Zieliński", "Davide Frattesi", "Carlos Augusto", "Lautaro Martínez", "Marcus Thuram", "Mehdi Taremi", "Pio Esposito"],
 "AC Milan":["Mike Maignan", "Pietro Terracciano", "Fikayo Tomori", "Strahinja Pavlović", "Matteo Gabbia", "Malick Thiaw", "Theo Hernández", "Davide Bartesaghi", "Alexis Saelemaekers", "Youssouf Fofana", "Ruben Loftus-Cheek", "Tijjani Reijnders", "Christian Pulisic", "Rafael Leão", "Santiago Giménez", "Christopher Nkunku", "Niclas Füllkrug", "Samuele Ricci"],
 "Juventus":["Michele Di Gregorio", "Mattia Perin", "Bremer", "Federico Gatti", "Pierre Kalulu", "Lloyd Kelly", "Andrea Cambiaso", "Juan Cabal", "Manuel Locatelli", "Khéphren Thuram", "Teun Koopmeiners", "Weston McKennie", "Fabio Miretti", "Kenan Yıldız", "Francisco Conceição", "Dušan Vlahović", "Jonathan David", "Arkadiusz Milik"],
 "Napoli":["Alex Meret","Vanja Milinković-Savić","Nikita Contini","Claudio Pugliese","Giovanni Di Lorenzo","Sam Beukema","Benoît Badiashile","Amir Rrahmani","Rafa Marín","Mathías Olivera","Leonardo Spinazzola","Costantino Favasuli","Kevin De Bruyne","Billy Gilmour","Stanislav Lobotka","Scott McTominay","Frank Anguissa","Antonio Vergara","David Neres","Alisson Santos","Rasmus Højlund","Noa Lang","Lorenzo Lucca","Matteo Politano"],
 "Roma":["Mile Svilar", "Pierluigi Gollini", "Gianluca Mancini", "Evan Ndicka", "Mario Hermoso", "Zeki Çelik", "Wesley França", "Angeliño", "Bryan Cristante", "Manu Koné", "Neil El Aynaoui", "Lorenzo Pellegrini", "Niccolò Pisilli", "Paulo Dybala", "Matías Soulé", "Artem Dovbyk", "Evan Ferguson", "Donyell Malen"],
 "Atalanta":["Marco Carnesecchi", "Francesco Rossi", "Isak Hien", "Sead Kolašinac", "Berat Djimsiti", "Giorgio Scalvini", "Davide Zappacosta", "Raoul Bellanova", "Éderson", "Marten de Roon", "Mario Pašalić", "Lazar Samardžić", "Charles De Ketelaere", "Ademola Lookman", "Gianluca Scamacca", "Nikola Krstović", "Giacomo Raspadori", "Daniel Maldini"],
 "Lazio":["Ivan Provedel", "Christos Mandas", "Alessio Romagnoli", "Mario Gila", "Samuel Gigot", "Adam Marušić", "Nuno Tavares", "Manuel Lazzari", "Mattéo Guendouzi", "Nicolò Rovella", "Matías Vecino", "Fisayo Dele-Bashiru", "Boulaye Dia", "Mattia Zaccagni", "Pedro Rodríguez", "Gustav Isaksen", "Valentín Castellanos", "Tijjani Noslin"],
 "Fiorentina":["David de Gea", "Christensen", "Pietro Comuzzo", "Luca Ranieri", "Marin Pongračić", "Dodô", "Robin Gosens", "Fabiano Parisi", "Rolando Mandragora", "Nicolò Fagioli", "Cher Ndour", "Albert Gudmundsson", "Moise Kean", "Roberto Piccoli", "Lucas Beltrán", "Riccardo Sottil", "Andrea Colpani", "Giovanni Fabbian"],
 "Bologna":["Łukasz Skorupski", "Federico Ravaglia", "Jhon Lucumí", "Sam Beukema", "Martin Vitík", "Nicolò Casale", "Juan Miranda", "Emil Holm", "Remo Freuler", "Lewis Ferguson", "Tommaso Pobega", "Nikola Moro", "Riccardo Orsolini", "Dan Ndoye", "Jens Odgaard", "Santiago Castro", "Thijs Dallinga", "Federico Bernardeschi"],
 "Torino":["Alberto Paleari", "Franco Israel", "Saúl Coco", "Guillermo Maripán", "Ardian Ismajli", "Valentino Lazaro", "Marcus Pedersen", "Cristiano Biraghi", "Gvidas Gineitis", "Nikola Vlašić", "Cesare Casadei", "Tino Anjorin", "Duván Zapata", "Giovanni Simeone", "Che Adams", "Alieu Njie", "Aboukhlal", "Kulenović"],
 "Como":["Emil Audero", "Jean Butez", "Alberto Dossena", "Marc-Oliver Kempf", "Jacobo Ramón", "Ivan Smolčić", "Álex Valle", "Mërgim Vojvoda", "Máximo Perrone", "Lucas Da Cunha", "Martin Baturina", "Nico Paz", "Maxence Caqueret", "Sergi Roberto", "Assane Diao", "Anastasios Douvikas", "Álvaro Morata", "Kuhn"],
 "Parma":["Zion Suzuki", "Edoardo Corvi", "Enrico Delprato", "Alessandro Circati", "Lautaro Valenti", "Emanuele Valeri", "Sascha Britschgi", "Nahuel Estévez", "Adrián Bernabé", "Mandela Keita", "Simon Sohm", "Hernani", "Dennis Man", "Mateo Pellegrino", "Ange-Yoan Bonny", "Pontus Almqvist", "Gabriel Strefezza", "Adrian Benedyczak"],
 "Genoa":["Justin Bijlow", "Nicola Leali", "Johan Vásquez", "Koni De Winter", "Alessandro Marcandalli", "Aaron Martin", "Brooke Norton-Cuffy", "Sebastian Otoa", "Morten Frendrup", "Mikael Egill Ellertsson", "Ruslan Malinovskyi", "Tommaso Baldanzi", "Albert Grønbæk", "Vitinha", "Lorenzo Colombo", "Jeff Ekhator", "Junior Messias", "Caleb Ekuban"],
 "Udinese":["Maduka Okoye", "Daniele Padelli", "Oumar Solet", "Jaka Bijol", "Thomas Kristensen", "Jordan Zemura", "Hassane Kamara", "Kingsley Ehizibue", "Jesper Karlström", "Sandi Lovrić", "Jurgen Ekkelenkamp", "Arthur Atta", "Lennon Miller", "Lorenzo Lucca", "Keinan Davis", "Iker Bravo", "Nicolo Zaniolo", "Vakoun Bayo"],
 "Cagliari":["Elia Caprile", "Simone Scuffet", "Yerry Mina", "Sebastiano Luperto", "Gabriele Zappa", "Adam Obert", "Zé Pedro", "Tommaso Augello", "Antoine Makoumbou", "Alessandro Deiola", "Matteo Prati", "Gianluca Gaetano", "Zito Luvumbo", "Sebastiano Esposito", "Andrea Belotti", "Boris Radunović", "Leonardo Pavoletti", "Gabriele Zappa"],
 "Lecce":["Wladimiro Falcone", "Francesco Borbei", "Federico Baschirotto", "Tiago Gabriel", "Kialonda Gaspar", "Antonino Gallo", "Danilo Veiga", "Ylber Ramadani", "Lassana Coulibaly", "Medon Berisha", "Balthazar Pierret", "Tete Morente", "Lameck Banda", "Riccardo Sottil", "Nikola Krstović", "Francesco Camarda", "Santiago Pierotti", "Konan N'Dri"],
 "Sassuolo":["Arijanet Murić", "Giacomo Satalino", "Jay Idzes", "Tarik Muharemović", "Filippo Romagna", "Josh Doig", "Jeremy Toljan", "Sebastian Walukiewicz", "Nemanja Matić", "Kristian Thorstvedt", "Daniel Boloca", "Ismaël Koné", "Domenico Berardi", "Armand Laurienté", "Andrea Pinamonti", "Walid Cheddira", "Cristian Volpato", "Luca Moro"],
 "Cremonese":["Emil Audero", "Marco Silvestri", "Matteo Bianchetti", "Federico Baschirotto", "Luca Ravanelli", "Tommaso Barbieri", "Giuseppe Pezzella", "Michele Collocolo", "Martín Payero", "Jari Vandeputte", "Franco Vázquez", "Dennis Johnsen", "Federico Bonazzoli", "Jamie Vardy", "Antonio Sanabria", "Farès Ghedjemis", "Milan Đurić", "Alessio Zerbin"],
 "Pisa":["Simone Scuffet", "Adrian Šemper", "Antonio Caracciolo", "Simone Canestrelli", "Arturo Calabresi", "Samuele Angori", "Idrissa Touré", "Marin Šverko", "Michel Aebischer", "Marius Marin", "Mehdi Léris", "Gabriele Piccinini", "Stefano Moreo", "M'Bala Nzola", "Henrik Meister", "Matteo Tramoni", "Lorran", "Rafiu Durosinmi"],
 "Hellas Verona":["Lorenzo Montipò", "Simone Perilli", "Diego Coppola", "Victor Nelsson", "Pawel Dawidowicz", "Domagoj Bradarić", "Jackson Tchatchoua", "Ondrej Duda", "Suat Serdar", "Abdou Harroui", "Tomas Suslov", "Gift Orban", "Amin Sarr", "Daniel Mosquera", "Tijjani Noslin", "Roberto Gagliardini", "Kieron Bowie", "Martin Frese"],

 "FC Schalke 04":["Loris Karius","Kevin Müller","Johannes Siebeking","Hasan Kurucay","Timo Becker","Robin Gosens","Adrian Gantenbein","Nikola Katic","Tomáš Kalas","Anton Donkor","Vitalie Becker","Maximilian Wöber","Mertcan Ayhan","Ron Schallenberg","Satoshi Tanaka","Janik Bachmann","Kenan Karaman","Dejan Ljubicic","Soufiane El-Faouzi","Adil Aouchiche","Finn Porath","Eric Ebimbe","Max Grüger","Hee-chan Hwang","Moussa Sylla","Edin Džeko","Bryan Lasme","Emil Höjlund","Junior Adamu","Zaid Tchibara"],
 "SV Elversberg":["Frank Lehmann","Elias Etringer","Nicolas Kristof","Tim Boss","Nicholas Mickelson","Florian Le Joncour","Luis Seifert","Lukas Pinckert","Lasse Günther","Luca Sirch","Jan Gyamerah","Maximilian Rohr","Felix Keidel","Amara Condé","Maurice Krattenmacher","Łukasz Poręba","Noah Darvich","Raif Adam","Frederik Schmahl","Lukas Petkov","Tom Zimmerschied","Francis Onyeka","Noel Futkeu","Luca Pfeiffer","Luca Schnellbacher","Cole Campbell","David Mokwa"],
 "SC Paderborn 07":["Markus Schubert","Nahuel Noll","Florian Pruhs","Tristan Zobel","Jonah Sticker","Nyamekye Awortwie-Grant","Laurin Curda","Jano ter Horst","Tjark Scheller","Clemens Lippmann","Marcel Hoffmeier","Santiago Castaneda","Tom Baack","Luka Duric","Albert Millgramm","Felix Götze","Mattes Hansen","Raphael Obermair","Niklas Mohr","Sebastian Klaas","Laurin Ulrich","Timur Gayret","Oliver Batista Meier","Rayan Philippe","Kennedy Okpala","Sven Michel","Marvin Pieringer","Steffen Tigges","Lucas Copado","Gabriel Vidovic"],
 "Borussia Dortmund":["Gregor Kobel","Patrick Drewes","Silas Ostrzinski","Diant Ramaj","Alexander Meyer","Waldemar Anton","Nico Schlotterbeck","Ramy Bensebaini","Joane Gadou","Daniel Svensson","Julian Ryerson","Kaua Prates","Filippo Mané","Luca Reggiani","Jobe Bellingham","Felix Nmecha","Carney Chukwuemeka","Ethan Nwaneri","Konstantinos Karetsas","Marcel Sabitzer","Emre Can","Joey Veerman","Giannis Konstantelias","Serhou Guirassy","Maximilian Beier","Fábio Silva","Samuele Inácio","Mathis Albert"],
 "Bayer Leverkusen":["Janis Blaswich","Mark Flekken","Edmond Tapsoba","Jonathan Tah","Jeanuël Belocian","Guéla Doué","Facundo Medina","Miguel Gutiérrez","Alejandro Grimaldo","Arthur","Aleix García","Exequiel Palacios","Robert Andrich","Malik Tillman","Ibrahim Maza","Moussa Diaby","Florian Wirtz","Victor Boniface","Patrik Schick","Aleksandar Damjanović","Kerim Alajbegović"],
 "RB Leipzig":["Péter Gulácsi","Maarten Vandevoordt","Benjamin Henrichs","Willi Orbán","Castello Lukeba","David Raum","El Chadaille Bitshiabu","Lukas Klostermann","Max Finkgräfe","Ridle Baku","Nicolas Seiwald","Christoph Baumgartner","Assan Ouédraogo","Ezechiel Banzuzi","Rocco Reitz","Andrija Maksimović","Antonio Nusa","Conrad Harder","Rômulo","Johan Bakayoko","Yan Diomande","Suleman Sani"],
 "Eintracht Frankfurt":["Noah Atubolu","Jens Grahl","Amil Siljevic","Kaua Santos","Elias Baum","Lilian Brassier","Robin Koch","Otávio","Keita Kosugi","Pharrell Collins","Oscar Höjlund","Noel Aseko","Timothy Chandler","Raphael Onyedika","Mario Götze","Can Uzun","Ansgar Knauff","Fares Chaibi","Jonathan Burkardt","Younes Ebnoutalib","Ritsu Doan","Michy Batshuayi"],
 "VfB Stuttgart":["Alexander Nübel","Fabian Bredlow","Jeff Chabot","Waldemar Anton","Ramon Hendriks","Maximilian Mittelstädt","Josha Vagnoman","Pascal Stenzel","Angelo Stiller","Atakan Karazor","Enzo Millot","Chris Führich","Jamie Leweling","Deniz Undav","Ermedin Demirović","Nick Woltemade","Bilal El Khannouss","Tiago Tomás"],
 "SC Freiburg":["Noah Atubolu","Florian Müller","Matthias Ginter","Philipp Lienhart","Jordy Makengo","Christian Günter","Kiliann Sildillia","Max Rosenfelder","Maximilian Eggestein","Patrick Osterhage","Yuito Suzuki","Vincenzo Grifo","Ritsu Doan","Junior Adamu","Lucas Höler","Michael Gregoritsch","Igor Matanović"],
 "TSG Hoffenheim":["Oliver Baumann","Luca Philipp","Ozan Kabak","Kevin Akpoguma","Robin Hranáč","Bernardo","Valentin Gendrey","Alexander Prass","Grischa Prömel","Anton Stach","Andrej Kramarić","Tom Bischof","Finn Becker","Adam Hložek","Max Moerstedt","Fisnik Asllani","Marius Bülter","Bazoumana Touré"],
 "SV Werder Bremen":["Michael Zetterer","Karl Hein","Miloš Veljković","Niklas Stark","Marco Friedl","Anthony Jung","Mitchell Weiser","Felix Agu","Senne Lynen","Jens Stage","Romano Schmid","Leonardo Bittencourt","Justin Njinmah","Marvin Ducksch","Keke Topp","Marco Grüll","Olivier Deman","Victor Boniface","Arthur"],
 "1. FSV Mainz 05":["Robin Zentner","Daniel Batz","Dominik Kohr","Stefan Bell","Andreas Hanche-Olsen","Anthony Caci","Philipp Mwene","Silvan Widmer","Nadiem Amiri","Kaishu Sano","Paul Nebel","Lee Jae-sung","Sota Kawasaki","Armindo Sieb","Jonathan Burkardt","Nelson Weiper","Benedict Hollerbach","Sheraldo Becker"],
 "FC Augsburg":["Finn Dahmen","Nediljko Labrović","Jeffrey Gouweleeuw","Chrislain Matsima","Keven Schlotterbeck","Mads Pedersen","Henri Koudossou","Yannik Keitel","Elvis Rexhbecaj","Arne Maier","Arijon Ibrahimović","Alexis Claude-Maurice","Fabian Rieder","Michael Gregoritsch","Rodrigo Ribeiro","Steve Mounié","Nathanaël Mbuku","Juma Bah"],
 "1. FC Union Berlin":["Frederik Rønnow","Carl Klaus","Danilho Doekhi","Diogo Leite","Kevin Vogt","Christopher Trimmel","Tom Rothe","Josip Juranović","Rani Khedira","András Schäfer","Aljoscha Kemlein","Woo-yeong Jeong","Benedict Hollerbach","Marin Ljubičić","Andrej Ilić","Tim Skarke","Livan Burcu","Ilyas Ansah"],
 "Hamburger SV":["Daniel Heuer Fernandes","Matheo Raab","Luka Vušković","Sebastian Schonlau","Miro Muheim","William Mikelbrencis","Silvan Hefti","Nicolai Remberg","Ludovit Reis","Fabio Baldé","Jean-Luc Dompé","Ransford Königsdörffer","Robert Glatzel","Davie Selke","Bakery Jatta","Immanuel Pherai","Adam Karabec","Yussuf Poulsen"],
 "1. FC Köln":["Marvin Schwäbe","Ron-Robert Zieler","Martin James","Matthias Köbbing","Joël Schmied","Borna Sosa","Timo Hübers","Gideon Mensah","Jahmai Simpson-Pusey","Luka Lochoshvili","Sebastian Sebulonsen","Rav van den Berg","Tom Krauß","Ellyes Skhiri","Ísak Jóhannesson","Saïd El Mala","Reigan Heskey","Alessio Castro-Montes","Jan Thielmann","Linton Maina","Luca Waldschmidt","Ragnar Ache","Thijs Dallinga","Marius Bülter","Mikey Moore"],
 "Borussia Mönchengladbach":["Moritz Nicolas","Jonas Omlin","Ko Itakura","Nico Elvedi","Marvin Friedrich","Luca Netz","Joe Scally","Stefan Lainer","Rocco Reitz","Julian Weigl","Florian Neuhaus","Kevin Stöger","Franck Honorat","Alassane Pléa","Tim Kleindienst","Robin Hack","Nathan Ngoumou","Shio Fukuda"]
};const PLAYER_POSITIONS={
 "Zion Suzuki":"GK","Marco Bizot":"GK","Matty Cash":"RB","Pau Torres":"CB","Tyrone Mings":"CB","Victor Lindelöf":"CB","Ian Maatsen":"LB","Matteo Ruggeri":"LB","Boubacar Kamara":"DM","Amadou Onana":"CM","Leon Goretzka":"CM","John McGinn":"CM","Ross Barkley":"CM","Emiliano Buendía":"AM","Morgan Rogers":"AM","Jadon Sancho":"LW","Alejandro Garnacho":"LW","Ollie Watkins":"ST","Tammy Abraham":"ST",
 "Michael Zetterer":"GK","Jayden Bogle":"RB","James Justin":"RB","Joe Rodon":"CB","Jaka Bijol":"CB","Nico Elvedi":"CB","Gabriel Gudmundsson":"LB","Ethan Ampadu":"DM","Ao Tanaka":"CM","Anton Stach":"CM","Ilia Gruev":"DM","Sean Longstaff":"CM","Brenden Aaronson":"AM","Daniel James":"LW","Noah Okafor":"LW","Lukas Nmecha":"ST","Dominic Calvert-Lewin":"ST","Mateo Joseph":"ST","Harry Wilson":"RW",
 "Djordje Petrovic":"GK","Fraser Forster":"GK","Adam Smith":"RB","Max Aarons":"RB","Marcos Senesi":"CB","Illia Zabarnyi":"CB","Dean Huijsen":"CB","Milos Kerkez":"LB","Adrien Truffert":"LB","Lewis Cook":"CM","Tyler Adams":"DM","Alex Scott":"CM","Ryan Christie":"CM","Marcus Tavernier":"LW","Justin Kluivert":"AM","David Brooks":"RW","Evanilson":"ST","Dango Ouattara":"RW","Amine Adli":"LW","Ben Doak":"RW",
 "Caoimhin Kelleher":"GK","Hakon Valdimarsson":"GK","Aaron Hickey":"RB","Michael Kayode":"RB","Nathan Collins":"CB","Sepp van den Berg":"CB","Kristoffer Ajer":"CB","Rico Henry":"LB","Vitaly Janelt":"CM","Yehor Yarmoliuk":"CM","Mathias Jensen":"CM","Mikkel Damsgaard":"AM","Kevin Schade":"LW","Igor Thiago":"ST","Yoane Wissa":"ST","Keane Lewis-Potter":"LW","Jaidon Anthony":"LW","Fabio Carvalho":"AM",
 "Bart Verbruggen":"GK","Jason Steele":"GK","Ferdi Kadioglu":"LB","Joel Veltman":"RB","Lewis Dunk":"CB","Jan Paul van Hecke":"CB","Olivier Boscagli":"CB","Maxim De Cuyper":"LB","Mats Wieffer":"DM","Carlos Baleba":"CM","Yasin Ayari":"CM","Matt O'Riley":"CM","Pascal Gross":"CM","Kaoru Mitoma":"LW","Yankuba Minteh":"RW","Georginio Rutter":"AM","João Pedro":"ST","Evan Ferguson":"ST","Ibrahim Osman":"LW","Charalampos Kostoulas":"ST",
 "James Trafford":"GK","Martin Dubravka":"GK","Kyle Walker":"RB","Connor Roberts":"RB","Maxime Estève":"CB","Joe Worrall":"CB","Hjalmar Ekdal":"CB","Lucas Pires":"LB","Josh Brownhill":"CM","Josh Cullen":"DM","Lesley Ugochukwu":"DM","Florentino Luís":"DM","Jacob Bruun Larsen":"LW","Lyle Foster":"ST","Zeki Amdouni":"ST","Armando Broja":"ST","Marcus Edwards":"RW","Luca Koleosho":"LW","Wilson Odobert":"LW",
 "Dean Henderson":"GK","Walter Benítez":"GK","Daniel Muñoz":"RB","Tyrick Mitchell":"LB","Marc Guéhi":"CB","Chris Richards":"CB","Maxence Lacroix":"CB","Jefferson Lerma":"DM","Adam Wharton":"CM","Cheick Doucouré":"DM","Daichi Kamada":"AM","Eberechi Eze":"AM","Ismaïla Sarr":"RW","Yeremy Pino":"LW","Jean-Philippe Mateta":"ST","Eddie Nketiah":"ST","Evann Guessand":"ST","Dwight McNeil":"LW","Matheus França":"AM","Romain Esse":"RW",
 "Jordan Pickford":"GK","Mark Travers":"GK","Nathan Patterson":"RB","Jake O'Brien":"CB","James Tarkowski":"CB","Jarrad Branthwaite":"CB","Vitalii Mykolenko":"LB","Michael Keane":"CB","James Garner":"CM","Idrissa Gueye":"DM","Kiernan Dewsbury-Hall":"CM","Merlin Röhl":"CM","Jack Grealish":"LW","Beto":"ST","Thierno Barry":"ST","Carlos Alcaraz":"AM","Brennan Johnson":"RW","Ainsley Maitland-Niles":"RB",
 "Bernd Leno":"GK","Benjamin Lecomte":"GK","Kenny Tete":"RB","Timothy Castagne":"RB","Joachim Andersen":"CB","Calvin Bassey":"CB","Antonee Robinson":"LB","Jorge Cuenca":"CB","Sander Berge":"DM","Harrison Reed":"CM","Alex Iwobi":"LW","Emile Smith Rowe":"AM","Harry Wilson":"RW","Oscar Bobb":"RW","Adama Traoré":"RW","Raúl Jiménez":"ST","Rodrigo Muniz":"ST","Samuel Chukwueze":"RW","Hugo Larsson":"CM","Kevin Santos":"LW",
 "Matz Sels":"GK","Stefan Ortega":"GK","Ola Aina":"RB","Neco Williams":"LB","Murillo":"CB","Nikola Milenković":"CB","Morato":"CB","Nicolò Savona":"RB","Douglas Luiz":"CM","Ryan Yates":"CM","Morgan Gibbs-White":"AM","Danilo":"CM","Callum Hudson-Odoi":"LW","Anthony Elanga":"RW","Jota Silva":"LW","Chris Wood":"ST","Taiwo Awoniyi":"ST","Igor Jesus":"ST","Omari Hutchinson":"RW",
 "Nick Pope":"GK","Lukas Hornicek":"GK","Kieran Trippier":"RB","Tino Livramento":"RB","Sven Botman":"CB","Fabian Schär":"CB","Malick Thiaw":"CB","Dan Burn":"CB","Lewis Hall":"LB","Bruno Guimarães":"CM","Sandro Tonali":"CM","Joelinton":"CM","Jacob Ramsey":"CM","Harvey Barnes":"LW","Anthony Gordon":"LW","Jacob Murphy":"RW","William Osula":"ST","Nick Woltemade":"ST",
 "Robin Roefs":"GK","Melker Ellborg":"GK","Trai Hume":"RB","Nordi Mukiele":"RB","Omar Alderete":"CB","Daniel Ballard":"CB","Reinildo":"LB","Dennis Cirkin":"LB","Granit Xhaka":"CM","Noah Sadiki":"DM","Enzo Le Fée":"CM","Habib Diarra":"CM","Chris Rigg":"AM","Romaine Mundle":"LW","Wilson Isidor":"ST","Brian Brobbey":"ST","Eliezer Mayenda":"ST","Simon Adingra":"RW","Chemsdine Talbi":"RW","Nilson Angulo":"LW",
 "Guglielmo Vicario":"GK","Antonín Kinský":"GK","Pedro Porro":"RB","Djed Spence":"RB","Micky van de Ven":"CB","Cristian Romero":"CB","Radu Drăgușin":"CB","Destiny Udogie":"LB","João Palhinha":"DM","Pape Matar Sarr":"CM","James Maddison":"AM","Lucas Bergvall":"CM","Xavi Simons":"AM","Dejan Kulusevski":"RW","Mohammed Kudus":"RW","Brennan Johnson":"RW","Wilson Odobert":"LW","Dominic Solanke":"ST","Richarlison":"ST","Mathys Tel":"LW",
 "Alphonse Areola":"GK","Mads Hermansen":"GK","Aaron Wan-Bissaka":"RB","Kyle Walker-Peters":"RB","Max Kilman":"CB","Jean-Clair Todibo":"CB","Konstantinos Mavropanos":"CB","El Hadji Malick Diouf":"LB","Edson Álvarez":"DM","Tomáš Souček":"CM","Lucas Paquetá":"AM","Mateus Fernandes":"CM","Jarrod Bowen":"RW","Crysencio Summerville":"LW","Mohammed Kudus":"RW","Callum Wilson":"ST","Niclas Füllkrug":"ST","Luis Guilherme":"RW","Andy Irving":"CM","Freddie Potts":"CM",
 "José Sá":"GK","Sam Johnstone":"GK","Matt Doherty":"RB","Nélson Semedo":"RB","Toti Gomes":"CB","Santiago Bueno":"CB","Emmanuel Agbadou":"CB","Hugo Bueno":"LB","João Gomes":"CM","André":"DM","Mario Lemina":"CM","Jean-Ricner Bellegarde":"CM","Jørgen Strand Larsen":"ST","Matheus Cunha":"ST","Hwang Hee-chan":"LW","Rodrigo Gomes":"RW","Tolu Arokodare":"ST","Marshall Munetsi":"CM","Daniel Podence":"LW","Fer López":"AM",
"Robert Sánchez":"GK","Filip Jørgensen":"GK","Reece James":"RB","Malo Gusto":"RB","Levi Colwill":"CB","Wesley Fofana":"CB","Moisés Caicedo":"DM","Enzo Fernández":"CM","Cole Palmer":"AM","Pedro Neto":"RW","Nicolas Jackson":"ST","Christopher Nkunku":"AM","Roméo Lavia":"DM","Tyrique George":"LW","Jamie Gittens":"LW","Estêvão":"RW","João Pedro":"ST","Liam Delap":"ST",
 "Senne Lammens":"GK","Karl Darlow":"GK","Tom Heaton":"GK","Dermot Mee":"GK","Diogo Dalot":"RB","Matthijs de Ligt":"CB","Lisandro Martínez":"CB","Luke Shaw":"LB","Carlos Baleba":"CM","Bruno Fernandes":"AM","Kobbie Mainoo":"CM","Amad Diallo":"RW","Benjamin Šeško":"ST","Marcus Rashford":"LW","Shea Lacey":"LW","Ayden Heaven":"CB","Jack Fletcher":"CM","Tyler Fletcher":"CM","Bryan Mbeumo":"RW","Noussair Mazraoui":"RB","Harry Maguire":"CB","Patrick Dorgu":"LB","Mason Mount":"AM","Andrey Santos":"CM","Youri Tielemans":"CM","Manuel Ugarte":"DM","Matheus Cunha":"ST","Joshua Zirkzee":"ST","Leny Yoro":"CB","Harry Amass":"LB",
 "Gianluigi Donnarumma":"GK","Gerónimo Rulli":"GK","Marcus Bettinelli":"GK",
 "Abdukodir Khusanov":"CB","Rúben Dias":"CB","Marc Guéhi":"CB","Joško Gvardiol":"LB","Rayan Aït-Nouri":"LB","Antoine Semenyo":"RW","Iliman Ndiaye":"LW","Allan":"CM","Tirenioluwa Aiyegbusi":"RB","Claudio Echeverri":"AM","Vitor Reis":"CB","Rico Lewis":"RB","Kaden Braithwaite":"CB",
 "Elliot Anderson":"CM","Nico O’Reilly":"LB","Matheus Nunes":"RB","Mateo Kovačić":"CM","Ayyoub Bouaddi":"CM","Rayan Cherki":"AM","Enzo Fernández":"CM","Phil Foden":"AM","Floyd Samba":"AM",
 "Antoine Semenyo":"RW","Erling Haaland":"ST","Jérémy Doku":"LW","Iliman Ndiaye":"LW","Allan":"RW","Ryan McAidoo":"RW",
 "David Raya":"GK","William Saliba":"CB","Cristhian Mosquera":"CB","Ben White":"RB","Piero Hincapié":"LB","Gabriel Magalhães":"CB","Bukayo Saka":"RW","Martin Ødegaard":"AM","Eberechi Eze":"AM","Viktor Gyökeres":"ST","Kai Havertz":"ST","Kepa Arrizabalaga":"GK","Riccardo Calafiori":"LB","Mikel Merino":"CM","Illan Meslier":"GK","Jurrien Timber":"RB","Christos Tzolis":"LW","Noni Madueke":"RW","Martin Zubimendi":"DM","Declan Rice":"CM","Myles Lewis-Skelly":"LB",
 "Alisson Becker":"GK","Joe Gomez":"CB","Wataru Endo":"DM","Virgil van Dijk":"CB","Jeremy Jacquet":"CB","Milos Kerkez":"LB","Florian Wirtz":"AM","Dominik Szoboszlai":"CM","Alexander Isak":"ST","Alexis Mac Allister":"CM","Conor Bradley":"RB","Federico Chiesa":"RW","Giovanni Leoni":"CB","Cody Gakpo":"LW","Kostas Tsimikas":"LB","Hugo Ekitike":"ST","Victor Muñoz":"LW","Giorgi Mamardashvili":"GK","Freddie Woodman":"GK","Jeremie Frimpong":"RB","Ryan Gravenberch":"CM",
 "Thibaut Courtois":"GK","Raúl Asencio":"CB","Éder Militão":"CB","Dean Huijsen":"CB","Trent Alexander-Arnold":"RB","Ibrahima Konaté":"CB","Marc Cucurella":"LB","Álvaro Carreras":"LB","Antonio Rüdiger":"CB","Ferland Mendy":"LB","Denzel Dumfries":"RB","Jude Bellingham":"AM","Eduardo Camavinga":"CM","Federico Valverde":"CM","Aurélien Tchouaméni":"DM","Arda Güler":"AM","Bernardo Silva":"CM","Thiago Pitarch":"CM","Kylian Mbappé":"ST","Vinícius Júnior":"LW","Endrick":"ST","Brahim Díaz":"AM","C. Espí":"ST","Yan Diomande":"LW","Andriy Lunin":"GK",
 "Marc-André ter Stegen":"GK","Jules Koundé":"RB","Ronald Araújo":"CB","Pau Cubarsí":"CB","Alejandro Balde":"LB","Frenkie de Jong":"CM","Pedri":"CM","Gavi":"CM","Lamine Yamal":"RW","Robert Lewandowski":"ST","Raphinha":"LW","Iñaki Peña":"GK","Andreas Christensen":"CB","Eric García":"CB","Fermín López":"AM","Dani Olmo":"AM","Ferran Torres":"LW","Ansu Fati":"LW","Héctor Fort":"RB","Marc Casadó":"DM","Pau Víctor":"ST",
 "Manuel Neuer":"GK","Joshua Kimmich":"DM","Dayot Upamecano":"CB","Kim Min-jae":"CB","Alphonso Davies":"LB","Aleksandar Pavlović":"CM","Leon Goretzka":"CM","Jamal Musiala":"AM","Michael Olise":"RW","Harry Kane":"ST","Kingsley Coman":"LW",
 "Gianluigi Donnarumma":"GK","Achraf Hakimi":"RB","Marquinhos":"CB","Lucas Beraldo":"CB","Nuno Mendes":"LB","Vitinha":"CM","Warren Zaïre-Emery":"CM","Fabián Ruiz":"CM","Ousmane Dembélé":"RW","Gonçalo Ramos":"ST","Bradley Barcola":"LW",
 "Marc Cucurella":"LB","Wesley Fofana":"CB","Malo Gusto":"RB","Reece James":"RB","Marc Guéhi":"CB","Joško Gvardiol":"CB","Nico O’Reilly":"LB","Enzo Fernández":"CM","Rúben Dias":"CB","Mateo Kovačić":"CM","Jérémy Doku":"LW","Erling Haaland":"ST","Phil Foden":"AM","Rayan Cherki":"AM","Matheus Nunes":"RB","Rayan Aït-Nouri":"LB","Nicolas Jackson":"ST","Cole Palmer":"AM","Pedro Neto":"RW","Jamie Gittens":"LW","Estêvão":"RW","Liam Delap":"ST","Roméo Lavia":"DM","Andrey Santos":"CM","Tyrique George":"LW"
,"Enzo Fernández":"CM","Gianluigi Donnarumma":"GK","Marcus Bettinelli":"GK","Gerónimo Rulli":"GK","Rico Lewis":"RB","Rúben Dias":"CB","Marc Guéhi":"CB","Joško Gvardiol":"CB","Abdukodir Khusanov":"CB","Vitor Reis":"CB","Rayan Aït-Nouri":"LB","Elliot Anderson":"CM","Mateo Kovačić":"CM","Matheus Nunes":"CM","Ayyoub Bouaddi":"CM","Allan":"CM","Nico O’Reilly":"CM","Phil Foden":"AM","Rayan Cherki":"AM","Jérémy Doku":"LW","Iliman Ndiaye":"LW","Erling Haaland":"ST","Antoine Semenyo":"RW","Claudio Echeverri":"AM","Tirenioluwa Aiyegbusi":"RB","Emiliano Martínez":"GK","Mike Penders":"GK","Gabriel Slonina":"GK","Maxence Lacroix":"CB","Valentin Barco":"LB","Pep Chavarría":"LB","Marco Palestra":"RB","Moisés Caicedo":"DM","Roméo Lavia":"DM","Cole Palmer":"AM","Morgan Rogers":"AM","Pedro Neto":"LW","Jamie Gittens":"LW","João Pedro":"ST","Emmanuel Emegha":"ST","Jordan Henderson":"CM","Danny Welbeck":"ST","Estevão":"RW","Geovany Quenda":"RW","Jorrel Hato":"LB","Aaron Anselmino":"CB","Senne Lammens":"GK","Karl Darlow":"GK","Tom Heaton":"GK","Diogo Dalot":"RB","Noussair Mazraoui":"RB","Matthijs de Ligt":"CB","Lisandro Martínez":"CB","Harry Maguire":"CB","Luke Shaw":"LB","Patrick Dorgu":"LW","Leny Yoro":"CB","Ayden Heaven":"CB","Bruno Fernandes":"AM","Carlos Baleba":"DM","Andrey Santos":"CM","Youri Tielemans":"CM","Kobbie Mainoo":"CM","Manuel Ugarte":"DM","Mason Mount":"AM","Amad Diallo":"RW","Bryan Mbeumo":"RW","Matheus Cunha":"LW","Marcus Rashford":"LW","Benjamin Šeško":"ST","Joshua Zirkzee":"ST","Shea Lacey":"LW","Alejandro Garnacho":"LW",
 "Yann Sommer":"GK",
 "Josep Martínez":"GK",
 "Alessandro Bastoni":"CB",
 "Benjamin Pavard":"CB",
 "Francesco Acerbi":"RB",
 "Yann Bisseck":"LB",
 "Federico Dimarco":"CB",
 "Hakan Çalhanoğlu":"DM",
 "Nicolò Barella":"CM",
 "Henrikh Mkhitaryan":"CM",
 "Piotr Zieliński":"AM",
 "Davide Frattesi":"CM",
 "Carlos Augusto":"RW",
 "Lautaro Martínez":"LW",
 "Marcus Thuram":"ST",
 "Mehdi Taremi":"ST",
 "Pio Esposito":"AM",
 "Mike Maignan":"GK",
 "Pietro Terracciano":"GK",
 "Fikayo Tomori":"CB",
 "Strahinja Pavlović":"CB",
 "Matteo Gabbia":"RB",
 "Theo Hernández":"CB",
 "Davide Bartesaghi":"LB",
 "Alexis Saelemaekers":"DM",
 "Youssouf Fofana":"CM",
 "Ruben Loftus-Cheek":"CM",
 "Tijjani Reijnders":"AM",
 "Christian Pulisic":"CM",
 "Rafael Leão":"RW",
 "Santiago Giménez":"LW",
 "Samuele Ricci":"AM",
 "Michele Di Gregorio":"GK",
 "Mattia Perin":"GK",
 "Bremer":"CB",
 "Federico Gatti":"CB",
 "Pierre Kalulu":"RB",
 "Lloyd Kelly":"LB",
 "Andrea Cambiaso":"CB",
 "Juan Cabal":"LB",
 "Manuel Locatelli":"DM",
 "Khéphren Thuram":"CM",
 "Teun Koopmeiners":"CM",
 "Weston McKennie":"AM",
 "Fabio Miretti":"CM",
 "Kenan Yıldız":"RW",
 "Francisco Conceição":"LW",
 "Dušan Vlahović":"ST",
 "Jonathan David":"ST",
 "Arkadiusz Milik":"AM",
 "Emiliano Martínez":"GK","Mike Penders":"GK","Gabriel Slonina":"GK","Teddy Sharman-Lowe":"GK","Reece James":"RB","Malo Gusto":"RB","Levi Colwill":"CB","Wesley Fofana":"CB","Maxence Lacroix":"CB","Valentin Barco":"LB","Pep Chavarría":"LB","Marco Palestra":"RB","Moisés Caicedo":"DM","Roméo Lavia":"DM","Cole Palmer":"AM","Morgan Rogers":"AM","Pedro Neto":"RW","Jamie Bynoe-Gittens":"LW","João Pedro":"ST","Emmanuel Emegha":"ST","Jordan Henderson":"CM","Danny Welbeck":"ST","Estêvão":"RW","Geovany Quenda":"RW","Jorrel Hato":"LB","Aaron Anselmino":"CB",
"Alex Meret":"GK",
 "Vanja Milinković-Savić":"GK",
 "Amir Rrahmani":"CB",
 "Alessandro Buongiorno":"CB",
 "Giovanni Di Lorenzo":"RB",
 "Mathías Olivera":"LB",
 "Leonardo Spinazzola":"CB",
 "Juan Jesus":"LB",
 "Stanislav Lobotka":"DM",
 "Frank Anguissa":"CM",
 "Scott McTominay":"CM",
 "Kevin De Bruyne":"AM",
 "Billy Gilmour":"CM",
 "David Neres":"RW",
 "Matteo Politano":"LW",

 "Rasmus Højlund":"ST",
 "Giovanni Simeone":"AM",
 "Mile Svilar":"GK",
 "Pierluigi Gollini":"GK",
 "Gianluca Mancini":"CB",
 "Evan Ndicka":"CB",
 "Mario Hermoso":"RB",
 "Zeki Çelik":"LB",
 "Wesley França":"CB",
 "Angeliño":"LB",
 "Bryan Cristante":"DM",
 "Manu Koné":"CM",
 "Neil El Aynaoui":"CM",
 "Lorenzo Pellegrini":"AM",
 "Niccolò Pisilli":"CM",
 "Paulo Dybala":"RW",
 "Matías Soulé":"LW",
 "Artem Dovbyk":"ST",
 "Donyell Malen":"AM",
 "Marco Carnesecchi":"GK",
 "Francesco Rossi":"GK",
 "Isak Hien":"CB",
 "Sead Kolašinac":"CB",
 "Berat Djimsiti":"RB",
 "Giorgio Scalvini":"LB",
 "Davide Zappacosta":"CB",
 "Raoul Bellanova":"LB",
 "Éderson":"DM",
 "Marten de Roon":"CM",
 "Mario Pašalić":"CM",
 "Lazar Samardžić":"AM",
 "Charles De Ketelaere":"CM",
 "Ademola Lookman":"RW",
 "Gianluca Scamacca":"LW",
 "Nikola Krstović":"ST",
 "Giacomo Raspadori":"ST",
 "Daniel Maldini":"AM",
 "Ivan Provedel":"GK",
 "Christos Mandas":"GK",
 "Alessio Romagnoli":"CB",
 "Mario Gila":"CB",
 "Samuel Gigot":"RB",
 "Adam Marušić":"LB",
 "Nuno Tavares":"CB",
 "Manuel Lazzari":"LB",
 "Mattéo Guendouzi":"DM",
 "Nicolò Rovella":"CM",
 "Matías Vecino":"CM",
 "Fisayo Dele-Bashiru":"AM",
 "Boulaye Dia":"CM",
 "Mattia Zaccagni":"RW",
 "Pedro Rodríguez":"LW",
 "Gustav Isaksen":"ST",
 "Valentín Castellanos":"ST",
 "Tijjani Noslin":"AM",
 "David de Gea":"GK",
 "Christensen":"GK",
 "Pietro Comuzzo":"CB",
 "Luca Ranieri":"CB",
 "Marin Pongračić":"RB",
 "Dodô":"LB",
 "Robin Gosens":"CB",
 "Fabiano Parisi":"LB",
 "Rolando Mandragora":"DM",
 "Nicolò Fagioli":"CM",
 "Cher Ndour":"CM",
 "Albert Gudmundsson":"AM",
 "Moise Kean":"CM",
 "Roberto Piccoli":"RW",
 "Lucas Beltrán":"LW",
 "Riccardo Sottil":"ST",
 "Andrea Colpani":"ST",
 "Giovanni Fabbian":"AM",
 "Łukasz Skorupski":"GK",
 "Federico Ravaglia":"GK",
 "Jhon Lucumí":"CB",
 "Sam Beukema":"CB",
 "Martin Vitík":"RB",
 "Nicolò Casale":"LB",
 "Juan Miranda":"CB",
 "Emil Holm":"LB",
 "Remo Freuler":"DM",
 "Lewis Ferguson":"CM",
 "Tommaso Pobega":"CM",
 "Nikola Moro":"AM",
 "Riccardo Orsolini":"CM",
 "Dan Ndoye":"RW",
 "Jens Odgaard":"LW",
 "Santiago Castro":"ST",
 "Thijs Dallinga":"ST",
 "Federico Bernardeschi":"AM",
 "Alberto Paleari":"GK",
 "Franco Israel":"GK",
 "Saúl Coco":"CB",
 "Guillermo Maripán":"CB",
 "Ardian Ismajli":"RB",
 "Valentino Lazaro":"LB",
 "Marcus Pedersen":"CB",
 "Cristiano Biraghi":"LB",
 "Gvidas Gineitis":"DM",
 "Nikola Vlašić":"CM",
 "Cesare Casadei":"CM",
 "Tino Anjorin":"AM",
 "Duván Zapata":"CM",
 "Che Adams":"LW",
 "Alieu Njie":"ST",
 "Aboukhlal":"ST",
 "Kulenović":"AM",
 "Emil Audero":"GK",
 "Jean Butez":"GK",
 "Alberto Dossena":"CB",
 "Marc-Oliver Kempf":"CB",
 "Jacobo Ramón":"RB",
 "Ivan Smolčić":"LB",
 "Álex Valle":"CB",
 "Mërgim Vojvoda":"LB",
 "Máximo Perrone":"DM",
 "Lucas Da Cunha":"CM",
 "Martin Baturina":"CM",
 "Nico Paz":"AM",
 "Maxence Caqueret":"CM",
 "Sergi Roberto":"RW",
 "Assane Diao":"LW",
 "Anastasios Douvikas":"ST",
 "Álvaro Morata":"ST",
 "Kuhn":"AM",
 "Edoardo Corvi":"GK",
 "Enrico Delprato":"CB",
 "Alessandro Circati":"CB",
 "Lautaro Valenti":"RB",
 "Emanuele Valeri":"LB",
 "Sascha Britschgi":"CB",
 "Nahuel Estévez":"LB",
 "Adrián Bernabé":"DM",
 "Mandela Keita":"CM",
 "Simon Sohm":"CM",
 "Hernani":"AM",
 "Dennis Man":"CM",
 "Mateo Pellegrino":"RW",
 "Ange-Yoan Bonny":"LW",
 "Pontus Almqvist":"ST",
 "Gabriel Strefezza":"ST",
 "Adrian Benedyczak":"AM",
 "Justin Bijlow":"GK",
 "Nicola Leali":"GK",
 "Johan Vásquez":"CB",
 "Koni De Winter":"CB",
 "Alessandro Marcandalli":"RB",
 "Aaron Martin":"LB",
 "Brooke Norton-Cuffy":"CB",
 "Sebastian Otoa":"LB",
 "Morten Frendrup":"DM",
 "Mikael Egill Ellertsson":"CM",
 "Ruslan Malinovskyi":"CM",
 "Tommaso Baldanzi":"AM",
 "Albert Grønbæk":"CM",
 "Lorenzo Colombo":"LW",
 "Jeff Ekhator":"ST",
 "Junior Messias":"ST",
 "Caleb Ekuban":"AM",
 "Maduka Okoye":"GK",
 "Daniele Padelli":"GK",
 "Oumar Solet":"CB",
 "Thomas Kristensen":"RB",
 "Jordan Zemura":"LB",
 "Hassane Kamara":"CB",
 "Kingsley Ehizibue":"LB",
 "Jesper Karlström":"DM",
 "Sandi Lovrić":"CM",
 "Jurgen Ekkelenkamp":"CM",
 "Arthur Atta":"AM",
 "Lennon Miller":"CM",
 "Lorenzo Lucca":"RW",
 "Keinan Davis":"LW",
 "Iker Bravo":"ST",
 "Nicolo Zaniolo":"ST",
 "Vakoun Bayo":"AM",
 "Elia Caprile":"GK",
 "Simone Scuffet":"GK",
 "Yerry Mina":"CB",
 "Sebastiano Luperto":"CB",
 "Gabriele Zappa":"RB",
 "Adam Obert":"LB",
 "Zé Pedro":"CB",
 "Tommaso Augello":"LB",
 "Antoine Makoumbou":"DM",
 "Alessandro Deiola":"CM",
 "Matteo Prati":"CM",
 "Gianluca Gaetano":"AM",
 "Zito Luvumbo":"CM",
 "Sebastiano Esposito":"RW",
 "Andrea Belotti":"LW",
 "Boris Radunović":"ST",
 "Leonardo Pavoletti":"ST",
 "Wladimiro Falcone":"GK",
 "Francesco Borbei":"GK",
 "Federico Baschirotto":"CB",
 "Tiago Gabriel":"CB",
 "Kialonda Gaspar":"RB",
 "Antonino Gallo":"LB",
 "Danilo Veiga":"CB",
 "Ylber Ramadani":"LB",
 "Lassana Coulibaly":"DM",
 "Medon Berisha":"CM",
 "Balthazar Pierret":"CM",
 "Tete Morente":"AM",
 "Lameck Banda":"CM",
 "Francesco Camarda":"ST",
 "Santiago Pierotti":"ST",
 "Konan N'Dri":"AM",
 "Arijanet Murić":"GK",
 "Giacomo Satalino":"GK",
 "Jay Idzes":"CB",
 "Tarik Muharemović":"CB",
 "Filippo Romagna":"RB",
 "Josh Doig":"LB",
 "Jeremy Toljan":"CB",
 "Sebastian Walukiewicz":"LB",
 "Nemanja Matić":"DM",
 "Kristian Thorstvedt":"CM",
 "Daniel Boloca":"CM",
 "Ismaël Koné":"AM",
 "Domenico Berardi":"CM",
 "Armand Laurienté":"RW",
 "Andrea Pinamonti":"LW",
 "Walid Cheddira":"ST",
 "Cristian Volpato":"ST",
 "Luca Moro":"AM",
 "Marco Silvestri":"GK",
 "Matteo Bianchetti":"CB",
 "Luca Ravanelli":"RB",
 "Tommaso Barbieri":"LB",
 "Giuseppe Pezzella":"CB",
 "Michele Collocolo":"LB",
 "Martín Payero":"DM",
 "Jari Vandeputte":"CM",
 "Franco Vázquez":"CM",
 "Dennis Johnsen":"AM",
 "Federico Bonazzoli":"CM",
 "Jamie Vardy":"RW",
 "Antonio Sanabria":"LW",
 "Farès Ghedjemis":"ST",
 "Milan Đurić":"ST",
 "Alessio Zerbin":"AM",
 "Adrian Šemper":"GK",
 "Antonio Caracciolo":"CB",
 "Simone Canestrelli":"CB",
 "Arturo Calabresi":"RB",
 "Samuele Angori":"LB",
 "Idrissa Touré":"CB",
 "Marin Šverko":"LB",
 "Michel Aebischer":"DM",
 "Marius Marin":"CM",
 "Mehdi Léris":"CM",
 "Gabriele Piccinini":"AM",
 "Stefano Moreo":"CM",
 "M'Bala Nzola":"RW",
 "Henrik Meister":"LW",
 "Matteo Tramoni":"ST",
 "Lorran":"ST",
 "Rafiu Durosinmi":"AM",
 "Lorenzo Montipò":"GK",
 "Simone Perilli":"GK",
 "Diego Coppola":"CB",
 "Victor Nelsson":"CB",
 "Pawel Dawidowicz":"RB",
 "Domagoj Bradarić":"LB",
 "Jackson Tchatchoua":"CB",
 "Ondrej Duda":"LB",
 "Suat Serdar":"DM",
 "Abdou Harroui":"CM",
 "Tomas Suslov":"CM",
 "Gift Orban":"AM",
 "Amin Sarr":"CM",
 "Daniel Mosquera":"RW",
 "Roberto Gagliardini":"ST",
 "Kieron Bowie":"ST",
 "Martin Frese":"AM",};
// LaLiga position corrections and role coverage.
Object.assign(PLAYER_POSITIONS, {
"Unai Simón":"GK","Julen Agirrezabala":"GK","Nico Williams":"LW","Iñaki Williams":"RW","Gorka Guruzeta":"ST","Oihan Sancet":"AM","Mikel Jauregizar":"CM","Beñat Prados":"DM","Antoine Griezmann":"AM","Julián Álvarez":"ST","Alexander Sørloth":"ST","Jan Oblak":"GK","Koke":"CM","Pablo Barrios":"CM","Álex Baena":"AM","Joan García":"GK","Lamine Yamal":"RW","Raphinha":"LW","Robert Lewandowski":"ST","Pedri":"CM","Gavi":"CM","Frenkie de Jong":"CM","Jules Koundé":"RB","Alejandro Balde":"LB","Thibaut Courtois":"GK","Andriy Lunin":"GK","Rodrygo":"RW","Vinícius Júnior":"LW","Kylian Mbappé":"ST","Jude Bellingham":"AM","Federico Valverde":"CM","Aurélien Tchouaméni":"DM","Arda Güler":"AM","Álex Remiro":"GK","Takefusa Kubo":"RW","Mikel Oyarzabal":"LW","Iago Aspas":"ST","Borja Iglesias":"ST","Isi Palazón":"RW","Álvaro García":"LW","Pablo Fornals":"AM","Antony":"RW","Isco":"AM","Gerard Moreno":"ST","Ayoze Pérez":"ST","Dodi Lukébakio":"RW","Hugo Duro":"ST","Javi Guerra":"CM","Pepelu":"DM","Jokin Ezkieta":"GK","Sergio Herrera":"GK","Pablo Campos":"GK","Augusto Batalla":"GK","Germán Parreño":"GK","Alfonso Herrero":"GK"
});

Object.assign(PLAYER_POSITIONS,{
"Alex Meret":"GK","Vanja Milinković-Savić":"GK","Nikita Contini":"GK","Claudio Pugliese":"GK","Giovanni Di Lorenzo":"RB","Sam Beukema":"CB","Benoît Badiashile":"CB","Amir Rrahmani":"CB","Rafa Marín":"CB","Mathías Olivera":"LB","Leonardo Spinazzola":"LB","Costantino Favasuli":"LB","Kevin De Bruyne":"AM","Billy Gilmour":"CM","Stanislav Lobotka":"DM","Scott McTominay":"CM","Frank Anguissa":"CM","Antonio Vergara":"AM","David Neres":"LW","Alisson Santos":"LW","Rasmus Højlund":"ST","Noa Lang":"LW","Lorenzo Lucca":"ST","Matteo Politano":"RW",
"Manuel Neuer":"GK","Sven Ulreich":"GK","Jonas Urbig":"GK","Gregor Kobel":"GK","Patrick Drewes":"GK","Loris Karius":"GK","Kevin Müller":"GK","Markus Schubert":"GK","Nicolas Kristof":"GK","Frank Lehmann":"GK","Péter Gulácsi":"GK","Maarten Vandevoordt":"GK","Noah Atubolu":"GK","Oliver Baumann":"GK","Marvin Schwäbe":"GK","Moritz Nicolas":"GK",
"Dayot Upamecano":"CB","Kim Min-jae":"CB","Jonathan Tah":"CB","Alphonso Davies":"LB","Hiroki Ito":"CB","Josip Stanišić":"RB","Joshua Kimmich":"DM","Jamal Musiala":"AM","Harry Kane":"ST","Luis Díaz":"LW","Michael Olise":"RW","Serhou Guirassy":"ST","Nico Schlotterbeck":"CB","Waldemar Anton":"CB","Julian Ryerson":"RB","Daniel Svensson":"LB","Jobe Bellingham":"CM","Felix Nmecha":"CM","Carney Chukwuemeka":"AM","Maximilian Beier":"ST","Fábio Silva":"ST","Edin Džeko":"ST","Moussa Sylla":"ST","Robin Gosens":"LB","Kenan Karaman":"ST","Luca Pfeiffer":"ST","Cole Campbell":"RW","Sven Michel":"ST","Rayan Philippe":"ST","Noah Darvich":"AM","Jonathan Burkardt":"ST","Ritsu Doan":"RW","Can Uzun":"AM","Borna Sosa":"LB","Saïd El Mala":"LW","Thijs Dallinga":"ST"
});
const genericFirst=["Alex","Jordan","Sam","Luca","Noah","Ethan","Mateo","Theo","Rayan","Milan","Leo","Jamie","Daniel","Oliver","Rico","Adrian","Nico","Hugo","Max","Jules","Ben","Marco"];
const genericLast=["Morgan","Silva","Costa","Bennett","Müller","Kovac","Martin","Rossi","Khan","Santos","Dubois","Taylor","Diaz","Andersson","Petrov","Wilson","Novak","Kim","Moreau","Fischer"];
const $=id=>document.getElementById(id);
let league=null,club=null,opponent=null,team=[],opTeam=[],selectedTactic="possession",formation="4-3-3",mentality="balanced";
let match=null,raf=null,lastFrame=0,paused=false,speed=1,elapsed=0,stoppage=0,firstHalfStoppage=0,halfBreakDone=false,homeGoals=0,awayGoals=0,subbed=new Set(),lastEvent=-8,attacks=[0,0],shots=[0,0],onTarget=[0,0],corners=[0,0],fouls=[0,0],offsides=[0,0],passes=[0,0],passAcc=[0,0],tackles=[0,0],saves=[0,0],possTicks=[0,0],currentPoss=0,ball={x:450,y:243,vx:0,vy:0,owner:0};
function rng(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

const wikiCache={};
function wikiImage(title,kind="page"){const key=kind+title;if(wikiCache[key])return Promise.resolve(wikiCache[key]);let url=`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g,"_"))}`;return fetch(url).then(r=>r.ok?r.json():null).then(d=>{let img=kind==="player"?(d?.thumbnail?.source||d?.originalimage?.source):(d?.originalimage?.source||d?.thumbnail?.source);wikiCache[key]=img||"";return wikiCache[key]}).catch(()=>"")}
// Football-data crest CDN IDs (club badges, not general Wikipedia page photos).
const CREST_IDS={"Arsenal":57,"Aston Villa":58,"Bournemouth":1044,"Brentford":402,"Brighton & Hove Albion":397,"Chelsea":61,"Crystal Palace":354,"Everton":62,"Fulham":63,"Leeds United":341,"Liverpool":64,"Manchester City":65,"Manchester United":66,"Newcastle United":67,"Nottingham Forest":351,"Sunderland":71,"Tottenham Hotspur":73,"West Ham United":563,"Wolverhampton Wanderers":76,"Burnley":328,"Barcelona":81,"Real Madrid":86,"Atlético Madrid":78,"Athletic Club":77,"Real Sociedad":92,"Sevilla":559,"Valencia":95,"Villarreal":94,"Real Betis":90,"Celta Vigo":558,"Getafe":82,"Osasuna":79,"Espanyol":80,"Alavés":263,"Elche":285,"Levante":88,"Rayo Vallecano":87,"Inter Milan":108,"AC Milan":98,"Juventus":109,"Napoli":113,"Roma":100,"Atalanta":102,"Lazio":110,"Fiorentina":99,"Bologna":103,"Torino":586,"Como":7397,"Parma":112,"Genoa":107,"Udinese":115,"Cagliari":104,"Lecce":5890,"Sassuolo":471,"Cremonese":457,"Pisa":7398,"Hellas Verona":450,"Bayern Munich":5,"Borussia Dortmund":4,"FC Schalke 04":9,"SC Paderborn 07":29,"SV Elversberg":111,"Bayer Leverkusen":3,"RB Leipzig":721,"Eintracht Frankfurt":19,"VfB Stuttgart":10,"1. FC Köln":1,"1. FSV Mainz 05":15,"FC Augsburg":16,"1. FC Union Berlin":28,"SV Werder Bremen":12,"TSG Hoffenheim":2,"Wolfsburg":11,"Borussia Mönchengladbach":18,"SC Freiburg":17,"Hoffenheim":2,"Werder Bremen":12,"Mainz 05":15,"Augsburg":16,"Union Berlin":28,"Heidenheim":44,"Hamburger SV":7,"FC Köln":1,"St. Pauli":20,"Paris Saint-Germain":524,"Marseille":516,"Monaco":548,"Lille":521,"Lyon":523,"Nice":522,"Lens":546,"Rennes":529,"Strasbourg":576,"Toulouse":511,"Brest":512,"Auxerre":519,"Angers":532,"Le Havre":533,"Lorient":525,"Paris FC":1103,"Le Mans FC":1104,"Troyes":529};
const LEAGUE_BADGES={"Premier League":"PL","La Liga":"PD","Serie A":"SA","Bundesliga":"BL1","Ligue 1":"FL1"};
function crestTitle(name){return name}
function clubSlug(name){return name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function fallbackCrestData(name,abbr,color){const safeColor=/^#[0-9a-f]{3,8}$/i.test(String(color||""))?color:"#7c5ac7";const label=String(abbr||initials(name)).slice(0,4).toUpperCase();const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="144" viewBox="0 0 128 144"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${safeColor}"/><stop offset="1" stop-color="#151322"/></linearGradient></defs><path d="M10 8H118L112 90Q100 122 64 138Q28 122 16 90Z" fill="url(#g)" stroke="#e9ddff" stroke-width="4"/><path d="M22 20H106L101 86Q91 109 64 122Q37 109 27 86Z" fill="none" stroke="#ffffff90" stroke-width="2"/><circle cx="64" cy="49" r="16" fill="none" stroke="#ffffff90" stroke-width="2"/><path d="M48 49H80M64 33V65" stroke="#ffffff70" stroke-width="1.5"/><text x="64" y="91" text-anchor="middle" font-family="Arial,sans-serif" font-size="${label.length>3?18:25}" font-weight="900" fill="#fff">${label.replace(/&/g,"&amp;").replace(/</g,"&lt;")}</text></svg>`;return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg)}
function clubLogoError(img){const name=img.dataset.name||img.alt.replace(/ club badge$/, "").replace(/ badge$/, "");const abbr=img.dataset.abbr||initials(name);const color=img.dataset.color||"#7c5ac7";const stage=Number(img.dataset.logoStage||0);if(stage===0){img.dataset.logoStage="1";img.src=`club-logos/${clubSlug(name)}.svg`;return}if(stage===1){img.dataset.logoStage="2";img.src=fallbackCrestData(name,abbr,color);return}img.onerror=null;img.alt=`${name} badge`}
function logoMarkup(name,abbr,color){const id=CREST_IDS[name],fallback=`club-logos/${clubSlug(name)}.svg`;const src=id?`https://crests.football-data.org/${id}.png`:fallback;return `<img class="club-logo" src="${src}" alt="${esc(name)} club badge" data-name="${esc(name)}" data-abbr="${esc(abbr)}" data-color="${esc(color||"#7c5ac7")}" data-logo-stage="0" onerror="clubLogoError(this)">`}
function loadLogos(root=document){root.querySelectorAll(".club-logo").forEach(img=>{if(img.complete&&img.naturalWidth===0)clubLogoError(img)})}
function initials(name){return name.split(/\s+/).slice(0,2).map(x=>x[0]||"").join("").toUpperCase()}
const CARD_POS=[ [50,12],[16,34],[38,34],[62,34],[84,34],[28,56],[50,53],[72,56],[22,15],[50,9],[78,15] ];
function formationLayout(){
 const layouts={
 "4-3-3":{coords:[[50,12],[14,30],[38,27],[62,27],[86,30],[30,49],[50,43],[70,49],[18,73],[50,82],[82,73]],roles:["GK","LB","CB","CB","RB","CM","CM","CM","LW","ST","RW"]},
 "4-2-3-1":{coords:[[50,12],[14,30],[38,27],[62,27],[86,30],[38,43],[62,43],[18,62],[50,64],[82,62],[50,82]],roles:["GK","LB","CB","CB","RB","DM","CM","LW","AM","RW","ST"]},
 "4-4-2":{coords:[[50,12],[14,30],[38,27],[62,27],[86,30],[15,49],[38,48],[62,48],[85,49],[35,78],[65,78]],roles:["GK","LB","CB","CB","RB","LM","CM","CM","RM","ST","ST"]},
 "3-5-2":{coords:[[50,12],[27,27],[50,24],[73,27],[12,49],[32,49],[50,45],[68,49],[88,49],[35,78],[65,78]],roles:["GK","CB","CB","CB","LWB","CM","CM","CM","RWB","ST","ST"]},
 "5-3-2":{coords:[[50,12],[10,30],[30,27],[50,24],[70,27],[90,30],[30,49],[50,45],[70,49],[35,78],[65,78]],roles:["GK","LWB","CB","CB","CB","RWB","CM","CM","CM","ST","ST"]}
 };
 return layouts[formation]||layouts["4-3-3"];
}
function formationSlots(){return formationLayout().coords.map(([x,y])=>[x,100-y])}
function formationRoleAt(index){return formationLayout().roles[index]||"CM"}
function normalizePos(pos){const p=String(pos||"").toUpperCase();return ({CDM:"DM",CAM:"AM",CF:"ST",LWF:"LW",RWF:"RW",LCB:"CB",RCB:"CB"})[p]||p}
function roleFits(playerPos,slotPos){const p=normalizePos(playerPos),r=normalizePos(slotPos);if(p===r)return true;const groups={GK:["GK"],LB:["LB","LWB"],RB:["RB","RWB"],LWB:["LWB","LB","LM"],RWB:["RWB","RB","RM"],CB:["CB"],DM:["DM","CM","CB"],CM:["CM","DM","AM","LM","RM"],AM:["AM","CM","ST"],LW:["LW","LM","RW"],RW:["RW","RM","LW"],LM:["LM","LW","CM"],RM:["RM","RW","CM"],ST:["ST","CF"],CF:["CF","ST","AM"]};return (groups[r]||[r]).includes(p)}
function arrangeStartersForFormation(){
 const starters=team.filter(p=>p.role==="start").slice(0,11),slots=formationSlots(),roles=formationLayout().roles,remaining=[...starters],placed=[];
 for(let i=0;i<slots.length;i++){
   let idx=remaining.findIndex(p=>roleFits(p.pos,roles[i]));if(idx<0)idx=remaining.findIndex(p=>normalizePos(p.pos)!=="GK");if(idx<0)idx=0;
   if(idx<0||!remaining.length)break;const p=remaining.splice(idx,1)[0];
   // Keep a player's natural position when it fits; otherwise update to the role of the slot they occupy.
   if(!roleFits(p.pos,roles[i]))p.pos=roles[i];
   p.boardX=slots[i][0];p.boardY=slots[i][1];placed.push(p);
 }
 // Keep any extra starters off the board instead of overlapping cards.
 remaining.forEach(p=>p.role="bench");return placed;
}

function cardCoord(p,i){
 if(Number.isFinite(p.boardX)&&Number.isFinite(p.boardY))return [p.boardX,p.boardY];
 const starters=team.filter(q=>q.role==="start").slice(0,11),idx=starters.indexOf(p);
 return formationSlots()[Math.max(0,idx)]||[50,50];
}

function roleForDrop(x,y,currentPos){
 // The pitch is oriented with the opponent's goal at the top and our goalkeeper at the bottom.
 // Position is inferred from the tactical zone where the card is dropped, so CM -> AM works even in a 4-3-3.
 const pos=normalizePos(currentPos);
 if(y>=82&&x>=34&&x<=66)return "GK";
 if(y>=68){if(x<25)return "LB";if(x>75)return "RB";return "CB"}
 if(y>=56){if(x<24)return "LB";if(x>76)return "RB";return "DM"}
 if(y>=43){if(x<24)return pos==="LW"?"LW":"LM";if(x>76)return pos==="RW"?"RW":"RM";return "CM"}
 if(y>=30){if(x<27)return "LW";if(x>73)return "RW";return "AM"}
 if(x<28)return "LW";if(x>72)return "RW";return "ST"
}
function detectFormationFromStarters(){
 const starters=team.filter(p=>p.role==="start");
 const counts={GK:0,DEF:0,MID:0,FWD:0};
 starters.forEach(p=>{const r=normalizePos(p.pos);if(r==="GK")counts.GK++;else if(["CB","LB","RB","LWB","RWB"].includes(r))counts.DEF++;else if(["DM","CM","AM","LM","RM"].includes(r))counts.MID++;else counts.FWD++;});
 let next="4-3-3";
 if(counts.DEF>=5&&counts.MID===3&&counts.FWD===2)next="5-3-2";
 else if(counts.DEF===3&&counts.MID>=4&&counts.FWD===2)next="3-5-2";
 else if(counts.DEF===4&&counts.MID===4&&counts.FWD===2)next="4-4-2";
 else if(counts.DEF===4&&counts.MID===5&&counts.FWD===1)next="4-2-3-1";
 formation=next;const sel=$("formation");if(sel)sel.value=next;
}
function renderPitchCards(){const host=$("pitch-player-cards"),list=$("squad-cards");if(!host||!list)return;const starters=team.filter(p=>p.role==="start");$("starter-count").textContent=`${starters.length} / 11 starters`;host.innerHTML=starters.slice(0,11).map((p,i)=>{let [x,y]=cardCoord(p,i);return `<button type="button" class="pitch-player" data-card-player="${esc(p.name)}" style="left:${x}%;top:${y}%" title="Drag to reposition · click to move ${esc(p.name)} to bench"><span class="portrait" data-portrait="${esc(p.name)}">${initials(p.name)}</span><span class="pname">${esc(p.name)}</span><span class="pmeta"><span>${esc(p.pos)}</span><b>${p.rating}</b></span></button>`}).join("");list.innerHTML=team.map(p=>`<button type="button" class="select-card ${p.role==='start'?'active':''}" data-list-player="${esc(p.name)}" data-player-role="${p.role}" data-player-search="${esc((p.name+' '+p.pos).toLowerCase())}"><span class="mini-portrait" data-mini="${esc(p.name)}">${initials(p.name)}</span><span><strong>${esc(p.name)}</strong><small>${esc(p.pos)} · ${p.stamina}% fit</small></span><span class="role-tag">${p.role==='start'?'STARTER':p.role==='bench'?'BENCH':'OUT'}</span></button>`).join("");
 host.querySelectorAll("[data-card-player]").forEach(b=>{let startX=0,startY=0,originBoardX=0,originBoardY=0,moved=false,dragging=false,pointerId=null;const player=team.find(p=>p.name===b.dataset.cardPlayer);b.style.touchAction="none";b.addEventListener("pointerdown",e=>{if(e.button!==0&&e.pointerType==="mouse")return;e.preventDefault();dragging=true;moved=false;pointerId=e.pointerId;startX=e.clientX;startY=e.clientY;originBoardX=player?.boardX??50;originBoardY=player?.boardY??50;const rect=host.getBoundingClientRect();try{b.setPointerCapture(pointerId)}catch(_){};const onMove=ev=>{if(!dragging||ev.pointerId!==pointerId)return;const dx=ev.clientX-startX,dy=ev.clientY-startY;if(!moved&&Math.hypot(dx,dy)<4)return;moved=true;const x=Math.max(7,Math.min(93,(ev.clientX-rect.left)/rect.width*100));const y=Math.max(10,Math.min(90,(ev.clientY-rect.top)/rect.height*100));if(player){player.boardX=x;player.boardY=y}b.style.left=x+"%";b.style.top=y+"%"};const finish=ev=>{if(ev.pointerId!==pointerId)return;dragging=false;try{if(b.hasPointerCapture(pointerId))b.releasePointerCapture(pointerId)}catch(_){};b.removeEventListener("pointermove",onMove);b.removeEventListener("pointerup",finish);b.removeEventListener("pointercancel",finish);pointerId=null;if(moved&&player){const dropX=Math.max(7,Math.min(93,player.boardX)),dropY=Math.max(10,Math.min(90,player.boardY));const occupant=team.find(q=>q!==player&&q.role==="start"&&Number.isFinite(q.boardX)&&Math.hypot((q.boardX-dropX)*1.0,(q.boardY-dropY)*1.0)<10);const oldPos=player.pos;if(occupant){occupant.boardX=originBoardX;occupant.boardY=originBoardY;occupant.pos=oldPos;}player.boardX=dropX;player.boardY=dropY;player.pos=roleForDrop(dropX,dropY,player.pos);detectFormationFromStarters();renderSquad();}};b.addEventListener("pointermove",onMove);b.addEventListener("pointerup",finish);b.addEventListener("pointercancel",finish)});b.addEventListener("click",()=>{if(moved){moved=false;return}if(!dragging)togglePlayer(b.dataset.cardPlayer)})});
 list.querySelectorAll("[data-list-player]").forEach(b=>b.onclick=()=>togglePlayer(b.dataset.listPlayer));wireSquadFilters();loadPlayerPortraits()}
function wireSquadFilters(){const search=$("squad-search");const buttons=[...document.querySelectorAll("[data-squad-filter]")];let filter=buttons.find(b=>b.classList.contains("selected"))?.dataset.squadFilter||"all";function apply(){const q=(search?.value||"").trim().toLowerCase();document.querySelectorAll("[data-list-player]").forEach(el=>{const roleOk=filter==="all"||el.dataset.playerRole===filter;el.style.display=roleOk&&el.dataset.playerSearch.includes(q)?"grid":"none"})}buttons.forEach(b=>b.onclick=()=>{filter=b.dataset.squadFilter;buttons.forEach(x=>x.classList.toggle("selected",x===b));apply()});if(search)search.oninput=apply;apply()}
function togglePlayer(name){const p=team.find(x=>x.name===name);if(!p)return;if(p.role==="start"){p.role="bench"}else{if(team.filter(x=>x.role==="start").length>=11){toast("Choose a starter to move to the bench first.");return}p.role="start";const occupied=new Set(team.filter(x=>x!==p&&x.role==="start"&&Number.isFinite(x.boardX)&&Number.isFinite(x.boardY)).map(x=>`${Math.round(x.boardX)}:${Math.round(x.boardY)}`));const slots=formationSlots();const open=slots.find(pt=>!occupied.has(`${Math.round(pt[0])}:${Math.round(pt[1])}`));if(open){p.boardX=open[0];p.boardY=open[1]}else if(!Number.isFinite(p.boardX)||!Number.isFinite(p.boardY)){p.boardX=50;p.boardY=50}}renderSquad()}
function loadPlayerPortraits(){document.querySelectorAll("[data-portrait],[data-mini]").forEach(el=>{if(el.dataset.loaded)return;el.dataset.loaded="1";wikiImage(el.dataset.portrait||el.dataset.mini,"player").then(src=>{if(src){const im=document.createElement("img");im.src=src;im.alt="";el.textContent="";el.appendChild(im)}})})}

function resetManagerDesk(){
  $("season-panel")?.classList.add("hide");
  $("club-summary").innerHTML="";
  $("squad-strength").textContent="—";
  $("club-style").textContent="—";
  $("club-objective").textContent="Win the match";
  $("desk-club").classList.add("hide");
  $("desk-empty").classList.remove("hide");
}
function renderLeagues(){$("league-grid").innerHTML=LEAGUES.map((l,i)=>`<button class="league-card" data-league="${i}"><span class="league-icon">${LEAGUE_BADGES[l.name]?`<img src="https://crests.football-data.org/${LEAGUE_BADGES[l.name]}.png" alt="" onerror="this.remove();this.parentElement.textContent='${l.icon}'">`:l.icon}</span><span><strong>${l.name}</strong><small>${l.country} · ${l.clubs.length} clubs</small></span></button>`).join("");document.querySelectorAll("[data-league]").forEach(b=>b.onclick=()=>chooseLeague(+b.dataset.league))}
// Season campaign: league-wide round-robin schedule, persistent standings and background results.
let season=null;
function buildRoundRobin(clubs){let list=clubs.map(c=>c[0]);if(list.length%2)list.push(null);const n=list.length,rounds=[];let rot=list.slice();for(let r=0;r<n-1;r++){let games=[];for(let i=0;i<n/2;i++){let a=rot[i],b=rot[n-1-i];if(a&&b){if(r%2)games.push({home:b,away:a,played:false,homeGoals:null,awayGoals:null});else games.push({home:a,away:b,played:false,homeGoals:null,awayGoals:null})}}rounds.push(games);rot=[rot[0],rot[n-1],...rot.slice(1,n-1)]}const second=rounds.map(g=>g.map(m=>({home:m.away,away:m.home,played:false,homeGoals:null,awayGoals:null})));return rounds.concat(second)}
function initSeason(){if(!league||!club)return;const key='t90-season-'+league.name;try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved&&saved.clubs?.length===league.clubs.length){season=saved;season.userClub=club[0];}else throw 0}catch(_){season={league:league.name,clubs:league.clubs.map(c=>c[0]),fixtures:buildRoundRobin(league.clubs),week:0,userClub:club[0],playedByUser:0,points:{}}}season.userClub=club[0];season.points=season.points||{};season.clubs.forEach(n=>season.points[n]=season.points[n]||{p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0});renderSeason();}
function simulateFixture(m){if(m.played)return;const home=league.clubs.find(c=>c[0]===m.home),away=league.clubs.find(c=>c[0]===m.away);const hp=home?.[2]||75,ap=away?.[2]||75;const hg=poissonGoal(hp,ap),ag=poissonGoal(ap,hp);applyFixtureResult(m,hg,ag)}
function poissonGoal(a,b){let strength=Math.max(.45,Math.min(2.5,1+(a-b)/38));let lambda=1.25*strength,u=Math.random(),p=Math.exp(-lambda),sum=p,k=0;while(u>sum&&k<7){k++;p*=lambda/k;sum+=p}return k}
function applyFixtureResult(m,hg,ag){m.played=true;m.homeGoals=hg;m.awayGoals=ag;const h=season.points[m.home],a=season.points[m.away];h.p++;a.p++;h.gf+=hg;h.ga+=ag;a.gf+=ag;a.ga+=hg;if(hg>ag){h.w++;h.pts+=3;a.l++}else if(hg<ag){a.w++;a.pts+=3;h.l++}else{h.d++;a.d++;h.pts++;a.pts++}}
function userFixture(){if(!season)return null;for(let w=season.week;w<season.fixtures.length;w++){const m=season.fixtures[w].find(x=>x.home===club?.[0]||x.away===club?.[0]);if(m&&!m.played){season.week=w;return m}}return null}
function renderSeason(){if(!season)return;try{localStorage.setItem('t90-season-'+league.name,JSON.stringify(season))}catch(_){}}
function completeSeasonMatch(){if(!season)return;const m=userFixture();if(!m)return;const hg=(m.home===club[0]?homeGoals:awayGoals),ag=(m.home===club[0]?awayGoals:homeGoals);applyFixtureResult(m,hg,ag);const thisRound=season.fixtures[season.week]||[];thisRound.forEach(f=>{if(!f.played)simulateFixture(f)});season.week=Math.min(season.week+1,season.fixtures.length);season.playedByUser=(season.playedByUser||0)+1;renderSeason();}
function chooseLeague(i){
  resetManagerDesk(); league=LEAGUES[i]; club=null; team=[];
  $("to-tactics").disabled=true;
  $("league-stage").classList.add("hide"); $("club-stage").classList.remove("hide"); $("tactics-stage").classList.add("hide");
  $("league-caption").textContent=league.name.toUpperCase();
  $("club-list").innerHTML=league.clubs.map((c,j)=>`<button class="club-card" data-club="${j}">${logoMarkup(c[0],c[1],c[3])}<span><strong>${c[0]}</strong><small>${league.country}</small></span><span class="rating">${c[2]}</span></button>`).join("");
  document.querySelectorAll("[data-club]").forEach(b=>b.onclick=()=>chooseClub(+b.dataset.club)); loadLogos(); setStep(2);
}
function chooseClub(i){club=league.clubs[i];initSeason();document.querySelectorAll(".club-card").forEach(b=>b.classList.toggle("selected",+b.dataset.club===i));$("to-tactics").disabled=false;const squadBase=makeSquad(club);formation="4-3-3";$("formation").value="4-3-3";team=buildDefault433(squadBase);$("lineup-source-note").textContent="Balanced default XI · 4-3-3: 1 goalkeeper, 4 defenders, 3 midfielders and 3 forwards. Adjust players and positions to suit your tactics.";if(!NAMES[club[0]])toast("Squad data for this club is not verified yet; unverified placeholders are clearly labelled.");$("club-summary").innerHTML=`<div style="display:flex;align-items:center;gap:12px;margin:6px 0 18px">${logoMarkup(club[0],club[1],club[3])}<div><div class="eyebrow">${league.name}</div><h2 style="font-size:20px;margin:3px 0">${club[0]}</h2><div class="tiny muted">Club rating ${club[2]} / 100</div><div class="tiny muted" style="margin-top:5px">HEAD COACH · ${esc(coachFor(club[0]))}</div></div></div>`;$("squad-strength").textContent=club[2]+"/100";$("club-style").textContent=club[2]>=86?"Elite possession":"Front-foot football";$("desk-club").classList.remove("hide");loadLogos(document.getElementById("club-summary"));renderSeason()}
function setStep(n){[1,2,3].forEach(i=>{$("step"+i).classList.toggle("active",i===n);$("step"+i).classList.toggle("done",i<n)})}
const COACHES={"Arsenal":"Mikel Arteta","Manchester City":"Enzo Maresca","Manchester United":"Michael Carrick","Liverpool":"Andoni Iraola","Chelsea":"Xabi Alonso","Newcastle United":"Matthias Jaissle","Tottenham Hotspur":"Roberto De Zerbi","Everton":"David Moyes","Aston Villa":"Unai Emery","Bournemouth":"Marco Rose","Brentford":"Keith Andrews","Brighton & Hove Albion":"Fabian Hürzeler","Crystal Palace":"Pierre Sage","Fulham":"Álvaro Arbeloa","Leeds United":"Daniel Farke","Nottingham Forest":"Oliver Glasner","Sunderland":"Régis Le Bris","West Ham United":"Nuno Espírito Santo","Wolverhampton Wanderers":"Rob Edwards","Burnley":"Scott Parker","Coventry City":"Frank Lampard","Hull City":"Sergej Jakirović","Ipswich Town":"Kieran McKenna","Real Madrid":"Xabi Alonso","Barcelona":"Hansi Flick","Atlético Madrid":"Diego Simeone","Athletic Club":"Ernesto Valverde","Real Sociedad":"Pellegrino Matarazzo","Inter Milan":"Cristian Chivu","AC Milan":"Massimiliano Allegri","Juventus":"Luciano Spalletti","Napoli":"Antonio Conte","Bayern Munich":"Vincent Kompany","Borussia Dortmund":"Niko Kovač","FC Schalke 04":"Miron Muslić","SV Elversberg":"Vincent Wagner","SC Paderborn 07":"Ralf Kettemann","Eintracht Frankfurt":"Adolf Hütter","1. FC Köln":"René Wagner","Paris Saint-Germain":"Luis Enrique","Marseille":"Habib Beye","Monaco":"Sébastien Pocognoli","Paris FC":"Stéphane Gilli","Lille":"Bruno Génésio","Rennes":"Habib Beye","Lyon":"Paulo Fonseca","Angers":"Alexandre Dujeux","Strasbourg":"Liam Rosenior","Le Mans FC":"Patrick Videira","Auxerre":"Christophe Pélissier","Brest":"Éric Roy","Lorient":"Olivier Pantaloni","Toulouse":"Carles Martínez Novell","Nice":"Franck Haise","Lens":"Pierre Sage","Troyes":"Stéphane Dumont","Le Havre":"Didier Digard","Osasuna":"Alessio Lisci","Celta Vigo":"Claudio Giráldez","Alavés":"Quique Sánchez Flores","Elche":"Eder Sarabia","Getafe":"José Bordalás","Levante":"Julián Calero","Málaga":"Juan Francisco Funes","Racing Santander":"José Alberto López","Rayo Vallecano":"Íñigo Pérez","Deportivo La Coruña":"Antonio Hidalgo","Espanyol":"Manolo González","Real Betis":"Manuel Pellegrini","Sevilla":"Matías Almeyda","Valencia":"Carlos Corberán","Villarreal":"Marcelino García Toral"};
function coachFor(name){return COACHES[name]||"Manager not verified"}

// Confirmed last-match starting XIs where an official October 2026 match report was available.
const LAST_MATCH_XI={
 "Everton":["Jordan Pickford","Ainsley Maitland-Niles","James Tarkowski","Michael Keane","Jarrad Branthwaite","James Garner","Harrison Armstrong","Kiernan Dewsbury-Hall","Brennan Johnson","Jack Grealish","Thierno Barry"],
 "Chelsea":["Damián Emiliano Martínez","Josh Acheampong","Maxence Lacroix","Levi Colwill","Pep Chavarría","Jordan Henderson","Moisés Caicedo","Pedro Neto","Cole Palmer","Morgan Rogers","João Pedro"],
 "Real Madrid":["Andriy Lunin","Federico Valverde","Ibrahima Konaté","Dean Huijsen","Marc Cucurella","Aurélien Tchouaméni","Bernardo Silva","Jude Bellingham","Yan Diomande","Arda Güler","Kylian Mbappé"],
 "Paris Saint-Germain":["Matvei Safonov","Achraf Hakimi","Illia Zabarnyi","Willian Pacho","Warren Zaïre-Emery","João Neves","Vitinha","Fabián Ruiz","Maghnes Akliouche","Ferran Torres","Désiré Doué"],
 "Lyon":["Dominik Greif","Zeki Amdouni","Felix Bacher","Moussa Niakhaté","Abner Vinícius","Tanner Tessmann","Tyler Morton","Corentin Tolisso","Georginio Rutter","Jérémy Duranville","Khalis Merah"],
 "AC Milan":["Mike Maignan","Fikayo Tomori","Koni De Winter","Strahinja Pavlović","Pervis Estupiñán","Yunus Musah","Ardon Jashari","Hutchinson","Cissé","Bartesaghi","Gonçalo Ramos"],
 "Bologna":["Łukasz Skorupski","Matteo Darmian","Casale","Arthur Theate","Nadir Zortea","Tommaso Pobega","Lewis Ferguson","Alhassane","Federico Bernardeschi","Jens Odgaard","Samuel Mbangula"]
};
function applyLastMatchXI(clubName,squad){const xi=LAST_MATCH_XI[clubName];if(!xi)return squad;const byName=new Map(squad.map(p=>[p.name.toLocaleLowerCase(),p]));const selected=[];for(const n of xi){const p=byName.get(n.toLocaleLowerCase());if(p&&!selected.includes(p))selected.push(p)}if(selected.length<9)return squad;const selectedSet=new Set(selected);let rest=squad.filter(p=>!selectedSet.has(p));selected.forEach(p=>p.role="start");rest.forEach(p=>p.role="bench");return [...selected,...rest]}
function makeSquad(c){let names=NAMES[c[0]];let size=names?names.length:21;return Array.from({length:size},(_,i)=>{let name=names?.[i]||`Unverified squad player ${String(i+1).padStart(2,"0")}`;return {name,pos:PLAYER_POSITIONS[name]||POSITIONS[i%POSITIONS.length],rating:Math.max(62,Math.min(96,c[2]+rng(-9,6)-(i>10?2:0))),role:i<11?"start":"bench",stamina:100,unverified:!names}})}
function buildDefault433(squad){
 const slots=[
  {pos:"GK",accept:["GK"]},
  {pos:"LB",accept:["LB","LWB"]},
  {pos:"CB",accept:["CB"]},
  {pos:"CB",accept:["CB"]},
  {pos:"RB",accept:["RB","RWB"]},
  {pos:"DM",accept:["DM","CDM","CM","LM","RM"]},
  {pos:"CM",accept:["CM","AM","CAM","DM","LM","RM"]},
  {pos:"AM",accept:["AM","CAM","CM","DM","LM","RM"]},
  {pos:"LW",accept:["LW","LM","RW","CF","ST"]},
  {pos:"ST",accept:["ST","CF"]},
  {pos:"RW",accept:["RW","RM","LW","CF","ST"]}
 ];
 const pool=[...squad],chosen=[];
 for(const slot of slots){let idx=pool.findIndex(p=>slot.accept.includes(String(p.pos||"").toUpperCase()));if(idx<0){
   // Prefer a known named player with a nearby outfield role over a placeholder.
   idx=pool.findIndex(p=>!p.unverified&&p.pos!=="GK");
   if(idx<0)idx=pool.findIndex(p=>p.pos!=="GK");
  }
  if(idx<0)idx=0;
  const p=pool.splice(idx,1)[0];if(!p)continue;
  // Enforce the 4-3-3 positional structure even when the source roster lacks a suitable role.
  if(!slot.accept.includes(String(p.pos||"").toUpperCase()))p.pos=slot.pos;
  p.role="start";p.boardX=null;p.boardY=null;chosen.push(p);
 }
 pool.forEach(p=>{p.role="bench";p.boardX=null;p.boardY=null});
 const coords=[[50,88],[14,70],[38,73],[62,73],[86,70],[30,51],[50,57],[70,51],[18,27],[50,18],[82,27]];
 chosen.forEach((p,i)=>{p.boardX=coords[i][0];p.boardY=coords[i][1]});
 return [...chosen,...pool];
}
function renderSquad(){const starters=team.filter(p=>p.role==="start").length;$("squad").innerHTML=team.map((p,i)=>`<div class="player-row"><span class="num">${String(i+1).padStart(2,"0")}</span><span><strong>${esc(p.name)}</strong><small>${p.unverified?"UNVERIFIED · ":""}${p.pos} · ${p.stamina}% fitness</small></span><select data-position="${i}" aria-label="Position for ${esc(p.name)}">${["GK","RB","CB","LB","RWB","LWB","DM","CM","LM","RM","AM","LW","RW","CF","ST"].map(pos=>`<option value="${pos}" ${p.pos===pos?"selected":""}>${pos}</option>`).join("")}</select><span class="rating">${p.rating}</span><select data-role="${i}" aria-label="Role for ${esc(p.name)}"><option value="start" ${p.role==="start"?"selected":""}>Starter</option><option value="bench" ${p.role==="bench"?"selected":""}>Bench</option><option value="out" ${p.role==="out"?"selected":""}>Unavailable</option></select></div>`).join("");renderPitchCards();document.querySelectorAll("[data-position]").forEach(sel=>sel.onchange=()=>{let p=team[+sel.dataset.position];p.pos=sel.value;renderSquad()});document.querySelectorAll("[data-role]").forEach(s=>s.onchange=()=>{let p=team[+s.dataset.role];let count=team.filter(x=>x.role==="start").length;if(s.value==="start"&&count>=11&&p.role!=="start"){s.value=p.role;toast("Maximum 11 starters. Move another player to the bench first.");return}if(s.value==="start"&&p.pos==="GK"&&!team.some(x=>x.role==="start"&&x.pos==="GK")){}p.role=s.value;renderSquad()})}
function toast(msg){$("match-status").textContent=msg}
$("back-league").onclick=()=>{$("club-stage").classList.add("hide");$("tactics-stage").classList.add("hide");$("league-stage").classList.remove("hide");club=null;league=null;team=[];$("to-tactics").disabled=true;document.querySelectorAll(".club-card").forEach(b=>b.classList.remove("selected"));resetManagerDesk();setStep(1)};
$("to-tactics").onclick=()=>{if(!club)return;$("club-stage").classList.add("hide");$("tactics-stage").classList.remove("hide");setStep(3);renderSquad()};
$("back-club").onclick=()=>{$("tactics-stage").classList.add("hide");$("club-stage").classList.remove("hide");setStep(2)};
document.querySelectorAll("[data-tactic]").forEach(b=>b.onclick=()=>{selectedTactic=b.dataset.tactic;document.querySelectorAll("[data-tactic]").forEach(x=>x.classList.toggle("selected",x===b))});
$("formation").onchange=e=>{formation=e.target.value;arrangeStartersForFormation();renderSquad();toast(`Tactical board updated to ${formation}; players are assigned to suitable roles.`)};
$("mentality").onchange=e=>mentality=e.target.value;
function getLineup(teamArr){return teamArr.filter(p=>p.role==="start").slice(0,11)}
// Original synthesized match audio: no external files or copyrighted recordings required.
const matchAudio={ctx:null,master:null,enabled:true,crowd:null,crowdGain:null};
function audioReady(){if(!matchAudio.enabled)return false;try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;if(!matchAudio.ctx){matchAudio.ctx=new AC();matchAudio.master=matchAudio.ctx.createGain();matchAudio.master.gain.value=.62;matchAudio.master.connect(matchAudio.ctx.destination)}if(matchAudio.ctx.state==='suspended')matchAudio.ctx.resume();return true}catch(e){return false}}
function tone(freq,duration,type='sine',gain=.08,when=0,slide=0){if(!audioReady())return;const c=matchAudio.ctx,o=c.createOscillator(),g=c.createGain(),t=c.currentTime+when;o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,freq+slide),t+duration);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+.018);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(matchAudio.master);o.start(t);o.stop(t+duration+.03)}
function noiseBurst(duration=.18,gain=.12,filter=900){if(!audioReady())return;const c=matchAudio.ctx,n=Math.floor(c.sampleRate*duration),buf=c.createBuffer(1,n,c.sampleRate),a=buf.getChannelData(0);for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(1-i/n);const src=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();src.buffer=buf;f.type='lowpass';f.frequency.value=filter;g.gain.value=gain;src.connect(f);f.connect(g);g.connect(matchAudio.master);src.start()}
function whistle(kind='short'){if(!audioReady())return;const count=kind==='full'?3:kind==='half'?2:1;for(let i=0;i<count;i++){const d=kind==='full'?0.62:kind==='half'?.48:.34; tone(2350,d,'sine',.19,i*(d+.13),180);tone(2920,d*.9,'triangle',.075,i*(d+.13),-120)}}
function crowdStart(){if(!audioReady()||matchAudio.crowd)return;const c=matchAudio.ctx,n=c.sampleRate*2,buf=c.createBuffer(1,n,c.sampleRate),a=buf.getChannelData(0);for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(.35+Math.random()*.15);const src=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();src.buffer=buf;src.loop=true;f.type='bandpass';f.frequency.value=420;f.Q.value=.55;g.gain.value=.018;src.connect(f);f.connect(g);g.connect(matchAudio.master);src.start();matchAudio.crowd=src;matchAudio.crowdGain=g}
function crowdStop(){try{if(matchAudio.crowd)matchAudio.crowd.stop()}catch(e){}matchAudio.crowd=null;matchAudio.crowdGain=null}
function soundEffect(type){if(!audioReady())return;switch(type){case'kick':noiseBurst(.075,.075,650);tone(115,.09,'sine',.045,0,-40);break;case'goal':for(let i=0;i<7;i++)tone([392,494,587,659][i%4],.5,'triangle',.055,i*.085);noiseBurst(.8,.10,1500);break;case'save':noiseBurst(.22,.10,1100);tone(180,.16,'sine',.06);break;case'foul':tone(155,.16,'triangle',.08);break;case'cheer':noiseBurst(.55,.045,1900);break}}
$('sound-toggle').onclick=()=>{matchAudio.enabled=!matchAudio.enabled;$('sound-toggle').textContent=matchAudio.enabled?'🔊 Sound: On':'🔇 Sound: Off';$('sound-toggle').setAttribute('aria-pressed',String(matchAudio.enabled));if(matchAudio.enabled){audioReady();if(matchAudio.master)matchAudio.master.gain.setTargetAtTime(.62,matchAudio.ctx.currentTime,.04);if(!$('match-screen').classList.contains('hide')&&!paused)crowdStart()}else{crowdStop();if(matchAudio.master)matchAudio.master.gain.setTargetAtTime(0,matchAudio.ctx.currentTime,.04)}};
function kickoff(){audioReady();crowdStop();if(season){const fixture=userFixture();if(fixture){opponent=league.clubs.find(c=>c[0]===(fixture.home===club[0]?fixture.away:fixture.home))||league.clubs.find(c=>c[0]!==club[0]);}}window._half=false;if(raf)cancelAnimationFrame(raf);let starters=getLineup(team);if(starters.length!==11){alert(`You need exactly 11 starters. You currently have ${starters.length}.`);return}if(!starters.some(p=>p.pos==="GK")){alert("Select a goalkeeper in your starting XI.");return}
opponent=league.clubs.filter(c=>c[0]!==club[0]).sort(()=>Math.random()-.5)[0];opTeam=makeSquad(opponent);opTeam.forEach((p,i)=>p.role=i<11?"start":"bench");
$("setup").classList.add("hide");$("match-screen").classList.remove("hide");$("home-name").textContent=club[0];$("away-name").textContent=opponent[0];$("score").textContent="0 — 0";$("clock").textContent="00:00";$("match-phase").textContent="KICKOFF";$("coach-line").textContent=`${coachFor(club[0])} vs ${coachFor(opponent[0])}`;$("result-panel").classList.add("hide");$("commentary").innerHTML="";homeGoals=awayGoals=elapsed=0;firstHalfStoppage=rng(1,5);stoppage=rng(1,5);halfBreakDone=false;lastEvent=-8;attacks=[0,0];shots=[0,0];onTarget=[0,0];corners=[0,0];fouls=[0,0];offsides=[0,0];passes=[0,0];passAcc=[0,0];tackles=[0,0];saves=[0,0];possTicks=[0,0];subbed=new Set();paused=false;speed=1;ball={x:450,y:243,vx:0,vy:0,owner:0};formation=$("formation").value;mentality=$("mentality").value;selectedTactic=$("live-tactic").value=selectedTactic;$("live-mentality").value=mentality;$("pause").textContent="Ⅱ Pause";$("speed").textContent="Speed ×1";team.forEach(p=>p.stamina=100);renderSubOptions();initPlayers();addEvent(`Kick-off! ${club[0]} line up in a ${formation}.`);whistle("short");crowdStart();addEvent(`${opponent[0]}'s AI manager opts for ${["a compact block","a high press","quick counter-attacks"][rng(0,2)]}.`);lastFrame=performance.now();if(raf)cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
$("kickoff").onclick=kickoff;
function renderSubOptions(){let starters=getLineup(team),bench=team.filter(p=>p.role==="bench");$("sub-out").innerHTML=starters.length?starters.map(p=>`<option value="${esc(p.name)}">${esc(p.name)} · ${p.pos}</option>`).join(""):'<option value="">No starters</option>';$("sub-player").innerHTML=bench.length?bench.map(p=>`<option value="${esc(p.name)}">${esc(p.name)} · ${p.pos}</option>`).join(""):'<option value="">No bench players</option>';$("make-sub").disabled=!bench.length||!starters.length}
let players=[],oppPlayers=[];
function formationCoords(form,side){let coords;switch(form){case"4-2-3-1":coords=[[.08,.5],[.24,.18],[.2,.39],[.2,.61],[.24,.82],[.39,.37],[.39,.63],[.54,.22],[.55,.5],[.54,.78],[.72,.5]];break;case"4-4-2":coords=[[.08,.5],[.24,.18],[.2,.39],[.2,.61],[.24,.82],[.43,.18],[.4,.39],[.4,.61],[.43,.82],[.69,.38],[.69,.62]];break;case"3-5-2":coords=[[.08,.5],[.23,.29],[.2,.5],[.23,.71],[.4,.13],[.39,.32],[.38,.5],[.39,.68],[.4,.87],[.68,.38],[.68,.62]];break;case"5-3-2":coords=[[.08,.5],[.22,.12],[.19,.31],[.18,.5],[.19,.69],[.22,.88],[.42,.3],[.4,.5],[.42,.7],[.68,.38],[.68,.62]];break;default:coords=[[.08,.5],[.24,.18],[.2,.39],[.2,.61],[.24,.82],[.4,.28],[.39,.5],[.4,.72],[.68,.18],[.72,.5],[.68,.82]]}
return coords.map(([x,y])=>({x:(side===0?x:1-x)*900,y:y*486,tx:(side===0?x:1-x)*900,ty:y*486,side,dx:0,dy:0}))}
function orderForFormation(lineup){const groups=[["GK"],["LB","LWB"],["CB"],["CB"],["RB","RWB"],["DM","CDM"],["CM","LM","RM"],["CM","AM","CAM"],["CM","RM","LM"],["LW","CF","ST"],["RW","ST","CF"]];const pool=[...lineup],out=[];for(const accepted of groups){let idx=pool.findIndex(p=>accepted.includes(p.pos));if(idx<0)idx=pool.findIndex(p=>p.pos!=="GK");if(idx>=0)out.push(pool.splice(idx,1)[0]);}return out.concat(pool)}function initPlayers(){let home=orderForFormation(getLineup(team)),away=orderForFormation(getLineup(opTeam));players=formationCoords(formation,0).map((pt,i)=>({...pt,name:home[i]?.name||"Player",rating:home[i]?.rating||75,pos:home[i]?.pos||"CM",stamina:100}));let oppForm=["4-3-3","4-2-3-1","4-4-2"][rng(0,2)];oppPlayers=formationCoords(oppForm,1).map((pt,i)=>({...pt,name:away[i]?.name||"Player",rating:away[i]?.rating||75,pos:away[i]?.pos||"CM",stamina:100}));drawPitch()}
const canvas=$("pitch"),ctx=canvas.getContext("2d");
function drawPitch(){if(!ctx)return;let w=900,h=486;ctx.clearRect(0,0,w,h);for(let i=0;i<10;i++){ctx.fillStyle=i%2?"#20483a":"#275341";ctx.fillRect(i*w/10,0,w/10,h)}ctx.strokeStyle="#b9d9bdad";ctx.lineWidth=2;ctx.strokeRect(20,20,w-40,h-40);ctx.beginPath();ctx.moveTo(w/2,20);ctx.lineTo(w/2,h-20);ctx.stroke();ctx.beginPath();ctx.arc(w/2,h/2,62,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(w/2,h/2,3,0,Math.PI*2);ctx.fillStyle="#d4e8d7";ctx.fill();ctx.strokeRect(20,h/2-90,100,180);ctx.strokeRect(w-120,h/2-90,100,180);ctx.strokeRect(20,h/2-43,35,86);ctx.strokeRect(w-55,h/2-43,35,86);ctx.fillStyle="#d4e8d7";ctx.fillRect(6,h/2-34,14,68);ctx.fillRect(w-20,h/2-34,14,68);
const all=[...players,...oppPlayers];all.forEach((p,i)=>{ctx.beginPath();ctx.arc(p.x,p.y,11,0,Math.PI*2);ctx.fillStyle=p.side===0?club[3]:opponent[3];ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=p.side===0?"#f0f4eb":"#101510";ctx.stroke();ctx.fillStyle=(p.side===0&&club[3]==="#e7d9a7")||(p.side===1&&opponent[3]==="#e7d9a7")?"#172018":"#fff";ctx.font="bold 8px system-ui";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText((p.side===0?"": "")+(i%11+1),p.x,p.y+.5)});ctx.beginPath();ctx.arc(ball.x,ball.y,5,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();ctx.strokeStyle="#19221a";ctx.lineWidth=1;ctx.stroke()}
function addEvent(text,kind=""){let div=document.createElement("div");div.className="event "+kind;let min=Math.min(90+stoppage,Math.floor(elapsed)+1);let clock=min>90?`90+${min-90}'`:`${min}'`;div.innerHTML=`<b>${clock}</b> &nbsp; ${esc(text)}`;$("commentary").prepend(div);while($("commentary").children.length>35)$("commentary").lastChild.remove()}
function getPower(side){let arr=side===0?players:oppPlayers;return arr.reduce((s,p)=>s+p.rating,0)/arr.length}
function loop(now){if(paused){lastFrame=now;raf=requestAnimationFrame(loop);return}let dt=Math.min(.05,(now-lastFrame)/1000)*speed;lastFrame=now;elapsed+=dt;if(elapsed>=90+firstHalfStoppage+stoppage){elapsed=90+firstHalfStoppage+stoppage;updateClock();finishMatch();drawPitch();return}
simulateStep(dt);updateClock();updateStats();drawPitch();raf=requestAnimationFrame(loop)}
function simulateStep(dt){let t=elapsed;let homePower=getPower(0)+(mentality==="attacking"?4:mentality==="defensive"?-2:0)+(selectedTactic==="possession"?2:0);let awayPower=getPower(1)+(opponent[2]>=club[2]?3:0)+(t>55?3:0);
let eventChance=.42*dt;if(Math.random()<eventChance){currentPoss=Math.random()<(homePower/(homePower+awayPower))?0:1;possTicks[currentPoss]+=1;attacks[currentPoss]++;passes[currentPoss]+=rng(2,8);passAcc[currentPoss]+=rng(1,8);if(Math.random()<.13){fouls[1-currentPoss]++;soundEffect("foul");}if(Math.random()<.07)offsides[currentPoss]++;if(Math.random()<.12)tackles[1-currentPoss]++;let side=currentPoss,arr=side===0?players:oppPlayers;let targetX=side===0?rng(610,835):rng(65,290),targetY=rng(65,420);let actor=arr[rng(5,10)];let carrier=arr[Math.max(0,Math.min(10,rng(5,10)))];ball.owner=side;ball.x=carrier.x;ball.y=carrier.y;let chanceShot=.20+(selectedTactic==="direct"?.10:0)+(mentality==="attacking"?.08:0);if(Math.random()<chanceShot){shots[side]++;soundEffect("kick");if(Math.random()<.58){onTarget[side]++;}else if(Math.random()<.22)corners[1-side]++;let chance=.13+(side===0?homePower-awayPower:awayPower-homePower)/900+(side===0&&mentality==="attacking"?.08:0);ball.x=targetX;ball.y=targetY;if(Math.random()<Math.max(.04,Math.min(.38,chance))){if(side===0)homeGoals++;else awayGoals++;$("score").textContent=`${homeGoals} — ${awayGoals}`;addEvent(`GOAL! ${actor.name} finishes after a ${selectedTactic==="direct"?"direct break":"worked attacking move"}.`,"goal");soundEffect("goal");ball.x=450;ball.y=243;currentPoss=1-side}else{if(Math.random()<.62){saves[1-side]++;soundEffect("save");}if(Math.random()<.18)corners[1-side]++;addEvent(`${actor.name} shoots — the keeper saves or it flashes wide.`);ball.x=side===0?835:65;ball.y=243}}else{let passTarget=arr[rng(0,10)];if(Math.random()<.08)corners[side]++;soundEffect("kick");ball.vx=(passTarget.x-carrier.x)*2.2;ball.vy=(passTarget.y-carrier.y)*2.2;ball.x=carrier.x+(passTarget.x-carrier.x)*.65;ball.y=carrier.y+(passTarget.y-carrier.y)*.65;addEvent(Math.random()<.5?`${side===0?club[0]:opponent[0]} combine through midfield, switching the point of attack.`:`${actor.name} carries forward before releasing a pass.`)}}
const all=[...players,...oppPlayers];all.forEach((p,i)=>{let attacking=(p.side===0&&currentPoss===0)||(p.side===1&&currentPoss===1);let sideDir=p.side===0?1:-1;let role=p.pos||"CM";let rolePush=({GK:-.15,CB:.05,LB:.18,RB:.18,LB_WB:.28,RB_WB:.28,DM:.18,CDM:.18,CM:.32,LM:.38,RM:.38,CAM:.48,LW:.58,RW:.58,ST:.68,CF:.64})[role]??.30;let push=attacking?rolePush*sideDir*260:-sideDir*(role.includes("CB")?35:12);if(p.side===0&&mentality==="attacking")push+=sideDir*40;if(p.side===0&&mentality==="defensive")push-=sideDir*32;if(selectedTactic==="press"&&attacking)push+=sideDir*22;if(selectedTactic==="direct"&&attacking&&rolePush>.5)push+=sideDir*35;let tx=p.tx+push+Math.sin(t*.8+i*1.7)*22;let ty=p.ty+Math.cos(t*.55+i*1.3)*26;if(attacking&&Math.abs(p.ty-ball.y)<120)ty+=(ball.y-p.ty)*.12;if(p.side===1&&t>55)tx-=12*sideDir;tx=Math.max(35,Math.min(865,tx));ty=Math.max(35,Math.min(451,ty));let d=Math.hypot(tx-p.x,ty-p.y);if(d>1){let moveSpeed=(p.pos==="ST"||p.pos==="LW"||p.pos==="RW"?1.35:1.05)*(p.stamina/100);p.x+=(tx-p.x)*Math.min(1,dt*moveSpeed);p.y+=(ty-p.y)*Math.min(1,dt*moveSpeed)}p.stamina=Math.max(45,p.stamina-dt*(.08+(selectedTactic==="press"?.08:0)))});if(Math.hypot(ball.x-450,ball.y-243)>25){ball.x+=(450-ball.x)*dt*.035;ball.y+=(243-ball.y)*dt*.035;}if(t-lastEvent>18&&Math.random()<.04){lastEvent=t;addEvent(t<1?"The teams settle into their shape.":"The tempo shifts as both managers adjust.");}}
function updateClock(){let m=Math.floor(elapsed),s=Math.floor((elapsed-m)*60);$("clock").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;const halfEnd=45+firstHalfStoppage;$("match-phase").textContent=m<halfEnd?(m<45?"FIRST HALF":"FIRST-HALF ADDED TIME"):m<90?"SECOND HALF":"STOPPAGE TIME";if(elapsed>=halfEnd&&!halfBreakDone){halfBreakDone=true;window._half=true;paused=true;addEvent(`Half-time. ${firstHalfStoppage} minute${firstHalfStoppage===1?"":"s"} added in the first half. Take a short break.`);whistle("half");crowdStop();$("pause").textContent="▶ Resume 2nd half";setTimeout(()=>{if($("match-screen").classList.contains("hide"))return;paused=false;$("pause").textContent="Ⅱ Pause";lastFrame=performance.now();addEvent("Second half begins!");whistle("short");crowdStart();},3000)}}
function setStat(id,value){const el=$(id);if(el)el.textContent=value}function setBar(id,value){const el=$(id);if(el)el.style.width=Math.max(0,Math.min(100,value))+"%"}
function updateStats(){let total=possTicks[0]+possTicks[1]||1;let poss=Math.round(possTicks[0]/total*100);setStat("poss",poss+"%");setBar("poss-bar",poss);setStat("shots",shots[0]+" — "+shots[1]);setBar("shot-bar",shots[0]/(shots[0]+shots[1]+1)*100);setStat("attacks",attacks[0]+" — "+attacks[1]);setBar("attack-bar",attacks[0]/(attacks[0]+attacks[1]+1)*100);setStat("on-target",onTarget[0]+" — "+onTarget[1]);setBar("target-bar",onTarget[0]/(onTarget[0]+onTarget[1]+1)*100);const pa=passes.map((n,i)=>n?Math.round(passAcc[i]/n*100):0);setStat("pass-accuracy",pa[0]+"% — "+pa[1]+"%");setBar("pass-bar",pa[0]);setStat("corners",corners[0]+" — "+corners[1]);setBar("corner-bar",corners[0]/(corners[0]+corners[1]+1)*100);setStat("fouls",fouls[0]+" — "+fouls[1]);setBar("foul-bar",fouls[0]/(fouls[0]+fouls[1]+1)*100);setStat("offsides",offsides[0]+" — "+offsides[1]);setBar("offside-bar",offsides[0]/(offsides[0]+offsides[1]+1)*100);setStat("tackles",tackles[0]+" — "+tackles[1]);setBar("tackle-bar",tackles[0]/(tackles[0]+tackles[1]+1)*100);setStat("saves",saves[0]+" — "+saves[1]);setBar("save-bar",saves[0]/(saves[0]+saves[1]+1)*100)}
function finishMatch(){if(season){completeSeasonMatch();}paused=true;$("pause").disabled=true;$("speed").disabled=true;$("match-phase").textContent="FULL TIME";$("result-panel").classList.remove("hide");$("final-score").textContent=`${homeGoals} — ${awayGoals}`;$("result-title").textContent=homeGoals>awayGoals?"A statement win.":homeGoals<awayGoals?"Lessons for next time.":"Honours even.";let poss=+$("poss").textContent.replace("%","");$("result-copy").textContent=`${club[0]} had ${poss}% possession, registered ${shots[0]} shots, and faced ${shots[1]} opposition attempts. Your final whistle, your responsibility.`;addEvent("Full-time whistle. Match complete.");whistle("full");crowdStop();}
$("pause").onclick=()=>{paused=!paused;$("pause").textContent=paused?"▶ Resume":"Ⅱ Pause";if(paused)crowdStop();else{lastFrame=performance.now();crowdStart()}};
$("speed").onclick=()=>{speed=speed===1?2:speed===2?3:1;$("speed").textContent="Speed ×"+speed};
$("live-mentality").onchange=e=>{mentality=e.target.value;addEvent(`Touchline change: mentality switched to ${mentality}.`);toast("Mentality updated.")};
$("live-tactic").onchange=e=>{selectedTactic=e.target.value;addEvent(`Tactical adjustment: ${selectedTactic}.`);toast("Strategy updated.")};
$("make-sub").onclick=()=>{let inName=$("sub-player").value,outName=$("sub-out").value;if(!inName||!outName){toast("Choose a player to come off and a player to come on.");return}let off=team.find(p=>p.name===outName&&p.role==="start"),on=team.find(p=>p.name===inName&&p.role==="bench");if(!off||!on){toast("That substitution is no longer available.");return}off.role="bench";on.role="start";let idx=players.findIndex(p=>p.name===off.name);if(idx>=0){players[idx].name=on.name;players[idx].rating=on.rating;players[idx].pos=on.pos;players[idx].stamina=100;players[idx].role=on.pos}subbed.add(inName);renderSubOptions();addEvent(`Substitution: ${on.name} replaces ${off.name}.`);toast(`${on.name} on for ${off.name}.`)};

$("new-match").onclick=()=>{crowdStop();if(raf)cancelAnimationFrame(raf);paused=true;$("match-screen").classList.add("hide");$("setup").classList.remove("hide");$("league-stage").classList.add("hide");$("club-stage").classList.add("hide");$("tactics-stage").classList.remove("hide");$("desk-empty").classList.add("hide");$("desk-club").classList.remove("hide");setStep(3);team.forEach((p,i)=>{p.role=i<11?"start":"bench";p.stamina=100});renderSquad();window.scrollTo({top:0,behavior:"smooth"});$("pause").disabled=false;$("speed").disabled=false;window._half=false;toast("Full time. Set your XI for the next match.")};
function openCampaignView(kind){if(!season||!club)return;const modal=$("campaign-modal"),content=$("campaign-modal-content");if(!modal||!content)return;const sorted=season.clubs.map(n=>({name:n,...season.points[n]})).sort((a,b)=>b.pts-a.pts||(b.gf-b.ga)-(a.gf-a.ga)||b.gf-a.gf);if(kind==="table"){$("campaign-kicker").textContent=league.name.toUpperCase()+" · SEASON CENTRE";$("campaign-modal-title").textContent="League table";$("campaign-modal-sub").textContent=`Matchweek ${Math.min((season.week||0)+1,season.fixtures.length)} of ${season.fixtures.length} · ${club[0]} highlighted`;content.innerHTML=`<table class="campaign-table"><thead><tr><th>#</th><th>Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead><tbody>${sorted.map((r,i)=>`<tr class="${r.name===club[0]?'is-user':''}"><td class="rank">${i+1}</td><td><b>${esc(r.name)}</b></td><td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gf-r.ga>0?'+':''}${r.gf-r.ga}</td><td><b>${r.pts}</b></td></tr>`).join("")}</tbody></table>`}else{$("campaign-kicker").textContent=club[0].toUpperCase()+" · SEASON CALENDAR";$("campaign-modal-title").textContent="My fixtures";const played=season.fixtures.flat().filter(f=>f.home===club[0]||f.away===club[0]).filter(f=>f.played).length;$("campaign-modal-sub").textContent=`${played} of ${season.fixtures.length} matches played · Home and away fixtures`;content.innerHTML=season.fixtures.map((round,i)=>{const f=round.find(x=>x.home===club[0]||x.away===club[0]);if(!f)return"";const isHome=f.home===club[0],opp=isHome?f.away:f.home;return `<div class="fixture-round"><h3>MATCHWEEK ${i+1}${i===season.week&&!f.played?' · CURRENT':''}</h3><div class="fixture-row is-user"><span class="home">${esc(f.home)}</span><span class="fixture-score">${f.played?`${f.homeGoals} – ${f.awayGoals}`:'VS'}<small class="fixture-status">${f.played?'FULL TIME':i===season.week?'NEXT FIXTURE':'UPCOMING'}</small></span><span class="away">${esc(f.away)}</span></div></div>`}).join("")||'<p class="muted">No fixtures available.</p>'}modal.classList.remove("hide")}$("open-table")?.addEventListener("click",()=>openCampaignView("table"));$("open-fixtures")?.addEventListener("click",()=>openCampaignView("fixtures"));$("close-campaign")?.addEventListener("click",()=>$("campaign-modal").classList.add("hide"));$("campaign-modal")?.addEventListener("click",e=>{if(e.target.id==="campaign-modal")e.currentTarget.classList.add("hide")});document.addEventListener("keydown",e=>{if(e.key==="Escape")$("campaign-modal")?.classList.add("hide")});
renderLeagues();
