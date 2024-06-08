// src/routes.js
const express = require('express');
const router = express.Router();
const pool = require('./db');

// Get all masjids
router.get('/masjids', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM masjidinform');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Get information and prayer times for a specific masjid
router.get('/masjids/:id', async (req, res) => {
    const mas_id = req.params.id;
    try {
        const masjidResult = await pool.query('SELECT * FROM masjidinform WHERE mas_id = $1', [mas_id]);
        const prayerTimesResult = await pool.query('SELECT * FROM prayer_times WHERE mas_id = $1', [mas_id]);

        if (masjidResult.rows.length === 0) {
            return res.status(404).send('Masjid not found');
        }

        const masjid = masjidResult.rows[0];
        const prayerTimes = prayerTimesResult.rows;

        const formattedPrayerTimes = prayerTimes.reduce((acc, prayerTime) => {
            const date = new Date(prayerTime.date);
            const year = date.getFullYear();
            const month = date.toLocaleString('default', { month: 'long' }).toLowerCase();
            const day = date.getDate().toString().padStart(2, '0') + date.getMonth().toString().padStart(2, '0') + year.toString();

            if (!acc[year]) {
                acc[year] = {};
            }

            if (!acc[year][month]) {
                acc[year][month] = {};
            }

            acc[year][month][day] = {
                fajr: prayerTime.fajr,
                zuhr: prayerTime.zuhr,
                asr: prayerTime.asr,
                magrib: prayerTime.magrib,
                isha: prayerTime.isha,
            };

            return acc;
        }, {});

        res.json({
            id: masjid.mas_id,
            name: masjid.mas_name,
            address: masjid.mas_address,
            area: masjid.mas_address.split(',')[1].trim(),
            block: masjid.mas_address.split(',')[0].split(' ').slice(-1)[0].trim(),
            longitude: masjid.mas_lng,
            latitude: masjid.mas_lat,
            prayerTimes: formattedPrayerTimes
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
