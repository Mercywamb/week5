import mssql from 'mssql'

const sql = require('mssql')
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

export async function testConnection(){
    console.log(process.env.DB_NAME);
    const pool = await mssql.connect(sqlConfig)
    if(pool.connected){
        console.log("connected to database");}
        else{
            console.log("connection failed");
            
        }
    
}
testConnection()