'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    StudentName: DataTypes.STRING,
    totalScore: DataTypes.INTEGER,
    totalAbsen: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};