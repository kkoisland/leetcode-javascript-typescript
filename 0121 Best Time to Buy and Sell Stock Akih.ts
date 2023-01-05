function maxProfit(prices: number[]): number {
  let lastMaxProf = 0;
  let nowProf = 0;

  const sellPrices = prices.reverse().reduce((sells: number[], sell: number, i) => {
    sells.unshift(sell > sells[0] ? sell : sells[0])
    return sells
  },[0])

  prices.reverse()

  prices.forEach((buy, buydate) => {
    const prof = sellPrices[buydate] - buy;

    nowProf = prof > lastMaxProf ? prof : lastMaxProf;
    lastMaxProf = nowProf;
  });
  return lastMaxProf
};
