const {Router} = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/',usuariosGet);/* No se esta ejecutando, se esta mandando la referencia a la misma */
router.put('/:id',usuariosPut)
router.post('/',usuariosPost)
router.delete('/',usuariosDelete)
router.patch('/',usuariosPatch)





module.exports = router;