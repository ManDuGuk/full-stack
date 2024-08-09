const { createInterface } = require("readline");
const Account = require("./ams-project-myver/Account");
const MinusAccount = require("./ams-project-myver/MinusAccount");
const AccountRepository = require("./ams-project-myver/AccountRepository");
const fs = require('fs').promises;
const Menu = require("./menu");

module.exports = {
    createInterface,
    Account,
    MinusAccount,
    AccountRepository,
    fs,
    Menu,
}