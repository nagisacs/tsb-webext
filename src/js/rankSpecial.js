const label = document.createElement('label');
label.classList.add('tabLabel');
label.classList.add('nocopy');
label.appendChild(document.createTextNode('show id'));

const contents = document.querySelectorAll('div.content');
contents[0].insertBefore(label, contents[0].firstChild);

label.addEventListener('click', function () {
  document.querySelectorAll('div[id^="player"]').forEach(function (div) {
    const column = div.querySelector('div.column');
    if (column.childElementCount > 2) return;

    const userId = div.querySelector('img').getAttribute('src').split('/')[4];

    const user = document.createElement('div');
    user.classList.add('leaderboardPlayerUsername');
    user.appendChild(document.createTextNode(userId));

    column.insertBefore(user, column.lastChild);
  });
});
