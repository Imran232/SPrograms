const users = [
    { id: 1, name: "User1", lastActivity: null },
    { id: 2, name: "User2", lastActivity: null }
];

const posts = [];

function createPost(userId, postTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ userId, title: postTitle });
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === userId);
            if (user) {
                user.lastActivity = new Date().toISOString();
                resolve();
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}

function displayPostsAndUserActivity(userId) {
    const user = users.find(user => user.id === userId);
    console.log("Posts created:");
    console.log(posts);
    console.log("Last activity time of user:", user.lastActivity);
}

createPost(1, "Post1 by User1")
    .then(() => updateLastUserActivityTime(1))
    .then(() => createPost(1, "Post2 by User1"))
    .then(() => updateLastUserActivityTime(1))
    .then(() => createPost(2, "Post1 by User2"))
    .then(() => updateLastUserActivityTime(2))
    .then(() => createPost(2, "Post2 by User2"))
    .then(() => updateLastUserActivityTime(2))
    .then(() => {
        displayPostsAndUserActivity(1);
        return deleteLastPost();
    })
    .then(() => {
        console.log("Deleted the last post");
        displayPostsAndUserActivity(2);
    })
    .catch(error => console.error(error));
