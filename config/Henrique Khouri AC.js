const mongoose = require ('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://henrique:hmk080326@cluster0.o9ghv.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = conn