import connection from '../db/db.js'

const findAll = async () => {
    const sql = 'SELECT * FROM cliente'
    connection.query(sql, (result) => {
        return result
    })
}

export default { findAll }