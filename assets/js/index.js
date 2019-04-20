const URL = "https://jsonplaceholder.typicode.com/";
let storage = [];
const form = document.querySelector(".input-form");
//adding API data to the empty storage
function getContent(url) {
	fetch(`${url}posts`).then(response => response.json()).then(json => {
		data = json;
		fetch(`${url}comments`).then(response => response.json()).then(jsonRes => {
			data.forEach(item => {
				item.comments = [];
			});
			for (let i = 0, len = jsonRes.length; i < len; i++) {
				for (let j = 0, length = data.length; j < length; j++) {
					if (jsonRes[i].postId === data[j].id) {
						data[j].comments.push(jsonRes[i]);
					}
				}
			}
			fetch(`${url}users`).then(response => response.json()).then(jsonResponse => {
				for (let k = 0, len = jsonResponse.length; k < len; k++) {
					for (let l = 0, length = data.length; l < length; l++) {
						if (jsonResponse[k].id === data[l].userId) {
							data[l].username = jsonResponse[k].username;
						}
					}
				}
				pushToStorageAndRedraw(data);
			});
		});
	});
}
getContent(URL);
//redrawing the current storage
function pushToStorageAndRedraw(data, isToRedraw) {
	console.log(data);
	if (isToRedraw) storage = [];
	storage = [...storage].concat(data);
	let reversed = storage.slice().reverse();
	draw(reversed);
}
//creating new post
function addNewPost() {
	const newPostHeading = document.querySelector(".new-post-title");
	const newPostBody = document.querySelector(".new-post-body");
	const newPostUsername = document.querySelector(".new-post-username");
	let newUserId = storage[storage.length - 1].userId + 1;
	let uniquePostId = storage[storage.length - 1].id + 1;
	const newPost = {
		title: newPostHeading.value,
		body: newPostBody.value,
		username: newPostUsername.value,
		userId: newUserId,
		id: uniquePostId
	};
	if (newPostHeading.value && newPostBody.value && newPostUsername.value) {
		pushToStorageAndRedraw(newPost);
		newPostHeading.value = "";
		newPostBody.value = "";
		newPostUsername.value = "";
	} else {
		alert("Please fill all the fields");
	}
}
//adding a new post
form.addEventListener("submit", e => {
	e.preventDefault();
	addNewPost();
});
//rendering current storage
function draw(data) {
	const root = document.querySelector("#root");
	root.innerHTML = "";
	data.forEach(item => {
		let postCard = document.createElement("div");
		postCard.classList.add("post-card");
		root.appendChild(postCard);
		let postInfo = document.createElement("div");
		postInfo.classList.add("post-card");
		root.appendChild(postCard);
		let postTitle = document.createElement("h2");
		postTitle.innerHTML = item.title;
		postTitle.classList.add("post-title");
		postCard.appendChild(postTitle);
		let postBody = document.createElement("p");
		postBody.innerHTML = item.body;
		postBody.classList.add("post-content");
		postCard.appendChild(postBody);
		let postUsername = document.createElement("p");
		postUsername.innerHTML = item.username;
		postUsername.classList.add("post-user");
		postCard.appendChild(postUsername);
	});
}