import equivalences from "../../assets/equivalences";
import secondsToHourMins from "../../assets/secondsToHourMins";
import timeToSeconds from "../../assets/timesToSeconds";
import test1500 from "../../assets/test1500";
import { GET_DISTANCE, GET_EQUIVALENCES, GET_PACE, GET_TIME, GET_ZONES, RESET_VALUES } from "../actionTypes/indes";
import zones from "../../assets/zones";

export const getPace = (distance, time) => {
  const timeInSeconds = timeToSeconds(time.minutes, time.seconds, time.hour)

  const timing = {
    hour: typeof time.hour === 'string' ? Number(time.hour) : time.hour,
    minutes: typeof time.minutes === 'string' ? Number(time.minutes) : time.minutes,
    seconds: typeof time.seconds === 'string' ? Number(time.seconds) : time.seconds
  }

  distance = typeof distance === 'string' ? Number(distance) : distance;
  const paceInSeconds_Km = timeInSeconds / distance;
  const pace = secondsToHourMins(paceInSeconds_Km)

  return {
    type: GET_PACE,
    payload:{
      distance,
      time:{
        hour: timing.hour,
        minutes: timing.minutes < 10 ? `0${timing.minutes}` : timing.minutes,
        seconds: timing.seconds < 10 ? `0${timing.seconds}` : timing.seconds
      },
      pace
    }
  }
};

export const getTime = (distance, pace) => {
  const paceInSeconds = timeToSeconds(pace.minutes, pace.seconds);

  const pacing = {
    minutes: typeof pace.minutes === 'string' ? Number(pace.minutes) : pace.minutes,
    seconds: typeof pace.seconds === 'string' ? Number(pace.seconds) : pace.seconds
  }

  distance = typeof distance === 'string' ? Number(distance) : distance;
  const timeInSeconds = distance * paceInSeconds;
  const time = secondsToHourMins(timeInSeconds);

  return{
    type: GET_TIME,
    payload:{
      distance,
      time,
      pace:{
        minutes: pacing.minutes,
        seconds: pacing.seconds < 10 ? `0${pacing.seconds}` : pacing.seconds
      }
    }
  }
};

export const getDistance = (pace, time) => {
  const paceInSeconds = timeToSeconds(pace.minutes, pace.seconds);
  const timeInSeconds = timeToSeconds(time.minutes, time.seconds, time.hour)

  const pacing = {
    minutes: typeof pace.minutes === 'string' ? Number(pace.minutes) : pace.minutes,
    seconds: typeof pace.seconds === 'string' ? Number(pace.seconds) : pace.seconds
  }

  const timing = {
    hour: typeof time.hour === 'string' ? Number(time.hour) : time.hour,
    minutes: typeof time.minutes === 'string' ? Number(time.minutes) : time.minutes,
    seconds: typeof time.seconds === 'string' ? Number(time.seconds) : time.seconds
  }

  const distance = Math.floor(timeInSeconds / paceInSeconds)

  return {
    type: GET_DISTANCE,
    payload:{
      distance: distance.toString(),
      time:{
        hour: timing.hour,
        minutes: timing.minutes < 10 ? `0${timing.minutes}` : timing.minutes,
        seconds: timing.seconds < 10 ? `0${timing.seconds}` : timing.seconds
      },
      pace:{
        minutes: pacing.minutes,
        seconds: pacing.seconds < 10 ? `0${pacing.seconds}` : pacing.seconds
      }
    }
  }
};

export const getEquivalences = (distance, time) => {
  const {hour, minutes, seconds} = time
  const timeInSeconds = timeToSeconds(minutes, seconds, hour)

  const equivalence = equivalences(distance,timeInSeconds)

  return{
    type: GET_EQUIVALENCES,
    payload: equivalence
  }
};

export const getZones = (distance, time) => {
  const {hour, minutes, seconds} = time
  const timeInSeconds = timeToSeconds(minutes, seconds, hour);

  const pace_1500 = test1500(distance, timeInSeconds)

  const get_zones = zones(pace_1500)

  return {
    type: GET_ZONES,
    payload: get_zones
  }
};

export const resetValues = () => {
  return {
    type: RESET_VALUES,
  }
}