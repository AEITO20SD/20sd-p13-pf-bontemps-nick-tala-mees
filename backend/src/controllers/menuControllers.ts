const connection = require("../helpers/connect");

exports.getMenus = (req, res) => {
  connection.query("SELECT * FROM menu", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

// start get all menus API
exports.getAllMenus = (req, res) => {
  connection.query("SELECT * FROM menu", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("result", result);
      res.status(200).send(result);
    }
  });
};
// end get all menus API

// start get specfic id wise menu data API
exports.getOneMenuData = (req: any, res: any) => {
  console.log("req.params", req.params.id);
  let id = req.params.id;

  connection.query(
    `SELECT * FROM menu_recipe WHERE menuId = ${id}`,
    async (err: any, result: any) => {
      if (err) {
        console.log("errrr", err);
        return res.status(500).send(err);
      } else {
        let recipeIdArray: any = [];
        result.map((i: any) => {
          recipeIdArray.push(i.recipeId);
        });
        let uniqueArray = [...new Set(recipeIdArray)];
        let finalResult: any[] = [];
        for (let i = 0; i < uniqueArray.length; i++) {
          let element = uniqueArray[i];
          connection.query(
            `SELECT * FROM recipe WHERE id = ${element}`,
            async (err: any, result2: any) => {
              if (err) {
                return res.status(500).send(err);
              } else {
                await finalResult.push(result2[0]);
                if (finalResult.length === uniqueArray.length) {
                  return res
                    .status(200)
                    .send({ success: true, Data: finalResult });
                }
              }
            }
          );
        }
      }
    }
  );
};
// end get specfic id wise menu data API
