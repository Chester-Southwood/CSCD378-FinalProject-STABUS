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
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true'
        },
        success: function(data) { 
            console.log(data);
            var filteredRoutes = [];
            var busRoutes = data.data.entry.arrivalsAndDepartures;

            // check to see if stop has any more routes for the day listed
            if (busRoutes == null) {
                // display OFFLINE screen
                // return;
            }

            // filter out expired routes
            busRoutes.forEach(function(route) {
                // if: arrival time for next bus hasn't happened yet...
                // basically, if the bus's arrival time is in the future from the current time.
                if (route.scheduledArrivalTime > data.currentTime) {
                    filteredRoutes.push(route);
                }
            });

            // set route numbers
            if (filteredRoutes[0] != null) {
                // set next bus
                $("#arrivesIN_top_text").text("arrives in");
                $("#arrivesIN_bottom_text").text("minutes");
                document.getElementById("departs_CardTime").innerHTML = Clock.milliSec_to_ClockTime(filteredRoutes[0].scheduledDepartureTime);
                document.getElementById("main_routeName_text").innerHTML = filteredRoutes[0].tripHeadsign;
                document.getElementById("route_main_number").innerHTML = filteredRoutes[0].routeShortName;
                document.getElementById("arrivesIN_minute").innerHTML = Math.floor((filteredRoutes[0].scheduledArrivalTime - data.currentTime) / 60000);
                colorizeArrivalMinutes();
                
                // IF: more than one route exists, set bus after that
                if (filteredRoutes.length > 1) {
                    $("#alsoIN_top_text").text("also in");
                    $("#alsoIN_bottom_text").text("minutes");
                    document.getElementById("side_routeName_text").innerHTML = filteredRoutes[1].tripHeadsign;
                    document.getElementById("route_side_number").innerHTML = filteredRoutes[1].routeShortName;
                    document.getElementById("alsoIN_minute").innerHTML = Math.floor((filteredRoutes[1].scheduledArrivalTime - data.currentTime) / 60000);
                    // TODO: slide out $(".side-bg") into $(".main-bg")
                }
                // ELSE: blank out side bar
                else {
                    $(".alsoIN_text").text("");
                    $("#alsoIN_minute").text("");
                    document.getElementById("route_side_number").innerHTML = "";
                    document.getElementById("side_routeName_text").innerHTML = "";
                    
                    // TODO: expand $(".main-bg") to full-screen
                    // TODO: is it possible to pull 
                }
            }
            else {
                console.log("no results");
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
            console.log(data);
            document.getElementById("stop").innerHTML = data.data.entry.name;
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
            //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
        },
        error: function(xhr, status, err) { 
            console.log(err);}
    }); 
}

function colorizeArrivalMinutes() {
    console.log($("#arrivesIN_minute").text());
    if (parseInt($("#arrivesIN_minute").text()) >= 10) {
        $("#arrivesIN_minute").css("color", "green");
    }
    else if (parseInt($("#arrivesIN_minute").text()) >= 5) {
        $("#arrivesIN_minute").css("color", "orange");
    }
    else if (parseInt($("#arrivesIN_minute").text()) < 5) {
        $("#arrivesIN_minute").css("color", "red");
    }
}

function placeLogo(image) {
    $("#logo").attr("src", image);
}

function util_main() {    
    loadJSON( function(response) {
        let manifest_JSON = JSON.parse(response);
        // colorizeArrivalMinutes(); // DELETE: for debugging purposes only, dlete afterwards
        getArrivalsAndDeparturesObjForStop(manifest_JSON.settings.stopId.toString());
        getStopInfo(manifest_JSON.settings.stopId.toString());
        placeLogo(manifest_JSON.settings.logo.toString());
    });
}

// MAIN CALL TO START //
util_main();