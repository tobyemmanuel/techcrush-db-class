// import cron from 'node-cron';
// import { sendSMS } from '../services/smsService.js';



//    export function sendSMSToUser(scheduleTimer) {
//         cron.schedule(scheduleTimer, () => {
//           const books = await Book.findAndCountAll();

//           for (const book of books.rows) {
//               const message = `New book available: ${book.title} by ${book.author}. Check it out!`;
//               sendSMS(book.userPhoneNumber, message)
//                 .then(response => console.log(response))
//                 .catch(error => console.error(`Failed to send SMS: ${error.message}`));
//           }
//         })
//     }