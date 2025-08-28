db.createCollection("Clientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "correo",
                "telefono",
                "fecha_registro"
            ],
            properties: {
                _id:{
                    bsonType: "ObjectId",
                    description: "Identificador unico  generado por Mongo"
                },
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    pattern: "^[A-Z]",
                    description: "El nombre debe empezar con mayuscula"
                },
                correo: {
                    bsonType: "string",
                    maxLength: 80,
                    pattern: "^[a-z.-_]+@.+\\.com$",
                    description: "El orden o la coherencia del correo es incorrecta"
                },
                telefono: {
                    bsonType: "string",
                    maxLength: 10,
                    pattern: "//d{7,10}",
                    description: "El valor de los digitos del telefono son incorrectos"
                },
                fecha_registro: {
                    bsonType: "date",
                    description: "Fecha en la cual se realizo el registro"
                }
            }
        }
    }
})



db.createCollection("Ingredientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "stock",
                "unidad"
            ],
            properties: {
                _id:{
                    bsonType: "ObjectId",
                    description: "Identificador unico  generado por Mongo"
                },
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    pattern: "^[A-Z]",
                    description: "El nombre debe empezar con mayuscula"
                },
                stock: {
                    bsonType: "int",
                    minimum: 0,
                    pattern: "^[1-9]\d*$",
                    description: "El stock no puede ser negativo"
                },
                unidad: {
                    bsonType: "string",
                    minLength: 2,
                    enum: ["g", "ml", "unidades"],
                    description: "La unidad debe ser g, ml o unidades"                }
            }
        }
    }
})


