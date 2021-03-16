module.exports.login = async(req, res) => {
    await res.status(200).json({
        login: "login"
    });
}
module.exports.register = async(req,res) => {
    await res.status(200).json({
        register: "register"
    })
}