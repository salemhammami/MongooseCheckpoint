const Contact = require("../Models/Contact")


/* CREATE CONTACT */
exports.createContacts=async(req,res)=>{
    try {

        const found = await Contact.findOne({email : req.body.email})

        if(found){
           return res.status(400).send("Email already exists")
        }
        const newContact = new Contact(req.body)

        await newContact.save()

        res.status(200).send({Msg : "User added",newContact})
    } catch (error) {
        res.status(500).send("Could not add Contact")
    }
}

/* READ CONTACT */

exports.readContacts=async(req,res)=>{
    try {
        const contacts =  await Contact.find()

        res.status(200).send({Msg : "Contacts List",contacts})
    } catch (error) {
        res.status(500).send("Could not get Contacts")
    }
}

/* DELETE CONTACT */

exports.deleteContacts=async(req,res)=>{

    try {

        const{id}= req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send({Msg :"Contact deleted"})
        
        } catch (error) {
        res.status(500).send("Could not delete Contact")
    }
}



/* Update CONTACT */

exports.updateContacts=async(req,res)=>{

    try {
        const {id}= req.params

        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send({Msg : "Contact updated"})
    } catch (error) {
        res.status(500).send("Could not update contact")
    }
}

/* GET ONE CONTACT */

exports.getOneContacts=async(req,res)=>{

    try {
        const {id}= req.params

        const oneContact = await Contact.findById(id)

        res.status(200).send({Msg : "Contact" , oneContact})
    } catch (error) {
        res.status(500).send("Could not get contact")
    }
}
