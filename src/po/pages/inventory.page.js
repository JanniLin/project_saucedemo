const BasePage = require("./base.page");

class InventoryPage extends BasePage {
  constructor() {
    super("/inventory");
  }
  get headerText() {
    return $("div.app_logo");
  }
}

module.exports = new InventoryPage();
