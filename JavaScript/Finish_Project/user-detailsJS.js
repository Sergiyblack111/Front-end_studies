let url = new URL(location.href); // url який належить поточній сторінці (типу щоб доступитись до інфи)
let user = JSON.parse(url.searchParams.get('data')); // з url дістаємо data (data = інфа про конкретного юзера,
// присвоєна на строніці index.html і передана в url поточної сторінки), і парсуємо (перетворюємо в JS об'єкт ),
// для можливості подальшої роботи

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];

let postsDetailButton = document.getElementsByClassName('postsDetailButton')[0];
userDetailsContainer.innerText = `${JSON.stringify(user)}`;

postsDetailButton.innerText = 'show posts of user';
postsDetailButton.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postItem.title;
                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details';
                postDetailsButton.onclick = function () {
                    location.href = `./postDetails.html?data=${JSON.stringify(postItem)}`; // при натисканні на баттон
                    // за допомогою location.href = `./postDetails.html?data=${JSON.stringify(postItem)}` - заміняємо
                    // поточну адресу url і переходимо по новій адресі на нову сторінку PostDetails.html
                };

                postContainer.appendChild(postDetailsButton);
                postsContainer.appendChild(postContainer);
            }
        });
};
