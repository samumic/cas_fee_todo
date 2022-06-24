class ListItemComponent {
  constructor() {
    this.template = `
        <li class="task__list-item task__list-item--open" data-task-id={{_id}}>
          <span class="task__list-item-text">{{task}}</span>
          <span class="task__list-item-date">{{time}}</span>
          <span class="task__list-item-status">
            <span>{{state}}</span>
          </span>
          <span class="task__list-item-priority">
            <i class="bi bi-chevron-double-up"></i>
          </span>
          <span>
            <i class="bi bi-check-square" data-event-type="check-item"></i>
            <i class="bi bi-pencil-square" data-event-type="edit-item"></i>
          </span>
        </li>`;
  }

  initialize(context) {
    const template = Handlebars.compile(this.template);
    return template(context);
  }
}

export default ListItemComponent;
