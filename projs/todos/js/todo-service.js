'use strict';

const KEY = 'theTodos';

var gTodos = _createTodos();
var gFilterBy = 'all';
var gSortBy = 'all';
var gSortOption = false;


function getTodosForDisplay() {
    var todos = gTodos.slice();
    if (gFilterBy !== 'all') {
       todos = gTodos.filter(todo => 
            (todo.isDone && gFilterBy === 'done') ||
            (!todo.isDone && gFilterBy === 'active') )
    }

    const sortedTodos = gTodos.sort(todoComparator);
    if (gFilterBy === 'all' || gSortBy === 'txt' || gSortBy === 'createdAt' || gSortBy === 'importance') {
        gSortOption = true;
        return sortedTodos;
    } else {
        gSortOption = false;
        return todos;    
    }

}

function todoComparator(todo1, todo2) {
    switch (gSortBy) {
        case 'txt':
            if (todo1.txt.toLowerCase() > todo2.txt.toLowerCase()) return 1;
            if (todo1.txt.toLowerCase() < todo2.txt.toLowerCase()) return -1;
            return 0;
        case 'createdAt':
            return todo1[gSortBy] - todo2[gSortBy];
        case 'importance':
            return todo2[gSortBy] - todo1[gSortBy];
    }
}

function removeTodo(todoId) {
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1);
    _saveTodosToStorage()

}

function addTodo(txt, importance) {
    const todo = _createTodo(txt, importance);
    gTodos.unshift(todo);
    _saveTodosToStorage()
}


function toggleTodo(todoId) {
    const todo  = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone;
    _saveTodosToStorage()
}

function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function setSortBy(sortBy) {
    gSortBy = sortBy;
}

function getTotalCount() {
    if (gTodos.length) {
        return gTodos.length + ', ';
    } else return 'No todos, ';
}
function getActiveCount() {
    const activeTodos = gTodos.filter(todo => !todo.isDone)
    if (activeTodos.length) {
        return activeTodos.length + ', ';
    } else return 'No active todos, ';
}

function getDoneTodosCount() {
    const doneTodos = gTodos.filter(todo => todo.isDone);
    if (doneTodos.length) {
        return doneTodos.length;
    } else return 'No done Todos';

}

function checkIfTheTodoIsLastOrFirst(todo, upOrDown) {
    var todoIndex = gTodos.findIndex(todoId => todoId.id === todo.id);
    if (todoIndex === gTodos.length - 1 && upOrDown === 'down') {
        return true;
    } else if (todoIndex === 0 && upOrDown === 'up') {
        return true;
    } else return false;
}

function moveTodoUp(todoId) {
    var todos = gTodos.slice();
    var index = gTodos.findIndex(todo => todo.id === todoId);
    var todo = gTodos[index];
    if (index > 0) {
        gTodos.splice(index, 1);
        gTodos.splice(index - 1, 0, todo);
        _saveTodosToStorage();
        return todos;
    } else {
        // document.querySelector('.up-btn').disabled = true;
        document.querySelector('.up-btn').classList.remove;
        document.querySelector('.disabled-btn').classList.add;
    } 
        
}

function moveTodoDown(todoId) {
    var todos = gTodos.slice();
    var index = gTodos.findIndex(todo => todo.id === todoId);
    var todo = gTodos[index];
    if (index < gTodos.length - 1) {
        gTodos.splice(index, 1);
        gTodos.splice(index + 1, 0, todo);
        _saveTodosToStorage();
        return todos;
    } else {
        // document.querySelectorAll('.down-btn')[gTodos.length - 1].disabled = true;
        document.querySelector('.down-btn').classList.remove;
        document.querySelector('.disabled-btn').classList.add;
    }
}

function _saveTodosToStorage() {
    saveToStorage(KEY, gTodos)
}


function _createTodos() {

    var todos = loadFromStorage(KEY)
    if (todos && todos.length) return todos;

    todos = [];
    todos.push(_createTodo('Wash your hands', 3))
    todos.push(_createTodo('Stay at home', 1))
    todos.push(_createTodo('Learn to code', 3))
    
    saveToStorage(KEY, todos)
    
    return todos;
}

function _createTodo(txt, importance) {
    return {
        createdAt: Date.now(),
        importance: importance,
        id: makeId(),
        txt: txt,
        isDone : false
    }
}


function makeId(length = 5) {
    var id = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(var i=0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}

