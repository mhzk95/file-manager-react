import { Fragment } from 'react'
import './Navigation.css'

const Navigation = ({ setValues, value, listView, setListView }) => {
  const { pathsForward, pathNames } = value

  const handleBack = () => {
    // length gives the no of path forwards
    const length = pathsForward.length

    // no of forwards = 1 ie. Home then return nothing
    if (length === 1) return null

    // removing the last element from the pathForwards array
    // and path Names
    pathsForward.splice(-1)
    pathNames.splice(-1)

    // getting the last element from trimmed pathsForward array
    const prev = pathsForward[pathsForward.length - 1]

    //updating the state with above values
    setValues({ currentPath: prev, pathsForward, pathNames })
  }

  const handleLocation = (e) => {
    // obtaining the id from the clicked pathNames
    const { id } = e.target

    // removing rest of the elments from the pathForwards array
    // and path names using id
    pathsForward.splice(Number(id) + 1)
    pathNames.splice(Number(id) + 1)

    //getting the last element from trimmed pathsForward array
    const current = pathsForward[pathsForward.length - 1]

    //updating the state with above values
    setValues({ currentPath: current, pathsForward, pathNames })
  }

  return (
    <div className='navigationContainer'>
      <div className='backButton' onClick={handleBack}>
        <i className='fa-solid fa-angle-left'></i>
      </div>
      <div className='fileRoutes'>
        <i className='fa-solid fa-house fa-xl homeIcon'></i>
        <i className='fa-solid fa-angle-right'></i>

        {/* Showing path names in navbar */}

        {pathNames.map((path, index) => (
          <Fragment key={index}>
            <p id={index} onClick={handleLocation}>
              {path}
            </p>
            <i className='fa-solid fa-angle-right'></i>
          </Fragment>
        ))}
      </div>

      {/* rendering list view and grid view icons when user Clicks */}

      <div className='viewIcon' onClick={() => setListView(!listView)}>
        {listView ? (
          <i className='fa-solid fa-border-all gridIcon'></i>
        ) : (
          <i className='fa-solid fa-list'></i>
        )}
      </div>
    </div>
  )
}

export default Navigation
