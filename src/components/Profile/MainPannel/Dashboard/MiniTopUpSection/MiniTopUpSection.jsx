import TopUpMiniCard from "./TopUpMiniCard"

function MiniTopUpSection() {

  const shop = [
    {coinsAmount:100, price:10},
    {coinsAmount:200, price:20},
    {coinsAmount:500, price:50},
    {coinsAmount:1000, price:100},
    {coinsAmount:5000, price:500},
    {coinsAmount:10000, price:1000},
    {coinsAmount:50000, price:5000},
  ]

  return (
    <div className="main-box md:h-full p-2">
      <h2 className="text-xl">TopUP</h2>
      <div className="h-full max-h-60 overflow-y-auto flex center gap-2 flex-wrap">
        {shop.map((item, index)=>(
          <TopUpMiniCard key={index} coinsAmount={item.coinsAmount} price={item.price}/>
        ))}
      </div>
    </div>
  )
}

export default MiniTopUpSection