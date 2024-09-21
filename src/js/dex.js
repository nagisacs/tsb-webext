// 未開放の図鑑を強制表示
const attributes = {
  '火属性': 'fire',
  '水属性': 'water',
  '地属性': 'daiti',
  '光属性': 'light',
  '闇属性': 'dark',
  '空属性': 'sky',
  '全属性': 'all',
  '無属性': 'none',
  '特殊属性': 'special',
  '殿堂属性': 'dendou',
  '寄付属性': 'donate'
}

document.querySelectorAll('body div.group').forEach(function (div) {
  const attr = attributes[div.querySelector('h1').textContent];

  div.querySelectorAll('div.server-list > div.server-box:has(div.undiscover)').forEach(function (serverBox) {
    const serverCard = serverBox.querySelector('div.undiscover');
    const strs = serverCard.querySelector('div.server-card > div.server-name').textContent.split('.');
    const index = parseInt(strs[strs.length - 1]);

    const picture = document.createElement('picture');

    const img = document.createElement('img');
    img.classList.add('server-icon');

    (async () => {
      await setSrc('https://taogames.net/image/', `png/${attr}_${index}.png`, img, `gif/${attr}_${index}.gif`, `webp/${attr}_${index}.webp`, `jpeg/${attr}_${index}.jpeg`);
    })();

    picture.appendChild(img);

    serverCard.querySelector('span').remove();
    serverCard.insertBefore(picture, serverCard.firstChild);

    const a = document.createElement('a');
    a.classList.add('go-page');
    a.classList.add('m_strong');
    a.href = `/player/zukan/${attr}/${index}`;

    serverBox.appendChild(a);
    a.appendChild(serverCard);
  });
});

async function setSrc(base, png, img, gif, webp, jpeg) {
  const conds = [200, 304];

  const response = await fetch(base + png);

  if (conds.includes(response.status)) {
    img.setAttribute('src', base + png);
  } else {
    const gifResponse = await fetch(base + gif);

    if (conds.includes(gifResponse.status)) {
      img.setAttribute('src', base + gif);
    } else {
      const webpResponse = await fetch(base + webp);

      if (conds.includes(webpResponse.status)) {
        img.setAttribute('src', base + webp);
      } else {
        img.setAttribute('src', base + jpeg);
      }
    }
  }
}
