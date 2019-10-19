$(document).ready(function() {

    var vehicle_makeInput = $("input#vehicle_make");
    var vehicle_modelInput = $("input#vehicle_model");
    var vehicle_colorInput = $("input#vehicle_color");
    var license_plateInput = $("input#license_plate");
    var license_numberInput = $("input#license_number");

    $("#confirm-purchase").click(function(){
        event.preventDefault();
        var vehicleData = {
          vehicle_make: vehicle_makeInput.val().trim(),
          vehicle_model: vehicle_modelInput.val().trim(),
          vehicle_color: vehicle_colorInput.val().trim(),
          license_plate: license_plateInput.val().trim(),
          license_number: license_numberInput.val().trim()
        };

        if(!vehicleData.vehicle_make || !vehicleData.vehicle_model || !vehicleData.vehicle_color || !vehicleData.license_plate || !vehicleData.license_number){
            return;
        }

        signUpVehicle(vehicleData.vehicle_make, vehicleData.vehicle_model, vehicleData.vehicle_color, vehicleData.license_plate, vehicleData.license_number);
    });

    $.ajax({ url: '/api/driversignup', method: 'PUT', data:likes})
            .then(function() {
                some code...
            });

    function signUpVehicle(vehicle_make, vehicle_model, vehicle_color, license_plate, license_number){
        $.put("/api/driversignup", {
            vehicle_make: vehicle_make,
            vehicle_model: vehicle_model,
            vehicle_color: vehicle_color,
            license_plate: license_plate,
            license_number: license_number
        })
    }

});