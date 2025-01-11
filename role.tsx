function login(): void {
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const role: string = (document.getElementById('role') as HTMLSelectElement).value;
    const message: HTMLElement = document.getElementById('message') as HTMLElement;
    const adminSection: HTMLElement = document.getElementById('admin-section') as HTMLElement;
    const userSection: HTMLElement = document.getElementById('user-section') as HTMLElement;

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
