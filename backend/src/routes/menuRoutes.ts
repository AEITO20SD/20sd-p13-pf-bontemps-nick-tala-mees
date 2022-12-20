import express from "express";

const menu = express();

const controller = require("../controllers/menuControllers");

menu.get("/", controller.getMenus);

module.exports = menu;
