import Equivalences from './Components/Equivalences';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Zones from './Components/Zones';

function App() {

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-400">
      <div className="w-screen">
        <Form/>
        <Equivalences />
        <Zones />
      </div>
      
        <Footer/>
      
    </div>
  )
}

export default App
