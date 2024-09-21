const label = document.createElement('label');
label.classList.add('tabLabel');
label.classList.add('nocopy');
label.appendChild(document.createTextNode('Show details'));

const labelWrapper = document.createElement('div');
labelWrapper.classList.add('label-wrapper');
labelWrapper.appendChild(label);

const content = document.querySelector('div.content');
content.insertBefore(labelWrapper, content.firstChild);

label.addEventListener('click', function () {
  document.querySelectorAll('#add-guild-list > div:not(.pager):not(.leaderboardPlayerSep):not(.already-aprsed)').forEach(function (div) {
    div.classList.add('already-aprsed');

    const fields = div.querySelectorAll(':scope > div > section div.grid > div.embedFields');
    const filed = [].slice.call(fields)[fields.length - 1];
    if (filed === undefined) return;

    const specials = filed.querySelectorAll('div.embedFields > div.embedField');

    const sets = document.createElement('div');

    specials.forEach(function (special) {
      const name = special.querySelector('div.embedFieldName').textContent;
      const values = special.querySelector('strong').textContent.split(' ');

      const insert = document.createElement('div');
      insert.classList.add('leaderboardPlayerStats');
      insert.appendChild(document.createTextNode(`${name} |`));

      for (let i = 0; i < 2; i++) {
        if (i === 0) {
          const span = document.createElement('span');
          span.setAttribute('style', 'color: var(--red-accent); margin: 2px;');
          span.appendChild(document.createTextNode(` ${values[i]}`));
          insert.appendChild(span);
        } else {
          insert.appendChild(document.createTextNode(` ${values[i]}`));
        }
      }

      sets.insertBefore(insert, sets.lastChild);
    });

    const root = div.querySelector(':scope > div > div');

    root.insertBefore(sets, root.lastChild);
  });
}, false);
