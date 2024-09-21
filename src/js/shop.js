window.addEventListener("load", main, false);

function main() {
  const auctionTimer = setInterval(loadAuction, 1000);
  const auctionSubmitTimer = setInterval(loadAuctionSubmit, 1000);
  const auctionListTimer = setInterval(loadAuctionList, 1000);
  const marketSubmitTimer = setInterval(loadMarketSubmit, 1000);

  function loadAuction() {
    const auctions = document.querySelectorAll('#add-auction-list > div');

    if (auctions.length > 0) {
      clearInterval(auctionTimer);

      auctions.forEach(function (div) {
        const auctionRoot = div.querySelector(':scope > div > div > div');
        const userId = auctionRoot.id.replace('auction_', '');
        const column = auctionRoot.querySelector('div.column');

        if (column === null) return;

        const user = document.createElement('div');

        user.classList.add('leaderboardPlayerUsername');
        user.appendChild(document.createTextNode(userId));

        column.insertBefore(user, column.lastChild);
      });
    }
    ;
  };

  function loadAuctionSubmit() {
    const auctionSubmits = document.querySelectorAll('div.embed:has(button.create[id^="auction_item_submit"])');

    if (auctionSubmits.length > 0) {
      clearInterval(auctionSubmitTimer);

      auctionSubmits.forEach(function (div) {
        if (div.querySelector('button') === null) return;

        const min = document.createElement('button');

        min.textContent = 'MIN';
        min.classList.add('insert-btn');
        min.classList.add('nocopy');

        min.addEventListener('click', function () {
          const input = div.querySelector('input');

          if (input !== null) {
            const newValue = 1;

            if (parseInt(input.getAttribute('min')) < newValue) {
              alert('所持数オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const max = document.createElement('button');

        max.textContent = 'MAX';
        max.classList.add('insert-btn');
        max.classList.add('nocopy');

        max.addEventListener('click', function () {
          const input = div.querySelector('input');

          if (input !== null) {
            const newValue = 9999;

            if (parseInt(input.getAttribute('max')) < newValue) {
              alert('所持数オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const buttons = document.createElement('div');
        buttons.appendChild(min);
        buttons.appendChild(max);

        div.insertBefore(buttons, div.querySelector('button'));
      });
    }
    ;
  };

  function loadAuctionList() {
    const auctionList = document.querySelectorAll('div.embed:has(button.create[id^="auction_submit"])');

    if (auctionList.length > 0) {
      clearInterval(auctionListTimer);

      auctionList.forEach(function (div) {
        if (div.querySelector('button') === null) return;

        const insert1Button = document.createElement('button');

        insert1Button.textContent = 'ADD 1T';
        insert1Button.classList.add('insert-btn');
        insert1Button.classList.add('nocopy');

        insert1Button.addEventListener('click', function () {
          const input = div.querySelector('input');

          if (input !== null) {
            const old = parseInt(input.value);
            const newValue = (isNaN(old) ? 0 : old) + 1_000_000_000_000;

            if (parseInt(input.getAttribute('max')) < newValue) {
              alert('入札額範囲オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const insert10Button = document.createElement('button');

        insert10Button.textContent = 'ADD 10T';
        insert10Button.classList.add('insert-btn');
        insert10Button.classList.add('nocopy');

        insert10Button.addEventListener('click', function () {
          const input = div.querySelector('input');

          if (input !== null) {
            const old = parseInt(input.value);
            const newValue = (isNaN(old) ? 0 : old) + 10_000_000_000_000;

            if (parseInt(input.getAttribute('max')) < newValue) {
              alert('入札額範囲オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const buttons = document.createElement('div');
        buttons.appendChild(insert1Button);
        buttons.appendChild(insert10Button);

        div.insertBefore(buttons, div.querySelector('button'));
      });
    }
    ;
  };

  function loadMarketSubmit() {
    const markets = document.querySelectorAll('div.embed:has(button.create[name="market_submit"])');

    if (markets.length > 0) {
      clearInterval(marketSubmitTimer);

      markets.forEach(function (div) {
        if (div.querySelector('button') === null) return;

        const min = document.createElement('button');

        min.textContent = 'MIN';
        min.classList.add('insert-btn');
        min.classList.add('nocopy');

        min.addEventListener('click', function () {
          const input = div.querySelector('input[id^="create_market_item_count"]');

          if (input !== null) {
            const newValue = 1;

            if (parseInt(input.getAttribute('min')) < newValue) {
              alert('所持数オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const max = document.createElement('button');

        max.textContent = 'MAX';
        max.classList.add('insert-btn');
        max.classList.add('nocopy');

        max.addEventListener('click', function () {
          const input = div.querySelector('input[id^="create_market_item_count"]');

          if (input !== null) {
            const newValue = 9999;

            if (parseInt(input.getAttribute('max')) < newValue) {
              alert('所持数オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const insert1Button = document.createElement('button');

        insert1Button.textContent = 'ADD 1T';
        insert1Button.classList.add('insert-btn');
        insert1Button.classList.add('nocopy');

        insert1Button.addEventListener('click', function () {
          const input = div.querySelector('input[id^="create_market_exp"]');

          if (input !== null) {
            const old = parseInt(input.value);
            const newValue = (isNaN(old) ? 0 : old) + 1_000_000_000_000;

            if (parseInt(input.getAttribute('max')) < newValue) {
              alert('入札額範囲オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const insert10Button = document.createElement('button');

        insert10Button.textContent = 'ADD 10T';
        insert10Button.classList.add('insert-btn');
        insert10Button.classList.add('nocopy');

        insert10Button.addEventListener('click', function () {
          const input = div.querySelector('input[id^="create_market_exp"]');

          if (input !== null) {
            const old = parseInt(input.value);
            const newValue = (isNaN(old) ? 0 : old) + 10_000_000_000_000;

            if (parseInt(input.getAttribute('max')) < newValue) {
              alert('入札額範囲オーバー');
            } else {
              input.value = newValue;
            }
          }
        }, false);

        const buttons = document.createElement('div');
        buttons.appendChild(min);
        buttons.appendChild(max);
        buttons.appendChild(insert1Button);
        buttons.appendChild(insert10Button);

        div.insertBefore(buttons, div.querySelector('button'));
      });
    }
    ;
  };
};
