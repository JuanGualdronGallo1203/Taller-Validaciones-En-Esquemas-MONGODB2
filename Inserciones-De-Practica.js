clientes
//Inserción válida
db.clientes.insertOne({
nombre: "María López",
correo: "maria.lopez@example.com",
telefono: "3123456789",
fecha_registro: ISODate("2025-06-20")
})
​
//Inserción inválida (correo mal formado, teléfono con letras)
db.clientes.insertOne({
nombre: "Carlos Pérez",
correo: "carlosperez[at]mail",
telefono: "abc1234567",
fecha_registro: ISODate()
})
​
//Actualización válida (sólo cambiar correo a uno correcto)
db.clientes.updateOne(
{ nombre: "María López" },
{ $set: { correo: "m.lopez@correo.co" } }
)
​
//Actualización inválida (añadir campo extra direccion)
db.clientes.updateOne(
{ nombre: "María López" },
{ $set: { direccion: "Calle 123" } }
)
​
ingredientes
//Inserción válida
db.ingredientes.insertOne({
nombre: "Queso Mozzarella",
stock: 500,
unidad: "gramos"
})
​
//Inserción inválida (stock negativo, unidad fuera de enum)
db.ingredientes.insertOne({
nombre: "Pepperoni",
stock: -20,
unidad: "bolsas"
})


​
//Actualización válida (aumentar stock)
db.ingredientes.updateOne(
{ nombre: "Queso Mozzarella" },
{ $inc: { stock: 200 } }
)
​
//Actualización inválida (cambiar unidad a valor no permitido)
db.ingredientes.updateOne(
{ nombre: "Queso Mozzarella" },
{ $set: { unidad: "litros" } }
)
​
pizzas
//Inserción válida
db.pizzas.insertOne({
nombre: "Hawaiana",
tamano: "grande",
precio: 18.50,
ingredientes: [
    ObjectId("…quesoId…"),
    ObjectId("…piñaId…")
]
})
​
//Inserción inválida (tamaño no en enum, precio menor al mínimo)
db.pizzas.insertOne({
nombre: "Carnívora",
tamano: "familiar",
precio: 3.00,
ingredientes: []
})
​
//Actualización válida (ajustar precio)
db.pizzas.updateOne(
{ nombre: "Hawaiana" },
{ $set: { precio: 19.00 } }
)
​
//Actualización inválida (eliminar ingredientes enteramente)
db.pizzas.updateOne(
{ nombre: "Hawaiana" },
{ $unset: { ingredientes: "" } }
)
​
pedidos
//Inserción válida
db.pedidos.insertOne({
cliente_id: ObjectId("…clienteId…"),
pizzas: [
    { pizza_id: ObjectId("…pizzaId1…"), cantidad: 2 },
    { pizza_id: ObjectId("…pizzaId2…"), cantidad: 1 }
],
fecha: ISODate(),
estado: "pendiente",
total: 55.75
})

​
//Inserción inválida (array vacío, estado no válido)
db.pedidos.insertOne({
cliente_id: ObjectId("…clienteId…"),
pizzas: [],
fecha: ISODate(),
estado: "entregada",
total: -5.00
})
​
//Actualización válida (cambiar estado a “entregado”)
db.pedidos.updateOne(
{ estado: "pendiente" },
{ $set: { estado: "entregado" } }
)
​
//Actualización inválida (añadir campo propina)
db.pedidos.updateOne(
{ estado: "pendiente" },
{ $set: { propina: 5.00 } }
)