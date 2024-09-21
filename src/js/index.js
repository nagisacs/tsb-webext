const ul = document.querySelector('#global-navi > ul > li.tao-login-li.tao-login > div.div.info-div > ul');

if (ul !== null) {
  const shopli = ul.querySelector('li:has(a[href^="/player/shop"])');

  appendNavItem(ul, shopli, '/player/weapons', 'handyman', '武器');

  const weaponli = ul.querySelector('li:has(a[href^="/player/weapons"])');

  appendNavItem(ul, weaponli, '/player/skill', 'electric_bolt', 'スキル');

  const hrs = ul.querySelectorAll('hr');

  appendNavItem(ul, hrs[1], '/player/zukan', 'library_books', '図鑑');

  appendNavItem(ul, hrs[1], '/player/presents', 'redeem', 'プレゼント');

  document.querySelector('#global-navi > ul > li:has(a[href^="/invite"])').remove();

  document.querySelector('#global-navi > ul > li:has(a[href^="/discord"])').remove();

  document.querySelector('#global-navi > ul > li > div > ul > li:has(a[href^="/donate"])').remove();

  document.querySelector('#global-navi > ul > li:last-child').remove();

}

function appendNavItem(ul, liFollow, href, icon, text) {
  const a = document.createElement('a');
  a.href = href;

  const span = document.createElement('span');
  span.classList.add('material-icons');
  span.classList.add('right');
  span.appendChild(document.createTextNode(icon));

  a.appendChild(span);
  a.appendChild(document.createTextNode(text));

  const li = document.createElement('li');
  li.appendChild(a);

  ul.insertBefore(li, liFollow);
}
