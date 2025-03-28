using System;
using System.Collections.Generic;

namespace MindLink.Models
{
    public class User
    {
        private int _userId;
        private string _name;
        private string _email;
        private string _password;
        private string _role;
        private string _profilePic;
        private string _bio;
        private DateTime _joinDate;
        private List<Post> _posts = new List<Post>();
        private List<Comment> _comments = new List<Comment>();
        private List<Reaction> _reactions = new List<Reaction>();
        private List<Notification> _notifications = new List<Notification>();
        private List<Report> _reports = new List<Report>();

        public int UserId
        {
            get => _userId;
            set => _userId = value;
        }

        public string Name
        {
            get => _name;
            set => _name = !string.IsNullOrWhiteSpace(value) ? value : throw new ArgumentException("Name cannot be empty.");
        }

        public string Email
        {
            get => _email;
            set => _email = !string.IsNullOrWhiteSpace(value) ? value : throw new ArgumentException("Email cannot be empty.");
        }

        public string Password
        {
            get => _password;
            set => _password = value ?? throw new ArgumentNullException(nameof(value), "Password cannot be null.");
        }

        public string Role
        {
            get => _role;
            set => _role = value ?? "User"; 
        }

        public string ProfilePic
        {
            get => _profilePic;
            set => _profilePic = value;
        }

        public string Bio
        {
            get => _bio;
            set => _bio = value ?? "No bio provided.";
        }

        public DateTime JoinDate
        {
            get => _joinDate;
            set => _joinDate = value;
        }

        public List<Post> Posts
        {
            get => _posts;
            set => _posts = value ?? new List<Post>();
        }

        public List<Comment> Comments
        {
            get => _comments;
            set => _comments = value ?? new List<Comment>();
        }

        public List<Reaction> Reactions
        {
            get => _reactions;
            set => _reactions = value ?? new List<Reaction>();
        }

        public List<Notification> Notifications
        {
            get => _notifications;
            set => _notifications = value ?? new List<Notification>();
        }

        public List<Report> Reports
        {
            get => _reports;
            set => _reports = value ?? new List<Report>();
        }
    }
}
