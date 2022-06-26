import FileSystem from './Components/FileSystem/FileSystem'
import Navigation from './Components/Navigation/Navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'

const navbar = {
  width: '100%',
  backgroundColor: 'rgb(99, 104, 203)',
  height: '50px',
  padding: '0 20px',
  fontSize: '1.5rem',
  color: 'white',
  display: 'flex',
  justiflyContent: 'center',
  alignItems: 'center',
}

function App() {
  const [value, setValues] = useState({
    currentPath: [],
    pathsForward: [],
    pathNames: [],
  })
  const [listView, setListView] = useState(false)

  //getting data from api on page load

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/f94f375e-49ca-4693-acfd-54c1ba11869b')
      .then((response) => {
        let data = response.data
        setValues({
          currentPath: data,
          pathsForward: [data],
          pathNames: ['Home'],
        })
      })
  }, [])

  const props = {
    value,
    setValues,
    listView,
    setListView,
  }

  return (
    <div className='App'>
      <div style={navbar}>File Manager</div>
      <Navigation {...props} />
      <FileSystem {...props} />
    </div>
  )
}

export default App
