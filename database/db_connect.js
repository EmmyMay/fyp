const res = require('express/lib/response');
const mongoose = require('mongoose');
const connection_uri = process.env.DB;


class Database {
  connection = mongoose.connection
  constructor() {
    this._connect();
  }

  _connect() {
    
    try {
      console.log(connection_uri);
      mongoose.connect(connection_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      })
      this.connection.on('connected', () => {
        console.log({msg:"You have been connected to the database"});
      })
    } catch (error) {
      console.log(error);
    }

  }

  async _close() {
    try {
      await this.connection.close();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Database();