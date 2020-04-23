fetch('https://us-central1-corona-portal.cloudfunctions.net/app/api/getCount', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(resData => {
    console.log(resData);
    loadMapData(resData);
}).catch(error => {

    console.log(error)
})

function loadMapData(response) {


    simplemaps_countrymap_mapdata.state_specific[1].description = response["Andaman&Nicobar"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[2].description = response["AndhraPradesh"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[3].description = response["ArunachalPradesh"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[4].description = response["Assam"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[5].description = response["Bihar"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[6].description = response["Chandigarh"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[7].description = response["Chhattisgarh"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[8].description = response["Dadra&NagarHaveli"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[9].description = response["Daman&Diu"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[10].description = response["Delhi"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[11].description = response["Goa"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[12].description = response["Gujarat"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[13].description = response["Haryana"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[14].description = response["HimachalPradesh"] + " Registration(s)"

    simplemaps_countrymap_mapdata.state_specific[16].description = response["Jharkhand"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[17].description = response["Karnataka"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[18].description = response["Kerala"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[19].description = response["Lakshadweep"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[20].description = response["MadhyaPradesh"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[21].description = response["Maharashtra"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[22].description = response["Manipur"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[23].description = response["Meghalaya"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[24].description = response["Mizoram"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[25].description = response["Nagaland"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[26].description = response["Orissa"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[27].description = response["Pondicherry"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[28].description = response["Punjab"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[29].description = response["Rajasthan"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[30].description = response["Sikkim"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[31].description = response["TamilNadu"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[32].description = response["Tripura"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[33].description = response["UttarPradesh"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[34].description = response["Uttaranchal"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[35].description = response["WestBengal"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[36].description = response["Jammu&Kashmir"] + " Registration(s)"
    simplemaps_countrymap_mapdata.state_specific[37].description = response["Telangana"] + " Registration(s)"

    simplemaps_countrymap.load();
    console.log(simplemaps_countrymap_mapdata.state_specific[20].description)
    document.getElementById("totCount").innerHTML=response.totalCount;
}
