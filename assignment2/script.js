// Initializing local storage 
document.addEventListener("DOMContentLoaded", loadBlogs);

// LoadBlogs method 
function loadBlogs() { 

    // json.parse returns array of blogs 
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];  // or is used when local storage does not have any data 
    displayBlogs(blogs);
}

// Method to add blogs 
function addBlog() {
    let title = document.getElementById("blogTitle").value; // getting content from blogtitle
    let content = document.getElementById("blogContent").value;

    if (!title || !content) {
        alert("Both fields are required");
        return;
    }

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let newBlog = { id: Date.now(), title, content, timestamp: new Date().toLocaleString() };
    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));

    displayBlogs(blogs);
    document.getElementById("blogTitle").value = ""; /// making blogtitle empty 
    document.getElementById("blogContent").value = "";
}

// Function to display blogs
function displayBlogs(blogs) {
    let blogList = document.getElementById("blogList");
    blogList.innerHTML = ""; 
// iterating over blogs array and displaying them
    blogs.forEach( blog => {
        let blogEntry = document.createElement("div");   //creating a new div element and adding the class blog-entry to it
        blogEntry.classList.add("blog-entry");
        blogEntry.innerHTML = `
        <h3>${blog.title}</h3>
        <p>${blog.content.substring(0, 1000)}</p>
        <small>${ blog.timestamp }</small>
        <div class="blog-actions">
            <button class="update-btn" onclick="editBlog(${blog.id})">Update</button>
            <button class="delete-btn" onclick="deleteBlog(${blog.id})">Delete</button>
        </div>`;
        blogList.appendChild(blogEntry); // adding content to blog list
    });
}

// Method to edit blog
function editBlog(id) {
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    let blog = blogs.find(b => b.id === id);
    let newTitle = prompt("Edit Title:", blog.title);
    let newContent = prompt("Edit Content:", blog.content);
    if (newTitle && newContent) { // checking that both have values
        blog.title = newTitle;
        blog.content = newContent;
        localStorage.setItem("blogs", JSON.stringify(blogs)); // updating local storage 
        displayBlogs(blogs);
    }
}

// Method to delete blog
function deleteBlog(id) {
    if (confirm("Are you sure you want to delete this blog?")) {
        let blogs = JSON.parse(localStorage.getItem("blogs"));
        blogs = blogs.filter(blog => blog.id !== id);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        displayBlogs(blogs);
    }
} 


// Method to filter blogs
document.getElementById("filterInput").addEventListener("input", function() {
    let filterText = this.value.toLowerCase();
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(filterText));   // as input text getting some valur it checks it dynamically 
    displayBlogs(filteredBlogs);
});