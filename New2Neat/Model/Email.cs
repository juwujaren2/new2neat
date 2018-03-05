using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace New2Neat.Model
{
    public class Email
    {
        public const string EmailTemplate = @"
            <html lang=""en"" xmlns=""http://www.w3.org/1999/xhtml"">
            <head>
                <meta charset=""utf-8"" />
                <title></title>
                <style media=""all"" type=""text/css"">
    	            body{font-family:""Helvetica Neue"",Helvetica,Arial,sans-serif;font-size:14px;color:#333;background-color:#fff;}    	            
                </style>
            </head>
            <body>
            <p style=""margin-bottom: .5em; padding: .5em 1em; background-color: #6ed790; border: 1px solid #47c871; color: #fdfdfd;"">
	            <strong><em>New Contact Message from {{FirstName}} {{LastName}}
            </p>
            <div class=""message-body"">
	            <h3>Dear New2Neat Administrator,</h3>
                <p>Below are the details of the new message.</p><br />
                <p>Name: {{FirstName}} {{LastName}}</p>
                <p>Email: {{EmailAddress}}</p>
                <p>Phone: {{PhoneNumber}}</p>
                <p>Subject: {{Subject}}</p>
                <p>Message: {{Message}}</p>

	            <br/>
	            <br/>
	            <hr>
	            <p class=""text-muted"">This email was delivered via the New2Neat Website</p>
            </div>
            </body>
            </html>
            ";

        public string To { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }

        public string Subject { get; set; }
        public string Body { get; set; }
        public bool IsHtml { get; set; }
    }
}
