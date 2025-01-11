function sendNotification() {
    const notifications = document.getElementById('notifications');

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `New notification at ${new Date().toLocaleTimeString()}`;

    notifications.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeout 0.5s';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

