'use strict';

function onInit() {
    renderTodos();
}

function renderTodos() {


    var todos = getTodosForDisplay();
    var strHTMLs = todos.map(getTodoHTML)

    // console.log('strHTMLs', strHTMLs);
    document.querySelector('.todo-list').innerHTML = strHTMLs.join('');

    document.querySelector('.total-todos').innerText = getTotalCount()
    document.querySelector('.active-todos').innerText = getActiveCount()
    document.querySelector('.done-todos').innerText = getDoneTodosCount();
    
}

function getTodoHTML(todo) {
    const className = (todo.isDone) ? 'done' : '';
    const showOrHideArrowButtons = (gSortOption) ? 'show-button' : 'hide';
    const moveUpDisabledOrNot = (checkIfTheTodoIsLastOrFirst(todo, 'up')) ? 'disabled-btn' : '';
    const moveDownDisabledOrNot = (checkIfTheTodoIsLastOrFirst(todo, 'down')) ? 'disabled-btn' : '';
    return `<li class="${className}" onclick="onToggleTodo('${todo.id}')">
    ${todo.txt}, ${todo.importance}
    <button class="remove-btn" onclick="onRemoveTodo(event, '${todo.id}')">x</button>
    <button class="${showOrHideArrowButtons} up-btn ${moveUpDisabledOrNot}" onclick="onMoveTodoUp(event, '${todo.id}')"><img src="up-arrow.png" alt="up-arrow"></button>
    <button class="${showOrHideArrowButtons} ${moveDownDisabledOrNot} down-btn" onclick="onMoveTodoDown(event, '${todo.id}')"><img src="down-arrow.png" alt="down-arrow"></button>
    </li>`;
}

function onRemoveTodo(event, todoId) {
    event.stopPropagation();
    var areYouSure = confirm('Are you sure about deleting this todo?');
    if (areYouSure) {
        removeTodo(todoId)
        renderTodos();
    }
}

function onAddTodo() {
    var txt = prompt('What todo?');
    var importance = +prompt('How important is it from 1-3?');
    if (txt && importance >= 1 && importance <= 3) {
        addTodo(txt, importance);
        renderTodos();
    } else return;

}

function onToggleTodo(todoId) {
    toggleTodo(todoId)
    renderTodos();
}

function onFilterChange(ev, filterBy) {
    var tabTodos = document.getElementsByClassName("tab-option");
    for (var i = 0; i < tabTodos.length; i++) {
        tabTodos[i].className = tabTodos[i].className.replace(' active', '');
    }

    ev.currentTarget.className += ' active';
    setFilter(filterBy);
    renderTodos();
}

function onSortChange(ev, sortBy) {
    var tabTodos = document.getElementsByClassName('tab-option');
    for (var i = 0; i < tabTodos.length; i++) {
        tabTodos[i].className = tabTodos[i].className.replace(' active', '');
    }
    
    ev.currentTarget.className += ' active';
    setSortBy(sortBy);
    renderTodos();
}

function onMoveTodoUp(event, todoId) {
    event.stopPropagation();
    moveTodoUp(todoId);
    renderTodos();
}

function onMoveTodoDown(event, todoId) {
    event.stopPropagation();
    moveTodoDown(todoId);
    renderTodos();
}