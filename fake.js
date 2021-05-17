const fs = require('fs')

const getNotes = function () {
    return 'Adding notes'
}

const addNote = function (title, body) {
    const fake = loadNotes()
    const duplicateNotes = fake.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        fake.push({
            title: title,
            body: body
        })
        saveNotes(fake)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = function(fake) {
    const dataJSON = JSON.stringify(fake)
    fs.writeFileSync('fake.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('fake.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}


