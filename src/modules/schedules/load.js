
import { hoursLoad } from "../form/hours-load"

// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export function schedulesDay() {
  // Obtém a data do input.
  const date = selectedDate.value

  // Renderiza as horas disponíveis.
  hoursLoad({ date })
}






// Buscar na API os agendamentos para carregar do lado direto da tela.

// Os horários disponiveis (horário futuro + não agendado) do lado esquerdo (form)