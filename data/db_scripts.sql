CREATE TABLE MOVEMENT (
	movement_id SERIAL PRIMARY KEY,
	account_company VARCHAR(100),
	new_movementreason VARCHAR(100),
	new_species VARCHAR(100),
	new_originpremid VARCHAR(100),
	new_destinationpremid VARCHAR(100),
	new_numitemsmoved DOUBLE PRECISION,
	new_shipmentsstartdate DATE
);

CREATE TABLE FARM (
	farm_id SERIAL PRIMARY KEY,
	farm_st_no INTEGER,
	farm_st_name VARCHAR(100),
	farm_city VARCHAR(100),
	farm_name VARCHAR(100),
	farm_postal_code VARCHAR(100),
	farm_prem_id VARCHAR(100),
	farm_state VARCHAR(5),
	farm_lat DOUBLE PRECISION,
	farm_lon DOUBLE PRECISION
);


COPY MOVEMENT (
	movement_id,
	account_company,
	new_movementreason,
	new_species,
	new_originpremid,
	new_destinationpremid,
	new_numitemsmoved,
	new_shipmentsstartdate
) 
FROM '~/Projects/machadolab-programming-challenge/data/movement_norm.csv'
WITH CSV HEADER;

COPY FARM (
	farm_st_no,
	farm_st_name,
	farm_city,
	farm_name,
	farm_postal_code,
	farm_prem_id,
	farm_state,
	farm_lat,
	farm_lon,	
	farm_id
)
FROM '~/Projects/machadolab-programming-challenge/data/farm.csv'
WITH CSV HEADER;
