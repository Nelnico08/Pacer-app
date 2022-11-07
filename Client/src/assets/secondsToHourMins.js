const secondsToHourMinutes = (secs) => {
  let time = {};
  if(secs > 3600){
    const hour = Math.floor(secs / 3600);
    const minutes = Math.floor(secs % 3600 / 60);
    const seconds = Math.floor(secs % 3600 % 60)

    time = {
      hour: hour.toString(),
      minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
      seconds: seconds < 10 ? `0${seconds}` : seconds.toString()
    }
  }else{
    const minutes = Math.floor(secs / 60)
    const seconds = Math.floor(secs % 60)

    time = {
      hour: '0',
      minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
      seconds: seconds < 10 ? `0${seconds}` : seconds.toString()
    }
  }

  return time
}

export default secondsToHourMinutes;