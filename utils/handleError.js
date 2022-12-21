const handleHttpError = (response, message='ERROR', code=403) => {
  response.status(code)
  response.status({ error: message })
}
module.exports = { handleHttpError }