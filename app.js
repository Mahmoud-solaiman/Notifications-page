//Model
const markAll = document.getElementById('mark-all');
const notificationsCounter = document.getElementById('notifications-counter');
const unreadMessages = document.querySelectorAll('.unread-message');
const unreadStatuses = document.querySelectorAll('.fa-circle');

//view 
function markAsRead(){
    notificationsCounter.textContent = '0';
    unreadMessages.forEach((unreadMessage)=>{
        unreadMessage.classList.replace('unread-message','read-message');
    });
    unreadStatuses.forEach((unreadStatus)=>{
        unreadStatus.remove();
    });
}

//Controller

markAll.addEventListener('click', markAsRead);