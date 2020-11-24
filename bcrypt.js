const bcrypt = require('bcryptjs');

async function generatePW(password) {
  console.log(await bcrypt.hash(password, 10));
}

async function checkPassword(password, hashedPW) {
  const isPassword = await bcrypt.compare(password, hashedPW);
  if (isPassword) {
    console.log('user verified');
  } else {
    console.log('invalid login credentials');
  }
}

// generatePW('password');

checkPassword('password', '$2a$10$yCmOFg3NSBG2jl16LHxYCupYaSyo1qzMGUl/yMseo2drw/5Aaknt2');
