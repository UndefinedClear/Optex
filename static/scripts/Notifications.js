class Notifications {
    constructor(success_icon, failed_icon, warning_icon) {
        this.queue = [];  // Holds the queued notifications
        this.isShowing = false;  // Tracks if a notification is already being shown
        
        this.success_icon = success_icon;  // Holds the success icon
        this.failed_icon = failed_icon;  // Holds the failed icon
        this.warning_icon = warning_icon;  // Holds the warning icon

        // Create a new notification element
        let nc = document.createElement('div');
        nc.id = 'notification-container';
        document.body.appendChild(nc);
    }

    // Method to show notification
    show(text, type = 'success') {
        // Create a new notification element
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.classList.add(type);

        const notificationText = document.createElement('span');
        notificationText.textContent = text;

        const notificationIcon = document.createElement('span');
        notificationIcon.classList.add('icon');

        // Set the icon for each notification type
        if (type === 'success') {
            notificationIcon.innerHTML = this.success_icon;  // Success icon
        } else if (type === 'failed') {
            notificationIcon.innerHTML = this.failed_icon;  // Failed icon
        } else if (type === 'warning') {
            notificationIcon.innerHTML = this.warning_icon;  // Warning icon
        }

        // Append the icon and text to the notification
        notification.appendChild(notificationIcon);
        notification.appendChild(notificationText);

        // Add the notification to the container
        document.getElementById('notification-container').appendChild(notification);

        // Queue the notification
        this.queue.push(notification);

        // If no notification is currently showing, start the sequence
        if (!this.isShowing) {
            this.showNext();
        }
    }

    // Method to show the next notification in the queue
    showNext() {
        if (this.queue.length === 0) {
            this.isShowing = false;
            return;
        }

        // Get the next notification in the queue
        const nextNotification = this.queue.shift();
        nextNotification.classList.add('show');

        // Mark that a notification is currently being shown
        this.isShowing = true;

        // Hide the notification after 4 seconds
        setTimeout(() => {
            nextNotification.classList.remove('show');
            // After the notification hides, show the next one in the queue
            setTimeout(() => {
                nextNotification.remove();  // Remove it from the DOM
                this.showNext();  // Show the next notification
            }, 500);  // Delay for the hide animation to finish
        }, 4000);  // The notification stays for 4 seconds
    }
}