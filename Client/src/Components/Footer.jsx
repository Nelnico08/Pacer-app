import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-evenly items-center w-screen h-24 bg-orange-700 '>
        <div className='flex gap-2'>
            <label>🌎</label>
            <div>Español/Spanish</div>
        </div>
        <div>
            <h3 className='font-bold'>
                Creado por Nelson Escurra
            </h3>
        </div>
    </div>
  )
}
