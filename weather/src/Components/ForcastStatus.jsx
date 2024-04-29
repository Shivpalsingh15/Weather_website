import React from 'react'

export default function ForcastStatus(props) {
    const bgColor = props.color;
  return (
    <div style={{backgroundColor: props.color}} className='flex flex-col gap-2 justify-around p-4 text-center text-sm h-20 text-blue-950 font-semibold border '>
        <div><p>{props.title}</p></div>
        <div className='flex justify-around'>
            <p >{props.main }</p>
            <p >{props.sub }</p>
        </div>
    </div>
  )
}
