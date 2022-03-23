import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Shimanshu",
    email: "shimu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "raj",
    email: "raj@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
