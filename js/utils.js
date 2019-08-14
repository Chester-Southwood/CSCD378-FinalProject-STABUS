import("Clock.js");

//http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.15/api/where/methods/routes-for-agency.html
function getAgencyInfo(agency){
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/agency/"+agency+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) { 
                console.log(data.data.entry);

                    //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
      }); 
}

function stopIdsForAgency(agency) {
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/stop-ids-for-agency/"+agency+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) {
            // console.log(data.data);
            data.data.list.forEach(element => {
                // console.log(element);
            })
            //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
      });
}


//http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.15/api/where/methods/routes-for-agency.html
function routesForAgency(agency) {
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/routes-for-agency/"+agency+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) { 
                data.data.list.forEach(element => {
                    console.log(element);
                })

                    //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
    }); 
}

//http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.15/api/where/methods/vehiclesForAgency.html
function getCurrentVehicleObjs(agency){
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/vehicles-for-agency/"+agency+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) { 
                data.data.list.forEach(element => {
                            console.log(element);
                })

                    //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
      }); 
    }

      //http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.15/api/where/methods/vehiclesForAgency.html

      //Route 66 -> All Stop IDS
function getStopsForRoute(route) {
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/stops-for-route/"+route+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        complete: function(data) {
                    //return data.data;
                    //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
            console.log(err);
        }
    }); 
}

    //http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.15/api/where/methods/vehiclesForAgency.html
function getArrivalsAndDeparturesObjForStop(stop) {
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/arrivals-and-departures-for-stop/"+stop+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) { 
            var filteredRoutes = [];
            var busRoutes = data.data.entry.arrivalsAndDepartures;

            // filter out expired routes
            busRoutes.forEach(function(route) {
                console.log(route);
                console.log(data.currentTime);
                // if: arrival time for next bus hasn't happened yet...basically, if the bus's arrival time is in the future from the current time.
                if (route.scheduledArrivalTime > data.currentTime) {
                    filteredRoutes.push(route);
                }
            });

            // set route numbers
            if (filteredRoutes != null) {
                // set next bus
                document.getElementById("route_main_number").innerHTML = filteredRoutes[0].routeShortName;
                document.getElementById("arrivesIN_minute").innerHTML = Math.floor((filteredRoutes[0].scheduledArrivalTime - data.currentTime) / 60000);
                
                // IF: more than one route exists, set bus after that
                if (filteredRoutes.length > 1) {
                    $("#alsoIN_top_text").text("also in");
                    $("#alsoIN_bottom_text").text("minutes");
                    document.getElementById("route_side_number").innerHTML = filteredRoutes[1].routeShortName;
                    document.getElementById("alsoIN_minute").innerHTML = Math.floor((filteredRoutes[1].scheduledArrivalTime - data.currentTime) / 60000);
                    // TODO: slide out $(".side-bg") into $(".main-bg")
                }
                // ELSE: blank out side bar
                else {
                    $("#alsoIN_top_text").text("");
                    $("#alsoIN_minute").text("");
                    $("#alsoIN_bottom_text").text("");
                    document.getElementById("route_side_number").innerHTML = "";
                    // TODO: expand $(".main-bg") to full-screen
                }
            }
            
            


            //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
    }); 
}

//trip ID -> "STA_627014"
function getScheduleForStop(stop) {
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/schedule-for-stop/"+stop+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) { 
                    console.log(data.data);

                    //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
    }); 
}

//trip ID -> "STA_627014"
function getStopInfo(stop) {
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/stop/"+stop+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) {
            console.log(data.data);
            document.getElementById("stop").innerHTML = data.data.entry.name;
            let newDate = new Date(1565615640000);
            let mininutesTill = newDate.getMinutes();
            let dateMe = new Date();
            // document.getElementById("arrivesIN_minute").value = mininutesTill - dateMe.getMinutes();
            //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
    }); 
}

//"STA_627014"
function getTripInfoFromId(tripId) {
    $.ajax({
        type: 'GET',
        url: "http://52.88.188.196:8080/api/api/where/trip/"+tripId+".json?key=TEST",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'jsonp',
        headers: {
            'X-Alt-Referer': 'sit.mydomain.com',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) { 
            console.log(data.data);
            //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
        console.log(err);}
    }); 
}

function util_main() {
    //getStopsForRoute("STA_66");
    //getScheduleForStop("STA_3RDCEDWN");
    //console.log(getStopsForRoute("STA_66"));
    //getScheduleForStop(getStopsForRoute("STA_66"));
    //getScheduleForStop("STA_3292");
    // console.log("stopIdsForAgency" + stopIdsForAgency("STA"));
    // console.log("getScheduleForStop" + getScheduleForStop("STA_ELMCSTEN"));
    
    loadJSON( function(response) {
        let manifest_JSON = JSON.parse(response);
        // console.log("Manifest.JSON Response");
        // console.log(manifest_JSON);
        getArrivalsAndDeparturesObjForStop(manifest_JSON.settings.stopId.toString());
        getStopInfo(manifest_JSON.settings.stopId.toString());
        // getScheduleForStop(actual_JSON.settings.)
    });
}

// MAIN CALL TO START //
util_main();