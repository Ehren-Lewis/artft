migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gymvm0wff810dzz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iuf2e2ib",
    "name": "identity",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gymvm0wff810dzz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iuf2e2ib",
    "name": "username",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
