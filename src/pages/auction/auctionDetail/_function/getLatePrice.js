const getLatestPrice = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auction/api/getLatestPrice/${id}`)
  const datas = await response.json()
  return datas
}

export default getLatestPrice;