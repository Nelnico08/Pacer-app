import useZones from '../../hooks/useZones'

export default function Zones() {
  
  const { zone } = useZones()

  if(!zone.length){
    return <div></div>
  }
  
  return (
    <div className='w-full h-auto bg-amber-200 text-orange-900 mt-1 py-4'>
      <p className='text-center py-4 font-bold text-xl'>Zonas de entrenamiento</p>
        <main className='max-w-[500px] mx-auto grid grid-row-6 pt-2 text-center'>
        <div className='grid grid-cols-2'>
          <div></div>
          <p className='p-2 border border-orange-900 font-bold'>Ritmo en min/km</p>
        </div>
        <div className='grid grid-cols-2 hover:bg-amber-400 cursor-default md:hover:scale-110 duration-500'>
          <p className='p-2 border border-orange-900 font-bold'>Regenerativo</p>
          <div className='p-2 border border-orange-900'>{zone[0].minutes}:{zone[0].seconds} +</div>
        </div>
        <div className='grid grid-cols-2 hover:bg-amber-400 cursor-default md:hover:scale-110 duration-500'>
          <p className='p-2 border border-orange-900 font-bold'>Aerobico</p>
          <div className='p-2 border border-orange-900'>{zone[1].minutes}:{zone[1].seconds} - {zone[2].minutes}:{zone[2].seconds} </div>
        </div>
        <div className='grid grid-cols-2 hover:bg-amber-400 cursor-default md:hover:scale-110 duration-500'>
          <p className='p-2 border border-orange-900 font-bold'>Superaerobico</p>
          <div className='p-2 border border-orange-900'>{zone[2].minutes}:{zone[2].seconds} - {zone[3].minutes}:{zone[3].seconds}</div>
        </div>
        <div className='grid grid-cols-2 hover:bg-amber-400 cursor-default md:hover:scale-110 duration-500'>
          <p className='p-2 border border-orange-900 font-bold'>VO2max</p>
          <div className='p-2 border border-orange-900'>{zone[4].minutes}:{zone[4].seconds} - {zone[5].minutes}:{zone[5].seconds}</div>
        </div>
        <div className='grid grid-cols-2 hover:bg-amber-400 cursor-default md:hover:scale-110 duration-500'>
          <p className='p-2 border border-orange-900 font-bold'>Intervalado</p>
          <div className='p-2 border border-orange-900'>{zone[5].minutes}:{zone[5].seconds} - {zone[6].minutes}:{zone[6].seconds}</div>
        </div>
      </main> 
    </div>
  )
}
