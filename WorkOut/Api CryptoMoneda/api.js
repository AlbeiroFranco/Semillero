let baseUrl = "https://api.coinranking.com/v2/coins";
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let apiKey = "coinrankinge45fe9d18658f60476eed8feb3d94ce41642c0fd587c3f0b";

let apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, {
   method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': "*"
  } 
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          cryptoCoin = "";
        }
        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          cryptoCoin += `<td class="rank"> ${coin.rank}</td>`;
          cryptoCoin += `<td class="name"> <p>${coin.name}</p> <p>${coin.symbol}</p></td>`;
          cryptoCoin += `<td> ${coin.btcPrice}</td>`;
          cryptoCoin += `<td> $ ${Math.round(coin.price)} Billion</td>`;
          cryptoCoin += `<td class="icono" > <img src="${coin.iconUrl}" alt=""> </td>`;
          cryptoCoin += "</tr>";

        });
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

  



