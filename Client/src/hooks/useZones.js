import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function useZones() {

  const zone = useSelector(state => state.zones)

  useEffect(() => {
  }, [zone])

  return {
    zone
  }
}
