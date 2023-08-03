migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2fhdoplvwiwsx2m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xva8jwpp",
    "name": "collectiontitle",
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
  const collection = dao.findCollectionByNameOrId("2fhdoplvwiwsx2m")

  // remove
  collection.schema.removeField("xva8jwpp")

  return dao.saveCollection(collection)
})
