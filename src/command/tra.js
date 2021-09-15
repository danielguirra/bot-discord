const translate = require("@vitalets/google-translate-api")
// Func for translate string
let tra = async (text) => {//Tradutor para português
    let resut
    resut = await translate(`${text}`, { to: `pt` }).then(res => {
        return res.text
    })
    return resut
}

module.exports = { tra }