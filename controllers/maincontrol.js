exports.getIndex = (req, res, next) => {
    console.log("Index Page!");
    res.render("index", { pageTitle: "Home!" });
}

exports.getContact = (req, res, next) => {
    console.log("Contact Page!");
    res.render("contact", { pageTitle: "Contact & Projects!" });
}

exports.getResume = (req, res, next) => {
    console.log("Resume Page!");
    res.render("resume", { pageTitle: "Resume!" });
}