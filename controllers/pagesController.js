const fs = require("fs")

exports.getIndexPage = (erq, res) => {
    res.render("index.ejs")
}

exports.getListPage = (erq, res) => {
    res.render('detail.ejs')
}

exports.getDetailPage = (erq, res) => {
    res.render('list.ejs')
}
exports.getAdminIndexpage = (erq, res) => {
    res.render("admin/index.ejs")
}