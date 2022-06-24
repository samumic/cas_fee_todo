import {fetchGet, fetchPost, fetchPut, fetchPatch} from './fetch.js';

const API = 'http://localhost:3650/api/todos';

async function getTasks() {
  return fetchGet(API);
}

async function createTask(task, time, priority) {
  const requestBody = {task, time, priority};
  return fetchPost(API, requestBody);
}

async function updateTask(id, task, time, priority) {
  const requestBody = {id, task, time, priority};
  return fetchPut(API, requestBody);
}

async function patchTask(id, state) {
  const requestBody = {id, state};
  return fetchPatch(API, requestBody);
}

export {getTasks, createTask, updateTask, patchTask};
