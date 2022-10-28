let usersContainer = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(ollUsers => ollUsers.json())
    .then(ollUsers => {

        for (const user of ollUsers) {

            let OneUserContainer = document.createElement('div');

            OneUserContainer.classList.add('user');

            let linkToUserDetailPage = document.createElement('a');

            linkToUserDetailPage.innerText = `${user.id} - ${user.name}`;
            linkToUserDetailPage.href = `user-details.html?data=${JSON.stringify(user)}`; // після ? - квері параметри

            OneUserContainer.appendChild(linkToUserDetailPage);
            usersContainer.appendChild(OneUserContainer);
        }
    });

let user