CREATE TABLE masjidinform (
    mas_id INT PRIMARY KEY,
    mas_name VARCHAR(255) NOT NULL,
    mas_lat DECIMAL(10, 8) NOT NULL,
    mas_lng DECIMAL(11, 8) NOT NULL,
    mas_address VARCHAR(255) NOT NULL
);

INSERT INTO masjidinform (mas_id,mas_name, mas_lat, mas_lng, mas_address) 
VALUES (001, 'Jamiya Masjid Madina', 24.93166165, 67.10522800, 'Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),
       (002, 'Jamia Masjid-e-Quba', 24.92767765, 67.10101268, 'Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),
       (003, 'Jamia Masjid Shah Faisal', 24.92564897, 67.09593683, 'Block 6 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),
       (004, 'Okhai Memon Jama Masjid', 24.91530063, 67.05757067, 'Federal B Area Hussainabad Block 3 Gulberg Town, Karachi, Sindh, Pakistan'),
	   (005,  'Jamia Masjid Taqwa'    , 24.92670560710947, 67.10610649742993 , 'Block 7 Gulshan-e-Iqbal, Karachi, 75300, Pakistan'),
       (006,  'Jama Masjid Huda'     ,24.929844636971133, 67.10192411236123, 'Block 7 Gulshan-e-Iqbal, Karachi, Sindh 75300, Pakistan'),                                             
	   (007,  'Time Square Park Masjid'     ,24.9238234569147, 67.10281268977958, 'Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),
	   (008,  'Jamiya Masjid Madina'  ,24.9313770843277, 67.10521578373199,' Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),
	   (009,  'Masjid-e-Imaam Abu Hanifa' ,  24.922824302903024, 67.09902348500431 , ' Block 6 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),       
       (010,  ' Masjid- e- Akbar', 24.928973087340463, 67.097841384079  ,'Block 6 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),       
	   (011, ' Bilal bin rabah mosque', 24.93319532866421, 67.10316288546322 ,' Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan'),       
       (012, 'Jama Masjid Rabbani',24.933214786477826, 67.09878552066236,'Block 4 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 75300, Pakistan');

select * from masjidinform;
