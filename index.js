const express = require('express');
const pool = require('./db'); // Importing the configured pool from db.js
const app = express();
app.use(express.json());

// API for Jamia Masjid-e-Quba
app.get('/api/masjids/quba', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT m.*, j.date, j.fajr, j.zuhr, j.asr, j.magrib, j.isha
             FROM masjidinfo m
             LEFT JOIN jamia_masjid_e_quba j ON m.mas_id = j.mas_id
             WHERE m.mas_id = 2;`
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// API for Jamia Masjid Shah Faisal
app.get('/api/masjids/shahfaisal', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT m.*, sf.date, sf.fajr, sf.zuhr, sf.asr, sf.magrib, sf.isha
             FROM masjidinfo m
             LEFT JOIN jamia_masjid_shah_faisal sf ON m.mas_id = sf.mas_id
             WHERE m.mas_id = 3;`
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// API for Okhai Memon Jama Masjid
app.get('/api/masjids/okhai', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT m.*, om.date, om.fajr, om.zuhr, om.asr, om.magrib, om.isha
             FROM masjidinfo m
             LEFT JOIN okhai_memon_jama_masjid om ON m.mas_id = om.mas_id
             WHERE m.mas_id = 4;`
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Assume there's no specific prayer table for Jamiya Masjid Madina
app.get('/api/masjids/madina', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT m.*, j.date, j.fajr, j.zuhr, j.asr, j.magrib, j.isha
            FROM masjidinfo m
            LEFT JOIN Jamiya_Masjid_madina j ON m.mas_id = j.mas_id
            WHERE m.mas_id =1 ;`
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
