const {response,request} = require('express')

const usuariosGet = (req=request,res=response)=>{

    const {name='No name', q, apikey,page=1,limit} = req.query;
    
    res.json({
        msg: 'get API-controller',
        name,
        q,
        apikey,
        page,
        limit
    })
}
const usuariosPost = (req,res)=>{
    const {nombre,edad} = req.body;

    res.json({
        msg: 'post API- controller',
        nombre,
        edad
    })
}
const usuariosPut = (req,res)=>{
    const id = req.params.id;

    res.json({
        msg: 'put API-controller',
        id
    })
}
const usuariosDelete = (req,res)=>{
    res.json({
        msg: 'delete API-controller'
    })
}
const usuariosPatch = (req,res)=>{
    res.json({
        msg: 'delete PATCH-controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}