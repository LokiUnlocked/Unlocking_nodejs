const crypto = require("node:crypto")

// const hashedData = crypto.createHash("sha256").update("Hello world").digest("hex")
// console.log(hashedData);

// const salt = crypto.randomBytes(16).toString("hex")
// console.log(salt);
// const hashedPassword = crypto.createHmac("sha256", salt).update("Hello world").digest("hex")
// console.log(hashedPassword);

const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encrypt () {
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv)
    return cipher.update("Hello world", "utf-8", "hex") + cipher.final("hex") 
}

const hash = encrypt()

console.log(encrypt());

function decrypt (hash) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv)
    return decipher.update(hash, "hex", "utf-8") + decipher.final("utf-8")
}

console.log(decrypt(hash));



