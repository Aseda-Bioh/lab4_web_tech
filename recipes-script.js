const recipe_database = {
	1:{id:1, title:"Ghanaian Waakye", author:"Joseph Djan", dateCreated:"2022-06-04"},
	2:{id:2, title:"Fufu and Light Soup", author:"Akua Donkor", dateCreated:"2022-09-04"},
	3:{id:3, title:"Red Red", author:"Hazel Holloway", dateCreated:"2020-02-15"},
	4:{id:4, title:"Efo riro", author:"Chukwuemeka Ogboro", dateCreated:"2023-11-18"},
	5:{id:5, title:"French Croissant", author:"Elizabeth Swedru", dateCreated:"2020-01-20"},
	6:{id:6, title:"Carrot Cupcakes", author:"John McNobert", dateCreated:"2019-12-16"},
	7:{id:7, title:"Meatpie", author:"Elijah Adutwum", dateCreated:"2017-07-01"},
	8:{id:8, title:"Donuts", author:"Kwaku Boateng", dateCreated:"2020-04-28"},
	9:{id:9, title:"Peruvian Chicken", author:"Naana Hope", dateCreated:"2023-02-31"},
	10:{id:10, title:"Tasty Chicken Breast", author:"Moses Blay", dateCreated:"2024-09-02"},
	11:{id:11, title:"Beef Burgundy", author:"Doujie Johnson", dateCreated:"2020-02-29"},
	12:{id:12, title:"Rice and Chicken", author:"John Doe", dateCreated:"2020-02-15"}
}

function viewRecipe(id) {
	const recipe = recipe_database[id];

	if (recipe) {
		const row = document.getElementById(id);
					
		if (row) {
			row.cells[0].textContent = recipe.id;
            row.cells[1].textContent = recipe.title;
            row.cells[2].textContent = recipe.author;
			row.cells[3].textContent = recipe.dateCreated;
		}
	}

	else {
		alert('Recipe not found');
	}
}

function editRecipe(id) {
	const recipe = recipe_database[id];

	if (recipe) {
		document.getElementById('edit-recipe-form').reset();
		document.getElementById('edit-recipe-id').value = recipe.id;
		document.getElementById('recipe-title').value = recipe.title;
		document.getElementById('recipe-author').value = recipe.author;
		document.getElementById('date-created').value = recipe.dateCreated;
		document.getElementById('recipe-details').style.display = 'block';
	}
	
	else {
		alert('Recipe not found');
	}
}

function updateDatabase(event) {
	event.preventDefault();

	const id = document.getElementById('edit-recipe-id').value;
	const title = document.getElementById('recipe-title').value;
	const author = document.getElementById('recipe-author').value;
	const dateCreated = document.getElementById('date-created').value;

	if (recipe_database[id]) {
		recipe_database[id].title = title;
		recipe_database[id].author = author;
		recipe_database[id].dateCreated = dateCreated;
		viewRecipe(id);

		document.getElementById('recipe-details').style.display = 'none';
	}

	else {
		alert('Recipe not found')
	}
}

function deleteRecipe(id) {
	if (confirm(`Are you sure you want to delete recipe ${id}?`)) {
		delete recipe_database[id];

		const row = document.getElementById(id);
		if (row) {
			row.cells[0].textContent = '';
			row.cells[1].textContent = '';
			row.cells[2].textContent = '';
			row.cells[3].textContent = '';
		}
	}
}

function showAddRecipeForm() {
	document.getElementById('add-recipe-form').reset();
	document.getElementById('new-recipe-details').style.display = 'block';
}

function addRecipeToDatabase(event) {
	event.preventDefault();
	const newId = Object.keys(recipe_database).length + 1;
	const title = document.getElementById('new-recipe-title').value;
	const author = document.getElementById('new-recipe-author').value;
	const dateCreated = document.getElementById('date-created-new-recipe').value;

	recipe_database[newId] = {id:newId, title:title, author:author, dateCreated: dateCreated};

	addRecipeToTable(newId);
	document.getElementById('new-recipe-details').style.display = 'none';
	document.getElementById('add-recipe-form').reset();
}

function addRecipeToTable(id) {
	const recipe = recipe_database[id];
	const tableBody = document.querySelector('table tbody');
	const newRow = tableBody.insertRow();
	newRow.id = id;

	newRow.innerHTML = `<td>${recipe.id}</td>
        		    <td>${recipe.title}</td>
        		    <td>${recipe.author}</td>
        		    <td>${recipe.dateCreated}</td>
        		    <td>
            			<button onclick="viewRecipe(${id})" class="btn btn-view">View</button>
            			<button onclick="editRecipe(${id})" class="btn btn-edit">Edit</button>
            			<button onclick="deleteRecipe(${id})" class="btn btn-delete">Delete</button>
        		    </td>
    			   `;
}

function viewAllRecipes() {
    for (const id in recipe_database) {
        viewRecipe(id);
    }
}

document.getElementById('add-recipe-form').addEventListener('submit', addRecipeToDatabase);
document.getElementById('edit-recipe-form').addEventListener('submit', updateDatabase);

// Initialize the table with empty cells
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 12; i++) {
        const row = document.getElementById(i.toString());
        if (row) {
            row.cells[0].textContent = '';
            row.cells[1].textContent = '';
            row.cells[2].textContent = '';
            row.cells[3].textContent = '';
        }
    }
});