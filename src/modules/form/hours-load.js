
import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [shedulesHour] = hour.split(":") //Destruturando array pegando somente antes ":"

    // Adiciona a hora na date e verificar se está no passado.
    const isHourPast = dayjs(date).add(shedulesHour, "hour").isAfter(dayjs())

    return { hour, available: isHourPast, }
  })
  

  // Renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour") // Exemplo if (? - if e : - else)

    li.textContent = hour
    hours.append(li)
  })
}