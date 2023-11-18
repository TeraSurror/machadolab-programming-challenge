import pandas as pd
import numpy as np

movement_data = pd.read_csv("./movement.csv")

all_farms = []
for index, row in movement_data.iterrows():
    farm1 = {
        "farm_st_no": row["new_originaddress"].split(",")[0],
        "farm_st_name": row["new_originaddress"].split(",")[1],
        "farm_city": row["new_origincity"],
        "farm_name": row["new_originname"],
        "farm_postal_code": row["new_originpostalcode"],
        "farm_prem_id": row["new_originpremid"],
        "farm_state": row["new_originstate"],
        "farm_lat": row["origin_Lat"],
        "farm_lon": row["origin_Lon"],
    }
    farm2 = {
        "farm_st_no": row["new_destinationaddress"].split(",")[0],
        "farm_st_name": row["new_destinationaddress"].split(",")[1],
        "farm_city": row["new_destinationcity"],
        "farm_name": row["new_destinationname"],
        "farm_postal_code": row["new_destinationpostalcode"],
        "farm_prem_id": row["new_destinationpremid"],
        "farm_state": row["new_destinationstate"],
        "farm_lat": row["destination_Lat"],
        "farm_lon": row["destination_Long"],
    }
    all_farms.append(farm1)
    all_farms.append(farm2)

unique_farms = []

for index, farm in enumerate(list({v["farm_prem_id"]: v for v in all_farms}.values())):
    farm["farm_id"] = index + 1
    unique_farms.append(farm)

farm_data = pd.DataFrame(unique_farms)

movement_normalized = movement_data.drop(
    columns=[
        "new_originaddress",
        "new_origincity",
        "new_originname",
        "new_originpostalcode",
        "new_originstate",
        "origin_Lat",
        "origin_Lon",
        "new_destinationaddress",
        "new_destinationcity",
        "new_destinationname",
        "new_destinationpostalcode",
        "new_destinationstate",
        "destination_Lat",
        "destination_Long",
    ],
    axis=1,
)
movement_normalized.head(20)

movement_normalized.to_csv("movement_norm.csv", index=False)
farm_data.to_csv("farm.csv", index=False)
