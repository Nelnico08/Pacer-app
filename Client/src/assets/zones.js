import secondsToHourMinutes from "./secondsToHourMins";
import timeToSeconds from "./timesToSeconds";

const zones = (pace1500) =>{
  const { minutes, seconds } = pace1500;
  const paceToSeconds = timeToSeconds(minutes, seconds)
  const zones = [];

  let i = 0
  let slope = 1.45

  while (i < 7){
    const zoneInSeconds = slope * paceToSeconds
    const paceZone = secondsToHourMinutes(zoneInSeconds)
    zones.push(paceZone);
    i++;
    if(i < 4 || i > 4){
      slope = slope - 0.10
    }else{
      slope = slope - 0.05
    }
  }
   return zones;
};

export default zones;