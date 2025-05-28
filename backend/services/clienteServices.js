import clientRepositories from '../repositories/clientRepositories.js'

const getAll = async () => {
    const result = await clientRepositories.findAll()
    return result
}

export default { getAll }