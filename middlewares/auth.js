function auth(req, res, next) {
  const usuario = typeof (req.session.user) != 'undefined' ? req.session.user : false

  if (!usuario) {
    req.session.previousUrl = req.originalUrl;
    res.redirect('/loginusuario')
  } else {
    next();
  }
}

module.exports = auth