let words = []

function encriptar() {
  let inputWord = document.getElementById('text__input').value

  let arrayWord = inputWord.toLowerCase().split('')

  for (let index = 0; index < arrayWord.length; index++) {
    if (arrayWord[index] == 'a') {
      arrayWord[index] = 'ai'
    }
    if (arrayWord[index] == 'e') {
      arrayWord[index] = 'enter'
    }
    if (arrayWord[index] == 'i') {
      arrayWord[index] = 'imes'
    }
    if (arrayWord[index] == 'o') {
      arrayWord[index] = 'ober'
    }
    if (arrayWord[index] == 'u') {
      arrayWord[index] = 'ufat'
    }
  }

  words.push(arrayWord.join(''))

  mostrarPalabras()

  words = []
  document.getElementById('text__input').value = ''
}

function desencriptar() {
  let inputWord = document.getElementById('text__input').value

  let desencriptedWord = inputWord
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  words.push(desencriptedWord)
  mostrarPalabras()
  words = []
  document.getElementById('text__input').value = ''
}

function mostrarPalabras() {
  let container = document.getElementById('container__result')

  container.removeAttribute('justify-content')
  container.removeAttribute('align-items')
  container.removeAttribute('text-align')

  container.innerHTML = `<p id='words'>${words}</p>
  <button onclick="copiar()">Copiar</button>
  `
}

function copiar() {
  let texto = document.getElementById('words').innerText
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert('Texto copiado al portapapeles')
    })
    .catch((err) => {
      console.error('Error al copiar el texto: ', err)
    })
}
