'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sewa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sewa.init({
    id_sewa:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_mobil: DataTypes.INTEGER,
    id_karyawan: DataTypes.INTEGER,
    id_pelanggan: DataTypes.INTEGER,
    tgl_sewa: DataTypes.DATE,
    tgl_kembali: DataTypes.DATE,
    total_bayar: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'sewa',
    tableName: 'sewa'
  });
  return sewa;
};