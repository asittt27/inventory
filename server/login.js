const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

// Setup PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'inventory',  // Gunakan nama database yang telah Anda buat
    password: 'projek',
    port: 5432,
});

// Register user endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, hashedPassword]
        );
        res.status(201).json({ user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userResult.rows.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }

        const user = userResult.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'secret_key', {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});