using System;

namespace MindLink.Models
{
    public class Report
    {
        private int _reportId;
        private int _userId;
        private string _reason;
        private User _user;

        public int ReportId
        {
            get => _reportId;
            set => _reportId = value;
        }

        public int UserId
        {
            get => _userId;
            set => _userId = value;
        }

        public string Reason
        {
            get => _reason;
            set => _reason = !string.IsNullOrWhiteSpace(value) ? value : throw new ArgumentException("Reason cannot be empty.");
        }

        public User User
        {
            get => _user;
            set => _user = value ?? throw new ArgumentNullException(nameof(value), "User cannot be null.");
        }
    }

    public class Moderation
    {
        private int _moderationId;
        private int _reportId;
        private int _therapistId;
        private string _actionTaken;
        private DateTime _timeSetup;
        private Report _report;
        private Therapist _therapist;

        public int ModerationId
        {
            get => _moderationId;
            set => _moderationId = value;
        }

        public int ReportId
        {
            get => _reportId;
            set => _reportId = value;
        }

        public int TherapistId
        {
            get => _therapistId;
            set => _therapistId = value;
        }

        public string ActionTaken
        {
            get => _actionTaken;
            set => _actionTaken = !string.IsNullOrWhiteSpace(value)
                ? value
                : throw new ArgumentException("ActionTaken cannot be empty.");
        }

        public DateTime TimeSetup
        {
            get => _timeSetup;
            set => _timeSetup = value;
        }

        public Report Report
        {
            get => _report;
            set => _report = value ?? throw new ArgumentNullException(nameof(value), "Report cannot be null.");
        }

        public Therapist Therapist
        {
            get => _therapist;
            set => _therapist = value ?? throw new ArgumentNullException(nameof(value), "Therapist cannot be null.");
        }
    }
}
