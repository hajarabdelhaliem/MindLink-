using System;
using System.Collections.Generic;

namespace MindLink.Models
{
    public class Post
    {
        private int _postId;
        private int _userId;
        private string _content;
        private DateTime _createdAt;
        private User _user;
        private List<Comment> _comments = new List<Comment>();
        private List<Reaction> _reactions = new List<Reaction>();

        public int PostId
        {
            get => _postId;
            set => _postId = value;
        }

        public int UserId
        {
            get => _userId;
            set => _userId = value;
        }

        public string Content
        {
            get => _content;
            set => _content = !string.IsNullOrWhiteSpace(value) ? value : throw new ArgumentException("Content cannot be empty.");
        }

        public DateTime CreatedAt
        {
            get => _createdAt;
            set => _createdAt = value;
        }

        public User User
        {
            get => _user;
            set => _user = value ?? throw new ArgumentNullException(nameof(value), "User cannot be null.");
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
    }
}
