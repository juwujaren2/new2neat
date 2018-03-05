using New2Neat.Model;
using System.Threading.Tasks;

namespace New2Neat.Services
{
    public interface IMailService
    {
        Task Send(Email email);
    }
}
