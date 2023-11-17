import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const marcaCollection = "Marca";

const marcaSchema = new Schema({
    nombre: { type: String, required: true },
    esVisible: { type: Boolean, default: false }, //Para ver o no ciertos campos, si es date porej si no llega el dato lo coloca
});

const marca = model(marcaCollection, marcaSchema)