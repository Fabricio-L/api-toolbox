const { listFiles, filesData } = require('../services/service')
const { handleHttpError } = require('../utils/handleError')
const { handleFileFormat } = require('../utils/handleFormat')

const getList = async (request, response) => {
  try{
    const data = await listFiles()
    
    response.send({data})
  }catch (error){
    handleHttpError(response, 'ERROR_GET_LIST_FILES')
  }
}

const getFile = async (request, response) => {
  try{
    const { file } = request.params
    const data =  handleFileFormat(await filesData(file))

    response.send({data})
  }catch (error) {
    handleHttpError(response, 'ERROR_GET_FILE')
  }
}

module.exports = { getList, getFile }