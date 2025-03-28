namespace MindLink.Models
{
    public class Therapist : User
    {
        private string _specialization;
        private string _licenseNumber;

        public string Specialization
        {
            get => _specialization;
            set => _specialization = !string.IsNullOrWhiteSpace(value)
                ? value
                : throw new ArgumentException("Specialization cannot be empty.");
        }

        public string LicenseNumber
        {
            get => _licenseNumber;
            set => _licenseNumber = !string.IsNullOrWhiteSpace(value)
                ? value
                : throw new ArgumentException("License number cannot be empty.");
        }
    }

    public class Patient : User
    {
        private int _age;
        private string _mentalCondition;

        public int Age
        {
            get => _age;
            set => _age = value > 0
                ? value
                : throw new ArgumentException("Age must be greater than zero.");
        }

        public string MentalCondition
        {
            get => _mentalCondition;
            set => _mentalCondition = !string.IsNullOrWhiteSpace(value)
                ? value
                : throw new ArgumentException("Mental condition cannot be empty.");
        }
    }
}
