migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gymvm0wff810dzz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ioi9sd3f",
    "name": "walletAddress",
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

  // remove
  collection.schema.removeField("ioi9sd3f")

  return dao.saveCollection(collection)
})
