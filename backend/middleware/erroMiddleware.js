export const erroMiddleware = (err, req, res, next) => {
    console.error(err.stack)
    return res.status(500).json({erro: 'erro interno no servidor'})
}