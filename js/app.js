// Palidroma

// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let wordUser = prompt('Inserisci una parola')

wordUser = wordUser.toLowerCase()

console.log(wordUser)

function isPalind(drow) {
    
    let wordSplit = []
    
    for (let i = 0; i < drow.length; i++) {
        //charsSplit

        const wordExtension = wordUser.at(-i -1)

        wordSplit.push(wordExtension)
    }

    return wordSplit.join('')

}

if (wordUser === isPalind(wordUser)) {
    message = 'Wow! Inebriante'
} else {
    message = 'Non ci siamo'
}

console.log(message)











// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.