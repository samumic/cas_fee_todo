import ListItemComponent from '../list-item/list-item.js';
import { getTasks, createTask, updateTask } from '../../services/task.service.js';
import ListItemEdit from '../list-item-edit/list-item-edit.js';

class ListComponent {
  constructor() {
    this.template = `
      <div class="task-list">
        <div class="task-list__header">
          <h2 class="task-list__header-title">Board</h2>
          <div class="task-list__header-filter">
            <i class="bi bi-filter"></i>
            <button class="task-list__header-filter-action">Date</button>
            <button class="task-list__header-filter-action">Status</button>
            <button class="task-list__header-filter-action">Priority</button>
          </div>
        </div>
        <div class="task__list-create js-task__list-create">
            <i class="bi bi-plus-lg"></i>
            <span class="task__list-item-text">Create task</span>
        </div>
        <ul class="task-list__list js-task-list__list">
        </ul>
      </div>
    `;
    this.listItems = [];
    this.editItem = null;
    this.editItemId = null;
    this.isCreating = false;
    this.isEditing = false;
  }

  initialize() {
    const template = Handlebars.compile(this.template);
    document.querySelector('.js-app-container').innerHTML = template();
    this.setCreateItemEventListener();
    this.setListActionEventListeners();
    this.fetchItems();
  }

  fetchItems() {
    getTasks().then((data) => {
      this.listItems = data;
      this.renderListItems();
    });
  }

  renderListItems() {
    const taskListElement = document.querySelector('.js-task-list__list');
    let listItemsTemplate = '';
    this.listItems.forEach((item) => {
      listItemsTemplate += new ListItemComponent().initialize(item);
    });
    taskListElement.innerHTML = listItemsTemplate;
  }

  saveItem(isUpdateItem) {
    const formElement = this.editItem.parentElement;
    const taskElement = formElement.elements.task;
    const timeElement = formElement.elements.time;
    const priorityElement = formElement.elements.priority;

    if (taskElement.checkValidity() && timeElement.checkValidity() && priorityElement.checkValidity()) {
      if (isUpdateItem) {
        updateTask(this.editItemId, taskElement.value, timeElement.value, priorityElement.value).then(() => {
          this.fetchItems();
          this.resetEditItem();
        });
      } else {
        createTask(taskElement.value, timeElement.value, priorityElement.value).then(() => {
          this.fetchItems();
          this.resetCreateItem();
        });
      }
    }
  }

  editTaskItem() {
    if (this.isEditing || this.isCreating) {
      return;
    }
    const itemContext = this.listItems.find((item) => item._id === this.editItemId);
    const editItemTemplate = new ListItemEdit().initialize({...itemContext, eventTypeSave: 'save-edit-item', eventTypeCancel: 'cancel-edit-item'});
    const template = document.createElement('template');
    template.innerHTML = editItemTemplate;

    const listItem = document.querySelector(`[data-task-id="${this.editItemId}"]`);
    listItem.replaceWith(template.content);
    this.isEditing = true;
  }

  resetCreateItem() {
    this.isCreating = false;
    this.editItem.parentElement.parentElement.remove();
    this.editItem = null;
    this.editItemId = null;
  }

  resetEditItem() {
    this.isEditing = false;
    this.editItem = null;
    this.editItemId = null;
  }

  setCreateItemEventListener() {
    document.querySelector('.js-task__list-create').addEventListener('click', () => {
      if (this.isCreating || this.isEditing) {
        return;
      }

      this.isCreating = true;
      const createItemTemplate = new ListItemEdit().initialize({eventTypeSave: 'create-item', eventTypeCancel: 'cancel-create-item'});
      document.querySelector('.js-task-list__list').insertAdjacentHTML('afterbegin', createItemTemplate);
    });
  }

  setListActionEventListeners() {
    document.querySelector('.js-task-list__list').addEventListener('click', (event) => {
      this.editItem = event.target;
      const {eventType} = this.editItem.dataset;

      switch (eventType) {
        case 'create-item':
          this.saveItem();
          break;
        case 'cancel-create-item':
          this.resetCreateItem();
          break;
        case 'edit-item':
          this.editItemId = this.editItem.parentElement.parentElement.dataset.taskId;
          this.editTaskItem();
          break;
        case 'save-edit-item':
          this.saveItem(true);
            break;
        case 'cancel-edit-item':
          this.resetEditItem();
          this.renderListItems();
          break;
        default:
          break;
      }
    });
  }
}

export default ListComponent;
