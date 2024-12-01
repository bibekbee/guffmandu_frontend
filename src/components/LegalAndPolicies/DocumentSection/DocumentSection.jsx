// Imports from third-party libraries
import { useParams } from "react-router-dom"

// Importing the Items
import legalAndPoliciesItems from "../legalAndPoliciesItems"

function DocumentSection() {
  // Extracting the title from the URL using useParams
  const { title } = useParams()

  // Find the matching item based on the URL title (formatted as link)
  const selectedItem = legalAndPoliciesItems.find(item =>
    item.link.includes(title) // Matches the link part in the legalAndPoliciesItems
  )

  // If the selectedItem is found, render the corresponding component
  if (selectedItem) {
    const Component = selectedItem.component // Get the associated component
    return <Component /> // Render the component dynamically
  }

  // Fallback for non-existent routes
  return (
    <div className="error-page">
      <h1>Page Not Found</h1>
      <p>The requested document does not exist.</p>
    </div>
  )
}

export default DocumentSection