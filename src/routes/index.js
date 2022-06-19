//Requerimos express para poder acceder a su metodo llamado router
const express = require('express');
// este metodo devuelve un objeto que vamos a almacenar en router
const router = express.Router()

router.get("/",(req,res) =>{
    res.send("Hello World");
})

// y es precisamente lo que vamos a exportar
module.exports = router;