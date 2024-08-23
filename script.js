let vehicle1 = prompt('Dê um nome para um veículo.')
let vehicle2 = prompt('Dê outro nome para outro veículo.')
const speed1 = prompt(`Determine a velocidade de ${vehicle1}`)
const speed2 = prompt(`Determine a velocidade de ${vehicle2}`)


if (speed1 > speed2) {
    alert(`${vehicle1} está a ${speed1}km/h, e mais rápido que o ${vehicle2}, que está a ${speed2}km/h.`)
} else if (speed1 < speed2) {
    alert(`${vehicle2} está a ${speed2}km/h, e mais rápido que o ${vehicle1}, que está a ${speed1}km/h`)
} else {
    alert(`Tanto ${vehicle1} e ${vehicle2} estão a ${speed1 || speed2} km/h`)
}