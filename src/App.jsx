import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from 'socket.io-client'

const socket = io('http://localhost:8000')

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    socket.on('counterUpdate', (value) => {
      setCount(value)
    })
  }, [])

  const handleClick = () => {
    socket.emit('increment') // qiymat yubormaymiz, faqat signal
  }

  const handleReset = () => {
    socket.emit('decrement') // reset signal
  }

  return (
    <>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#e0e0e0', gap: '20px' }}>
        <button className="car-button" onClick={handleClick} style={{ padding: '15px 30px', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '30px', background: 'linear-gradient(145deg,#d0d0d0,#ffffff)', boxShadow: '6px 6px 12px #b0b0b0,-6px -6px 12px #ffffff', cursor: 'pointer', transition: 'transform 0.2s ease,background 0.3s ease' }} onMouseOver={e => e.target.style.transform = 'scale(1.1)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} onMouseDown={e => e.target.style.transform = 'scale(0.9)'} onMouseUp={e => e.target.style.transform = 'scale(1.1)'}>
          count is {count}
        </button>
        <button className="car-button reset-button" onClick={handleReset} style={{ padding: '15px 30px', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '30px', background: 'linear-gradient(145deg,#ff3333,#ff6666)', color: 'white', boxShadow: '6px 6px 12px #b0b0b0,-6px -6px 12px #ffffff', cursor: 'pointer', transition: 'transform 0.2s ease,background 0.3s ease' }} onMouseOver={e => e.target.style.transform = 'scale(1.1)'} onMouseOut={e => e.target.style.transform = 'scale(1)'} onMouseDown={e => e.target.style.transform = 'scale(0.9)'} onMouseUp={e => e.target.style.transform = 'scale(1.1)'}>
          reset
        </button>
        {count >= 10 && (
          <p className="warning" style={{ color: '#ff3333', fontSize: '16px', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>
           
          </p>
        )}
      </div>
    </>
  )
}

export default App
