// Initializing local storage 
// document.addEventListener("DOMContentLoaded", loadBlogs);
// This event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This means it runs earlier than window.onload.


// using window onload 
// This event fires when the entire page, including all dependent resources such as stylesheets and images, has finished loading.
window.onload = function(){
    loadBlogs();
}

// using IIFE
// Immediately Invoked Function Expression (IIFE) is a JavaScript function 1.Avoiding Global Scope Pollution: 2.Initialization:
// (function(){
//     loadBlogs();
// })(); // for using multiple iife we should use semi-colon


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
   // regex expression to check that title and content have atleast one non whitespace character if there is atlesat one non whitespace character then it will return true 
     const isValid = /\S/.test(title);
     if(isValid){
        title = title.trim();
     }else{
        alert("title can't be empty");
        return;
     }
     const isValidContent = /\S/.test(content);
     if(isValid){
        content = content.trim();
     }else{
        alert("title can't be empty");
        return;
     }

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


// adding blog by enter press 
document.getElementById("blogTitle").addEventListener("keypress", function(event){
if(event.key === "Enter"){
    event.preventDefault();// it prevent defualt action of an event from occuring 
    document.getElementById("blogContent").focus();
}
});


// adding blog by enter press 
document.getElementById("blogContent").addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        let title = document.getElementById("blogTitle").value;
        let content = document.getElementById("blogContent").value;

        if(!title || !content) { 
            alert("Both fields are required");
            return; 
        }
        addBlog();
    }
});


// Function to display blogs
function displayBlogs(blogs) {
    let blogList = document.getElementById("blogList");
    blogList.innerHTML = ""; //clear previous results
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
document.getElementById("filterinput").addEventListener("input", function() {
    let filterText = this.value.toLowerCase();
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(filterText));   // as input text getting some valur it checks it dynamically 
    if(filteredBlogs.length === 0){ // checking that result is availabe or not 
        displayNoResults();
        return;
        }
    displayBlogs(filteredBlogs);
});


// displaying error msg
function displayNoResults() {
    let blogList = document.getElementById("blogList");
    blogList.innerHTML = "<p>No result found. </p>";
}


const filterinput = document.getElementById("filterinput");
const clearfilter = document.getElementById("clearfilter");

// Function to update the clear icon display based on input value
function updateClearIcon() {
    clearfilter.style.display = filterinput.value ? "block" : "none";
}

// Check the input value on page load
document.addEventListener("DOMContentLoaded", function() {
    updateClearIcon();
});

filterinput.addEventListener("input", function() {
    updateClearIcon();
    let filterText = this.value.toLowerCase();
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(filterText));
    if (filteredBlogs.length === 0) {
        displayNoResults();
    } else {
        displayBlogs(filteredBlogs);
    }
});

clearfilter.addEventListener("click", function() {
    filterinput.value = "";
    updateClearIcon();
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    displayBlogs(blogs);
});