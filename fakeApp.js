const chalk = require('chalk')
const yargs = require('yargs')
const fake = require('./fake.js')

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
    handler: function (argv) {
        fake.addNote(argv.title, argv.body)
        //notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
    }
})

//----------Create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//------------Create list command
yargs.command({
    command: 'list',
    describe: 'list of note',
    handler: function () {
        console.log('Listing the note')
    }
})
// ------------Create read command
yargs.command({
    command: 'read',
    descrebe: 'read the note',
    handler: function () {
        console.log('Reading the note')
    }
})


yargs.parse()
                                //console.log(yargs.argv)
