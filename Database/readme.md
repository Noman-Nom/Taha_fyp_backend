# Masjid API Documentation

## Overview
This API provides endpoints to retrieve information about masjids and their prayer times. 

## Base URL
`http://localhost:3000/api`

## Endpoints

### 1. Get All Masjids

- **URL:** `/masjids`
- **Method:** GET
- **Description:** Fetches all masjids from the database.

#### Request
```http
GET /api/masjids HTTP/1.1
Host: localhost:300

```

#### Response 
```
Status Code: 200 OK
Content-Type: application/json
[
    {
        "mas_id": 1,
        "mas_name": "Jamiya Masjid Madina",
        "mas_lat": "24.93166165",
        "mas_lng": "67.10522800",
        "mas_address": "Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan"
    },
    {
        "mas_id": 2,
        "mas_name": "Jamia Masjid-e-Quba",
        "mas_lat": "24.92767765",
        "mas_lng": "67.10101268",
        "mas_address": "Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan"
    }
    // More masjids...
]
```


#### 2. Get Information and Prayer Times for a Specific Masjid

- **URL:** `/masjids/:id`
- **Method:** GET
- **Description:** Fetches detailed information including prayer times for a specific masjid.
- **Url-Peramter:** `:id` - The `mas_id` of the masjid.

#### Request
```http
GET /api/masjids/1 HTTP/1.1
Host: localhost:300

```

#### Response 
```
Status Code: 200 OK
Content-Type: application/json
{
    "id": 1,
    "name": "Jamiya Masjid Madina",
    "address": "Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan",
    "area": "Gulshan-e-Iqbal",
    "block": "7",
    "longitude": "67.10522800",
    "latitude": "24.93166165",
    "prayerTimes": {
        "2024": {
            "july": {
                "01072024": {
                    "fajr": "05:34 AM",
                    "zuhr": "12:30 PM",
                    "asr": "05:24 PM",
                    "magrib": "07:15 PM",
                    "isha": "08:53 PM"
                },
                "02072024": {
                    "fajr": "05:34 AM",
                    "zuhr": "12:30 PM",
                    "asr": "05:24 PM",
                    "magrib": "07:15 PM",
                    "isha": "08:53 PM"
                }
                // More dates...
            }
            // More months...
        }
        // More years...
    }
}

```

### 3. Complete API url:

- **All Masjid**  `http://localhost:3000/api/masjids`
- **Prayer Times for a Specific Masjid**  `http://localhost:3000/api/masjids/1`


