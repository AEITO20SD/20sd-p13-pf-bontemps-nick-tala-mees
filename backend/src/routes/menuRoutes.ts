import express from "express";

const menu = express();

const controller = require("../controllers/menuControllers");

menu.get("/", controller.getMenus);

// start set router
menu.get("/getAllMenus", controller.getAllMenus);
menu.get("/getOneMenuData/:id", controller.getOneMenuData);
// End set router

module.exports = menu;
