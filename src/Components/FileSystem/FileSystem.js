import { Fragment } from 'react'
import './FileSystem.css'

const FileSystem = ({ value, setValues, listView }) => {
  const { currentPath, pathsForward, pathNames } = value

  const handleForward = (e) => {
    // getting textContent and id from the clicked div
    const { textContent, id } = e.currentTarget

    // getting the value inside the object using above data
    const current = currentPath[id][textContent]

    setValues({
      currentPath: current,
      pathsForward: [...pathsForward, current],
      pathNames: [...pathNames, textContent],
    })
  }

  return (
    <div
      className={
        listView ? 'fileSystemListContainer' : 'fileSystemGridContainer'
      }
    >
      {/* Rendering folder and files according to type of data of 
      elements in the array */}

      {currentPath.map((val, index) =>
        typeof val === 'object' ? (
          <Fragment key={index}>
            <div
              className='file'
              id={index}
              onClick={handleForward}
            >
              <div className={listView ? 'fileIconList' : 'fileIconGrid'}>
                <i className='fa-solid fa-folder'></i>
                <p>{Object.keys(val)[0]}</p>
              </div>
            </div>
          </Fragment>
        ) : (
          <div id={index} key={index} className='file'>
            <div className={listView ? 'fileIconList' : 'fileIconGrid'}>
              <i className='fa-solid fa-note-sticky'></i>
              <p>{val}</p>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default FileSystem
