const express = require("express")
const { readContacts, deleteContacts, updateContacts,createContacts, getOneContacts } = require("../Controllers/Contact")
const contactRouter = express.Router()

        contactRouter.post('/createContact',createContacts)

        contactRouter.get("/readContact",readContacts)

        contactRouter.delete("/deleteContact/:id",deleteContacts)

        contactRouter.put("/updateContact/:id",updateContacts)

        contactRouter.get("/getOneContact/:id",getOneContacts)

module.exports = contactRouter