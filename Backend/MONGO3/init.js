const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/FakeWhatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    message: "Send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "neha",
    message: "I'll send them by evening",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "ankita",
    message: "Are you coming to the hackathon?",
    created_at: new Date(),
  },
  {
    from: "ankita",
    to: "rahul",
    message: "Yes! Let's meet at the registration desk",
    created_at: new Date(),
  },
  {
    from: "harshit",
    to: "neha",
    message: "Can you share the assignment PDF?",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "harshit",
    message: "Sure, I'll share it in 5 mins",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "rahul",
    message: "Do you have notes for DSA?",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "priya",
    message: "Yes, I'll send them by mail",
    created_at: new Date(),
  },
  {
    from: "ankita",
    to: "harshit",
    message: "How's the project coming along?",
    created_at: new Date(),
  },
  {
    from: "harshit",
    to: "ankita",
    message: "It's almost done! Just adding final touches",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
