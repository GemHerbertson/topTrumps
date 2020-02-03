// A one player: 30 card game using one topic of choice with 1 statistic per card

class ActorCard {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

let fullDeck = [
    danielDayLewis = new ActorCard("Daniel Day-Lewis", 62),
    kateWinslet = new ActorCard("Kate Winslet", 44),
    leonardoDiCaprio = new ActorCard("Leonardo DiCaprio", 45),
    violaDavis = new ActorCard("Viola Davis", 54),
    philipSeymourHoffman = new ActorCard("Philip Seymour Hoffman", 46),
    merylStreet = new ActorCard("Meryl Streep", 70),
    jackNicholson = new ActorCard("Jack Nicholson", 82),
    michelleWilliams = new ActorCard("Michelle Williams", 39),
    morganFreeman = new ActorCard("Morgan Freeman", 82),
    helenMirren = new ActorCard("Helen Mirren", 74),
    russelCrowe = new ActorCard("Russell Crowe", 55),
    nataliePortman = new ActorCard("Natalie Portman", 38),
    georgeClooney = new ActorCard("George Clooney", 58),
    nicoleKidman = new ActorCard("Nicole Kidman", 52),
    javierBardem = new ActorCard("Javier Bardem", 50),
    marionCotillard = new ActorCard("Marion Cotillard", 44),
    bradPitt = new ActorCard("Brad Pitt", 56),
    careyMulligan = new ActorCard("Carey Mulligan", 34),
    christianBale = new ActorCard("Christian Bale", 46),
    melissaLeo = new ActorCard("Melissa Leo", 59),
    jeffBridges = new ActorCard("Jeff Bridges", 70),
    cateBlanchett = new ActorCard("Cate Blanchett", 50),
    seanPenn = new ActorCard("Sean Penn", 59),
    hilarySwank = new ActorCard("Hilary Swank", 45),
    joaquinPhoenix = new ActorCard("Joaquin Phoenix", 45),
    charlizeTheron = new ActorCard("Charlize Theron", 44),
    heathLedger = new ActorCard("Heath Ledger", 28),
    sandraBullock = new ActorCard("Sandra Bullock", 55),
    johnnyDepp = new ActorCard("Johnny Depp", 56),
    penelopeCruz = new ActorCard("Penelope Cruz", 45)
];

function shuffle(fullDeck){
    let currentIndex = fullDeck.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = fullDeck[currentIndex];
        fullDeck[currentIndex] = fullDeck[randomIndex];
        fullDeck[randomIndex] = temporaryValue;
    }
    return fullDeck;
}

fullDeck = shuffle(fullDeck);

let liveDeck1 = [];
let liveDeck2 = [];

const cardCompare = () => {
    if (liveDeck1[0].age < liveDeck2[0].age) {
        let holdingDeck = liveDeck2.shift();
        let tempDeck = liveDeck1.shift();
        liveDeck1.push(tempDeck);
        liveDeck1.push(holdingDeck);
        console.log(`liveDeck1 length is ${liveDeck1.length}`);
        console.log(`liveDeck2 length is ${liveDeck2.length}`);
    } else if (liveDeck2[0].age < liveDeck1[0].age) {
        let holdingDeck = liveDeck1.shift();
        let tempDeck = liveDeck2.shift();
        liveDeck2.push(tempDeck);
        liveDeck2.push(holdingDeck);
        console.log(`liveDeck1 length is ${liveDeck1.length}`);
        console.log(`liveDeck2 length is ${liveDeck1.length}`);
    }  else {
        holdingDeck = liveDeck1.shift()+liveDeck2.shift();
        console.log(`liveDeck2 length is ${holdingDeck.length}`);
    }
}
