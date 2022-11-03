// https://dog.ceo/api/breeds/image/random

const doggy = document.getElementById('dogImage')
const newDog = document.getElementById('dogButton')

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      doggy.innerHTML = `<img src='${json.message}'/>`
    })
}

newDog.onclick = () => getNewDog()
