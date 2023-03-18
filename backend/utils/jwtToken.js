//creating token and saving it in cookie

const sendToken = (user, statusCode, res) => {
    // Create jwt token
    const token = user.getJwtToken();
    
    // Options for cookie
    const options = {
        expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    
    res
        .status(statusCode)
        .cookie("token", token, options)
        .json({
        success: true,
        user,
        token,
        });
};

module.exports = sendToken;
