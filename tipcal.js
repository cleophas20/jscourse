const billTotalInput = document.getElementById('billTotalInput').value;
const tipInput = document.getElementById('tipInput').value;
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');


const increasePeople = () => {
  let people = Number(numberOfPeople.innerHTML)
  people++
  numberOfPeople.innerHTML = people
  calculateBill()
}

const decreasePeople = () => {
  let people = Number(numberOfPeople.innerHTML)
  if (people > 1) {
    people--
  }
  numberOfPeople.innerHTML = people
  calculateBill()
}

const calculateBill = () => {
  const allIn = ((tipInput) + billTotalInput)/Number(numberOfPeople.innerHTML)
  perPersonTotal.innerHTML = `$${allIn}`
}

document.getElementById('billTotalInput').addEventListener("keyup", calculateBill);
