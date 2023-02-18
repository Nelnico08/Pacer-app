import React from 'react'
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
        <p className='pr-4'>Distance: {distanceState}km</p>
        <p className='pr-4'>Time: {timeState.hour}:{timeState.minutes}:{timeState.seconds}</p>
        <p>Pace: {paceState.minutes}:{paceState.seconds}min/km</p>
      </div>
      <div>
        <h2 className='text-center py-4 font-bold text-xl'>Equivalents</h2>
        <div className='flex flex-col items-center'>
          {equivalence && equivalence?.map(elem => (
            <div key={elem.distance} className='flex hover:bg-amber-400 cursor-default md:hover:scale-110 duration-500' >
              <p className='px-2 py-1 border border-orange-900 font-bold'>Distance: {elem.distance < 10 ? `0${elem.distance}` : Number.isInteger(elem.distance) ? elem.distance : elem.distance === 21.1 ? 21 : 42}km</p>
              <p className='px-2 py-1 border border-orange-900 font-bold'>Time: {elem.time.hour}:{elem.time.minutes}:{elem.time.seconds}</p>
              <p className='px-2 py-1 border border-orange-900 font-bold'>Pace: {elem.pace.minutes}:{elem.pace.seconds}min/km</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
