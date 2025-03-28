using System;

namespace MindLink.Models
{
    public class Notification
    {
        private int _notificationId;
        private int _userId;
        private string _type;
        private DateTime _date;

        public int NotificationId
        {
            get => _notificationId;
            set => _notificationId = value > 0 ? value : throw new ArgumentException("NotificationId must be greater than 0");
        }

        public int UserId
        {
            get => _userId;
            set => _userId = value > 0 ? value : throw new ArgumentException("UserId must be greater than 0");
        }

        public string Type
        {
            get => _type;
            set => _type = !string.IsNullOrWhiteSpace(value) ? value : throw new ArgumentException("Type cannot be empty");
        }

        public DateTime Date
        {
            get => _date;
            set => _date = value != default ? value : throw new ArgumentException("Date cannot be default");
        }

        // Navigation Property
        private User _user;
        public User User
        {
            get => _user;
            set => _user = value ?? throw new ArgumentNullException(nameof(value), "User cannot be null.");
        }
    }
}
