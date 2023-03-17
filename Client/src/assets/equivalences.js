import secondsToHourMinutes from './secondsToHourMins'

const equivalences = (distance, time) => {
  const equivalenceArray = [];

  for(let i = 1; i < 41; i++){
    if(i < 10){
      const tempo = Math.floor(time*(i/distance)**1.06)
      const tempoRun = secondsToHourMinutes(tempo);
      const paceInSeconds = Math.floor(tempo/i)
      const pace = secondsToHourMinutes(paceInSeconds)

      const equivalence = {
        distance: i,
        time: tempoRun,
        pace
      }

      equivalenceArray.push(equivalence)
    }else if(i === 20){
      const tempo = Math.floor(time*(21.097/distance)**1.06)
      const tempoRun = secondsToHourMinutes(tempo);
      const paceInSeconds = Math.floor(tempo/21.1)
      const pace = secondsToHourMinutes(paceInSeconds)

      const equivalence = {
        distance: 21.1,
        time: tempoRun,
        pace
      }

      equivalenceArray.push(equivalence)
    }else if(i === 40){
      const tempo = Math.floor(time*(42.195/distance)**1.06)
      const tempoRun = secondsToHourMinutes(tempo);
      const paceInSeconds = Math.floor(tempo/42.2)
      const pace = secondsToHourMinutes(paceInSeconds)

      const equivalence = {
        distance: 42.2,
        time: tempoRun,
        pace
      }

      equivalenceArray.push(equivalence)
    }else if( i % 5 === 0){
      const tempo = Math.floor(time*(i/distance)**1.06)
      const tempoRun = secondsToHourMinutes(tempo);
      const paceInSeconds = Math.floor(tempo/i)
      const pace = secondsToHourMinutes(paceInSeconds)

      const equivalence = {
        distance: i,
        time: tempoRun,
        pace
      }

      equivalenceArray.push(equivalence)
    }else{
      continue
    }
  }
  return equivalenceArray;
};

export default equivalences