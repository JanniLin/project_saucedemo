const BasePage = require("./base.page");

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory");
  }
  headerText = $("div.app_logo");
}

module.exports = new InventoryPage();
