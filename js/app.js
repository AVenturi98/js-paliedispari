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
