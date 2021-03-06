// A grouping of objects. A scene is template for a location.
import { Sequelize, DataTypes } from 'sequelize'
import { Application } from '../declarations'

export default (app: Application): any => {
  const sequelizeClient: Sequelize = app.get('sequelizeClient')
  const scene = sequelizeClient.define('scene', {
    blobId: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true
      }
    }
  });

  (scene as any).associate = (models: any) => {
    (scene as any).belongsTo(models.user) // or group
      (scene as any).belongsToMany(models.objects, { through: models.scene_objects })
  }

  return scene
}
