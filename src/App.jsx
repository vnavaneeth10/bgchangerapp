import { useState } from 'react'


function App() {
  const [color, setColor] = useState('#00CCCC')

  return (
    <>
      <div className='w-full flex h-screen items-center justify-center duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center  items-center px-2 inset-x-0 rounded-3xl '>
          <div className='flex flex-wrap justify-center gap-3 px-3 py-3 rounded-3xl shadow-lg' style={{backgroundColor:'#F0FFFF'}}>
            <button 
            onClick={()=>setColor('red')}
            className='outline-none shadow-lg px-4 py-1 rounded-full font-bold shadow-black' style={{backgroundColor:'red'}}>Red</button>
          
          
            <button 
            onClick={()=>setColor('green')}
            className='outline-none shadow-lg px-4 py-1 rounded-full font-bold shadow-black'style={{backgroundColor:'green'}}>Green</button>
          
          
            <button 
            onClick={()=>setColor('blue')}
            className='outline-none shadow-lg px-4 py-1 rounded-full font-bold shadow-black' style={{backgroundColor:'blue'}}>Blue</button>
          </div>
          
        </div>
      </div>
      
    </>
  )
}

export default App
