const fs = require('fs')
const db = require('./0 - Basic.json')

Object.keys(db.cards).forEach(c => {
  const card = Object.assign({name : c},db.cards[c])
  if(!card.id || !card.name){return}
  fs.writeFile(`0-basic/${card.id}.json`,JSON.stringify(card),(err) => {
    if(err){
      console.log('Error en:',card.id);
    }
  })
})
