migrate((db) => {
  const collection = new Collection({
    "id": "kl2n94w5xdcjjes",
    "created": "2023-07-23 07:17:16.845Z",
    "updated": "2023-07-23 07:17:16.845Z",
    "name": "fakeartistauth",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kl2n94w5xdcjjes");

  return dao.deleteCollection(collection);
})
