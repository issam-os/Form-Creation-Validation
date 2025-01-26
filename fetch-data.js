// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data');  // Reference to the container

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the "Loading" message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display the list of users
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set user name as the content
            userList.appendChild(listItem);  // Append the list item to the <ul>
        });

        // Append the user list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by displaying an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error(error);
    }
}

// Run fetchUserData once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
