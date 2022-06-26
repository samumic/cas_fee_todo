Handlebars.registerHelper('isSelected', (input, priority) => (Number(input) === Number(priority) ? 'selected' : ''));
