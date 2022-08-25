const {src, dest} = require("gulp")

//Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const imageMin = require("gulp-imagemin")
const newer = require("gulp-newer")
const webp = require("gulp-webp")
const gulpIf = require("gulp-if")

// Обработка Img
const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Img",
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(app.isProd, webp()))
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(app.isProd, imageMin(app.imageMin)))
        .pipe(dest(path.img.dest))

}

module.exports = img
