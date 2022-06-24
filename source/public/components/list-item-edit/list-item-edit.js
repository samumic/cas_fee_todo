class ListItemEdit {
  constructor() {
    this.template = `
        <li class="task__list-item task__list-item--edit js-task__list-item--edit" data-type="create">
          <form class="js-task__list-item-form">
            <input class="task__list-item-input" type="text" name="task" value="{{task}}" required />
            <input class="task__list-item-input" type="time" name="time" value="{{time}}" required />
            <select class="task__list-item-select" name="priority" required>
              <option value="0" selected>Not important</option>
              <option value="1">Low</option>
              <option value="2">High</option>
              <option value="3">Very important</option>
            </select>
            <button class="task__list-item-button" type="button" data-event-type="{{eventTypeSave}}">Save</button>
            <button class="task__list-item-button" type="button" data-event-type="{{eventTypeCancel}}">Cancel</button>
          </form>
        </li>`;
  }

  initialize(context) {
    const template = Handlebars.compile(this.template);
    return template(context);
  }
}

export default ListItemEdit;
