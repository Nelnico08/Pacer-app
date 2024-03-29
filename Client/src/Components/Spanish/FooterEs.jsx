import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';

export default function Footer() {

  const {
    language,
    handlerLanguage
  } = useLanguage()

  return (
    <div className='md:flex justify-evenly md:items-center w-screen h-24 bg-orange-700'>
        <div className='flex gap-2 justify-center pt-6 md:pt-0'>
            <label>🌎</label>
            <select className='bg-orange-700 cursor-pointer' value={language} onChange={(e) => handlerLanguage(e)}>
              <option value='ES'>Español/Spanish</option>
              <option value='EN'>Inglés/English</option>
            </select>
        </div>
        <div className='flex justify-center '>
            <h3 className='font-bold'>
                Creado por <a href='https://nelson-escurra.netlify.app/' className='text-indigo-900' target="_blank" rel="noopener noreferrer">Nelson Escurra</a>
            </h3>
        </div>
        {/* <div>
          <Link to={"/signin"}>Regístrate</Link>
        </div> */}
    </div>
  )
}
