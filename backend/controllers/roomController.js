const Room = require('../models/roomModel')
const mongoose = require('mongoose')

// Create a new room
const createRoom = async (req, res) => {
    const { title, description, privacy} = req.body;

    // empty fields
    let emptyFields = []
    if(!title){
        emptyFields.push('title')
    }
    if(!description){
        emptyFields.push('description')
    }
    if(!privacy){
        emptyFields.push('privacy')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    // add to the database
    try {
        const user_id = req.user._id
        const room = await Room.create({ title, description, privacy, user_id })
        res.status(200).json(room)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

};

// Export the room controller functions
module.exports = {
  createRoom,
};
