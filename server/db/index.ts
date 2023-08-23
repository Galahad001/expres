import { MongoClient, ServerApiVersion } from "mongodb"
const mySecret = process.env['DBPass']

class Mongo {
  static #instance:Mongo
  url = `mongodb://localhost:27017`
	client = new MongoClient(this.url, { serverApi: ServerApiVersion.v1 })
  connection:any|null = null
  constructor() {
    if (Mongo.#instance) {
      return Mongo.#instance
    }
    Mongo.#instance = this;
  }
  async connect() {
    if (!this.connection) {
      try {
        await this.client.connect()
				console.log('Соединение с базой прошло успешно')
      } catch(e) {
        console.log(e)
      }
    }
  }
  db(db:string, collection:string) {
    return this.client.db(db).collection(collection)
  }
  close() {
    this.connection.close()
  }
}

export default new Mongo()