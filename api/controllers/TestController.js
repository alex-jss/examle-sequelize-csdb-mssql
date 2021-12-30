const TableA = require('../../models/TableA');
const TableB = require('../../models/TableB');

module.exports = {

  getList: async (req, res) => {

    return await TableA.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: TableB,
          as: 'tableBOn'
        }
      ]
    }).then((_instData) => {
      return res.send({
        isError: !_instData,
        data: _instData
      });
    }).catch((error) => {
      console.log('error_getList', error);
      return res.send({
        isError: true
      });
    });

  }

}
