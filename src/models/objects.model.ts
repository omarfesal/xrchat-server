// An asset file / image / model.
import { Sequelize, DataTypes } from 'sequelize'
import { Application } from '../declarations'
export default (app: Application): any => {
  const sequelizeClient: Sequelize = app.get('sequelizeClient')

  const Object = sequelizeClient.define('object', {
    format: { // content-type
      type: DataTypes.STRING,
      allowNull: false
    },
    objectType: { // to start with, 'static'
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true
      }
    }
  });
  // TODO: Model Attribution/Created By (same as for XrAvatar)
  (Object as any).associate = (models: any) => {
    (Object as any).belongsTo(models.user) // or group
      (Object as any).belongsToMany(models.scene, { through: models.scene_object })
  }

  return Object
}
