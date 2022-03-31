// seed is going to be a script we can run from the terminal to create
// a bunch of pets at once
// we need to be careful with our seed and when we run it because it will remove all the pets first
// then add the new ones

const mongoose = require('mongoose')
const Cat = require('./cat')

const db = require('../../config/db')

const startCats = [
    { type: 'Siamese', color: 'Orange', adoptable: true },
    { type: 'Hairless', color: 'Grey', adoptable: false },
    { type: 'Maine Coon', color: 'White', adoptable: true }
]

// first we connect to database
// then we remove all the pets
// then we create using the startPets array 
// well use console logs to check if its working/errors

// then at the end we close our connection 
// console.log(mongo.connect) - should tell you its a promise
mongoose.connect(db, {
	useNewUrlParser: true,
})
    .then(() => {
        // then we remove all the pets
        Cat.deleteMany({ owner: null })
            .then(deletedCats => {
                console.log('deleted pets', deletedCats)
                // then we create using the startPets array
                // we'll use console logs to check if it's working or if there are errors
                Cat.create(startCats)
                    .then(newCats => {
                        console.log('the new pets', newCats)
                        mongoose.connection.close()
                    })
                    .catch(err => {
                        console.log(err)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    // then at the end, we close our connection to the db
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })

