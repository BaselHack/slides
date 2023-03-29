const list = [
  'Skiptify',
  'Social Payment',
  '"Säuli"',
  'Offline First',
  'Password Manager',
  'teach-a-bot',
  'vscode stories',
  'TroVino',
  'Coop Challenge',
  'Cooking Buddy',
  'Bell Challenge',
  'Pocket Fridge',
  'Copilots',
  'Bell App',
  'Watt can I save?',
  'cWine',
].map(x => [x, 48]);

const config = {
  // gridSize: Math.round(16 * $('#canvas').width() / 1024),
  // weightFactor: function (size) {
  //   return Math.pow(size, 2.3) * $('#canvas').width() / 1024;
  // },
  fontFamily: 'Times, serif',
  // color: function (word, weight) {
  //   return (weight === 12) ? '#f02222' : '#c09292';
  // },
  color: '#fff',
  rotateRatio: 5,
  rotationSteps: 5,
  backgroundColor: '#000'
};

WordCloud(document.getElementById('wordcloud'), { list: list, config: config } );