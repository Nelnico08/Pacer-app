import { useState } from 'react';
import EquivalencesEs from './Components/Spanish/EquivalencesEs';
import FooterEs from './Components/Spanish/FooterEs';
import FormEs from './Components/Spanish/FormEs';
import ZonesEs from './Components/Spanish/ZonesEs';
import Form from './Components/English/Form'
import Equivalences from './Components/English/Equivalences'
import Zones from './Components/English/Zones'
import Footer from './Components/English/Footer'

function App() {

  const [language, SetLanguage] = useState('en')

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-400">
      {language === 'en' ? 
        <div>
          <Form/>
          <Equivalences/>
          <Zones/>

          <Footer/>
        </div> :
        <div className="w-screen min-h-screen flex flex-col items-center justify-between">
          <FormEs/>
          <EquivalencesEs />
          <ZonesEs />

          <FooterEs/>
        </div>
        
      }
      
      
    </div>
  )
}

export default App
