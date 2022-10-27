const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
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
    calculateBill()
  }
  numberOfPeople.innerHTML = people
  calculateBill()
}

const calculateBill = () => {
  let bill = Number(billTotalInput.value);
  let tip = (Number(tipInput.value) * 0.01) * bill
  let allIn = (tip + bill)/Number(numberOfPeople.innerHTML)
  perPersonTotal.innerHTML = `$${allIn.toFixed(2)}`
}


document.getElementById('billTotalInput').addEventListener("keyup", console.log('keyup'));
