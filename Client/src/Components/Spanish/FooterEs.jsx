import React from 'react'

export default function Footer() {
  return (
    <div className='md:flex justify-evenly md:items-center w-screen h-24 bg-orange-700 '>
        <div className='flex gap-2 justify-center pt-6 md:pt-0'>
            <label>🌎</label>
            <div>Español/Spanish</div>
        </div>
        <div className='flex justify-center '>
            <h3 className='font-bold'>
                Creado por Nelson Escurra
            </h3>
        </div>
    </div>
  )
}
