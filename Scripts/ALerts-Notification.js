 document.querySelectorAll('.mark-read-btn').forEach(button => {
      button.addEventListener('click', function() {
        const notification = this.closest('.notification-item');
        notification.classList.toggle('unread');
        
        if (notification.classList.contains('unread')) {
          this.textContent = 'Mark as read';
        } else {
          this.textContent = 'Mark as unread';
        }
      });
    });

    //Tab switching functionality
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // Here you would typically load different notification types
      });
    });
 