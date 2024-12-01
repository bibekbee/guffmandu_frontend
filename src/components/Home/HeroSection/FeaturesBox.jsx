function FeatureBox() {
  return (
    <>
        <h2 className="sm:mb-4 text-xl xs:text-2xl sm:text-3xl text-brand-color font-semibold">Enjoy with features like</h2>
        <div className="mb-16 center gap-1 md:gap-4 lg:gap-10 flex-wrap">
            <div className="flex gap-1 md:gap-4 lg:gap-10">
                <FeatureCard featureName="Random Video Calls" imageName="video-chat" />
                <FeatureCard featureName="For Streamers too" imageName="streamer" />
            </div>
            <div className="flex gap-1 md:gap-4 lg:gap-10">
                <FeatureCard featureName="Real Gifts" imageName="gifts" />
                <FeatureCard featureName="Mini Games" imageName="games" />
            </div>
        </div>
    </>
)}

export default FeatureBox

const FeatureCard = ({featureName, imageName}) => {
    return (
    <div className="p-4 rounded-2xl center flex-col gap-2 xs:gap-2">
        <p className="font-semibold text-xs  xs:text-base text-center">{featureName}</p>
        <img src={`/homepage-images/${imageName}.svg`} alt="" className="h-16 xs:h-24 lg:h-32" />
    </div>
    )
}