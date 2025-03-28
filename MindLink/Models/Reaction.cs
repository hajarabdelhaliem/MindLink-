using System;
using System.Collections.Generic;

namespace MindLink.Models
{
    public class Reaction
    {
        private int _reactionId;
        private int _userId;
        private int _postId;
        private string _type;

        private static readonly HashSet<string> ValidReactions = new HashSet<string>
        { "Like", "Love", "Angry", "Sad", "Haha", "Wow" };

        public int ReactionId
        {
            get { return _reactionId; }
            set
            {
                if (value <= 0)
                    throw new ArgumentException("ReactionId must be greater than 0.");
                _reactionId = value;
            }
        }

        public int UserId
        {
            get { return _userId; }
            set
            {
                if (value <= 0)
                    throw new ArgumentException("UserId must be greater than 0.");
                _userId = value;
            }
        }

        public int PostId
        {
            get { return _postId; }
            set
            {
                if (value <= 0)
                    throw new ArgumentException("PostId must be greater than 0.");
                _postId = value;
            }
        }

        public string Type
        {
            get { return _type; }
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new ArgumentException("Reaction type cannot be empty.");

                if (!ValidReactions.Contains(value))
                    throw new ArgumentException($"Invalid reaction type: {value}. Allowed types: {string.Join(", ", ValidReactions)}");

                _type = value;
            }
        }

        // Navigation Properties
        private User _user;
        public User User
        {
            get { return _user; }
            set
            {
                if (value == null)
                    throw new ArgumentNullException(nameof(User), "User cannot be null.");
                _user = value;
            }
        }

        private Post _post;
        public Post Post
        {
            get { return _post; }
            set
            {
                if (value == null)
                    throw new ArgumentNullException(nameof(Post), "Post cannot be null.");
                _post = value;
            }
        }
    }
}
