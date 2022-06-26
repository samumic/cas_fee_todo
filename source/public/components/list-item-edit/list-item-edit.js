class ListItemEdit {
  constructor() {
    this.template = `
        <li class="task__list-item task__list-item--edit js-task__list-item--edit" data-type="create">
          <form class="task__list-item-form js-task__list-item-form">
            <input class="task__list-item-input" type="text" name="task" value="{{task}}" required />
            <input class="task__list-item-input" type="time" name="time" value="{{time}}" required />
            <select class="task__list-item-select" name="priority" required>
              {{#each priorityOptions}}
                <option value="{{value}}">
                    {{text}}
                </option>
              {{/each}}
            </select>
            <div class="task__list-item-form-actions">
               <button class="task__list-item-button task-list__button" type="button" data-event-type="{{eventTypeSave}}">Save</button>
               <button class="task__list-item-button task-list__button" type="button" data-event-type="{{eventTypeCancel}}">Cancel</button>
            </div>
          </form>
        </li>`;
    this.priorityOptions = [
      {value: 0, text: 'Not important'},
      {value: 1, text: 'Low'},
      {value: 2, text: 'High'},
      {value: 3, text: 'Very important'},
    ];
  }

  initialize(context) {
    const template = Handlebars.compile(this.template);
    return template({...context, priorityOptions: this.priorityOptions});
  }
}

export default ListItemEdit;
