import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDistance, getPace, getTime } from '../redux/actions';

export default function useForm(initialState) {

  const { distance, time, pace } = initialState

  const [distanceInput, setDistanceInput] = useState(distance);

  // const initialTime = {hour: '0', minutes: '0', seconds: '0'}
  const [timeInputs, setTimeInputs] = useState(time)

  // const initialPace = {minutes: '0', seconds: '0'}
  const [paceInputs, setPaceInputs] = useState(pace)

  const dispatch = useDispatch()

  //distance handlers
  const handleDistanceChange = (e) => setDistanceInput(e.target.value);

  const handleDistanceFocus = (e) => {
    if(e.target.value === '0'){
      setDistanceInput('')
    }
  }

  const handleDistanceBlur = (e) => {
    if(e.target.value === ''){
      setDistanceInput('0')
    }
  }

  //Time handlers
  const handleTimeChange = (e) => {
    setTimeInputs({...timeInputs, [e.target.name]: e.target.value})
  };

  const handleTimeFocus = (e) => {
    if(e.target.value === '0'){
      setTimeInputs({...timeInputs, [e.target.name]: ''})
    }
  };

  const handleTimeBlur = (e) =>{
    if(e.target.value === ''){
      setTimeInputs({...timeInputs, [e.target.name]: '0'})
    }
  };

  //Pace handlers
  const handlePaceChange = (e) => {
    setPaceInputs({...paceInputs, [e.target.name]: e.target.value})
  };

  const handlePaceFocus = (e) =>{
    if(e.target.value === '0'){
      setPaceInputs({...paceInputs, [e.target.name]: ''})
    }
  };

  const handlePaceBlur = (e) =>{
    if(e.target.value === ''){
      setPaceInputs({...paceInputs, [e.target.name]: '0'})
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(distanceInput !== '0' && (timeInputs.hour !== '0' || timeInputs.minutes !== '0')){
      dispatch(getPace(distanceInput, timeInputs))
      setDistanceInput(distance);
      setTimeInputs(time);
      setPaceInputs(pace)
    }else if(distanceInput !== '0' && paceInputs.minutes !== '0'){
      dispatch(getTime(distanceInput, paceInputs))
      setDistanceInput(distance);
      setTimeInputs(time);
      setPaceInputs(pace)
    }else if(paceInputs.minutes !== '0' && (timeInputs.hour !== '0' || timeInputs.minutes !== '0')){
      dispatch(getDistance(paceInputs, timeInputs))
      setDistanceInput(distance);
      setTimeInputs(time);
      setPaceInputs(pace)
    }else{
      alert('Se requieren 2 campos, distancia-tiempo, distancia-ritmo o tiempo-ritmo')
    }
  }

  return{
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
  }
}
