const timeToSeconds = (minutes, seconds, hour) => {
  let timeToSeconds;
  minutes = typeof minutes === 'string' ? Number(minutes) : minutes;
  seconds = typeof seconds === 'string' ? Number(seconds) : seconds;
  if(hour){
    hour = typeof hour === 'string' ? Number(hour) : hour
    const hourToMinutes = hour * 60;
  	const minutesToSeconds = (hourToMinutes + minutes) * 60;
  	timeToSeconds = minutesToSeconds + seconds
  }else{
    const minutesToSeconds = minutes * 60;
    timeToSeconds = minutesToSeconds + seconds
  }
  return timeToSeconds;
};

export default timeToSeconds;