// Link
import {Link} from "react-router-dom"

// Importing Components
import legalAndPoliciesItems from "@Components/LegalAndPolicies/legalAndPoliciesItems"


function SideBar() {

  return (
    <div className="px-2 rounded-xl">
      {
        legalAndPoliciesItems.map((data, index)=>(
          <Option key={index} title={data.title} link={data.link} />
        ))
      }
    </div>
  )
}

const Option = ({title, link}) =>(
  <>
    <Link to={link} className="font-light h-10 flex items-center">{title}</Link>
    <div className="w-full h-[0.03rem] bg-text-color opacity-30"></div>
  </>
  )


export default SideBar