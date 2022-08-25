const isProd = process.argv.includes("--production")
const isDev = !isProd

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlMin: {
        collapseWhitespace: isProd
    },
    pug: {
        pretty: isDev
    },
    webpack: {
        mode : isProd ? "production" : "development"
    },
    imageMin: {
        verbose: true
    },
    fonter: {
      formats : ["ttf", "woff", "eot", "svg"]
    }
}