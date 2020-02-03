class Card {
    constructor(name, src, gameAttributes){
        this.name = name;
        this.src = src;
        this.gameAttributes = gameAttributes;
        this.overallCard = document.getElementById("overallCard");

        let card = this.wholeCard();
        this.overallCard.appendChild(card);
    }

    wholeCard(){
        let card = this.cardBase();
        let title = this.cardTitle();
        let image = this.cardImage();
        let attributes = this.cardAttributes();

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(attributes);

        return card;
    }

    cardBase(){
        let card = document.createElement("div");
        card.classList.add("cardBase");

        return card;
    }

    cardTitle(){
        let title = document.createElement("h1");
        title.classList.add("cardTitle");

        let text = document.createTextNode(this.name);
        title.appendChild(text);

        return title;
    }

    cardImage(){
        let image = document.createElement("img");
        image.src = this.src;
        
        image.classList.add("image");

        return image;
    }

    cardAttributes(){
        let attributes = document.createElement("div");
        attributes.classList.add("listContainer");

        let list = document.createElement("ul");
        attributes.appendChild(list);

        for (let i = 0; i < 5; i++){
            let listItem = document.createElement("li");
            let attributeText = document.createTextNode(this.gameAttributes);

            listItem.appendChild(attributeText);
            list.appendChild(listItem);
        }

        return attributes;
    }
}

let cards = [
    "Daniel Day-Lewis",
    "Kate Winslet",
    "Leonardo DiCaprio",
    "Viola Davis",
    "Philip Seymour Hoffman",
    "Meryl Streep",
    "Jack Nicholson",
    "Michelle Williams",
    "Morgan Freeman",
    "Helen Mirren",
    "Russell Crowe",
    "Natalie Portman",
    "George Clooney",
    "Nicole Kidman",
    "Javier Bardem",
    "Marion Cotillard",
    "Brad Pitt",
    "Carey Mulligan",
    "Christian Bale",
    "Melissa Leo",
    "Jeff Bridges",
    "Cate Blanchett",
    "Sean Penn",
    "Hilary Swank",
    "Joaquin Phoenix",
    "Charlize Theron",
    "Heath Ledger",
    "Sandra Bullock",
    "Johnny Depp",
    "Penelope Cruz",
];

const numberCards = () => {
cards.forEach(function(item,index) {
    return (item, index)
})
}

console.log(numberCards());

// let pile1 = []
// let pile2 = []

// const cardChoose = () => {
//     for (i = 0; i < cards.length; i++) {
//         return (Math.floor(Math.random() * 30));
//         }
    
    
// }

// const cardCompare = () => {
//     cardChoose();
// }

// let actorNames = ["Daniel Day-Lewis", "Kate Winslet", "Leonardo DiCaprio", "Viola Davis"]
// let actorImages = ["./img/danielDayLewis.jpg", "./img/kateWinslet.jpeg", "./img/leonardoDiCaprio.jpg", "./img/violaDavis.jpeg"]
// let numberOfFilms = [21, 45, 33, 41]
// let highestGrossingFilm = []
// let numberOfOscars = []
// let numberOfRazzies = []
// let networth = []

// let danielDayLewis = new Card ("Daniel Day-Lewis", "./img/danielDayLewis.jpg", [21, 208.5 , 3, 5, 50]);
// let kateWinslet = new Card ("Kate Winslet", "./img/kateWinslet.jpeg", [45, 659, 1, 6, 45]);
// let leonardoDiCaprio = new Card ("Leonardo DiCaprio", "./img/leonardoDiCaprio.jpg", [33, 659, 1, 6, 260]);
// let violaDavis = new Card ("Viola Davis", "./img/violaDavis.jpeg", [41, 61, 1, 3, 12]);