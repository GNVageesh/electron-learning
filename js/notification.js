const { Notification } = require("electron")

var notiBtn = document.getElementById('btn1')

function showNotification() {
    const noti = {
        title: "Basic Notification",
        body: "Notification sent now"
    }
    new Notification(noti).show()
}

notiBtn.addEventListener('click', showNotification)