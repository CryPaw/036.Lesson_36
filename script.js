const inputid = document.getElementById("inputid");
const submitid = document.getElementById("submitid");

submitid.addEventListener('click', (event) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${inputid.value}`)

    .then((resp) => resp.json())
    
    .then(function(data) {
        if (inputid.value > 100) {
            return
        }
        let posts = data;
        console.log(posts);
        let li = document.createElement('li');
        let span = document.createElement('span');
        let span2 = document.createElement('span');
        let btn = document.createElement('button');
        btn.textContent = ("button")
        let postul = document.getElementById("posts");
        span.innerHTML = `${JSON.stringify(posts.id)}`;
        span2.innerHTML = `${JSON.stringify(posts.title)}`;
        btn.addEventListener('click', (event) => {
        li.appendChild(span2)
    })
        li.appendChild(span)
        li.appendChild(btn)
        postul.appendChild(li);
    })

    .catch(function(error) {
        console.log(error);
      });
    
});
