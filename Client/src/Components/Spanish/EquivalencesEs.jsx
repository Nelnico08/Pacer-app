import useEquivalences from '../../hooks/useEquivalences';

export default function Equivalences() {

  const {
    distanceState,
    timeState,
    paceState,
    equivalence,
  } = useEquivalences()

  if(distanceState === 0 || distanceState === '0'){
    return <div></div>
  }

  return (
    <main className='w-full h-auto text-orange-900 py-4 bg-amber-200 mt-1 shadow-md shadow-amber-900'>

      <div className='flex w-full justify-center shadow-md shadow-amber-900 pb-4 px-2'>
        <p className='pr-4'>Distancia: {distanceState}km</p>
        <p className='pr-4'>Tiempo: {timeState.hour}:{timeState.minutes}:{timeState.seconds}</p>
        <p>Ritmo: {paceState.minutes}:{paceState.seconds}min/km</p>
      </div>

      <div>
        <h2 className='text-center py-4 font-bold text-xl'>Equivalencias aproximadas</h2>
        <div className='grid grid-flow-row max-w-[500px] mx-auto items-center text-center'>
          <div>
            <div className='grid grid-cols-3'>
              <p className='px-2 py-1 border border-orange-900 font-bold'>Distancia en km</p>
              <p className='px-2 py-1 border border-orange-900 font-bold'>Tiempo</p>
              <p className='px-2 py-1 border border-orange-900 font-bold'>Ritmo en min/km</p>
            </div>
            {equivalence && equivalence?.map(elem => (
              <div key={elem.distance} className='grid grid-cols-3 hover:bg-amber-400 cursor-default md:hover:scale-110 duration-500'>
                  <p className='px-2 py-1 border border-orange-900 font-bold'>{Number.isInteger(elem.distance) ? elem.distance : elem.distance === 21.1 ? "Media maratón" : "Maratón"}</p>
                  <p className='px-2 py-1 border border-orange-900 font-bold'>{elem.time.hour}:{elem.time.minutes}:{elem.time.seconds}</p>
                  <p className='px-2 py-1 border border-orange-900 font-bold'>{elem.pace.minutes}:{elem.pace.seconds}</p>              
              </div>  
            ))}
          </div>
        </div>
      </div>
      
    </main>
  )
}
