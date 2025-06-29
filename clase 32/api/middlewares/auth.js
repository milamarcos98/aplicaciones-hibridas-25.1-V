import 'dotenv/config'
import jwt  from 'jsonwebtoken';

let verificarToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (error, decoded) => {
        if (error) {
            console.log(error)
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({
                    error: 'El token ha expirado. Por favor, inicia sesión de nuevo.'
                });
            } else {
                return res.status(401).json({
                    error: 'Token inválido.'
                });
            }
        }
        req.usuario = decoded.usuario;
        next();
    });
}

export { verificarToken };