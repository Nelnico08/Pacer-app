import React from 'react'
import useForm from '../hooks/useForm';

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
    handleOnSubmit
  } = useForm(initialState)
  
  return (
    <form className='w-full flex flex-col items-center text-orange-900 shadow-md shadow-amber-900' onSubmit={(e) => handleOnSubmit(e)}>
        <h1 className='font-bold text-2xl underline py-4'>Calculadora Running</h1>
        <p className='text-center px-2'>Ingrese la distancia junto con el tiempo o el ritmo, o ingrese el tiempo junto con el ritmo para obtener distancia</p>
        <div>
          <div className='py-2 flex items-center justify-between'>
              <label>Distancia: </label>
              <div>
                <input 
                  type='number' 
                  name='distance' 
                  placeholder='Distancia en km' 
                  value={distanceInput} 
                  onChange={handleDistanceChange}
                  min={0}
                  step='0.01'
                  className='w-[155px] shadow-lg shadow-amber-900 rounded text-right px-2 py-1'
                  onFocus={handleDistanceFocus}
                  onBlur={handleDistanceBlur}
                />
              <label>&nbsp;km</label>
              </div>
          </div>
          <div className='pb-2 flex items-center justify-between'>
              <label className='pr-1'>Tiempo: </label>
              <input type='number' name='hour' placeholder='hora' value={timeInputs.hour} onChange={handleTimeChange} onFocus={handleTimeFocus} onBlur={handleTimeBlur} min={0} className='w-10 shadow-lg shadow-amber-900 rounded text-right p-1' />
              <label>&nbsp;h</label>
              <input type='number' name='minutes' placeholder='min' value={timeInputs.minutes} onChange={handleTimeChange} onFocus={handleTimeFocus} onBlur={handleTimeBlur} min={0} max={59} className='w-10 shadow-lg shadow-amber-900 rounded text-right p-1' />
              <label>&nbsp;min</label>
              <input type='number' name='seconds' placeholder='seg' value={timeInputs.seconds} onChange={handleTimeChange} onFocus={handleTimeFocus} onBlur={handleTimeBlur} min={0} max={59} className='w-10 shadow-lg shadow-amber-900 rounded text-right p-1' />
              <label>&nbsp;seg</label>
          </div>
          <div className='pb-2 flex items-center justify-between'>
              <label>Ritmo: </label>
              <div>
                <input type='number' name='minutes' placeholder='min' value={paceInputs.minutes} onChange={handlePaceChange} onFocus={handlePaceFocus} onBlur={handlePaceBlur} min={0} max={59} className='w-[70px] shadow-lg shadow-amber-900 rounded text-right p-1' />
                <label>&nbsp;min</label>
              </div>
              <div>
                <input type='number' name='seconds' placeholder='seg' value={paceInputs.seconds} onChange={handlePaceChange} onFocus={handlePaceFocus} onBlur={handlePaceBlur} min={0} max={59} className='w-[70px] shadow-lg shadow-amber-900 rounded text-right p-1' />
                <label>&nbsp;seg</label>
              </div>             
          </div>
        </div>
        
        <input type='submit' value='Calcular' className='px-4 py-1 my-4 bg-amber-600 rounded-lg text-orange-900 hover:bg-amber-500'/>
    </form>
  )
}
