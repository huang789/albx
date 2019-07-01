const fs = require("fs")
exports.getIndexPage = (erq, res) => {
    fs.readFile(__dirname + '/../views/admin/index.html', (err, data) => {
        if (err) return res.end(404)

        res.end(data)
    })
}