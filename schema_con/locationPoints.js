
const getTableProperty = (DataTypes) => {
  const fields = {
    // ID 主键
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // 埋点类型, 跟locationPointType里的id对应
    locationPointType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'locationPointType'
    },
    // userId, 即用户的唯一标识
    userId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'userId'
    }
  }
  const fieldIndex = {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true,
    indexes: [
      {
        name: "userIdIndex",
        method: "BTREE",
        fields: [
          {
            attribute: "userId"
          }
        ]
      }
    ]
  }
  return {fields, fieldIndex}
}

module.exports = getTableProperty