$(function () {
  function initTranslations(cityTitle, isCityTranslation) {
    var translation = {
      source: {
        title: "BigoFun",
        text01:
          "There are many hot girls on our site who want to send you their photos. Before you see them, we must ask a few questions.",
        text02: "START",
        text03: "Have you ever texted strangers?",
        text04: "No",
        text05: "Yes",
        text06: "it’s a secret",
        text07:
          "The girls on this site are only looking for flirting and dating with no strings attached. Do you want it too?",
        text08: "No",
        text09: "Yes",
        text10: "I don’t know yet",
        text11: "Are you ready to send your photos to girls?",
        text12: "No",
        text13: "Yes",
        text14: "I don’t know yet",
        text15: "Do you just want to chat or are you looking for meetings?",
        text16: "Correspondence only",
        text17: "Real meetings",
        text18: "Correspondence and then a meeting",
        text19: "I don’t know yet",
        text20: "Almost done!",
        text21: "You are qualified to enter our site.",
        text22:
          "Please click Continue to complete your profile and start looking for girls.",
        text23: "Continue",
        text24: "What is your age?",
        text25: "Select your gender",
        text26: "I am a woman",
        text27: "I am a man",
        text28: "Who are you?",
        textCaptchaTitle: "Unlock the girl to move further",
      },
      en: {
        title: "BigoFun",
        text01:
          "There are many hot girls on our site who want to send you their photos. Before you see them, we must ask a few questions.",
        text02: "START",
        text03: "Have you ever texted strangers?",
        text04: "No",
        text05: "Yes",
        text06: "it’s a secret",
        text07:
          "The girls on this site are only looking for flirting and dating with no strings attached. Do you want it too?",
        text08: "No",
        text09: "Yes",
        text10: "I don’t know yet",
        text11: "Are you ready to send your photos to girls?",
        text12: "No",
        text13: "Yes",
        text14: "I don’t know yet",
        text15: "Do you just want to chat or are you looking for meetings?",
        text16: "Correspondence only",
        text17: "Real meetings",
        text18: "Correspondence and then a meeting",
        text19: "I don’t know yet",
        text20: "Almost done!",
        text21: "You are qualified to enter our site.",
        text22:
          "Please click Continue to complete your profile and start looking for girls.",
        text23: "Continue",
        text24: "What is your age?",
        text25: "Select your gender",
        text26: "I am a woman",
        text27: "I am a man",
        text28: "Who are you?",
        textCaptchaTitle: "Unlock the girl to move further",
      },
      ru: {
        title: "BigoFun",
        text01:
          "На нашем сайте много горячих девушек, которые хотят прислать вам свои фото. Прежде чем вы их увидите, мы должны задать несколько вопросов.",
        text02: "Далее",
        text03: "Вы когда-нибудь вели переписку с незнакомцами?",
        text04: "Нет",
        text05: "Да",
        text06: "Это секрет",
        text07:
          "Девушки на этом сайте ищут только флирт и знакомства без каких-либо условий. Ты тоже этого хочешь?",
        text08: "Нет",
        text09: "Да",
        text10: "Еще не знаю",
        text11: "Готовы ли вы отправить свои фотографии девушкам?",
        text12: "Нет",
        text13: "Да",
        text14: "Еще не знаю",
        text15: "Ты хочешь только переписываться или ищешь встреч?",
        text16: "Только переписка",
        text17: "Реальные встречи",
        text18: "Переписка, а затем встреча",
        text19: "Еще не знаю",
        text20: "Почти закончили!",
        text21: "Ты получил право войти на наш сайт.",
        text22:
          "Пожалуйста, нажми 'Далее', чтобы заполнить свой профиль и начать искать девушек.",
        text23: "Далее",
        text24: "Сколько вам лет?",
        text25: "Выбери свой пол",
        text26: "Я женщина",
        text27: "Я мужчина",
        text28: "Кто ты?",
        textCaptchaTitle: "Разблокируйте девушку, чтобы продолжить",
      },
      uk: {
        title: "BigoFun",
        text01:
          "На нашому сайті є багато гарячих дівчат, які хочуть надіслати вам свої фото. Перш ніж ви їх побачите, ми маємо поставити кілька запитань.",
        text02: "Далі",
        text03: "Ви коли-небудь листувалися з незнайомцями?",
        text04: "Ні",
        text05: "Так",
        text06: "Це секрет",
        text07:
          "Дівчата на цьому сайті шукають лише флірт та знайомства без будь-яких умов. Ти теж хочеш цього?",
        text08: "Ні",
        text09: "Так",
        text10: "Ще не знаю",
        text11: "Чи готові ви надіслати свої фотографії дівчатам?",
        text12: "Ні",
        text13: "Так",
        text14: "Ще не знаю",
        text15: "Ти хочеш тільки переписуватись чи шукаєш зустрічей?",
        text16: "Тільки переписка",
        text17: "Реальні зустрічі",
        text18: "Листування, а потім зустріч",
        text19: "Ще не знаю",
        text20: "Майже скінчили!",
        text21: "Ти маєш право увійти на наш сайт.",
        text22:
          "Будь ласка, натисніть 'Далі', щоб заповнити свій профіль та почати шукати дівчат.",
        text23: "Далі",
        text24: "Скільки вам років?",
        text25: "Обери стать",
        text26: "Я жінка",
        text27: "Я чоловік",
        text28: "Хто ты?",
        textCaptchaTitle: "Розблокуйте дівчину, щоб продовжити",
      },
      cs: {
        title: "BigoFun",
        text01:
          "Na našem webu je mnoho sexy dívek, které vám chtějí poslat své fotografie. Než je uvidíte, musíme si položit několik otázek.",
        text02: "Začít",
        text03: "Psal jsi někdy cizím lidem?",
        text04: "Ne",
        text05: "Ano",
        text06: "To je tajné",
        text07:
          "Dívky na této stránce hledají pouze flirtování a randění bez jakýchkoliv podmínek. chceš to taky?",
        text08: "Ne",
        text09: "Ano",
        text10: "Ještě nevím",
        text11: "Jste připraveni poslat své fotografie dívkám?",
        text12: "Ne",
        text13: "Ano",
        text14: "Ještě nevím",
        text15: "Chcete si jen popovídat nebo hledáte schůzky?",
        text16: "Pouze korespondence",
        text17: "Skutečná setkání",
        text18: "Korespondence a pak schůzka",
        text19: "Ještě nevím",
        text20: "Téměř hotovo!",
        text21: "Jste oprávněn vstoupit na naše internetové stránky.",
        text22:
          "Klikněte na tlačítko pokračovat, abyste dokončili svůj profil a začali hledat dívky",
        text23: "Pokračovat",
        text24: "Jaký je váš věk?",
        text25: "Vyber své pohlaví",
        text26: "Jsem žena",
        text27: "jsem muž",
        text28: "Kdo jsi?",
        textCaptchaTitle: "Odemknout dívku, aby se pohylo dál",
      },
      de: {
        title: "BigoFun",
        text01:
          "Es gibt viele heiße Mädchen auf unserer Seite, die Ihnen ihre Fotos schicken möchten. Bevor Sie sie sehen, müssen wir ein paar Fragen stellen.",
        text02: "START",
        text03: "Hast du schon mal Fremden geschrieben?",
        text04: "Nein",
        text05: "Ja",
        text06: "Ist geheim",
        text07:
          "Die Mädchen auf dieser Seite suchen nur nach Flirten und Dating ohne Bedingungen. Willst du es auch?",
        text08: "Nein",
        text09: "Ja",
        text10: "Weiss ich im Moment nicht",
        text11: "Bist du bereit, deine Fotos an Mädchen zu schicken?",
        text12: "Nein",
        text13: "Ja",
        text14: "Weiss ich im Moment nicht",
        text15: "Wollen Sie nur plaudern oder suchen Sie Meetings?",
        text16: "Nur Korrespondenz",
        text17: "Echte Treffen",
        text18: "Korrespondenz und dann ein Treffen",
        text19: "Weiss ich im Moment nicht",
        text20: "Beinahe fertig!",
        text21: "Du bist qualifiziert unserer Seite beizutreten.",
        text22:
          "Bitte klicke auf Weiter, um Dein Profil zu vervollständigen und nach Mädchen zu suchen.",
        text23: "Weiter",
        text24: "Was ist dein Alter?",
        text25: "Wähle dein Geschlecht",
        text26: "Я женщина",
        text27: "I am a man",
        text28: "Wer bist du?",
        textCaptchaTitle: "Schalte das Mädchen frei, um weiter zu bewegen",
      },
      es: {
        title: "BigoFun",
        text01:
          "Hay muchas chicas calientes en nuestro sitio que quieren enviarte sus fotos. Antes de verlos, debemos hacer algunas preguntas.",
        text02: "Comenzar",
        text03: "¿Alguna vez has enviado mensajes de texto a extraños?",
        text04: "No",
        text05: "Sí",
        text06: "Es privado",
        text07:
          "Las chicas en este sitio solo buscan coquetear y tener citas sin ataduras. ¿tú también lo quieres?",
        text08: "No",
        text09: "Sí",
        text10: "Aún no lo sé",
        text11: "¿Estás listo para enviar tus fotos a las chicas?",
        text12: "No",
        text13: "Sí",
        text14: "Aún no lo sé",
        text15: "¿Solo quieres chatear o buscas reuniones?",
        text16: "Solo correspondencia",
        text17: "Reuniones reales",
        text18: "Correspondencia y luego una reunión.",
        text19: "Aún no lo sé",
        text20: "¡Casi terminas!!",
        text21: "Ya estás preparado para ingresar en nuestro sitio.",
        text22:
          "Por favor, haz clic en Continuar para completar tu perfil y comenzar a buscar chicas.",
        text23: "Continuar",
        text24: "¿Tienes ya 24 años?",
        text25: "Selecciona tu género",
        text26: "soy una mujer",
        text27: "Yo soy un hombre",
        text28: "¿Quién eres tú?",
        textCaptchaTitle: "Desbloquea a la niña para avanzar más lejos",
      },
      fr: {
        title: "BigoFun",
        text01:
          "Il y a beaucoup de filles chaudes sur notre site qui veulent vous envoyer leurs photos. Avant de les voir, nous devons nous poser quelques questions.",
        text02: "Début",
        text03: "Avez-vous déjà envoyé des SMS à des inconnus ?",
        text04: "Non",
        text05: "Oui",
        text06: "C'est un secret",
        text07:
          "Les filles sur ce site ne recherchent que le flirt et les rencontres sans aucune condition. Le veux-tu aussi ?",
        text08: "Non",
        text09: "Oui",
        text10: "Je ne sais pas encore",
        text11: "Êtes-vous prêt à envoyer vos photos aux filles?",
        text12: "Non",
        text13: "Oui",
        text14: "Je ne sais pas encore",
        text15:
          "Voulez-vous simplement discuter ou recherchez-vous des réunions?",
        text16: "Correspondance seulement",
        text17: "De vraies rencontres",
        text18: "Correspondance puis rencontre",
        text19: "Je ne sais pas encore",
        text20: "Presque terminé!",
        text21: "Vous êtes qualifié pour entrer sur notre site.",
        text22:
          "Veuillez cliquer sur Continuer pour compléter votre profil et commencer à chercher des filles.",
        text23: "Continuez",
        text24: "Quel âge avez-vous?",
        text25: "Sélectionnez votre sexe",
        text26: "Je suis une femme",
        text27: "je suis un homme",
        text28: "Qui es-tu?",
        textCaptchaTitle: "Déverrouillez la fille pour aller plus loin",
      },
      el: {
        title: "BigoFun",
        text01:
          "Υπάρχουν πολλά καυτά κορίτσια στο site μας που θέλουν να σας στείλουν τις φωτογραφίες τους. Πριν τα δείτε, πρέπει να κάνουμε μερικές ερωτήσεις.",
        text02: "Ξεκίνησε",
        text03: "Έχετε στείλει ποτέ μηνύματα σε αγνώστους;",
        text04: "Όχι",
        text05: "Ναι",
        text06: "Είναι μυστικό",
        text07:
          "Τα κορίτσια σε αυτόν τον ιστότοπο ψάχνουν μόνο για φλερτ και ραντεβού χωρίς καμία σχέση. Το θέλεις κι εσύ;",
        text08: "Όχι",
        text09: "Ναι",
        text10: "Δεν ξέρω ακόμα",
        text11: "Είστε έτοιμοι να στείλετε τις φωτογραφίες σας σε κορίτσια;",
        text12: "Όχι",
        text13: "Ναι",
        text14: "Δεν ξέρω ακόμα",
        text15: "Θέλετε απλώς να συνομιλήσετε ή ψάχνετε για συναντήσεις;",
        text16: "Μόνο αλληλογραφία",
        text17: "Πραγματικές συναντήσεις",
        text18: "Αλληλογραφία και μετά συνάντηση",
        text19: "Δεν ξέρω ακόμα",
        text20: "Σχεδόν τελειώσαμε!",
        text21: "Έχεις το δικαίωμα να μπεις στην ιστοσελίδα μας.",
        text22:
          "Κάνε κλικ στο κουμπί Συνέχεια για να ολοκληρώσεις το προφίλ σου και να αρχίσεις να ψάχνεις κορίτσια",
        text23: "Συνέχεια",
        text24: "Ποια είναι η ηλικία σου?",
        text25: "Επιλέξτε το φύλο σας",
        text26: "Είμαι μια γυναίκα",
        text27: "Ειμαι άνδρας",
        text28: "Ποιος είσαι?",
        textCaptchaTitle: "Ξεκλειδωστε το κοριτσι για να κινησετε περισσοτερα",
      },
      hr: {
        title: "BigoFun",
        text01:
          "Na našoj stranici ima mnogo zgodnih djevojaka koje vam žele poslati svoje fotografije. Prije nego što ih vidite, moramo postaviti nekoliko pitanja.",
        text02: "Početak",
        text03: "Jeste li ikada slali poruke strancima?",
        text04: "Ne",
        text05: "Da",
        text06: "to je tajna",
        text07:
          "Djevojke na ovoj stranici traže samo flert i izlaske bez ikakvih obaveza. Želite li i vi?",
        text08: "Ne",
        text09: "Da",
        text10: "Još uvijek ne znam",
        text11: "Jeste li spremni poslati svoje fotografije curama?",
        text12: "Ne",
        text13: "Da",
        text14: "Još uvijek ne znam",
        text15: "Želite li samo razgovarati ili tražite sastanke?",
        text16: "Samo dopisivanje",
        text17: "Pravi sastanci",
        text18: "Dopisivanje i onda sastanak",
        text19: "Još uvijek ne znam",
        text20: "Skoro završeno!",
        text21: "Kvalifikovali ste se za ulazak na naš sajt.",
        text22:
          "Molimo vas da kliknete Dalje da kompletirate svoj profil i krenete sa pretragom djevojaka.",
        text23: "Dalje",
        text24: "Koliko imaš godina?",
        text25: "Odaberite spol",
        text26: "Ja sam žena",
        text27: "ja sam čovjek",
        text28: "Tko si ti?",
        textCaptchaTitle: "Otključaj djevojku da se dalje",
      },
      hu: {
        title: "BigoFun",
        text01:
          "Sok dögös lány van az oldalunkon, akik el akarják küldeni a fotóikat. Mielőtt látná őket, fel kell tennünk néhány kérdést.",
        text02: "Indítás",
        text03: "Írtál már sms-t idegeneknek?",
        text04: "Nem",
        text05: "Igen",
        text06: "ez titok",
        text07:
          "A lányok ezen az oldalon csak flörtölni és randevúzni vágynak minden kötöttség nélkül. Te is akarod?",
        text08: "Nem",
        text09: "Igen",
        text10: "Még nem tudom",
        text11: "Készen állsz, hogy elküldd a fotóidat a lányoknak?",
        text12: "Nem",
        text13: "Igen",
        text14: "Még nem tudom",
        text15: "Csak beszélgetni szeretne, vagy találkozókat keres?",
        text16: "Csak levelezés",
        text17: "Igazi találkozók",
        text18: "Levelezés, majd találkozó",
        text19: "Még nem tudom",
        text20: "Majdnem kész!",
        text21: "Fel vagy jogosítva az oldalunkra való belépésre.",
        text22:
          "Kérjük, kattints a Folytatásra a profilod befejezéséhez és a csajok kereséséhez",
        text23: "Folytatás",
        text24: "Hány éves vagy?",
        text25: "Válaszd ki a nemed",
        text26: "nő vagyok",
        text27: "férfi vagyok",
        text28: "Ki vagy te?",
        textCaptchaTitle: "Nyilvánítsa ki a lányt, hogy tovább költözhet",
      },
      he: {
        title: "BigoFun",
        text01:
          "עס זענען פילע הייס גערלז אויף אונדזער פּלאַץ וואָס ווילן צו שיקן איר זייער פאָטאָס. איידער איר זען זיי, מיר מוזן פרעגן אַ ביסל פראגעס.",
        text02: "התחל",
        text03: "האָבן איר אלץ טעקסט פֿרעמדע?",
        text04: "לא",
        text05: "כן",
        text06: "זה סוד",
        text07:
          "די גערלז אויף דעם פּלאַץ זענען בלויז קוקן פֿאַר פלירטינג און דייטינג מיט קיין סטרינגס אַטאַטשט. ווילסט עס אויך?",
        text08: "לא",
        text09: "כן",
        text10: "אני עדיין לא יודע",
        text11: "זענט איר גרייט צו שיקן דיין פאָטאָס צו גערלז?",
        text12: "לא",
        text13: "כן",
        text14: "אני עדיין לא יודע",
        text15: "צי איר נאָר ווילן צו שמועסן אָדער איר זוכט פֿאַר מיטינגז?",
        text16: "נאָר קאָרעספּאָנדענץ",
        text17: "פאַקטיש מיטינגז",
        text18: "קאָרעספּאָנדענץ און דעמאָלט אַ באַגעגעניש",
        text19: "אני עדיין לא יודע",
        text20: "כמעט סיימנו!",
        text21: "אתה רשאי להכנס לאתר שלנו.",
        text22: "לחץ על המשך כדי להשלים את הפרופיל שלך ולהתחיל לחפש בנות.",
        text23: "המשך",
        text24: "מה הגיל שלך?",
        text25: "בחר את מינך",
        text26: "אני אישה",
        text27: "אני גבר",
        text28: "מי אתה?",
        textCaptchaTitle: "ופשליסן די מיידל צו מאַך ווייַטער",
      },
      it: {
        title: "BigoFun",
        text01:
          "Ci sono molte ragazze calde sul nostro sito che vogliono inviarti le loro foto. Prima di vederli, dobbiamo porre alcune domande.",
        text02: "Inizia",
        text03: "Hai mai mandato messaggi a estranei?",
        text04: "No",
        text05: "Sì",
        text06: "preferisco non dirlo",
        text07:
          "Le ragazze su questo sito cercano solo flirt e incontri senza vincoli. Lo vuoi anche tu?",
        text08: "No",
        text09: "Sì",
        text10: "Ancora non so",
        text11: "Sei pronto per inviare le tue foto alle ragazze?",
        text12: "No",
        text13: "Sì",
        text14: "Ancora non so",
        text15: "Vuoi solo chattare o stai cercando incontri?",
        text16: "Solo corrispondenza",
        text17: "Veri incontri",
        text18: "Corrispondenza e poi incontro",
        text19: "Ancora non so",
        text20: "Quasi fatto!",
        text21: "Sei stato ammesso a far parte del nostro sito.",
        text22:
          "Clicca su Continua per completare il tuo profilo e iniziare a trovare delle ragazze.",
        text23: "Continua",
        text24: "Quanti anni hai?",
        text25: "Seleziona il tuo sesso",
        text26: "Io sono una donna",
        text27: "sono un uomo",
        text28: "Chi sei?",
        textCaptchaTitle: "Sblocca la ragazza per muoversi oltre",
      },
      nl: {
        title: "BigoFun",
        text01:
          "Er zijn veel hete meiden op onze site die je hun foto's willen sturen. Voordat u ze ziet, moeten we een paar vragen stellen.",
        text02: "Start",
        text03: "Heb je ooit vreemden ge-sms't?",
        text04: "Nee",
        text05: "Ja",
        text06: "dat is geheim",
        text07:
          "De meisjes op deze site zijn alleen op zoek naar flirten en daten zonder verplichtingen. Wil jij het ook?",
        text08: "Nee",
        text09: "Ja",
        text10: "Ik weet het nog niet",
        text11: "Ben je klaar om je foto's naar meisjes te sturen?",
        text12: "Nee",
        text13: "Ja",
        text14: "Ik weet het nog niet",
        text15: "Wil je gewoon kletsen of ben je op zoek naar ontmoetingen?",
        text16: "Alleen correspondentie",
        text17: "Echte ontmoetingen",
        text18: "Correspondentie en dan een ontmoeting",
        text19: "Ik weet het nog niet",
        text20: "Bijna klaar!",
        text21: "Je bent gekwalificeerd om onze site te bezoeken.",
        text22:
          "Klik op doorgaan om je profiel in te voltooien en te beginnen met het zoeken naar meisjes.",
        text23: "Ga verder",
        text24: "Hoe oud ben jij?",
        text25: "Kies je geslacht",
        text26: "ik ben een vrouw",
        text27: "ik ben een man",
        text28: "Wie ben jij?",
        textCaptchaTitle: "Ontgrendel het meisje om verder te bewegen",
      },
      pl: {
        title: "BigoFun",
        text01:
          "Na naszej stronie jest wiele gorących dziewczyn, które chcą wysłać Ci swoje zdjęcia. Zanim je zobaczysz, musimy zadać kilka pytań.",
        text02: "Rozpocznij",
        text03: "Czy kiedykolwiek pisałeś SMS-y do nieznajomych?",
        text04: "Nie",
        text05: "Tak",
        text06: "to tajemnica",
        text07:
          "Dziewczyny na tej stronie chcą tylko flirtować i randkować bez żadnych zobowiązań. Ty też tego chcesz?",
        text08: "Nie",
        text09: "Tak",
        text10: "Jeszcze nie wiem",
        text11: "Czy jesteś gotowy, aby wysłać swoje zdjęcia dziewczynom?",
        text12: "Nie",
        text13: "Tak",
        text14: "Jeszcze nie wiem",
        text15: "Chcesz po prostu porozmawiać, czy szukasz spotkań?",
        text16: "Tylko korespondencja",
        text17: "Prawdziwe spotkania",
        text18: "Korespondencja, a potem spotkanie",
        text19: "Jeszcze nie wiem",
        text20: "Już prawie gotowe!",
        text21: "Zakwalifikowałeś się do wejścia na naszą stronę.",
        text22:
          'Kliknij "kontynuuj", aby uzupełnić swój profil i zacznij szukać dziewczyn',
        text23: "Kontynuuj",
        text24: "Ile masz lat?",
        text25: "Wybierz płeć",
        text26: "jestem kobietą",
        text27: "jestem mężczyzną",
        text28: "Kim jesteś?",
        textCaptchaTitle: "Odblokuj dziewczynę, aby poruszać się dalej",
      },
      da: {
        title: "BigoFun",
        text01:
          "Der er mange hotte piger på vores side, som gerne vil sende dig deres billeder. Før du ser dem, skal vi stille et par spørgsmål.",
        text02: "Start",
        text03: "Har du nogensinde skrevet en sms til fremmede?",
        text04: "Ingen",
        text05: "Ja",
        text06: "det er en hemmelighed",
        text07:
          "Pigerne på denne side leder kun efter flirt og dating uden bindinger. Vil du også have det?",
        text08: "Ingen",
        text09: "Ja",
        text10: "Jeg ved det ikke endnu",
        text11: "Er du klar til at sende dine billeder til piger?",
        text12: "Ingen",
        text13: "Ja",
        text14: "Jeg ved det ikke endnu",
        text15: "Vil du bare chatte eller leder du efter møder?",
        text16: "Kun korrespondance",
        text17: "Rigtige møder",
        text18: "Korrespondance og derefter et møde",
        text19: "Jeg ved det ikke endnu",
        text20: "Næsten færdig!",
        text21: "Du er kvalificeret til at gå ind på vores side.",
        text22:
          "Klik på Fortsæt for at udfylde din profil og begynde at lede efter piger",
        text23: "Fortsætte",
        text24: "Hvor gammel er du?",
        text25: "Vælg dit køn",
        text26: "Jeg er en kvinde",
        text27: "jeg er en mand",
        text28: "Hvem er du?",
        textCaptchaTitle: "Lås pigen op for at gå videre",
      },
      fi: {
        title: "BigoFun",
        text01:
          "Sivustollamme on monia kuumia tyttöjä, jotka haluavat lähettää sinulle valokuvansa. Ennen kuin näet ne, meidän on esitettävä muutama kysymys.",
        text02: "Alku",
        text03: "Oletko koskaan lähettänyt tekstiviestejä tuntemattomille?",
        text04: "Ei",
        text05: "Kyllä",
        text06: "se on salaisuus",
        text07:
          "Tämän sivuston tytöt etsivät vain flirttailua ja deittailua ilman ehtoja. Haluatko sinäkin sen?",
        text08: "Ei",
        text09: "Kyllä",
        text10: "En tiedä vielä",
        text11: "Oletko valmis lähettämään valokuvasi tytöille?",
        text12: "Ei",
        text13: "Kyllä",
        text14: "En tiedä vielä",
        text15: "Haluatko vain jutella vai etsitkö tapaamisia?",
        text16: "Vain kirjeenvaihto",
        text17: "Oikeita tapaamisia",
        text18: "Kirjeenvaihto ja sitten tapaaminen",
        text19: "En tiedä vielä",
        text20: "Melkein valmis!",
        text21: "Sinulla on pätevyys päästä sivuillemme.",
        text22:
          "Napsauta Jatka, kun haluat täydentää profiilisi ja aloittaa tyttöjen etsiminen.",
        text23: "Jatkaa",
        text24: "Kuinka vanha olet?",
        text25: "Valitse sukupuolesi",
        text26: "Minä olen nainen",
        text27: "olen mies",
        text28: "Kuka sinä olet?",
        textCaptchaTitle: "Avaa tytön lukitus muuttaksi lisää",
      },
      no: {
        title: "BigoFun",
        text01:
          "Det er mange hotte jenter på siden vår som vil sende deg bildene sine. Før du ser dem, må vi stille noen spørsmål.",
        text02: "Start",
        text03: "Har du noen gang sendt tekstmeldinger til fremmede?",
        text04: "Ikke",
        text05: "Ja",
        text06: "det er en hemmelighet",
        text07:
          "Jentene på denne siden er kun ute etter flørting og dating uten noen bindinger. Vil du også ha det?",
        text08: "Ikke",
        text09: "Ja",
        text10: "Jeg vet ikke ennå",
        text11: "Er du klar til å sende bildene dine til jenter?",
        text12: "Ikke",
        text13: "Ja",
        text14: "Jeg vet ikke ennå",
        text15: "Vil du bare chatte eller ser du etter møter?",
        text16: "Kun korrespondanse",
        text17: "Ekte møter",
        text18: "Korrespondanse og deretter et møte",
        text19: "Jeg vet ikke ennå",
        text20: "Nesten ferdig!",
        text21: "Du er kvalifisert til å gå inn på siden vår.",
        text22:
          "Klikk på Fortsett for å fullføre profilen din og begynne å lete etter jenter.",
        text23: "Fortsette",
        text24: "Hvor gammel er du?",
        text25: "Velg kjønnet ditt",
        text26: "Jeg er en kvinne",
        text27: "jeg er en mann",
        text28: "Hvem er du?",
        textCaptchaTitle: "Lås opp jenta for å gå videre",
      },
      pt: {
        title: "BigoFun",
        text01:
          "Existem muitas garotas gostosas em nosso site que querem enviar suas fotos para você. Antes de vê-los, devemos fazer algumas perguntas.",
        text02: "Iniciar",
        text03: "Você já mandou mensagens para estranhos?",
        text04: "Não",
        text05: "Sim",
        text06: "é segredo",
        text07:
          "As garotas neste site estão apenas procurando flertar e namorar sem compromisso. Você também quer?",
        text08: "Não",
        text09: "Sim",
        text10: "Ainda não sei",
        text11: "Você está pronto para enviar suas fotos para as meninas?",
        text12: "Não",
        text13: "Sim",
        text14: "Ainda não sei",
        text15: "Você quer apenas conversar ou está procurando reuniões?",
        text16: "Somente correspondência",
        text17: "Reuniões reais",
        text18: "Correspondência e depois uma reunião",
        text19: "Ainda não sei",
        text20: "Está quase!",
        text21: "Está qualificado para entrar no nosso site.",
        text22:
          "Faça clique em Continuar para concluir o seu perfil e começar a procurar raparigas.",
        text23: "Continuar",
        text24: "Qual é a sua idade?",
        text25: "Selecione o seu sexo",
        text26: "Eu sou uma mulher",
        text27: "eu sou um homem",
        text28: "Quem é Você?",
        textCaptchaTitle: "Desbloqueie a garota para ir mais longe",
      },
      ro: {
        title: "BigoFun",
        text01:
          "Există multe fete fierbinți pe site-ul nostru care doresc să-ți trimită fotografiile lor. Înainte de a le vedea, trebuie să punem câteva întrebări.",
        text02: "Start",
        text03: "Ați trimis vreodată mesaje străine?",
        text04: "Nu",
        text05: "Da",
        text06: "este un secret",
        text07:
          "Fetele de pe acest site caută doar să flirteze și să se întâlnească fără nicio condiție. Îl vrei și tu?",
        text08: "Nu",
        text09: "Da",
        text10: "Încă nu știu",
        text11: "Ești gata să trimiți fotografiile tale fetelor?",
        text12: "Nu",
        text13: "Da",
        text14: "Încă nu știu",
        text15: "Vrei doar să discuți prin chat sau cauți întâlniri?",
        text16: "Numai corespondență",
        text17: "Întâlniri adevărate",
        text18: "Corespondență și apoi o întâlnire",
        text19: "Încă nu știu",
        text20: "Aproape gata!",
        text21: "Sunteți calificat pentru a accesa site-ul nostru.",
        text22:
          "Te rugăm să faci clic pe Continuare pentru a-ți completa profilul și a începe să cauți fete",
        text23: "Continuare",
        text24: "Ce vârstă ai?",
        text25: "Selectați-vă sexul",
        text26: "sunt o femeie",
        text27: "sunt bărbat",
        text28: "Cine ești tu?",
        textCaptchaTitle: "Deblocați fata pentru a muta mai mai mult",
      },
      sv: {
        title: "BigoFun",
        text01:
          "Det finns många heta tjejer på vår sida som vill skicka sina bilder till dig. Innan du ser dem måste vi ställa några frågor.",
        text02: "Start",
        text03: "Har du någonsin sms:at främlingar?",
        text04: "Nej",
        text05: "Ja",
        text06: "det är en hemlighet",
        text07:
          "Tjejerna på den här sidan letar bara efter flirting och dejting utan några villkor. Vill du också ha det?",
        text08: "Nej",
        text09: "Ja",
        text10: "Jag vet inte ännu",
        text11: "Är du redo att skicka dina bilder till tjejer?",
        text12: "Nej",
        text13: "Ja",
        text14: "Jag vet inte ännu",
        text15: "Vill du bara chatta eller letar du efter möten?",
        text16: "Endast korrespondens",
        text17: "Riktiga möten",
        text18: "Korrespondens och sedan ett möte",
        text19: "Jag vet inte ännu",
        text20: "Nästan klar!",
        text21: "Du är kvalificerad att gå in på vår webbplats.",
        text22:
          "Klicka på Fortsätt för att slutföra din profil och börja leta efter tjejer.",
        text23: "Fortsätt",
        text24: "Hur gammal är du?",
        text25: "Välj ditt kön",
        text26: "jag är en kvinna",
        text27: "jag är en man",
        text28: "Vem är du?",
        textCaptchaTitle: "Lås upp flicken för att flytta längre",
      },
      sl: {
        title: "BigoFun",
        text01:
          "Na naši strani je veliko vročih deklet, ki vam želijo poslati svoje fotografije. Preden jih vidite, si moramo zastaviti nekaj vprašanj.",
        text02: "Začetek",
        text03: "Ste že kdaj pošiljali sporočila neznancem?",
        text04: "Ne",
        text05: "Da",
        text06: "to je skrivnost",
        text07:
          "Dekleta na tej strani iščejo samo spogledovanje in zmenke brez kakršnih koli obveznosti. Ali ga želite tudi vi?",
        text08: "Ne",
        text09: "Da",
        text10: "Ne vem še",
        text11: "Ste pripravljeni poslati svoje fotografije dekletom?",
        text12: "Ne",
        text13: "Da",
        text14: "Ne vem še",
        text15: "Ali želite samo klepetati ali iščete srečanja?",
        text16: "Samo dopisovanje",
        text17: "Prava srečanja",
        text18: "Dopisovanje in nato sestanek",
        text19: "Ne vem še",
        text20: "Skoraj opravljeno!",
        text21: "Ste primerni kandidat za vstop na našo spletno stran.",
        text22:
          "Kliknite Nadaljuj, da dokončate svoj profil in začnete iskati dekleta.",
        text23: "Nadaljuj",
        text24: "Kakšna je vaša starost?",
        text25: "Izberite svoj spol",
        text26: "jaz sem ženska",
        text27: "jaz sem moški",
        text28: "Kdo si ti?",
        textCaptchaTitle: "Odklopite deklico, da se premikne dodaj",
      },
      tr: {
        title: "BigoFun",
        text01:
          "Sitemizde size fotoğraflarını göndermek isteyen birçok seksi kız var. Onları görmeden önce birkaç soru sormalıyız.",
        text02: "Başlat",
        text03: "Hiç yabancılara mesaj attın mı?",
        text04: "Hayır",
        text05: "Evet",
        text06: "Bu bir sır",
        text07:
          "Bu sitedeki kızlar sadece flörtleşme ve flört etme peşindeler. İstermisin sende?",
        text08: "Hayır",
        text09: "Evet",
        text10: "Henüz bilmiyorum",
        text11: "Fotoğraflarınızı kızlara göndermeye hazır mısınız?",
        text12: "Hayır",
        text13: "Evet",
        text14: "Henüz bilmiyorum",
        text15:
          "Sadece sohbet etmek mi istiyorsunuz yoksa toplantı mı arıyorsunuz?",
        text16: "Sadece yazışmalar",
        text17: "Gerçek toplantılar",
        text18: "Yazışma ve ardından bir toplantı",
        text19: "Henüz bilmiyorum",
        text20: "Neredeyse bitti!",
        text21: "Sitemize girmeye hak kazandınız.",
        text22:
          "Profilinizi tamamlamak ve kızları aramaya başlamak için lütfen Devam'a tıklayın.",
        text23: "Devam",
        text24: "Yaşınız nedir?",
        text25: "Cinsiyetinizi seçiniz",
        text26: "ben bir kadınım",
        text27: "ben bir erkeğim",
        text28: "Sen kimsin?",
        textCaptchaTitle: "Daha fazla ilerlemek için kızın kilidini açın",
      },
      sk: {
        title: "BigoFun",
        text01:
          "Na našej stránke je veľa horúcich dievčat, ktoré vám chcú poslať svoje fotografie. Predtým, ako ich uvidíte, musíme si položiť niekoľko otázok.",
        text02: "Začať",
        text03: "Písali ste si niekedy s neznámymi ľuďmi?",
        text04: "Nie",
        text05: "Áno",
        text06: "To je tajné",
        text07:
          "Dievčatá na tejto stránke hľadajú iba flirtovanie a randenie bez akýchkoľvek obmedzení. Chcete to aj vy?",
        text08: "Nie",
        text09: "Áno",
        text10: "Ešte neviem",
        text11: "Ste pripravení poslať svoje fotografie dievčatám?",
        text12: "Nie",
        text13: "Áno",
        text14: "Ešte neviem",
        text15: "Chcete si len pokecať alebo hľadáte stretnutia?",
        text16: "Iba korešpondencia",
        text17: "Skutočné stretnutia",
        text18: "Korešpondencia a potom stretnutie",
        text19: "Ešte neviem",
        text20: "Už si skoro na konci!",
        text21: "Máš právo vstúpiť na našu stránku.",
        text22:
          "Prosím klikni na Pokračovať, vyplň tvoj profil a nájdi si dievča.",
        text23: "Pokračovať",
        text24: "Koľko máš rokov?",
        text25: "Vyberte si pohlavie",
        text26: "Som žena",
        text27: "som muž",
        text28: "Kto si?",
        textCaptchaTitle: "Odomknite dievča, aby sa pohyblo ďalej",
      },
    };
    var availableLang = translation_available(translation);
    if (!isCityTranslation) {
      for (var x in translation["source"]) {
        replace_text(availableLang, x, translation, isCityTranslation);
      }
    } else {
      var cityNodes = document.querySelectorAll(".js-geo-city");
      if (translation[browserLang] && cityNodes.length) {
        for (var i = 0; i < cityNodes.length; i++) {
          cityNodes[i].innerHTML = "&nbsp;&nbsp;" + cityTitle + "&nbsp;&nbsp;";
        }
      }
    }
  }
  function replace_text(lang, text, translation, isCityTranslation) {
    if (isCityTranslation && text.indexOf("_replace") !== -1) {
      var x = document.getElementById(text.replace("_replace", ""));
    } else {
      var x = document.getElementById(text);
    }
    if (x && translation[lang][text] != undefined) {
      if (x.placeholder != undefined) {
        x.placeholder = translation[lang][text];
      } else if (x.tagName === "IFRAME") {
        x.src = translation[lang][text];
      } else {
        x.innerHTML = translation[lang][text];
      }
    } else {
      //console.log("element not Found: " + text);
    }
  }
  function translation_available(objTrls) {
    if (
      objTrls[browserLang] &&
      objTrls[browserLang].title &&
      objTrls[browserLang].title.length
    ) {
      return browserLang;
    } else {
      console.log("translation not Found: " + browserLang);
      return "source";
    }
  }
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  function detect_language() {
    var forceLang = getParameterByName("lang");
    if (forceLang) {
      return forceLang;
    } else {
      var userLang =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;
      if (
        userLang == "zh-CN" ||
        userLang == "zh-SG" ||
        userLang == "zh-MY" ||
        userLang == "zh-CHS"
      ) {
        userLang = "zh-Hans";
      } else if (
        userLang == "zh-HK" ||
        userLang == "zh-MO" ||
        userLang == "zh-TW" ||
        userLang == "zh-CHT"
      ) {
        userLang = "zh-Hant";
      } else if (
        userLang == "no" ||
        userLang == "nb" ||
        userLang == "nb-NO" ||
        userLang == "nn-NO"
      ) {
        userLang = "no";
      } else if (userLang.length > 2) {
        userLang = userLang[0] + userLang[1];
      }
      return userLang;
    }
  }
  var cityTitle = "";
  var browserLang = detect_language();
  document.body.classList.add("lang-" + browserLang);
  initTranslations(cityTitle, false);
  function changeCity(data) {
    data.city["pt"] = data.city["pt-BR"];
    if (data.city[browserLang] && data.city[browserLang].length) {
      cityTitle = data.city[browserLang];
      initTranslations(cityTitle, true);
    }
  }
  if (document.getElementsByClassName("random-favicons")[0]) {
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    (function () {
      const iconNode = document.createElement("link");
      iconNode.rel = "icon";
      iconNode.type = "image/png";
      iconNode.id = "icon1";
      iconNode.href = "/util/favicons/" + randomNumber(1, 14) + ".png";
      document.head.appendChild(iconNode);
    })();
  }
});
