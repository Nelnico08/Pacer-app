import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function Footer() {

  const {
    language,
    handlerLanguage
  } = useLanguage()

  return (
    <div className='md:flex justify-evenly md:items-center w-screen h-24 bg-orange-700 '>
        <div className='flex gap-2 justify-center pt-6 md:pt-0 cursor-pointer'>
            <label>🌎</label>
            <select className='bg-orange-700 cursor-pointer' value={language} onChange={(e) => handlerLanguage(e)}>
              <option value='EN'>English/Inglés</option>
              <option value='ES'>Spanish/Español</option>
            </select>
        </div>
        <div className='flex justify-center '>
            <h3 className='font-bold'>
                Made by <a href='https://nelson-escurra.netlify.app/' className='text-indigo-900' target="_blank" rel="noopener noreferrer">Nelson Escurra</a>
            </h3>
        </div>
    </div>
  )
}
