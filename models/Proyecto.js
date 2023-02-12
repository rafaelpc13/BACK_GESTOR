import mongoose from "mongoose";
//import bcrypt from "bcrypt";

const proyectosSchema = mongoose.Schema
    ({
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        descripcion: {
            type: String,
            required: true,
            trim: true
        },
        fechaEntrega:{
            type:Date,
            default:Date.now,
        },
        cliente: {
            type: String,
            required: true,
            trim: true
        },
        tareas:[{
            type: mongoose.Schema.Types.ObjectId,
           ref:"Tarea",
        }],
       creador: {
            type: mongoose.Schema.Types.ObjectId,
           ref:"Usuario",
        },
    colaboradores: [{
            type: mongoose.Schema.Types.ObjectId,
           ref:"Usuario",
        },
    ],


    },{timestamps:true,});

    const Proyecto = mongoose.model("Proyecto", proyectosSchema);
export default Proyecto;