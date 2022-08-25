const {src, dest} = require("gulp")

//Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const autoPrefixer = require("gulp-autoprefixer")
const csso = require("gulp-csso")
const rename = require("gulp-rename")
const size = require("gulp-size")
const shorthand = require("gulp-shorthand")
const groupCssMediaQueries = require("gulp-group-css-media-queries")
const sass = require("gulp-sass")(require("sass"))
const webpCss = require("gulp-webp-css")
const gulpIf = require("gulp-if")




// Обработка SCSS
const scss = () => {
    return src(path.scss.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SCSS",
                message: error.message
            }))
        }))
        .pipe(sass())
        .pipe(gulpIf(app.isProd, webpCss()))
        .pipe(gulpIf(app.isProd, autoPrefixer()))
        .pipe(gulpIf(app.isProd, shorthand()))
        .pipe(groupCssMediaQueries())
        .pipe(gulpIf(app.isDev,size({title: "style.css"})))
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulpIf(app.isProd, csso()))
        .pipe(gulpIf(app.isDev, size({title: "style.min.css"})))
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))

}

module.exports = scss