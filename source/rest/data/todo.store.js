import Datastore from '@seald-io/nedb';
import ToDo from '../dto/todo.js';

class ToDoStore {
  constructor() {
    this.db = new Datastore({filename: './source/rest/data/todo.db', autoload: true});
  }

  add(task, time, state, priority, callback) {
    const todo = new ToDo(task, time, state, priority);
    this.db.insert(todo, (err, newDoc) => {
      if (callback) {
        callback(err, newDoc);
      }
    });
  }

  update(id, task, time, state, priority, callback) {
    this.db.update({_id: id}, {$set: {task, time, state, priority}}, {returnUpdatedDocs: true}, (err, numDocs, doc) => {
      callback(err, doc);
    });
  }

  all(callback) {
    this.db.find({}, (err, docs) => {
      callback(err, docs);
    });
  }
}
const toDoStore = new ToDoStore();

export default toDoStore;
