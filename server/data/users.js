import bcrypt from "bcryptjs";

const users = [
  {
    name: "Eldad Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Buyer User",
    email: "buyer@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Seller User",
    email: "seller@example.com",
    password: bcrypt.hashSync("9876", 10),
  },
];

export default users;
