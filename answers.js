// create 5 burgers (at least 3 should be beef)
use homeworkBurgers
db.burgers.insertMany([
{ meat: "beef", cheese: "American", toppings: ["ketchup", "mustard", "tofu"] }, 
{ meat: "beef", cheese: "American", toppings: "mayonnaise" },
{meat:"beef",cheese:"none",toppings:"none"},
{meat:"chicken",cheese:"none",toppings:["ketchup","mustard","mayonnaise","onions"]}
,{meat:"turkey",cheese:"American",toppings:["mustard","mayonnaise"]}])
// find all the burgers
db.burgers.find({})
// show just the meat of each burger
db.burgers.find({},{meat: 1})
// show just the toppings of each burger
db.burgers.find({},{toppings: 1})
// show everything but the cheese
db.burgers.find({},{toppings: 1,meat:1})
// find all the burgers with beef
db.burgers.find({meat:"beef"})
// find all the burgers that are not beef
db.burgers.find({meat:{$ne:"beef"}})
// find the first burger with cheese

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne({ cheese: "American" }, {$set: { cheese: "double cheese" }})
// find the burger you updated to have double cheese
db.burgers.find({cheese:"double cheese"})
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({},{$set:{meat:"veggie"}})
// delete one of your veggie burgers
db.burgers.deleteOne({meat:"veggie"})
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
//Expected Output
//true
db.burgers.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 