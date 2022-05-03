rsconf = {
    _id : "mongo-replica-0",
    members: [
        {
            "_id": 0,
            "host": "mongodb1:27017",
            "priority": 4
        },
        {
            "_id": 1,
            "host": "mongodb2:27017",
            "priority": 2
        }
    ]
 }

rs.initiate(rsconf); 

db = db.getSiblingDB('test-database');
db.createUser({
  user:  'user',
  pwd: 'password',
  roles: [{
    role: 'readWrite',
    db: 'test-database'
  }]
});