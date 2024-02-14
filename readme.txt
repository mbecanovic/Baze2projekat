U ovom projektu je radjena aplikacija koja simulira elektronske novine pomoću MERN tehnologije. Pomoću komitova mogu da se vide detalji koji su razradjeni prilikom build-ovanja ove aplikacije. 

Aplikacija je full stack, sto znaci da je uspešno omogućena komunikacija izmedju frontend-a i backend-a, kao i to da je backend uspešno povezan sa bazom. 
Pre upotrebe, novinar mora da se registruje, a zatim uloguje (ako nalog nije registrovan). Kada je ulogovan omogućene su mu funkcionalnosti kao sto su objavljivanje novinarskih članaka, pregled istih, brisanje itd... Novinar ima svoj dashboard gde može da pregleda svoj profil i da manipuliše istim. 

Ako niko nije ulogovan, aplikacija svakako dozvoljava pregled objavljenih novosti kao i komentarisanje. Za komentarisanje je neophodno da "pregledač" upiše svoje ime/nickname, jer ako to ne uradi komentar neće biti memorisan u bazi podataka. Ako bi tzv. pregledaš pokusao da pristupi dashboard stranici, bio bi poslat na login stranicu, jer je dashboard privatna odnosno zaštićena ruta. 

Ako ste ulogovani kao admin imaćete dodatne privilegije koje običan novinar nema kao na primer pregled i manipulacija svih novinara kao i objava koje su svi novinari objavili. Admin je u mogućnosti da ukloni novinara i/ili da obriše željene člankove. 

ps. ako korisite aplikaciju neophodno je u frontend folderu, kao i backend folderu pokrenuti npm install i time instalirati neophodne "pakete" za rad aplikacije kao sto su axios, react-router-dom, itd. (package.json sadrži neophodne pakete)

Aplikacija uspešno obavlja navedene funkcionalnosti, dinamička je i nema zastoja u radu. 