const app = angular.module('HW1', ['ngAnimate', 'ngMaterial', 'ngMessages', 'ngSanitize']);

const dmp = new diff_match_patch();
const BASE = `
let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(40, 200, 40);
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}

`;

const STUDENTS = [
  {
    name: 'Shakked Naftali', embed_url: '<iframe src="https://editor.p5js.org/shakkedn/full/vuO0E99FM"></iframe>', code: `
let t =5; // time variable

function setup() {
  createCanvas(1000, 800);
  noStroke();
  fill(40,15, 40);
}

function draw() {
  background(10, 30); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 1) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
`},
  {
    name: 'Maya Shalev', embed_url: '<iframe src="https://editor.p5js.org/mayauni13/full/xiSSlif93"></iframe>', code: `
let t = 0; // time variable
function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(100, 500, 100);
}

function draw() {
  background(255, 204, 100);; // translucent background (creates trails)

  // make a x and y grid of circles
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}    
`},
];

function htmlSeparateDiff(base, text) {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(base, text);
  dmp.diff_cleanupSemantic(diffs);
  const formattedBase = [];
  const formattedTest = [];

  let pattern_amp = /&/g;
  let pattern_lt = /</g;
  let pattern_gt = />/g;
  let pattern_para = /\n/g;
  for (let x = 0; x < diffs.length; x++) {
    let op = diffs[x][0];    // Operation (insert, delete, equal)
    let data = diffs[x][1];  // Text of change.
    let text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
      .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
    switch (op) {
      case DIFF_INSERT:
        formattedTest[x] = '<span class="code addition">' + text + '</span>';
        break;
      case DIFF_DELETE:
        formattedBase[x] = '<span class="code deletion">' + text + '</span>';
        break;
      case DIFF_EQUAL:
        formattedBase[x] = '<span class="code">' + text + '</span>';
        formattedTest[x] = '<span class="code">' + text + '</span>';
        break;
    }
  }
  return [formattedBase.join(''), formattedTest.join('')];
}

class MainController {
  constructor($window, $sce, $http) {
    this.window_ = $window;
    this.test = '';
    this.base = '';

    this.students = STUDENTS.map((v) => {
      const diff_sides = htmlSeparateDiff(BASE, test);
      this.base = diff_sides[0];
      this.test = diff_sides[1];
      return {
        name: v.name,
        embed_url: $sce.trustAsHtml(v.embed_url),
        base: diff_sides[0],
        test: diff_sides[1],
      };
    });
    this.studentIndex = 0;
    this.$http.get('http://editor.p5js.org/mayauni13/sketches/xiSSlif93').then((v) => void console.log(v));;
    this.$http.get('https://editor.p5js.org/mayauni13/sketches/xiSSlif93').then((v) => void console.log(v));;
  }

  incrementStudent() {
    this.studentIndex = (this.studentIndex + 1) % this.students.length;
  }

  decrementStudent() {
    this.studentIndex = (this.studentIndex - 1) % this.students.length;
  }
  
  get student() {
    return this.students[this.studentIndex];
  }
}

app.controller('MainController', MainController);