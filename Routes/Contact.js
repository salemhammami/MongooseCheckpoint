const express = require("express")
const { createContacts, readContacts, getOneContacts, updateContacts, deleteContacts } = require("../Controllers/Contact")

const contactRouter = express.Router()

        contactRouter.post('/createContact',createContacts)

        contactRouter.get("/readContact",readContacts)

        contactRouter.delete("/deleteContact/:id",deleteContacts)

        contactRouter.put("/updateContact/:id",updateContacts)

        contactRouter.get("/getOneContact/:id",getOneContacts)

module.exports = contactRouter