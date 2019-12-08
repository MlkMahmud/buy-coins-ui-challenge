const url = 'https://api.coinlore.com/api/tickers/?start=1&limit=10';
const tBody = document.querySelector('tbody');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let page = 0;

const generateRow = ({symbol, name, price_usd, tsupply}) => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${name}</td>
  <td>${symbol}</td>
  <td>$ ${price_usd}</td>
  <td>${tsupply} ${symbol}</td>`;
  return row;
};

const appendRow = (element, row) => (element.appendChild(row)); 

window.addEventListener('load', async () => {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  const { data } = json;
  data.forEach(item => {
    appendRow(tBody, generateRow(item));
  });
});
