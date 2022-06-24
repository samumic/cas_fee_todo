import express from 'express';
import toDoStore from '../data/todo.store.js';

const TODO = express();

TODO.get('/api/todos', (req, res) => {
  toDoStore.all((err, items) => {
    if (err) {
      res.status(400);
      res.json();
    }
    res.status(200);
    res.json(items);
  });
});

TODO.post('/api/todos', (req, res) => {
  toDoStore.add(req.body.task, req.body.time, req.body.priority, (err, items) => {
    if (err) {
      res.status(400);
      res.json();
    }
    res.status(201);
    res.json(items);
  });
});

TODO.put('/api/todos', (req, res) => {
  toDoStore.update(req.body.id, req.body.task, req.body.time, req.body.priority, (err, items) => {
    if (err) {
      res.status(400);
      res.json();
    }
    res.status(201);
    res.json(items);
  });
});

export default TODO;
