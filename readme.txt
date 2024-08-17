U ovom projektu je radjena aplikacija koja simulira elektronske novine pomoću MERN tehnologije. Pomoću komitova mogu da se vide detalji koji su razradjeni prilikom build-ovanja ove aplikacije. 

Aplikacija je full stack, sto znaci da je uspešno omogućena komunikacija izmedju frontend-a i backend-a, kao i to da je backend uspešno povezan sa bazom. 
Pre upotrebe, novinar mora da se registruje, a zatim uloguje (ako nalog nije registrovan). Kada je ulogovan omogućene su mu funkcionalnosti kao sto su objavljivanje novinarskih članaka, pregled istih, brisanje itd... Novinar ima svoj dashboard gde može da pregleda svoj profil i da manipuliše istim. 

Ako niko nije ulogovan, aplikacija svakako dozvoljava pregled objavljenih novosti kao i komentarisanje. Za komentarisanje je neophodno da "pregledač" upiše svoje ime/nickname, jer ako to ne uradi komentar neće biti memorisan u bazi podataka. Ako bi tzv. pregledaš pokusao da pristupi dashboard stranici, bio bi poslat na login stranicu, jer je dashboard privatna odnosno zaštićena ruta. 

Ako ste ulogovani kao admin imaćete dodatne privilegije koje običan novinar nema kao na primer pregled i manipulacija svih novinara kao i objava koje su svi novinari objavili. Admin je u mogućnosti da ukloni novinara i/ili da obriše željene člankove. 

ps. ako korisite aplikaciju neophodno je u frontend folderu, kao i backend folderu pokrenuti npm install i time instalirati neophodne "pakete" za rad aplikacije kao sto su axios, react-router-dom, itd. (package.json sadrži neophodne pakete)

Aplikacija uspešno obavlja navedene funkcionalnosti, dinamička je i nema zastoja u radu. 


////////english////////

This project involved creating an application that simulates an electronic newspaper using MERN technology. The details developed during the build process of this application can be seen through the commits.

The application is full stack, meaning that communication between the frontend and backend has been successfully established, and the backend is successfully connected to the database.
Before using the app, a journalist must register and then log in (if the account is not already registered). Once logged in, they are given functionalities such as publishing articles, reviewing them, deleting them, etc. The journalist has their own dashboard where they can view and manage their profile.

If no one is logged in, the application still allows browsing of the published news, as well as commenting. To leave a comment, the viewer must enter their name/nickname; otherwise, the comment will not be saved in the database. If a viewer tries to access the dashboard page, they will be redirected to the login page, as the dashboard is a private, protected route.

If you are logged in as an admin, you will have additional privileges that a regular journalist does not have, such as the ability to review and manage all journalists and the articles they have published. The admin has the ability to remove a journalist and/or delete desired articles.

P.S. If you use the application, it is necessary to run npm install in both the frontend and backend folders to install the required packages for the application, such as axios, react-router-dom, etc. (The package.json file contains the necessary packages).

The application successfully performs the mentioned functionalities, is dynamic, and runs without any delays.
