let starDom = document.getElementById('star');

let positions = [
  '0 -110',
  '0 -99',
  '0 -88',
  '0 -77',
  '0 -66',
  '0 -55',
  '0 -44',
  '0 -33',
  '0 -22',
  '0 -11',
  '0 0'
];
animate(starDom, positions);
function animate(el, positions) {
  let index = 0;

  function run() {
    if (index >= positions.length){
      index = 0;
    }
    let position = positions[index].split(' ');
    el.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';
    index++;
  }

  setInterval(run, 80);
}