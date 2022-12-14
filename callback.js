const posts = [
    {
      title: "Post One",
      body: "This is post one",
    },
    {
      title: "Post Two",
      body: "This is post two",
    },
  ];
  
  function getPosts() {
      setTimeout(() => {
          let output = "";
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
      }, 1000);
  }
  
  function createPost(post, callback) {
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 2000);
  }
  createPost({ title: "Post Three", body: "This is post three" }, getPosts);
  
  function create4thPost(newpost, callback2) {
    setTimeout(() => {
      posts.push(newpost);
      callback2();
    }, 3000);
  }
  create4thPost({ title: "Post Four", body: "This is post four" }, createPost);