const LoginPage = require("./pages/login.page");
const InventoryPage = require("./pages/inventory.page");
const pages = {
  login: LoginPage,
  inventory: InventoryPage,
};

module.exports = {
  pages,
  LoginPage,
  InventoryPage,
};
