'use strict';

var gProjects = createProjects();

function createProject() {
    // var projects = [];
    // for (let i = 0; i < 5; i++) {
    //     const projImgUrl = `../img/${gProjectNames}[i]`;
    //     const project = _createProject()
    // }
}

function createProjects() {
    return [{
        id: 'mine-sweeper',
        name: 'Mine Sweeper',
        title: 'Flag all the mines',
        desc: 'Find all the mines before losing the match, 3 levels of difficulty with the ability to use hints, safe click and there is also a possiblity to manually select the mines position before starting the match.',
        url: 'https://maxdbam.github.io/minesweeper/',
        publishedAt: Date.now(),
        labels: ['2D arrays, neighbors']
    },
    {
        id: 'books-shop',
        name: 'Books Store',
        title: 'Create, read, update and delete books.',
        desc: 'Check the books, add more books, delete the books, update the book\'s prices, switch between pages and sort the books.',
        url: 'https://maxdbam.github.io/book-shop/',
        publishedAt: Date.now(),
        labels: ['CRUDL']
    },
    {
        id: 'todos',
        name: 'Todos',
        title: 'Create, delete, mark and unmark the todos',
        desc: 'Create your todos, sort and filter them by their created time or importance and remove the completed ones.',
        url: 'projs/todos/index.html',
        publishedAt: Date.now(),
        labels: ['Create, Delete, mark, unmark']
    },
    {
        id: 'safe-content',
        name: 'Safe Content',
        title: 'Login, see the secret element, log out',
        desc: 'Login as an admin to see the available users and sort them by name or by their last login time.',
        url: 'https://maxdbam.github.io/safe-content/',
        publishedAt: Date.now(),
        labels: ['Filter, Sort, Local storage']
    },
    {
        id: 'in-picture',
        name: 'In Picture game',
        title: 'Choose the correct Sport',
        desc: 'Click on the name of the sport which matches the sport which is shown in the image.',
        url: 'projs/in-picture/index.html',
        publishedAt: Date.now(),
        labels: ['Game']
    },
    {
        id: 'touch-nums',
        name: 'Touch Nums game',
        title: 'Click on the numbers and get the best time',
        desc: 'Choose your preffered difficulty and try to record a new best time.',
        url: 'projs/touch-nums/index.html',
        publishedAt: Date.now(),
        labels: ['Numbers, Time']
    }
    ];
}

function getProjects() {
    return gProjects;
}