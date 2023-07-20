migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2fhdoplvwiwsx2m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "su1ebyla",
    "name": "imageref",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2fhdoplvwiwsx2m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "su1ebyla",
    "name": "imageRef",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
