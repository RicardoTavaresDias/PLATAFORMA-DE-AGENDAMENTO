
import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [shedulesHour] = hour.split(":") //Destruturando array pegando somente antes ":"

    // Adiciona a hora na date e verificar se está no passado.
    const isHourPast = dayjs(date).add(shedulesHour, "hour").isAfter(dayjs())

    return {
      hour,
      available: isHourPast,
    }
  })
  console.log(opening)
}