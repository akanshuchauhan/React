import { useState } from 'react'
 
function App() {
 
  const [cValue,setcValue]=useState(10);

  const dec=()=>{
      setcValue(cValue-1);  
      if(cValue<=0){
      setcValue(0)}
    }
  
  const inc=()=>{
    setcValue(cValue+1);
  }
  return (
    <>
    <div className='bg-black h-screen w-full  '>
      
      <h1 className=' text-white items-center text-center py-12 text-4xl'>Counter Value</h1>
      <div  className='text-white items-center text-2xl   flex justify-center   max-w-full gap-x-10  '>  
      <button className='bg-neutral-600 min h-20 rounded-md  px-10'onClick={dec}>Decrease value</button>
      <h1 className='bg-neutral-600 min h-20 rounded-md  py-5 px-5 text-center'>{cValue}</h1>
      <button  className='bg-neutral-600 min h-20 rounded-md px-10 ' onClick={inc}>Increare value</button>
      </div>
    </div>
    </>
  )
}

export default App
