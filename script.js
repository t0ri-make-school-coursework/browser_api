var notificationButton = document.getElementById('notification-button');

notificationButton.addEventListener('click', function() {
    let title = document.getElementById('title-input').value;
    let body = document.getElementById('body-input').value;

    if (window.Notification && Notification.permission !== "denied") {
    	Notification.requestPermission((status) => {
    		var note = new Notification(title, {
    			body: body,
                requireInteraction: true,
                silent: true,
    		});
    	})
    }
})
