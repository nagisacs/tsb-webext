// 武器ソ－ト
let isSort = false;

document.querySelector('label.tabLabel').addEventListener('click', function () {
  document.querySelectorAll('#add-weapon-list > div').forEach(function (weapon) {
    if (isSort) {
      weapon.setAttribute('style', 'display: block;');
    } else {
      if (weapon.querySelector('div.leaderboardPlayer').classList.contains('cant_create')) {
        weapon.setAttribute('style', 'display: none;');
      }
      ;
    }
  });
  isSort = !isSort;
}, false);
