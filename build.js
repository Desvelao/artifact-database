const fs = require('fs')
const info = require('./info.json')

const folder = __dirname + '/language/'

const objToArray = function(obj){
  return Object.keys(obj).map(key => ({data : obj[key], key}))
}

objToArray(info.sets_localiced).forEach(language => {
  try{
    const collection = {}
    collection.language = language.key
    collection.keywords = require(`${folder}${language.key}/keywords`)
    collection.sets = []
    fs.readdirSync(`${folder}${language.key}/sets`).forEach(setdir => {
      const setinfo = require(`${folder}${language.key}/sets/${setdir}/set.json`)
      let set = {}
      if(!setinfo){return}
      set = setinfo
      set.totalCards = 0
      set.cards = []
      fs.readdirSync(`${folder}${language.key}/sets/${setdir}/cards`).forEach(cardfile => {
        const card = require(`${folder}${language.key}/sets/${setdir}/cards/${cardfile}`)
        set.cards.push(card)
        set.cardsCount++
        // console.log(cardfile);
      })
      collection.sets.push(set)
      // console.log(set);
    })
    fs.writeFile(`compiled/${language.key}.json`,JSON.stringify(collection,null,'\t'),(err) => {
      if(err){
        console.log('Error on ',language.key, err);
      }
    })
  }catch(err){
    console.log(err);
  }
  // console.log(files);
  // objToArray(language.data)
})
