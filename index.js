function redstraw(child) {
    let text = document.querySelectorAll('.redstraw')
    // quote insertion in each element with class "redstraw"
    text.forEach(txt => {
        // quotes generator
        let quote = async () => { await fetch('https://api.quotable.io/random?tags=technology,famous-quotes').then(res => res.json()).then(value => newQuote(value)) }
        function newQuote(qte) {
               txt.innerHTML = `<blockquote><q> ${qte.content} </q><p><i><center>~ ${qte.author} </center></i></p></blockquote>`;
        }
        quote();
    })
}
// exporting quotes
module.exports.redstraw = redstraw