/*User Stories:
1.	You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
2.	You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite programming language, respectively.
3.	You should log "My name is (botName) and I live on (botLocation)." to the console.
4.	You should log "My favorite programming language is (favoriteLanguage)." to the console.
5.	You should use let to create a codingFact variable and assign it a string that is a fun fact about the bot's favorite programming language, using the favoriteLanguage variable.
6.	You should log the codingFact to the console.
7.	You should reassign the codingFact variable to a new fact about the bot's favorite programming language using the favoriteLanguage variable again.
8.	You should log the codingFact to the console again.
9.	You should reassign the codingFact variable to a third fact about the bot's favorite programming language using the favoriteLanguage variable again.
10.	You should log the codingFact to the console a third time.
11.	You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot.
*/
console.log("Hello! I'm your coding fun fact guide!")//Number 1
/*Number 2*/
let botName = "Cybersca";
let botLocation = "Bekasi";
let favoriteLanguage = "JavaScript";
/*Number 3*/
console.log("My name is " + botName + " and I live on " + botLocation + ".")
/*Number 4*/
console.log("My favorite programming language is " + favoriteLanguage + ".")
/*Number 5*/
let codingFact = "Brendan Eich created " + favoriteLanguage + " in May 1995 in just 10 days while working at Netscape.";
console.log(codingFact);//Number 6
/*Number 7*/
codingFact = "The name " + favoriteLanguage + " was pure marketing strategy — Java was hot at the time, so Netscape rode the wave. Technically, Java and JavaScript are completely unrelated (like car and carpet).";
console.log(codingFact);//Number 8
/*Number 9*/
codingFact = "It started as a simple tool for form validation. Today, " + favoriteLanguage + " is the most popular programming language in the world (per Stack Overflow surveys for years running).";
console.log(codingFact);//Number 10
/*Number 11*/
console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".")
