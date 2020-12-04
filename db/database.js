const { Pool } = require('pg')
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'123456',
    port:'5432',
})

const getAllCountry = async() => {
    const sql = `select "Province/State" as State, "Country/Region" as Country from covid19_confirmed_csv`
    try {
        const data = await pool.query(sql);
        return data;
    }catch (err) {
        console.log(err);
        return null;
    }
}

const getAllConfirmed = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_confirmed_csv`
    try {
        const data = await pool.query(sql);
        return data;
    }catch (err) {
        console.log(err);
        return null;
    }
}
const getAllRecovered = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_recovered_csv`
    try {
        const data = await pool.query(sql);
        return data;
    }catch (err) {
        console.log(err);
        return null;
    }
}

const getAllDeath = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_death_csv`
    try {
        const data = await pool.query(sql);
        return data;
    }catch (err) {
        console.log(err);
        return null;
    }
}




module.exports = {
    getAllCountry,
    getAllConfirmed,
    getAllRecovered,
    getAllDeath
}


