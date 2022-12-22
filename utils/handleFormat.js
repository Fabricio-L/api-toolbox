const format = (line) => {
  return {
    "file": /.|\.csv/.test(line[0]) && line[0],
    "lines": [
      {
        "text": line[1] && typeof line[1] === 'string' ? line[1] : null,
        "number": line[2] && typeof Number(line[2]) === 'number' ? Number(line[2]) : null,
        "hex": line[3] && line[3].length == 32 ? line[3] : null,
      }
    ]
  }
}

const handleFileFormat = (file) => {
  console.log(file)
  if(!file){
    return
  }
  const data = file.split('\n')

  const dataFormated = data.slice(1).map(line => {
    return format(line.split(','))
  })

  return dataFormated
}

module.exports = { handleFileFormat }