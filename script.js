
var fontSize = 40;
if (window.screen.width > 700)
  fontSize = 55;
else if (window.screen.width > 1200)
  fontSize = 80;

var animationData = [
  {
    text: "Meski waktu datang",
    y: 150,
    delay: 900,
    fromCurrentPosition: {y:false},
    duration: 2000
  },
  {
    text: "Dan berlalu sampai kau tiada bertahan",
    y: 150,
    delay: 900,
    fromCurrentPosition: {y:false},
    duration: 2500
  },
  {
    text: "Semua takkan mampu mengubahku",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 1000,
    duration: 3200
  },
  {
    text: "Hanyalah kau yang ada di relungku",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 800,
    duration: 3500
  },
  {
    text: "Hanyalah dirimu",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 1000,
    duration: 2500
  },
  {
    text: "Mampu membuatku jatuh dan mencinta",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 1000,
    duration: 4000
  },
  {
    text: "Kau bukan hanya sekedar indah",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 1000,
    duration: 3300
  },
  {
    text: "Kau tak akan terganti",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 1500,
    duration: 1800
  },
  {
    text: "Kau tak akan...",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 7000,
    duration: 2600
  },
  {
    text: "Tergantiiii......",
    y: 150,
    fromCurrentPosition: {y:false},
    delay: 1000,
    duration: 3000
  },
];

var vara = new Vara(
  "#container",
  "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
  animationData,
  {
    strokeWidth: 2,
    color: "#fff",
    fontSize: fontSize,
    textAlign: "center"
  }
);

vara.ready(function () {
  var erase = true;
  vara.animationEnd(function (i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
      o.container.style.transition = "opacity 1s 1s";
      o.container.style.opacity = 0;
    } else {
      vara.show(0); // Mulai ulang animasi dari awal
    }
  });
});
