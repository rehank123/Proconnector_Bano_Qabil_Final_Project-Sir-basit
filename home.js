// JavaScript for Post Section
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const postButton = document.getElementById('post-button');
    const postInput = document.getElementById('post-input');
    const postContainer = document.getElementById('post-container');

    // Function to create a new post
    const createPost = (content) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Create the post content
        const postContent = `
            <div class="post-header">
                <img src="images/user-1.png" alt="Profile Image" class="post-profile-img">
                <h4>Your Name</h4>
                <small>Just Now</small>
            </div>
            <p>${content}</p>
            <div class="post-footer">
                <button class="like-btn">Like</button>
                <button class="comment-btn">Comment</button>
            </div>
        `;

        postDiv.innerHTML = postContent;
        postContainer.prepend(postDiv); // Add new post to the top of the list
    };

    // Event listener for posting
    postButton.addEventListener('click', () => {
        const content = postInput.value.trim();

        if (content) {
            createPost(content);
            postInput.value = ''; // Clear the input after posting
        } else {
            alert('Please enter something to post!');
        }
    });
});
