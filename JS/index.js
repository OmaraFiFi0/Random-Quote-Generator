console.log("hello");
var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    name: "--Oscar Wilde",
  },

  {
    quote: `“So many books, so little time.”`,
    name: "--Frank Zappa",
  },

  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I
    am out of control and at times hard to handle. But if you can't
    handle me at my worst, then you sure as hell don't deserve me at
    my best.”"`,
    name: "--Marilyn Monroe",
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    name: "--Marcus Tullius Cicero",
  },
  {
    quote: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”`,
    name: "--Bernard M. Baruch",
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    name: "--William W. Purkey",
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”
    `,
    name: "--Dr. Seuss",
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    name: "--C.S. Lewis, The Four Loves",
  },
  {
    quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
    name: "--Maya Angelou",
  },
  {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    name: "--Mark Twain",
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    name: "--Albert Camus",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    name: "― Ralph Waldo Emerson",
  },
  {
    quote:
      "“Insanity is doing the same thing, over and over again, but expecting different results.”",
    name: "― Narcotics Anonymous",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    name: "― Andre Gide, Autumn Leaves",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    name: "― Friedrich Nietzsche, Twilight of the Idols",
  },
];

function display() {
  cartona = "";
  for (var i = 0; i < quotes.length; i++) {
    var randomNum = Math.floor(Math.random() * quotes.length);
    cartona += `<div class="col-md-12"> 
  <div class="items mt-5 text-center"> 
  <p class="fs-1 fw-bold anthor output"> ${quotes[randomNum].quote}</p>  
  <p class="fs-3 fw-lighter output">${quotes[randomNum].name}</p>  
    </div> 
  </div> `;
    break;
  }
  document.getElementById("RowData").innerHTML = cartona;
}
