--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10 (Ubuntu 14.10-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.1 (Ubuntu 16.1-1.pgdg22.04+1)

-- Started on 2023-11-17 16:03:46 EST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO harsh;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 16396)
-- Name: farm; Type: TABLE; Schema: public; Owner: harsh
--

CREATE TABLE public.farm (
    farm_id integer NOT NULL,
    farm_st_no integer,
    farm_st_name character varying(100),
    farm_city character varying(100),
    farm_name character varying(100),
    farm_postal_code character varying(100),
    farm_prem_id character varying(100),
    farm_state character varying(5),
    farm_lat double precision,
    farm_lon double precision
);


ALTER TABLE public.farm OWNER TO harsh;

--
-- TOC entry 211 (class 1259 OID 16395)
-- Name: farm_farm_id_seq; Type: SEQUENCE; Schema: public; Owner: harsh
--

CREATE SEQUENCE public.farm_farm_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.farm_farm_id_seq OWNER TO harsh;

--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 211
-- Name: farm_farm_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: harsh
--

ALTER SEQUENCE public.farm_farm_id_seq OWNED BY public.farm.farm_id;


--
-- TOC entry 210 (class 1259 OID 16387)
-- Name: movement; Type: TABLE; Schema: public; Owner: harsh
--

CREATE TABLE public.movement (
    movement_id integer NOT NULL,
    account_company character varying(100),
    new_movementreason character varying(100),
    new_species character varying(100),
    new_originpremid character varying(100),
    new_destinationpremid character varying(100),
    new_numitemsmoved double precision,
    new_shipmentsstartdate date
);


ALTER TABLE public.movement OWNER TO harsh;

--
-- TOC entry 209 (class 1259 OID 16386)
-- Name: movement_movement_id_seq; Type: SEQUENCE; Schema: public; Owner: harsh
--

CREATE SEQUENCE public.movement_movement_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movement_movement_id_seq OWNER TO harsh;

--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 209
-- Name: movement_movement_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: harsh
--

ALTER SEQUENCE public.movement_movement_id_seq OWNED BY public.movement.movement_id;


--
-- TOC entry 3211 (class 2604 OID 16399)
-- Name: farm farm_id; Type: DEFAULT; Schema: public; Owner: harsh
--

ALTER TABLE ONLY public.farm ALTER COLUMN farm_id SET DEFAULT nextval('public.farm_farm_id_seq'::regclass);


--
-- TOC entry 3210 (class 2604 OID 16390)
-- Name: movement movement_id; Type: DEFAULT; Schema: public; Owner: harsh
--

ALTER TABLE ONLY public.movement ALTER COLUMN movement_id SET DEFAULT nextval('public.movement_movement_id_seq'::regclass);


--
-- TOC entry 3358 (class 0 OID 16396)
-- Dependencies: 212
-- Data for Name: farm; Type: TABLE DATA; Schema: public; Owner: harsh
--

COPY public.farm (farm_id, farm_st_no, farm_st_name, farm_city, farm_name, farm_postal_code, farm_prem_id, farm_state, farm_lat, farm_lon) FROM stdin;
1	163	 fake Street	Carthage	my_farm_name_B	62321	376DQUF	IL	42.04312	-94.73784
2	743	 fake Street	Sheffield	my_farm_name_L	50475	778EYUX	IA	46.38174	-92.14026
3	677	 fake Street	Edison	my_farm_name_C	68936	088WKFT	NE	41.99145	-103.34611
4	733	 fake Street	Sac City	my_farm_name_R	50583	464KBIF	IA	46.07227	-93.91527
5	154	 fake Street	Bethany	my_farm_name_J	64424	225ZGAJ	MO	41.90538	-97.56184
6	28	 fake Street	Battle Creek	my_farm_name_K	51006	477EDVX	IA	45.88508	-94.49498
7	707	 fake Street	Clay Center	my_farm_name_B	68933	180UCBY	NE	42.10786	-101.59227
8	112	 fake Street	Havelock	my_farm_name_M	50574	611ULSK	IA	46.36619	-93.63721
9	217	 fake Street	Albion	my_farm_name_E	46701	582PHBR	IN	42.97002	-88.94877
10	12	 fake Street	Wawaka	my_farm_name_S	46794	027RDXY	IN	45.03986	-84.37985
11	308	 fake Street	Hampton	my_farm_name_I	50441	360FDCZ	IA	44.33265	-96.68334
12	834	 fake Street	Fonda	my_farm_name_S	50540	220FAPG	IA	46.22264	-93.76849
13	26	 fake Street	Shelby	my_farm_name_C	51570	733DTME	IA	43.07102	-99.01941
14	58	 fake Street	Ute	my_farm_name_O	51060	554DGRT	IA	45.53324	-94.59197
15	813	 fake Street	Edison	my_farm_name_H	68936	715ELOH	NE	41.87143	-103.33981
16	550	 fake Street	Edison	my_farm_name_R	68936	853OBOV	NE	43.80099	-98.72475
17	582	 fake Street	Pittsfield	my_farm_name_B	62363	325UDIW	IL	41.0829	-94.3104
18	846	 fake Street	Altona	my_farm_name_Q	61414	453YIAE	IL	44.67619	-89.01749
19	501	 fake Street	Leopold	my_farm_name_J	47551	671HMJV	IN	39.67177	-90.09549
20	613	 fake Street	Flat Rock	my_farm_name_T	62427	730AOYL	IL	42.391528	-86.477042
\.


--
-- TOC entry 3356 (class 0 OID 16387)
-- Dependencies: 210
-- Data for Name: movement; Type: TABLE DATA; Schema: public; Owner: harsh
--

COPY public.movement (movement_id, account_company, new_movementreason, new_species, new_originpremid, new_destinationpremid, new_numitemsmoved, new_shipmentsstartdate) FROM stdin;
1	Mypigcompany	FINISH TO FINISH	Swine	376DQUF	778EYUX	1000	2011-04-18
2	Mypigcompany	SOW TO FINISH	Swine	088WKFT	464KBIF	1000	2011-04-18
3	Mypigcompany	SOW TO NURSERY	Swine	225ZGAJ	477EDVX	1000	2011-04-18
4	Mypigcompany	WTF TO FINISH	Swine	180UCBY	611ULSK	1000	2011-04-18
5	Mypigcompany	WTF TO FINISH	Swine	582PHBR	027RDXY	1000	2011-04-18
6	Mypigcompany	FINISH TO FINISH	Swine	360FDCZ	220FAPG	1000	2011-04-18
7	Mypigcompany	WTF TO FINISH	Swine	733DTME	554DGRT	1000	2011-04-18
8	Mypigcompany	SOW TO NURSERY	Swine	715ELOH	853OBOV	1000	2011-04-18
9	Mypigcompany	SOW TO WTF	Swine	325UDIW	453YIAE	1000	2011-04-18
10	Mypigcompany	SOW TO FINISH	Swine	671HMJV	730AOYL	1000	2011-04-18
\.


--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 211
-- Name: farm_farm_id_seq; Type: SEQUENCE SET; Schema: public; Owner: harsh
--

SELECT pg_catalog.setval('public.farm_farm_id_seq', 1, false);


--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 209
-- Name: movement_movement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: harsh
--

SELECT pg_catalog.setval('public.movement_movement_id_seq', 1, false);


--
-- TOC entry 3215 (class 2606 OID 16403)
-- Name: farm farm_pkey; Type: CONSTRAINT; Schema: public; Owner: harsh
--

ALTER TABLE ONLY public.farm
    ADD CONSTRAINT farm_pkey PRIMARY KEY (farm_id);


--
-- TOC entry 3213 (class 2606 OID 16394)
-- Name: movement movement_pkey; Type: CONSTRAINT; Schema: public; Owner: harsh
--

ALTER TABLE ONLY public.movement
    ADD CONSTRAINT movement_pkey PRIMARY KEY (movement_id);


--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-11-17 16:03:46 EST

--
-- PostgreSQL database dump complete
--

