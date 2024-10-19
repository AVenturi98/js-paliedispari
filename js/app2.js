// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

    // SCELTA UTENTE PARI O DISPARI

let evenOrOddChoose = ['pari', 'dispari']

let clientChoseEvorOd = prompt('Scegli Pari o Dispari')

clientChoseEvorOd = clientChoseEvorOd.toLowerCase()

let printed = 'Somethings went wrong'

for(let i = 0; i < evenOrOddChoose.length; i++) {
    
    let currentChoose = evenOrOddChoose[i]

    if (clientChoseEvorOd === currentChoose) {
        printed = currentChoose
    }
}
console.log(printed)

    //SCELTE UTENTE NUMERO

let clientChoseNum =  Math.floor(Math.random() * 5 ) //prompt('Scegli un numero tra 1 e 5')
console.log('User: ', clientChoseNum)

    //NUMERO RANDOM COMPUTER

function computerNumRandom() {

    const randomize = Math.floor(Math.random() * 5)
    
    return randomize
}
const computerNumber = computerNumRandom()

console.log('Computer: ', computerNumber)

    //SOMMA NUMERI

function sum(a, b) {
    return a + b
}

const sumNumbers = sum(clientChoseNum, computerNumber)

    // PARI O DISPARI

function isEvorOd(n) {
    
    const numEven = n % 2
    
    let message = ''

    if (numEven === 0) {
        message = 'PARI'
    } else message = 'DISPARI'

    return message
}

let numberTotalEvorOd = isEvorOd(sumNumbers)

console.log('Somma =>  è uscito ', sumNumbers, 'un numero ', numberTotalEvorOd)

    // ESITO 

let proclamation = 'hai perso'

if (clientChoseEvorOd === numberTotalEvorOd.toLowerCase()) {
    proclamation = 'bella li'
}

console.log(proclamation)
