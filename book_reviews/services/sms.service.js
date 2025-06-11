// import { config } from "dotenv";
// const client = require("twilio")(accountSid, authToken);
// // var request = require('request');
// import request from "request";
// import { protectedAction } from "../middleware/protected";
// config();
// export function sendSMS(phoneNumber, message) {
//   // This function would contain the logic to send an SMS.
//   // For example, using a service like Twilio or Nexmo.
//   console.log(`Sending SMS to ${phoneNumber}: ${message}`);
//   //   const accountSid = process.env.TWILIO_ACCOUNT_SID;
//   //   const authToken = process.env.TWILIO_AUTH_TOKEN;
//   //   client.messages

//   //     .create({
//   //       body: message,

//   //       messagingServiceSid: "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

//   //       to: phoneNumber,
//   //     })

//   //     .then((message) => console.log(message.sid));

//   const data = {
//     to: phoneNumber,
//     from: "TrackWise",
//     sms: message,
//     type: "plain",
//     api_key: process.env.TERMII_API_KEY,
//     channel: "generic",
//   };
//   const options = {
//     method: "POST",
//     url: process.env.TERMI_API_URL || "https://api.termii.com/api/sms/send",
//     headers: {
//       "Content-Type": ["application/json", "application/json"],
//     },
//     body: JSON.stringify(data),
//   };
//   request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
//   });

//   //   // Simulate sending SMS
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`SMS sent to ${phoneNumber}`);
//     }, 1000);
//   });
// }
