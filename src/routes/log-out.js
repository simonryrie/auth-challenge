const { removeSession } = require("../model/session.js");

function post(req, res) {
  removeSession(req.session);
  res.clearCookie("sid");
  res.redirect("/");
}

module.exports = { post };