const myLabel = document.createElement('label');
myLabel.classList.add('tabLabel');
myLabel.classList.add('nocopy');
myLabel.appendChild(document.createTextNode('show id'));

const allLabel = document.createElement('label');
allLabel.classList.add('tabLabel');
allLabel.classList.add('nocopy');
allLabel.appendChild(document.createTextNode('show id'));

const contents = document.querySelectorAll('div.content');
contents[0].insertBefore(myLabel, contents[0].firstChild);
contents[1].insertBefore(allLabel, contents[1].firstChild);

myLabel.addEventListener('click', function () {
  document.querySelectorAll('div[id^="my_rank_player"]').forEach(function (div) {
    const column = div.querySelector('div.column');
    if (column.childElementCount > 2) return;

    const userId = div.querySelector('img').getAttribute('src').split('/')[4];

    const user = document.createElement('div');
    user.classList.add('leaderboardPlayerUsername');
    user.appendChild(document.createTextNode(userId));

    column.insertBefore(user, column.lastChild);
  });
});

allLabel.addEventListener('click', function () {
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
