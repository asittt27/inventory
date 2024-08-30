const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'inventory',
    password: 'projek', 
    port: 5432,
});


app.post('/pc', async (req, res) => {
    const { it_code, brand, serial_number, ip_address, status } = req.body;
    try {
        const newPC = await pool.query(
            'INSERT INTO pc (it_code, brand, serial_number, ip_address, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [it_code, brand, serial_number, ip_address, status]
        );
        
        res.json(newPC.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


app.get('/pc', async (req, res) => {
    try {
        const allPCs = await pool.query('SELECT * FROM pc');
        res.json(allPCs.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


app.put('/pc/:id', async (req, res) => {
    const { id } = req.params;
    const { it_code, brand, serial_number, ip_address, status } = req.body;
    try {
        const updatePC = await pool.query(
            'UPDATE pc SET it_code = $1, brand = $2, serial_number = $3, ip_address = $4, status = $5 WHERE id = $6',
            [it_code, brand, serial_number, ip_address, status, id]
        );
        res.json('PC was updated!');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


app.delete('/pc/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletePC = await pool.query('DELETE FROM pc WHERE id = $1', [id]);
        res.json('PC was deleted!');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
