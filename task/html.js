const {src, dest} = require("gulp")

//Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const fileInclude = require("gulp-file-include")
const htmlMin = require("gulp-htmlmin")
const htmlSize = require("gulp-size")
const webpHtml = require("gulp-webp-html")
const gulpIf = require("gulp-if");

// Обработка HTML
const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(gulpIf(app.isProd, webpHtml()))
        .pipe(gulpIf(app.isProd, htmlSize({title: "До сжатия"})))
        .pipe(gulpIf(app.isProd, htmlMin(app.htmlMin)))
        .pipe(gulpIf(app.isProd, htmlSize({title: "После сжатия"})))
        .pipe(dest(path.html.dest))
}

module.exports = html