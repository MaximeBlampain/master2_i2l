const CoinGecko = require('coingecko-api')

const CoinGeckoClient = new CoinGecko()

async function ping(req, res){
  const pong = await CoinGeckoClient.ping()

  return res.status(200).json(pong)
}

async function findAll(req, res){
  const cryptos = await CoinGeckoClient.coins.all()

  if(!cryptos) return res.status(404).send("Error with CoinGecko API")

  const cryptosToReturn = cryptos.data.map(crypto => ({
    id: crypto.id,
    symbol: crypto.symbol,
    name: crypto.name,
    image: crypto.image.small,
    actual_price_eur: crypto.market_data.current_price.eur,
    actual_price_usd: crypto.market_data.current_price.usd,
    price_change_24h: crypto.market_data.price_change_percentage_24h,
    price_change_7d: crypto.market_data.price_change_percentage_7d,
  }))
  return res.status(200).json(cryptosToReturn)
}

async function findOne(req, res){
  const crypto = await CoinGeckoClient.coins.fetch(req.params.coin)

  if(!crypto) return res.status(404).send("Error with CoinGecko API | Cannot find coin")

  const cryptoToReturn = {
    id: crypto.data.id,
    symbol: crypto.data.symbol,
    name: crypto.data.name,
    image: crypto.data.image.small,
    actual_price_eur: crypto.data.market_data.current_price.eur,
    actual_price_usd: crypto.data.market_data.current_price.usd,
    price_change_24h: crypto.data.market_data.price_change_percentage_24h,
    price_change_7d: crypto.data.market_data.price_change_percentage_7d,
  }
  return res.status(200).json(cryptoToReturn)
}


module.exports = {
  ping,
  findAll,
  findOne,
}