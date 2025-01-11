function login() {
            const username = document.getElementById('username').value;
            const role = document.getElementById('role').value;
            const message = document.getElementById('message');
            const adminSection = document.getElementById('admin-section');
            const userSection = document.getElementById('user-section');

            if (username === '') {
                message.textContent = 'Username is required!';
                message.style.color = 'red';
                return;
            }

            message.textContent = `Welcome, ${username}!`;
            message.style.color = 'green';

            if (role === 'admin') {
                adminSection.classList.remove('hidden');
                userSection.classList.add('hidden');
            } else {
                userSection.classList.remove('hidden');
                adminSection.classList.add('hidden');
            }
        }
