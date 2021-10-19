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
   
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('BİR HATA OLUŞTU')
    });
    
    return promise1;
};

async function showLists() {
    try {
        await addPost({ title: 'POST 4', detail: 'POST DETAY 4'});
        console.log('NEW POST LIST');
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showLists();