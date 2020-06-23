function auth(req, res, next) {
  const usuario = typeof (req.session.user) != 'undefined' ? req.session.user : false

  if (usuario) {
    return next()
  } else {
    return res.redirect('/loginusuario')
  }
}

module.exports = auth