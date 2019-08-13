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


//http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.15/api/where/methods/routes-for-agency.html
function routesForAgency(agency){
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
function getStopsForRoute(route){
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
      function getArrivalsAndDeparturesObjForStop(stop){
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
                        console.log(data.data);
    
                        //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
            },
            error: function(xhr, status, err) { 
            console.log(err);}
          }); 
    }




    //trip ID -> "STA_627014"
    function getScheduleForStop(stop){
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
    function getStopInfo(stop){
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
                let routeNum = data.data.entry.routeIds[0].split("STA_")[1];
                console.log(routeNum);
                document.getElementsByClassName("route_number")[0].innerHTML = routeNum;
                let newDate = new Date(1565615640000);
                console.log(newDate.getHours() + newDate.getMinutes());
                let mininutesTill = newDate.getMinutes();
                let dateMe = new Date();
                document.getElementById("arrivesIN_minute").value = mininutesTill - dateMe.getMinutes();
                //http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json?key=TEST
            },
            error: function(xhr, status, err) { 
            console.log(err);}
          }); 
    }

    function helloTest(){
        console.log("lkfajfljalkfj falkjkljfajljfl kljfaklkljf");
    }


    //"STA_627014"
    function getTripInfoFromId(tripId){
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

    function util_main(){
        // getStopsForRoute("STA_66");
        //getScheduleForStop("STA_3RDCEDWN");
        //console.log(getStopsForRoute("STA_66"));
        //getScheduleForStop(getStopsForRoute("STA_66"));
        //getScheduleForStop("STA_3292");
        loadJSON(function (response) {
            let actual_JSON = JSON.parse(response);
            console.log("in MAIN");
            console.log(actual_JSON.settings);
            getStopInfo(actual_JSON.settings.stopId.toString());
            // getScheduleForStop(actual_JSON.settings.)
        });
    }
util_main();