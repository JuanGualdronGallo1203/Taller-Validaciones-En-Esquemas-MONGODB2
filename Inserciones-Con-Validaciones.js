db.createCollection("clientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id", 
                "nombre", 
                "correo", 
                "telefono", 
                "fecha_registro"],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "Identificador único generado por Mongo"
                },
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    pattern: "^[A-Z]",
                    description: "El nombre debe empezar con mayúscula"
                },
                correo: {
                    bsonType: "string",
                    maxLength: 80,
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$",
                    description: "El formato del correo es incorrecto"
                },
                telefono: {
                    bsonType: "string",
                    maxLength: 10,
                    pattern: "^\\d{7,10}$",
                    description: "El teléfono debe tener entre 7 y 10 dígitos"
                },
                fecha_registro: {
                    bsonType: "date",
                    description: "Fecha en la cual se realizó el registro"
                }
            }
        },
        addiotonalProperties: false
    },
    validationLevel: "strict",
    validationAction: "error"
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
                _id: {
                    bsonType: "objectId",
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
                    description: "La unidad debe ser g, ml o unidades"
                }
            }
        }
    }
})


db.createCollection("Pizzas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "tamano",
                "precio",
                "ingredientes"
            ],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "Identificador unico  generado por Mongo"
                },
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    pattern: "^[A-Z]",
                    description: "El nombre debe empezar con mayuscula"
                },
                tamano: {
                    bsonType: "string",
                    minLength: 5,
                    enum: ["pequeña", "mediana", "grande"],
                    description: "El tamaño de la pizza debe ser pequeña, mediana o grande"
                },
                precio: {
                    bsonType: "double",
                    minimum: 5.00,
                    description: "El precio minimo de la pizza es de 5.00"
                },
                ingredientes: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        bsonType: "objectId",
                        description: "Cada ingrediente debe ser un ObjectId válido"
                    },
                    description: "Debe contener al menos 1 ingrediente"
                }
            }
        }
    }
})



db.createCollection("pedidos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "cliente_id",
                "pizzas",
                "fecha",
                "estado",
                "total"
            ],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "Identificador único generado por Mongo"
                },
                cliente_id: {
                    bsonType: "objectId",
                    description: "El id del cliente debe ser un ObjectId válido"
                },
                pizzas: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        bsonType: "objectId",
                        description: "Cada pizza debe ser un ObjectId válido"
                    },
                    description: "Debe contener al menos 1 pizza"
                },
                fecha: {
                    bsonType: "date",
                    description: "Fecha en la cual se realizó el pedido"
                },
                estado: {
                    bsonType: "string",
                    enum: ["pendiente", "en preparación", "entregado", "cancelado"],
                    description: "El estado del pedido debe ser pendiente, en preparación, entregado o cancelado"
                },
                total: {
                    bsonType: "double",
                    minimum: 0.01,
                    description: "El total del pedido debe ser mayor a 0.01"
                }
            }
        }
    }
})


