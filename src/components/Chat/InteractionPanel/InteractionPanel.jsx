// Components Import
import ChatSpicePanel from "./ChatSpicePanel"
import GiftPannel from "./GiftPanel"

function InteractionPanel() {
  return (
    <div className="flex gap-8">
      <ChatSpicePanel />
      <GiftPannel />
    </div>
  )
}


export default InteractionPanel