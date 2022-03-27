const algoritmia = require('algorithmia')

function robot (content) {
    downloadContentFromWiki(content)
    // sanitizeContent(content)
    // breakContentIntoSentences(content)
    function downloadContentFromWiki(content) {
        const algorithmiaAuthenticated = algoritmia('API KEY TEMPORARIA')
        const wikiAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
        const wikiResponde = wikiAlgorithm.pipe(content.seachTerm)
        const wikiContent = wikiResponde.get()
        console.log(wikiContent)
    }
}

module.exports = robot