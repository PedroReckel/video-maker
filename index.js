const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

function start () {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    robots.text(content)

    function askAndReturnSearchTerm () {
        return readline.question("Type a Wikipedia search term: ")
    }

    function askAndReturnPrefix () {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose a option for : ')
        const selectPrefixtext = prefixes[selectPrefixIndex]
        
        return selectPrefixtext
    }

    console.log(content)
}

start()