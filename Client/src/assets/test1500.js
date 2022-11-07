import secondsToHourMinutes from "./secondsToHourMins";

const test1500 = (distance, time) => {
    const tempo = Math.floor(time*(1.5/distance)**1.06)
    const paceInSeconds = Math.floor(tempo/1.5)
    const pace = secondsToHourMinutes(paceInSeconds)

    return pace;
};

export default test1500;