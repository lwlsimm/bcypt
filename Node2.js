const bcrypt = require("bcryptjs")

const passwordEnteredByUser = "mypass123"
//const hash = "YOUR_HASH_STRING"
const hash = `$2a$10$zPY/MLqRE7r2R3eds11REu84p8A5qQJ/F8XJrtU.LZYUVeL/elo8C`


bcrypt.compare(passwordEnteredByUser, hash, function(err, isMatch) {
  if (err) {
    throw err
  } else if (!isMatch) {
    console.log("Password doesn't match!")
  } else {
    console.log("Password matches!")
  }
})