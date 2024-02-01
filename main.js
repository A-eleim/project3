let stars = document.getElementById('stars');
let center = document.querySelector('.center');
let moon = document.getElementById('moon');
let mountan2 = document.getElementById('mountan2');
let mountan = document.getElementById('mountan');
let rivar = document.getElementById('rivar');
let boat = document.getElementById('boat');
onscroll = function () {
  let valuo = this.scrollY;
  stars.style.left = valuo + 'px';
  moon.style.top = valuo * 3 + "px";
  if (scrollY >= 200)
    moon.style.display = 'none';
  else
    moon.style.display = 'block';
  mountan.style.top = valuo * 1.4 + 'px';
  if (scrollY >= 233)
    mountan.style.display = 'none';
  else
    mountan.style.display = 'block';
  mountan2.style.top = valuo * 1.2 + 'px';
  if (scrollY >= 168)
    mountan2.style.display = 'none';
  else
    mountan2.style.display = 'block';
  rivar.style.top = valuo + 'px';
  if (scrollY >= 108)
    rivar.style.display = 'none';
  else
    rivar.style.display = 'block';
  boat.style.top = valuo + 'px';
  boat.style.left = valuo * 2 + 'px';
  if (scrollY > 480)
    boat.style.display = 'none'
  else
    boat.style.display = 'block'
  center.style.fontSize = valuo + 'px'
  if (scrollY >= 90) {
    center.style.fontSize = 95 + 'px';
    center.style.position = 'fixed';
    if (scrollY > 500)
      center.style.display = 'none'
    else
      center.style.display = 'block'

  }
  if (scrollY >= 167)
    this.document.querySelector('.main').style.background = 'linear-gradient(hsl(206deg 41% 61%),rgb(43, 7, 105))'
  else
    this.document.querySelector('.main').style.background = 'linear-gradient(hsl(0, 91%, 9%),rgb(43, 7, 105))'
}