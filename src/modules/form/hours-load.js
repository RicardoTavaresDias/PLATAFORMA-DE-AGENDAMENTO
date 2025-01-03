
import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
// Não estava na aula, para resolver o problema link do hoursClick
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours") // É a <ul>

export function hoursLoad({ date, dailySchedules }) {
  //Limpa a lista de horários.
  hours.innerHTML = ""

  // Obtém a lista de horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm")
)



  const opening = openingHours.map((hour) => { //map() percorre na Array
    // Recupera somente a hora.
    const [shedulesHour] = hour.split(":") //Destruturando array pegando somente antes ":"

    // Adiciona a hora na date e verificar se está no passado.
    const isHourPast = dayjs(date).add(shedulesHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return { 
      hour, 
      available 
    }
  })
  

  // Renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour") // Exemplo if (? - if e : - else)
    // Correção de um erro na aula, não aparecia icon bloqueio, devido falta class hour-unavailable
    li.classList.add(available ? "hour-available" : "hour-unavailable")
   
    li.textContent = hour

    if (hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde") 
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite") 
    } 
    
    hours.append(li)
  })

// Adiciona o evento de clique nos horários disponiveis.
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}