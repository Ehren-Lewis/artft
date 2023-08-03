migrate((db) => {
  const collection = new Collection({
    "id": "gymvm0wff810dzz",
    "created": "2023-07-23 05:47:55.387Z",
    "updated": "2023-07-23 05:47:55.387Z",
    "name": "fakeartist",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "ollho3sz",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gymvm0wff810dzz");

  return dao.deleteCollection(collection);
})
