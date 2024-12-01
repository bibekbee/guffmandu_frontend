import TransactionDirectionIndicator from "@Icons/Profile/TransactionDirectionIndicator"

function HistoryCard() {
  return (
    <div className="insider-box p-2 w-full rounded-2xl flex justify-between items-center">

        <div className="flex center gap-1">
            {/* Photo */}
            <img src="https://yt3.googleusercontent.com/xpXSnh9CwTeBI626u7WNI_O1SgqPnAQYri3Gq63geLh0uzXEnb3317Cbr_diy9u-FFovd8m62Ho=s160-c-k-c0x00ffffff-no-rj" alt=""
            className="profile-photo size-7"/>

            {/* Description */}
            <p className="text-xs">elon sent you 500 GuffCoins!</p>
        </div>

        {/* Here will be a arrow which will be green or red according to send or receive, what should I name it? */}
        <TransactionDirectionIndicator color={"green"} />
    </div>
  )
}

export default HistoryCard