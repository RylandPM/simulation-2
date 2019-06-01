module.exports = {
  getHouses: (req, res, next) => {
    const db = req.app.get("db");
    db.get_all_houses().then(houses => res.status(200).send(houses));
  },
  deleteHouse: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_house(id).then(() => res.sendStatus(200));
  }
};
