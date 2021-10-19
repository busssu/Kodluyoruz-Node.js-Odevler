const posts = [
    {title: 'POST 1', detail: 'POST DETAY 1'},
    {title: 'POST 2', detail: 'POST DETAY 2'},
    {title: 'POST 3', detail: 'POST DETAY 3'},
];

const listPosts = () => {
    posts.map ((post) => {
        console.log(post.title);
    });
};

const addPost = (newPost, callback) => {
    posts.push(newPost);
    callback();
};

addPost({title: 'POST 4', detail: 'POST DETAY 4'}, listPosts);