const users_database = {
    1: {id: 1, name: "Aseda Bioh", email: "bioh@example.com"},
    2: {id: 2, name: "Naana Hope", email: "naana@example.com"},
    3: {id: 3, name: "Kwaku Boateng", email: "kwaku@example.com"},
    4: {id: 4, name: "Felicia Boatemaa", email: "felicia@example.com"},
    5: {id: 5, name: "Jemima Arhin", email: "jemima@example.com"},
    6: {id: 6, name: "Afua Basoa", email: "basoa@example.com"},
    7: {id: 7, name: "John Smith", email: "john@example.com"},
    8: {id: 8, name: "Eva Mensah", email: "mensah@example.com"},
    9: {id: 9, name: "Elijah Adutwum", email: "elijah@example.com"},
    10: {id: 10, name: "Edward Smith", email: "smith@example.com"},
};

function viewUser(id) {
    const user = users_database[id];
    if (user) {
        const row = document.getElementById(id.toString());
        if (row) {
            row.cells[0].textContent = user.id;
            row.cells[1].textContent = user.name;
            row.cells[2].textContent = user.email;
        }
    } else {
        alert('User not found');
    }
}

function viewAllUsers() {
    for (const id in users_database) {
        viewUser(id);
    }
}

function editUser(id) {
    const user = users_database[id];
    if (user) {
        document.getElementById('edit-user-form').reset();
        document.getElementById('edit-user-id').value = user.id;
        document.getElementById('edit-username').value = user.name;
        document.getElementById('edit-user-email').value = user.email;
        document.getElementById('user-form').style.display = 'block';
    } else {
        alert('User not found');
    }
}

function updateDatabase(event) {
    event.preventDefault();
    const id = document.getElementById('edit-user-id').value;
    const name = document.getElementById('edit-username').value;
    const email = document.getElementById('edit-user-email').value;
    if (users_database[id]) {
        users_database[id].name = name;
        users_database[id].email = email;
        viewUser(id);
        document.getElementById('user-form').style.display = 'none';
    } else {
        alert('User not found')
    }
}

function deleteUser(id) {
    if (confirm(`Are you sure you want to delete user ${id}?`)) {
        delete users_database[id];
        const row = document.getElementById(id.toString());
        if (row) {
            row.cells[0].textContent = '';
            row.cells[1].textContent = '';
            row.cells[2].textContent = '';
        }
    }
}

document.getElementById('edit-user-form').addEventListener('submit', updateDatabase);

// Initialize the table with empty cells
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 5; i++) {
        const row = document.getElementById(i.toString());
        if (row) {
            row.cells[0].textContent = '';
            row.cells[1].textContent = '';
            row.cells[2].textContent = '';
        }
    }
});