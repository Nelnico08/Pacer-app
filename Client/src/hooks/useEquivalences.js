import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEquivalences, getZones } from '../redux/actions';

export default function useEquivalences() {

  const distanceState = useSelector(state => state.distance);
  const timeState = useSelector(state => state.time);
  const paceState = useSelector(state => state.pace)
  const equivalence = useSelector(state => state.equivalences)

  const dispatch = useDispatch()

  useEffect(() => {
    if(distanceState !== 0 && (Object.keys(timeState).length && (timeState.hour !== 0 || timeState.minutes !== 0))){
      dispatch(getEquivalences(distanceState, timeState))
      dispatch(getZones(distanceState, timeState))
    }
  },[distanceState,timeState,paceState,dispatch])

  return {
    distanceState,
    timeState,
    paceState,
    equivalence,
  }
}
