const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// const fs = require('fs')
// fs.writeFileSync('note.txt', 'this is .txt file. ')
// fs.appendFileSync('note.txt', ' append')


//const name = require('./utils.js')
//console.log(name);

// const add = require('./utils.js')
// const sum = add(2,4);
// console.log(sum);

//const validator = require('validator')

// const msg = getNotes()
// console.log(msg);
// //console.log(validator.isEmail('hello@examle.com'))
// const greenMsg = chalk.blue.bold.inverse('Success')
// console.log(greenMsg)



//------------------------------Argument parsing with yargs parts 1------------------------------

//const command = process.argv[2]
// console.log(process.argv)
// if(command === 'add') {
//     console.log('adding notes')
// } else if (command === 'remove') {
//     console.log('Removing notes')
// }

// console.log(process.argv)
// console.log(yargs.argv)

                                //----------Customize yargs version
yargs.version('1.1.0')

//================= add, remove, list, read

                                //---------Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
    }
})

                                //----------Create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    // handler: function(argv) {
    //     notes.removeNote(argv.title)
    //     //console.log('Removing the note')
    }
})

                                //------------Create list command
yargs.command({
    command: 'list',
    describe: 'list of note', 
    handler(argv) {
        notes.listNotes()
    }
})
                                // ------------Create read command
yargs.command({
    command: 'read', 
    descrebe: 'read the note', 
    handler() {
        console.log('Reading the note')
    }
})


yargs.parse()
//console.log(yargs.argv)
