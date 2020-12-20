let pj_folder = "dist";
let src_folder = "#src";

let path = {
    build: {
        html: pj_folder + "/",
        css: pj_folder + "/css/",
        js: pj_folder + "/js/",
        img: pj_folder + "/img/",
        fonts: pj_folder + "/fonts/",
    },
    src: {
        html: src_folder + "/*.html",
        css: src_folder + "/scss/style.scss",
        js: src_folder + "/js/script.js",
        img: src_folder + "/img/**/*.{png,jpg,svg,gif,ico}",
        fonts: src_folder + "/fonts/*.ttf",
    },
    watch: {
        html: src_folder + "/**/*.html",
        css: src_folder + "/scss/**/*.scss",
        js: src_folder + "/js/**/*.js",
        img: src_folder + "/img/**/*.{png,jpg,svg,gif,ico}",
    },
    clean: "./" + pj_folder + "/"
}

let {src,dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create();

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + pj_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

let build = gulp.series(html);
let watch = gulp.parallel(build, browserSync);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;