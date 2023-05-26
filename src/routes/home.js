const { Layout } = require("../templates.js");
const { getSession } = require("../model/session.js")

function get(req, res) {
  const title = "Confess your secrets!";
  let content = ""
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  if (session && session.user_id) {
    content = /*html*/ `
    <div class="Cover">
      <h1>${title}</h1>
      <form method="POST" action="/log-out"><button type=submit>Log out</button></form>
    </div>
  `;
  } else {
    // request is not authenticated
    content = /*html*/ `
    <div class="Cover">
      <h1>${title}</h1>
      <nav><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></nav>
    </div>
  `;
  }
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
