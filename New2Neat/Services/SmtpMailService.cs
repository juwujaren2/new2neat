using New2Neat.Model;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace New2Neat.Services
{
    public class SmtpMailService : IMailService
    {
        public async Task Send(Email email)
        {
            string messageBody = CreateMessageBody(email);

            email.To = "juwujaren@gmail.com";
            using (var client = new SmtpClient())
            {
                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.EnableSsl = true;
                client.UseDefaultCredentials = true;
                client.Credentials = new NetworkCredential("testsmtpjoup@gmail.com", "t3st1ngs");
                client.DeliveryMethod = SmtpDeliveryMethod.Network;

                var emailMessage = new MailMessage
                {
                    Body = messageBody,
                    Subject = string.Format("New Contact Message from {0} {1} - {2}", email.FirstName, email.LastName, email.Subject),
                    From = new MailAddress(email.EmailAddress),
                    IsBodyHtml = true
                };
                emailMessage.To.Add(email.To);
                await client.SendMailAsync(emailMessage);
            }
        }

        private static string CreateMessageBody(Email email)
        {
            var messageBody = Email.EmailTemplate
                .Replace("{{FirstName}}", email.FirstName)
                .Replace("{{LastName}}", email.LastName)
                .Replace("{{Subject}}", email.Subject)
                .Replace("{{EmailAddress}}", email.EmailAddress)
                .Replace("{{PhoneNumber}}", email.PhoneNumber)
                .Replace("{{Message}}", email.Body);
            return messageBody;
        }
    }
}
