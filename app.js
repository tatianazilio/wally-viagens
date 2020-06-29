const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const methodOverride = require('method-override');

const indexRouter = require("./routes/indexRoute");
const usersRouter = require("./routes/usuarioRoute");
const pagamentoRoute = require("./routes/pagamentoRoute");
const cadastroRouter = require("./routes/cadastroRouter");
const usuarioRoute = require("./routes/usuarioRoute");
const loginRoute = require("./routes/loginRoute");
const sucessoRoute = require("./routes/sucessoRoute");
const newsletterRouter = require("./routes/newsletterRoute");

const app = express();

// view engine setup

app.use(session({
  secret: "343ji43j4n3jn4jk3n",
  resave: true,
  saveUninitialized: true,
  maxAge: 3600000
})
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/usuarios", usersRouter);
app.use("/pagamento", pagamentoRoute);
app.use("/cadastro", cadastroRouter);
app.use(usuarioRoute);
app.use(loginRoute);
app.use("/usuariosucesso", sucessoRoute);
app.use("/newsletter", newsletterRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;