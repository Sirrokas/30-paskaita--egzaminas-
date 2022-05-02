/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const promise = fetch('https://api.github.com/users', {
	method: 'GET',
});

document.getElementById('btn').addEventListener('click', () => {
    promise
	.then((resp) => resp.json())
	.then((data) => {
		data.forEach((user) => {
            document.getElementById('message').textContent = '';
			const outputEl = document.getElementById('output');
            const loginEl = document.createElement('div');
            const avatarEl = document.createElement('div');
            loginEl.append(user.login);
            avatarEl.append(user.avatar_url);
			outputEl.append(loginEl);
			outputEl.append(avatarEl);
            loginEl.style.margin = '20px 10px 20px 10px';
            loginEl.style.fontWeight = 'bold';
            avatarEl.style.margin = '20px 10px 20px 10px';
		});
	});
});





