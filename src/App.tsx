import './App.css'
import Overlay from '../src/Components/Supalash/Overlay'
import { useState } from 'react'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Overlay onClose={() => setShowSplash(false)} />
      ) : (
        <></>
      )}
    </>
  )
}

export default App
