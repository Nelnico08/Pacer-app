import useForm from '../../hooks/useForm';

const initialState = {
  distance: '0',
  time:{hour: '0', minutes: '0', seconds: '0'},
  pace:{minutes: '0', seconds: '0'}
}

export default function Form() {

  const {
    distanceInput,
    timeInputs,
    paceInputs,
    handleDistanceChange,
    handleDistanceFocus,
    handleDistanceBlur,
    handleTimeChange,
    handleTimeFocus,
    handleTimeBlur,
    handlePaceChange,
    handlePaceFocus,
    handlePaceBlur,
    handleOnSubmit,
    resetPace
  } = useForm(initialState)
  
  return (
    <form className='w-full flex flex-col items-center text-orange-900 shadow-md shadow-amber-900' onSubmit={(e) => handleOnSubmit(e)}>
        <h1 className='font-bold text-2xl underline py-4'>Running Calculator</h1>
        <p className='text-center px-2'>Enter distance along with time or pace, or enter time along with pace to get distance</p>
        <div className='grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-5 pt-2 '>
          <label className='text-center'>Distance</label>
          <div className='col-span-2 md:col-span-1'>
            <input 
              type='number' 
              name='distance' 
              placeholder='Distance in m' 
              value={distanceInput} 
              onChange={handleDistanceChange}
              min={0}
              className='w-[155px] inputForm'
              onFocus={handleDistanceFocus}
              onBlur={handleDistanceBlur}
            />
            m
          </div>
          <label className='text-center'>Time</label>
          <div className='col-span-2 md:col-span-1'>
            <input type='number' name='hour' placeholder='hour' value={timeInputs.hour} onChange={handleTimeChange} onFocus={handleTimeFocus} onBlur={handleTimeBlur} min={0} className='w-10 inputForm' />
            <label>h&nbsp;</label>
            <input type='number' name='minutes' placeholder='min' value={timeInputs.minutes} onChange={handleTimeChange} onFocus={handleTimeFocus} onBlur={handleTimeBlur} min={0} max={59} className='w-10 inputForm' />
            <label>min&nbsp;</label>
            <input type='number' name='seconds' placeholder='sec' value={timeInputs.seconds} onChange={handleTimeChange} onFocus={handleTimeFocus} onBlur={handleTimeBlur} min={0} max={59} className='w-10 inputForm' />
            <label>sec&nbsp;</label>
          </div>
          <label className='text-center'>Pace</label>
          <div className='col-span-2 md:col-span-1'>
              <input type='number' name='minutes' placeholder='min' value={paceInputs.minutes} onChange={handlePaceChange} onFocus={handlePaceFocus} onBlur={handlePaceBlur} min={0} max={59} className='w-10 inputForm' />
              <label>min&nbsp;</label>
              <input type='number' name='seconds' placeholder='sec' value={paceInputs.seconds} onChange={handlePaceChange} onFocus={handlePaceFocus} onBlur={handlePaceBlur} min={0} max={59} className='w-10 inputForm' />
              <label>sec&nbsp;</label>
          </div>
          
        </div>
        <div className='w-full flex justify-center'>
          <input type='submit' value='Calculate' className='btn'/>
          <input type='button' onClick={resetPace} value='Reset' className='btn'/>  
        </div>
    </form>
  )
}