function auth(req, res, next) {

  if (!req.session.usuario) {
    req.session.previousUrl = req.originalUrl;
    return res.redirect('/loginusuario');
  } else {
    return next();
  }
}

module.exports = auth