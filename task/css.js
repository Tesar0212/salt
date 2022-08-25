const {src, dest} = require("gulp")

//Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const concat = require("gulp-concat")
const cssImport = require("gulp-cssimport")
const autoPrefixer = require("gulp-autoprefixer")
const csso = require("gulp-csso")
const rename = require("gulp-rename")
const size = require("gulp-size")
const shorthand = require("gulp-shorthand")
const groupCssMediaQueries = require("gulp-group-css-media-queries")
const webpCss = require("gulp-webp-css")
const gulpIf = require("gulp-if");


// Обработка CSS
const css = () => {
    return src(path.css.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "CSS",
                message: error.message
            }))
        }))
        .pipe(concat("style.css"))
        .pipe(cssImport())
        .pipe(gulpIf(app.isProd, webpCss()))
        .pipe(gulpIf(app.isProd, autoPrefixer()))
        .pipe(gulpIf(app.isProd, shorthand()))
        .pipe(groupCssMediaQueries())
        .pipe(size({title: "style.css"}))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(size({title: "style.min.css"}))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))

}

module.exports = css