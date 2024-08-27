const LoginPage = require("./login.page");
const InventoryPage = require("./inventory.page");
const pages = {
  login: LoginPage,
  inventory: InventoryPage,
};

module.exports = {
  pages,
  LoginPage,
  InventoryPage,
};
