using System;

namespace MindLink.Models
{
    public class Comment
    {
        private int _commentId;
        private int _userId;
        private int _postId;
        private string _content;
        private DateTime _date;
        private User _user;
        private Post _post;

        public int CommentId
        {
            get => _commentId;
            set => _commentId = value;
        }

        public int UserId
        {
            get => _userId;
            set => _userId = value;
        }

        public int PostId
        {
            get => _postId;
            set => _postId = value;
        }

        public string Content
        {
            get => _content;
            set => _content = !string.IsNullOrWhiteSpace(value)
                ? value
                : throw new ArgumentException("Content cannot be empty.");
        }

        public DateTime Date
        {
            get => _date;
            set => _date = value;
        }

        public User User
        {
            get => _user;
            set => _user = value ?? throw new ArgumentNullException(nameof(value), "User cannot be null.");
        }

        public Post Post
        {
            get => _post;
            set => _post = value ?? throw new ArgumentNullException(nameof(value), "Post cannot be null.");
        }
    }
}
