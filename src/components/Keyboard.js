import React, { useEffect, useState } from 'react'

const Keyboard = ({inputValue}) => {
    const keys1='qwertyuiop'
    const keys2='asdfghjkl;'
    const keys3='zxcvbnm,.'

    const [capsLockOn, setCapsLockOn] = useState(false);
    const [shiftOn, setShiftOn] = useState(false);

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Shift') {
            setShiftOn(true);
          }
          if (event.key === 'CapsLock') {
            setCapsLockOn((p)=>!p);
          }
        
      };
      
  
      const handleKeyUp = (event) => {
        if (event.key === 'Shift') {
          setShiftOn(false);
        }
      };
  
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    }, []);
  return (
<div className='flex flex-col justify-center items-center  w-full '>
    <div className='w-auto flex flex-col   border-solid border-2 border-black'>

    <ul className='flex gap-2 m-2'>
        <li className='px-6 py-3 rounded-md border-solid border-2  border-gray-700'>Tab</li>
{[...keys1].map(key =>(
    <li className='px-6 py-3 rounded-md border-solid border-2 border-gray-700' key={key} style={{ backgroundColor: key === inputValue || key.toUpperCase()===inputValue  ? '#9DB2BF' : null }}>{capsLockOn || shiftOn?key.toUpperCase():key.toLowerCase()}</li>
    ))}
        </ul>
    <ul className='flex gap-2 m-2'>
        <li className='px-6 py-3 rounded-md  border-solid border-2 border-gray-700' style={{ backgroundColor: capsLockOn?'#9DB2BF':null }} >CapsLk</li>
{[...keys2].map(key =>(
    <li className='px-6 py-3 rounded-md border-solid border-2 border-gray-700' key={key} style={{ backgroundColor: key === inputValue || key.toUpperCase()===inputValue  ? '#9DB2BF' : null }}>{capsLockOn || shiftOn?key.toUpperCase():key.toLowerCase()}</li>
    ))}
</ul>
    <ul className='flex gap-2 m-2'>
        <li className='px-12 py-3 rounded-md border-solid border-2 border-gray-700' style={{ backgroundColor: shiftOn ?'#9DB2BF':null }} >Shift</li>
{[...keys3].map(key =>(
    <li className='px-6 py-3 rounded-md border-solid border-2 border-gray-700' key={key}  style={{ backgroundColor: key === inputValue  || key.toUpperCase()===inputValue? '#9DB2BF' :null }}>{capsLockOn || shiftOn?key.toUpperCase():key.toLowerCase()}</li>
    ))}
</ul>
<div className='px-10 w-1/2 self-center py-6 mb-2 rounded-md border-solid border-2 border-gray-700' key=' '  style={{ backgroundColor:  inputValue === ' '  ? '#9DB2BF' : null }}>{' '}</div>
    </div>
</div>
  )
}

export default Keyboard