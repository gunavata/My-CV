exports.getIndex = (req, res, next) => {
    console.log("Index Page!");
    res.render("index");
}

exports.getContact = (req, res, next) => {
    console.log("Contact Page!");
    res.render("contact");
}

exports.getResume = (req, res, next) => {
    console.log("Resume Page!");
    res.render("resume");
}