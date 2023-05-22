import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import EventSlideShow from './components/EventSlideShow'
import Events from './components/Events'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <EventSlideShow />
      <Events />
    </>
  )
}

export default App
