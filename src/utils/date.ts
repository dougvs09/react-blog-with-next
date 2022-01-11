const getDate = (): string => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const currentDate = `${day}-${month}-${year}`

  return currentDate
}

export default getDate
