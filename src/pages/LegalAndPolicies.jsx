import SideBar from "@Components/LegalAndPolicies/SideBar/SideBar"
import DocumentSection from "@Components/LegalAndPolicies/DocumentSection/DocumentSection"

function LegalAndPolicies() {

  return (
    <div className="h-full w-full flex gap-4">

        {/* SideBar */}
        <div className="main-box w-[30%] py-3 px-2">
          <h1 className="text-2xl mb-2">GuffMandu</h1>
          <SideBar />
        </div>

        {/* Documents Container  */}
        <div className="main-box w-[100%]">
          <DocumentSection />
        </div>
    </div>
  )
}

export default LegalAndPolicies