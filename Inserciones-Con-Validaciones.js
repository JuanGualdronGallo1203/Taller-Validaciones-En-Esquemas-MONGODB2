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