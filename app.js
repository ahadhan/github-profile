

// var searchInVal = document.getElementById("search-bar").value;

// var tobeSearched ;

// const searchUser = () => {
//     var tobeSearched = searchInVal.toLowerCase();
//     userData();
// }

// async function userData() {
//     const url = `https://api.github.com/users/${tobeSearched}`;
//     const response = await fetch(url);
//     const parseData = await response.json();
//     console.log(parseData);

//     avatar.src = parseData.avatar_url;
//   }

var avatar = document.getElementById("avatar");
var fullName = document.getElementById("full-name");
// var userName = document.getElementById("user-name");
var bio = document.getElementById("bio");
var followers  = document.getElementById("followers");
var following = document.getElementById("following");
var repos = document.getElementById("repos");
var work = document.getElementById("work");
var htmlUrl;
var locatedAt = document.getElementById("create-on");

async function fetchUserData() {
    // Collect the username from a search input in lowercase
    const searchInput = document.getElementById("search-bar").value;
    const username = searchInput.toLowerCase();

    // Construct the GitHub API URL
    const url = `https://api.github.com/users/${username}`;

    try {
        // Send a GET request to the URL using the fetch API with await
        const response = await fetch(url);

        if (response.ok) {
            // Parse the JSON response with await
            const user = await response.json();
            // var updatedDate = user.created_at.joinDate.toISOString().slice(0, 10);
            

            console.log(avatar.src);
            avatar.src = user.avatar_url;
            fullName.textContent = user.name;
            bio.textContent = user.bio;
            
            followers.textContent = user.followers;
            following.textContent = user.following;
            repos.textContent = user.public_repos;
            work.textContent = ` ${user.company}`;
            htmlUrl = user.html_url;
            locatedAt.textContent = `Located In: ${user.location}`

            console.log("User Data:",);
            console.log(`Username: ${user.login}`);
            console.log(`Name: ${user.name}`);
            console.log(`Bio: ${user.bio}`);
            console.log(`Followers: ${user.followers}`);
            console.log(`Following: ${user.following}`);

           

        } else {
            throw new Error(`Failed to fetch user data. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Add an event listener to trigger the function when a search button is clicked
// const searchButton = document.getElementById("search-button");
// searchButton.addEventListener("click", fetchUserData);

const goToProfile = () => {
    window.location.href = htmlUrl;

}