module.exports =  class User {
  login = "login";
  password = "password";
  constructor(login, password) {
    (this.login = login), (this.password = password);
  }
}
