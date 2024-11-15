var arrayOfQoutes = [
  {
    author: "― Oscar Wilde",
    content: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "― Marilyn Monroe",
    content:
      "“Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.”",
  },
  {
    author: "― Albert Einstein",
    content:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    author: "― Mahatma Gandhi",
    content: "“Be the change that you wish to see in the world.”",
  },
  {
    author: "― William Shakespeare",
    content:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
  },
  {
    author: "― Albert Einstein",
    content:
      "“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”",
  },
];

function newQuote() {
  var random = Number.parseInt(Math.random() * arrayOfQoutes.length);
  document.getElementById(
    "author"
  ).innerHTML = `${arrayOfQoutes[random].author}`;
  document.getElementById(
    "qoute"
  ).innerHTML = `${arrayOfQoutes[random].content}`;
}
