const MacAdressMiddleware = (req, res, next) => {
    if(!req.body.macAddress){
        return res.json(400).json({ error: 'Mac Address é obrigatório!'});
    } else {
        next();
    }
}

module.exports = MacAdressMiddleware;