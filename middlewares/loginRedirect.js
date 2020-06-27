function loginRedirect(req, res, next) {
    req.session.previousUrlB = req.originalUrl;
    next();
  }

module.exports = loginRedirect