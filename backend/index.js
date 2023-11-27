import express from "express";
import cors from "cors";
import twilio from "twilio";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Use bodyParser to parse JSON data

const accountSid = 'AC4d41ba07c86e361e075977a5f686b26c';
const authToken = 'e394a170b0b85290c130afc25206547b';

const client = twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
    const phoneNumber = "+916376787408";
    const { address , name , mobile} = req.body; 

    client.messages.create({
        body:  `this message is from ${name} phone no:${mobile} and address:${address}`,
        from: '+12295955509',
        to: phoneNumber
    })
    .then(message => {
        console.log('SMS sent with SID: ' + message.sid);
   
        res.send('SMS sent successfully',req.body);
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).send('Error sending SMS');
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
