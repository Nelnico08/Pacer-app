import Equivalences from './Components/Equivalences';
import Form from './Components/Form';
import Zones from './Components/Zones';

function App() {

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-400">
      <Form/>
      <Equivalences />
      <Zones />
    </div>
  )
}

export default App
