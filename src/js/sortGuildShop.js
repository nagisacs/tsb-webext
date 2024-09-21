// ギルドショップソ－ト
let isSort = false;

const label = document.createElement('label');
label.classList.add('tabLabel');
label.classList.add('nocopy');
label.appendChild(document.createTextNode('sort'));

const labelWrapper = document.createElement('div');
labelWrapper.classList.add('label-wrapper');
labelWrapper.appendChild(label);

const contents = document.querySelectorAll('div.content');
contents[contents.length - 1].insertBefore(labelWrapper, contents[contents.length - 1].firstChild);

label.addEventListener('click', function () {
  const shops = [].slice.call(document.querySelectorAll('#add-shop-list > div:has(div > div > div.CreateEmbed.leaderboardPlayer)'));
  if (isSort) {
    shops.sort((a, b) => concatRank(a) - concatRank(b)).forEach(function (div) {
      document.getElementById('add-shop-list').appendChild(div);
    });

    label.textContent = 'sort';
  } else {
    shops.sort((a, b) => concatPt(b) - concatPt(a)).forEach(function (div) {
      document.getElementById('add-shop-list').appendChild(div);
    });

    label.textContent = 'unsort';
  }
  isSort = !isSort;
}, false);

function concatPt(div) {
  return parseInt([].slice.call(div.querySelectorAll('div.column > div.defeat_rank > div > div')).find(x => x.textContent.includes('pt')).textContent.replace(',', '').replace('pt', ''));
}

function concatRank(div) {
  return parseInt(div.querySelector('div.rank_visible').textContent);
}
