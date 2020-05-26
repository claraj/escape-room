module.exports = {
    publicPath: process.env.NOCE_ENV === 'production'
    ? 'escape-room'
    : '/'
}