const posts = [
  {
    title: "Post One",
    body: "This is post one",
    createdAt: new Date().getTime(),
  },
  {
    title: "Post Two",
    body: "This is post two",
    createdAt: new Date().getTime(),
  },
];

let intervalId =0;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title} - created ${
        Math.floor((new Date().getTime() - post.createdAt) / 1000)
      } seconds ago</li>`;
    });
    // console.log('timer running id = ',intervalId);
    document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime()});
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);

function create4thPost(newpost, callback2) {
  setTimeout(() => {
    posts.push({ ...newpost, createdAt: new Date().getTime()});
    callback2();
  }, 4000);
}

create4thPost({ title: "Post Four", body: "This is post four" }, getPosts);

var timer;
var count = 0;
function lastEditInSecondsAgo() {
    count = 0;
    clearInterval(timer);
    timer = setInterval(() => {
    count++;
    console.log(count);
    },1000);
}
lastEditInSecondsAgo();