const del = require("del")

//Конфигурация
const path = require('../config/path.js')

//Удаление деректории
const clear = () => {
    return del(path.root)
}

module.exports = clear