const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

module.exports = sequelize.define('project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'title can not be null'
          },
          notEmpty: {
            msg: 'title can not be empty'
          }
        }
      },
      isFeatured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate: {
          isIn: {
            args: [[true, false]],
            msg: 'isFeatured value must be true or false'
          },
        },
      },
      productImage: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'productImage cannot be null',
          },
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'price can not be null'
          },
          notEmpty: {
            msg: 'price can not be empty'
          }
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'description can not be null'
          },
          notEmpty: {
            msg: 'titdescriptionle can not be empty'
          }
        }
      },
      productUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'productUrl can not be null'
          },
          notEmpty: {
            msg: 'productUrl can not be empty'
          },
          isUrl: {
            msg: 'Invalid productUrl string',
          },
        },
      },
      category: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'category can not be null',
          },
        },
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'tags cannot be null',
          },
        },
      },
      createdBy: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    }, {
      paranoid: true,
      freezeTableName: true,
      modelName: 'project',
    });