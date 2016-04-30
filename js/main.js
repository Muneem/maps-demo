
$(document).ready(function () {

});

function trackOrderUsingNumber() {
    $('.trackOrderNumberDiv').hide();
    $('.trackOrderNumberResultDiv').show();
}

function showTrackOrderDiv() {
    $('.trackOrderNumberDiv').show();
}

function closeDivTrackNow() {
    $('.trackOrderNumberDiv').hide();
    $('.trackOrderNumberResultDiv').hide();
}

function createMap() {
    var latitude = '21.543333';
    var longitude = '39.172777';
    var name = 'Jeddah, Saudia';

    var latlng = new google.maps.LatLng(latitude, longitude);
    var myOptions = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: true
    };

    var map = new google.maps.Map(document.getElementById("mapStoreDiv"), myOptions);

    var locations = [
        ['Sender', 'Jeddah, Saudia', 21.543333, 39.172777],
        ['Reciever', 'Manama, Bahrain', 26.0667, 50.5577],
    ];

    var flightPlanCoordinates = [
        { lat: 21.543333, lng: 39.172777 },
        { lat: 26.0667, lng: 50.5577 }
    ];

    var marker;
    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0] + ': <br /><b>' + locations[i][1] + '</b>');
                infowindow.open(map, marker);
            }
            })(marker, i));
    }

    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#F34747',
        strokeOpacity: 1.0,
        strokeWeight: 3
    });

    flightPath.setMap(map);
}

function removeClass() {
    $('input[type=text]').removeClass('validatorTxt');
    $('#error_msg').html('');
}

function goToNewsSection() {
    window.location = "News.html";
}

function goToDetailNewsSection() {
    window.location = "NewsDetail.html";
}

function createMapForContact() {
    var latitude = '21.543333';
    var longitude = '39.172777';
    var name = 'Jeddah, Saudia';

    var latlng = new google.maps.LatLng(latitude, longitude);
    var myOptions = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: true
    };

    var map = new google.maps.Map(document.getElementById("mapContactDiv"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng

    });

    var infowindow = new google.maps.InfoWindow({
        content: '<b>' + name + '</b>'
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    marker.setMap(map);

}

function scrollToShipmentSteps() {
    $("html, body").animate({ scrollTop: $(".mainBodyEasySteps").offset().top }, 'slow');

}

function goToFindStore() {
    location.href = "FindStore.html"
}

function goToPickupOption() {
    location.href = "PickupOptions.html"
}

var clickMarkers = [];

function createMapForStoreList() {
    var latitude = '21.543333';
    var longitude = '39.172777';
    var name = 'Jeddah, Saudia';

    var latlng = new google.maps.LatLng(latitude, longitude);
    var myOptions = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: true
    };

    var map = new google.maps.Map(document.getElementById("mapListAllStores"), myOptions);

    var locations = [
        [1, 'Journalist 1', 'Jeddah, Saudia', '1234567890', 21.543333, 39.172777],
        [2, 'Journalist 2', 'Manama, Bahrain', '1234567890', 26.0667, 50.5577],
        [3, 'Journalist 3', 'Seef, Bahrain', '1234567890', 26.2397, 50.5369],
        [4, 'Journalist 4', 'Riyadh, Saudia', '1234567890', 24.7136, 46.6753],
        [5, 'Journalist 5', 'Madina , Saudia', '1234567890', 24.5247, 39.5692],
    ];


    var marker;
    var infowindow = new google.maps.InfoWindow();
    var markerImg = 'images/marker1.png';

    for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][4], locations[i][5]),
            map: map,
            icon: markerImg,
            title: 'Journalist'
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent('<b>' + locations[i][1] + '</b><br /><b>Address: </b>' + locations[i][2] + '<br /><b>Phone: </b>' + locations[i][3]);
                infowindow.open(map, marker);
            }
            })(marker, i));

        clickMarkers.push(marker);


    }

}

function openMarker(id) {
    google.maps.event.trigger(clickMarkers[id], 'click');
}

function openMarkerAddress(markerID) {
    $('.storesContainerInnerDiv li').removeClass('storesContainerInnerLiSelected');
    $('.storeDetailNumberDiv').removeClass('storeDetailNumberDivSelected');
    $('.storeDetailTextDiv .storeName, .storeDetailTextDiv .storeDetailOther').removeClass('storeDetailTextDivSelected');

    $('#storeDetailContainerLiID' + markerID).addClass('storesContainerInnerLiSelected');
    $('#storeDetailContainerLiID' + markerID + ' .storeDetailNumberDiv').addClass('storeDetailNumberDivSelected');
    $('#storeDetailContainerLiID' + markerID + ' .storeDetailTextDiv .storeName, #storeDetailContainerLiID' + markerID + ' .storeDetailTextDiv .storeDetailOther').addClass('storeDetailTextDivSelected');

    openMarker(markerID);
}

var pickupOptionFromCountry_g = '';
var pickupOptionFromCity_g = '';
var pickupOptionToCountry_g = '';
var pickupOptionToCity_g = '';
var pickupOptionType_g = '';
var pickupOptionWeight_g = '';

function GetBestServiceOption() {
    var validationResult_po = true;

    var pickupOptionFromCountry = dropDownCountrySelectValidate('hiddenCountryFrom', 'fromCountryDDLCls');
    var pickupOptionFromCity = dropDownSelectValidate('fromSelectCityDDL');

    var pickupOptionToCountry = dropDownCountrySelectValidate('hiddenCountryTo', 'toCountryDDLCls');
    var pickupOptionToCity = dropDownSelectValidate('toSelectCityDDL');

    var pickupOptionType = dropDownSelectValidate('typePickDDLID');
    var pickupOptionWeight = txtBoxValidationCheckNumber('weightPickupDDLID');


    if (pickupOptionFromCountry == 'false' || pickupOptionFromCity == 'false' || pickupOptionToCountry == 'false' || pickupOptionToCity == 'false' || pickupOptionType == 'false' || pickupOptionWeight == 'false') {
        validationResult_po = false;
    }
    else {

        pickupOptionFromCountry_g = pickupOptionFromCountry;
        pickupOptionFromCity_g = pickupOptionFromCity;
        pickupOptionToCountry_g = pickupOptionToCountry;
        pickupOptionToCity_g = pickupOptionToCity;
        pickupOptionType_g = pickupOptionType;
        pickupOptionWeight_g = pickupOptionWeight;

    }

    if (validationResult_po == false) {
        $("html, body").animate({ scrollTop: $('.pickupDivContentInfo').offset().top }, 'fast');
        return false;
    }

    $('.serviceOptionsContainerDiv').slideDown(500);
    $("html, body").animate({ scrollTop: $(".serviceOptionsContainerDiv").offset().top }, 'slow');
    $('#startShippingBtn').show();
}

var bestServiceOption_g = '';

function chooseBestServiceOption(obj, id) {
    $('.serviceOptionsInnerContainerDiv').removeClass('serviceOptionsInnerContainerSelected');
    $(obj).addClass('serviceOptionsInnerContainerSelected');
    bestServiceOption_g = id;
    $('.valadationTxtServiceOption').hide();
}

function startShipping() {
    if (bestServiceOption_g == '') {
        $('.valadationTxtServiceOption').show();
    }
    else {
        $('.valadationTxtServiceOption').hide();
        location.href = "ShipmentDetail.html";
    }
}

function onChangePickupOptionHideService() {
    $('.serviceOptionsContainerDiv').hide();
    $('#startShippingBtn').hide();
    $('.serviceOptionsInnerContainerDiv').removeClass('serviceOptionsInnerContainerSelected');
    bestServiceOption_g = '';
    $('.valadationTxtServiceOption').hide();
}

function dropDownSelectValidate(id) {
    var value = $('#' + id).val();
    //value = value.trim();
    if (value == '-1') {
        $('.' + id + 'Cls').addClass('validatorTxt');
        return 'false';
    }
    else {
        return value;
    }
}

function txtBoxValidationCheckNumber(id) {
    var value = $('#' + id).val();
    var numberRg = /^[0-9]{1,15}$/;

    value = value.trim();

    if (value == '') {
        $('#' + id).addClass('validatorTxt');
        return 'false';
    }
    else if (parseInt(value) <= 0) {
        $('#' + id).addClass('validatorTxt');
        return 'false';
    }
    else if (numberRg.test(value) == false) {
        $('#' + id).addClass('validatorTxt');
        return 'false';
    }
    else {
        $('#' + id).removeClass('validatorTxt');
        return value;
    }
}

function txtBoxValidationCheckEmail(id) {
    var value = $('#' + id).val();
    var emailRg = /^[a-zA-Z0-9\.\-\_]+\@[a-zA-Z0-9](?:[\.\-]{0,1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,4}$/;

    value = value.trim();

    if (value == '') {
        $('#' + id).addClass('validatorTxt');
        return 'false';
    }
    else if (emailRg.test(value) == false) {
        $('#' + id).addClass('validatorTxt');
        return 'false';
    }
    else {
        $('#' + id).removeClass('validatorTxt');
        return value;
    }
}

function txtBoxValidationCheckText(id) {
    var value = $('#' + id).val();
    value = value.trim();

    if (value == '') {
        $('#' + id).addClass('validatorTxt');
        return 'false';
    }
    else {
        $('#' + id).removeClass('validatorTxt');
        return value;
    }
}

function dropDownCountrySelectValidate(hiddenID, divID) {
    var value = $('#' + hiddenID).val();
    value = value.trim();
    if (value == '') {
        $('.' + divID).addClass('validatorTxt');
        return 'false';
    }
    else {
        return value;
    }
}

var type_pi_g = '';
var weight_pi_g = '';
var length_pi_g = '';
var width_pi_g = '';
var height_pi_g = '';
var packageValue_pi_g = '';
var desp_pi_g = '';

function GoToPickUpTime() {
    var validationResult = true;

    //var type_pi = dropDownSelectValidate('typePickDDLID');
    //var weight_pi = txtBoxValidationCheckNumber('weightPickupDDLID');
    var length_pi = txtBoxValidationCheckNumber('lengthPickupDDLID');
    var width_pi = txtBoxValidationCheckNumber('widthPickupDDLID');
    var height_pi = txtBoxValidationCheckNumber('heightPickupDDLID');
    var packageValue_pi = txtBoxValidationCheckNumber('packageValuePickupDDLID');
    var desp_pi = txtBoxValidationCheckText('packageValueDesp');

    if (length_pi == 'false' || width_pi == 'false' || height_pi == 'false' || packageValue_pi == 'false' || desp_pi == 'false') {
        validationResult = false;
    }
    else {
        type_pi_g = $('#typePickDDLID').val();
        weight_pi_g = $('#weightPickupDDLID').val();
        length_pi_g = length_pi;
        width_pi_g = width_pi;
        height_pi_g = height_pi;
        packageValue_pi_g = packageValue_pi;
        desp_pi_g = desp_pi;
    }


    if (validationResult == false) {
        $("html, body").animate({ scrollTop: $('#packageInfoContainerDiv').offset().top }, 'fast');
        return false;
    }

    $("#pickupTimeCheckBoxDivID .headerShipmentDetailItemImgCheck").attr('src', 'Resources/en-us/img/check.png');
    $("#pickupTimeCheckBoxDivID .headerShipmentTxt").addClass('headerShipmentTxtSelected');

    $("html, body").animate({ scrollTop: 0 }, 'slow', function () {
        $("#shipmentStep1PackageInfo").hide("slide", { direction: "left" }, 1000, function () {
            $("#shipmentStep2PickupTime").show("slide", { direction: "right" }, 1000);
        });
    });


}
var collectionDate_pt_g = '';
var fromTime_pt_g = '';
var toTime_pt_g = '';

function GoToPickUpContactDetails() {

    var validationResult_pt = true;

    var collectionDate_pt = dropDownSelectValidate('typePickTimeDDLID');
    var fromTime_pt = dropDownSelectValidate('typePickTimeFromDDLID');
    var toTime_pt = dropDownSelectValidate('typePickTimeToDDLID');



    if (collectionDate_pt == 'false' || fromTime_pt == 'false' || toTime_pt == 'false') {
        validationResult_pt = false;
    }
    else {
        if (parseInt(fromTime_pt) >= parseInt(toTime_pt)) {
            $('.typePickTimeFromDDLIDCls').addClass('validatorTxt');
            $('.typePickTimeToDDLIDCls').addClass('validatorTxt');
            validationResult_pt = false;
        }
        else {
            collectionDate_pt_g = collectionDate_pt;
            fromTime_pt_g = fromTime_pt;
            toTime_pt_g = toTime_pt;
        }

    }


    if (validationResult_pt == false) {
        $("html, body").animate({ scrollTop: $('#shipmentStep2PickupTime').offset().top }, 'fast');
        return false;
    }


    $("#contactDetailCheckBoxDivID .headerShipmentDetailItemImgCheck").attr('src', 'Resources/en-us/img/check.png');
    $("#contactDetailCheckBoxDivID .headerShipmentTxt").addClass('headerShipmentTxtSelected');

    $("html, body").animate({ scrollTop: 0 }, 'slow', function () {
        $("#shipmentStep2PickupTime").hide("slide", { direction: "left" }, 1000, function () {
            $("#shipmentStep3ContactInfo").show("slide", { direction: "right" }, 1000);
        });
    });
}

function GoBackToPackageInfo() {
    $("#pickupTimeCheckBoxDivID .headerShipmentDetailItemImgCheck").attr('src', 'Resources/en-us/img/un_check.png');
    $("#pickupTimeCheckBoxDivID .headerShipmentTxt").removeClass('headerShipmentTxtSelected');

    $("html, body").animate({ scrollTop: 0 }, 'slow', function () {
        $("#shipmentStep2PickupTime").hide("slide", { direction: "right" }, 1000, function () {
            $("#shipmentStep1PackageInfo").show("slide", { direction: "left" }, 1000);
        });
    });


}

var senderName_cd_g = '';
var senderAddress_cd_g = '';
var senderCountry_cd_g = '';
var senderCity_cd_g = '';
var senderPhone_cd_g = '';
var senderEmail_cd_g = '';
var senderEmailConfirm_cd_g = '';

var recieverName_cd_g = '';
var recieverAddress_cd_g = '';
var recieverCountry_cd_g = '';
var recieverCity_cd_g = '';
var recieverPhone_cd_g = '';
var recieverEmail_cd_g = '';
var recieverEmailConfirm_cd_g = '';

function GoToSummaryDetails() {

    var validationResult_cd = true;

    var senderName_cd = txtBoxValidationCheckText('shipmentContactName');
    var senderAddress_cd = txtBoxValidationCheckText('shipmentContactAddress');
    var senderCountry_cd = dropDownCountrySelectValidate('hiddenCountryFrom', 'toCountryDDLCls');
    var senderCity_cd = dropDownSelectValidate('toSelectCityDDL');
    var senderPhone_cd = txtBoxValidationCheckNumber('shipmentContactPhone');
    var senderEmail_cd = txtBoxValidationCheckEmail('shipmentContactEmail');
    var senderEmailConfirm_cd = txtBoxValidationCheckEmail('shipmentContactConfirmEmail');

    var recieverName_cd = txtBoxValidationCheckText('shipmentContactNameReciever');
    var recieverAddress_cd = txtBoxValidationCheckText('shipmentContactAddressReciever');
    var recieverCountry_cd = dropDownCountrySelectValidate('hiddenCountryRecieverFrom', 'toCountryDDLRecieverCls');
    var recieverCity_cd = dropDownSelectValidate('toSelectCityDDLReciever');
    var recieverPhone_cd = txtBoxValidationCheckNumber('shipmentContactPhoneReciever');
    var recieverEmail_cd = txtBoxValidationCheckEmail('shipmentContactEmailReciever');
    var recieverEmailConfirm_cd = txtBoxValidationCheckEmail('shipmentContactConfirmEmailReciever');

    if (senderName_cd == 'false' || senderAddress_cd == 'false' || senderCountry_cd == 'false' || senderCity_cd == 'false' || senderPhone_cd == 'false' || senderEmail_cd == 'false' || senderEmailConfirm_cd == 'false' || recieverName_cd == 'false' || recieverAddress_cd == 'false' || recieverCountry_cd == 'false' || recieverCity_cd == 'false' || recieverPhone_cd == 'false' || recieverEmail_cd == 'false' || recieverEmailConfirm_cd == 'false') {
        validationResult_cd = false;
    }
    else {
        if (senderEmail_cd.trim() != senderEmailConfirm_cd.trim()) {
            $('#shipmentContactEmail').addClass('validatorTxt');
            $('#shipmentContactConfirmEmail').addClass('validatorTxt');
            validationResult_cd = false;
        }
        else if (recieverEmail_cd.trim() != recieverEmailConfirm_cd.trim()) {
            $('#shipmentContactEmailReciever').addClass('validatorTxt');
            $('#shipmentContactConfirmEmailReciever').addClass('validatorTxt');
            validationResult_cd = false;
        }
        else {
            senderName_cd_g = senderName_cd;
            senderAddress_cd_g = senderAddress_cd;
            senderCountry_cd_g = senderCountry_cd;
            senderCity_cd_g = senderCity_cd;
            senderPhone_cd_g = senderPhone_cd;
            senderEmail_cd_g = senderEmail_cd;
            senderEmailConfirm_cd_g = senderEmailConfirm_cd;

            recieverName_cd_g = recieverName_cd;
            recieverAddress_cd_g = recieverAddress_cd;
            recieverCountry_cd_g = recieverCountry_cd;
            recieverCity_cd_g = recieverCity_cd;
            recieverPhone_cd_g = recieverPhone_cd;
            recieverEmail_cd_g = recieverEmail_cd;
            recieverEmailConfirm_cd_g = recieverEmailConfirm_cd;
        }

    }

    if (validationResult_cd == false) {
        $("html, body").animate({ scrollTop: $('#shipmentContactDetailDivCon').offset().top }, 'fast');
        return false;
    }

    $('#summarySenderName').html(senderName_cd_g);
    $('#summarySenderAddress').html(senderCity_cd_g + ', ' + senderCountry_cd_g);

    $('#summaryRecieverName').html(recieverName_cd_g);
    $('#summaryRecieverAddress').html(recieverCity_cd_g + ', ' + recieverCountry_cd_g);


    $('#summaryType').html(type_pi_g);
    $('#summaryWeight').html(weight_pi_g + ' kg');
    $('#summaryLength').html(length_pi_g + ' cm');
    $('#summaryWidth').html(width_pi_g + ' cm');
    $('#summaryHeight').html(height_pi_g + ' cm');
    $('#summaryPackageValue').html(packageValue_pi_g + ' BHD');
    $('#summaryDescription').html(desp_pi_g);

    $('#summaryPickupDate').html(collectionDate_pt_g);
    var fromToTimePickup = '';
    if (parseInt(fromTime_pt_g) > 12) {
        var fromTime = parseInt(fromTime_pt_g) - 12;
        fromToTimePickup = fromTime + ':00 PM to ';
    }

    else {
        fromToTimePickup = fromTime_pt_g + ':00 AM to ';
    }

    if (parseInt(toTime_pt_g) > 12) {
        var toTime = parseInt(toTime_pt_g) - 12;
        var toTimeStr = toTime + ':00 PM';
        fromToTimePickup = fromToTimePickup.concat(toTimeStr);
    }

    else {
        var toTimeStr = toTime_pt_g + ':00 AM';
        fromToTimePickup = fromToTimePickup.concat(toTimeStr);
    }

    $('#summaryPickupTime').html(fromToTimePickup);

    $('#summarySenderNameCD').html(senderName_cd_g);
    $('#summarySenderAddressCD').html(senderAddress_cd_g);
    $('#summarySenderCityCD').html(senderCity_cd_g);
    $('#summarySenderCountryCD').html(senderCountry_cd_g);
    $('#summarySenderPhoneCD').html(senderPhone_cd_g);
    $('#summarySenderEmailCD').html(senderEmail_cd_g);

    $('#summaryRecieverNameCD').html(recieverName_cd_g);
    $('#summaryRecieverAddressCD').html(recieverAddress_cd_g);
    $('#summaryRecieverCityCD').html(recieverCity_cd_g);
    $('#summaryRecieverCountryCD').html(recieverCountry_cd_g);
    $('#summaryRecieverPhoneCD').html(recieverPhone_cd_g);
    $('#summaryRecieverEmailCD').html(recieverEmail_cd_g);

    $("#summaryCheckBoxDivID .headerShipmentDetailItemImgCheck").attr('src', 'Resources/en-us/img/check.png');
    $("#summaryCheckBoxDivID .headerShipmentTxt").addClass('headerShipmentTxtSelected');

    $("html, body").animate({ scrollTop: 0 }, 'slow', function () {
        $("#shipmentStep3ContactInfo").hide("slide", { direction: "left" }, 1000, function () {
            $("#shipmentStep4Summary").show("slide", { direction: "right" }, 1000);
        });
    });
}


function GoBackToPickupTime() {
    $("#contactDetailCheckBoxDivID .headerShipmentDetailItemImgCheck").attr('src', 'Resources/en-us/img/un_check.png');
    $("#contactDetailCheckBoxDivID .headerShipmentTxt").removeClass('headerShipmentTxtSelected');

    $("html, body").animate({ scrollTop: 0 }, 'slow', function () {
        $("#shipmentStep3ContactInfo").hide("slide", { direction: "right" }, 1000, function () {
            $("#shipmentStep2PickupTime").show("slide", { direction: "left" }, 1000);
        });
    });
}

function GoToConfirmOrder() {
    $("#confirmCheckBoxDivID .headerShipmentDetailItemImgCheck").attr('src', 'Resources/en-us/img/check.png');
    $("#confirmCheckBoxDivID .headerShipmentTxt").addClass('headerShipmentTxtSelected');

    $("html, body").animate({ scrollTop: 0 }, 'slow', function () {
        $("#shipmentStep4Summary").hide("slide", { direction: "left" }, 1000, function () {
            $("#shipmentStep5Confirm").show("slide", { direction: "right" }, 1000);
        });
    });
}

function GoBackToContactDetail() {
    $("#summaryCheckBoxDivID .headerShipmentDetailItemImgCheck").attr('src', 'Resources/en-us/img/un_check.png');
    $("#summaryCheckBoxDivID .headerShipmentTxt").removeClass('headerShipmentTxtSelected');

    $("html, body").animate({ scrollTop: 0 }, 'slow', function () {
        $("#shipmentStep4Summary").hide("slide", { direction: "right" }, 1000, function () {
            $("#shipmentStep3ContactInfo").show("slide", { direction: "left" }, 1000);
        });
    });
}

function setCheckBoxChecked(obj) {
    if ($(obj).hasClass('basicInfoUnCheckBox')) {
        $(obj).addClass('basicInfoCheckBox');
        $(obj).removeClass('basicInfoUnCheckBox');
    }
    else {
        $(obj).removeClass('basicInfoCheckBox');
        $(obj).addClass('basicInfoUnCheckBox');
    }
}

function showFAQAnswer(id) {

    //var answerDiv = '#headerFaqAnswer' + id;

    //$('.headerFaqAnswer').hide('slow');
    $('#headerFaqAnswer' + id).css('height', 'auto');
    $('#readFAQShowDiv' + id).hide();
    $('#readFAQHideDiv' + id).show();
    //$(answerDiv).slideDown('slow');


    //if ($(answerDiv).is(':visible')) {

    //}
    //else {
    //    $('.headerFaqAnswer').hide('slow');
    //    $(answerDiv).slideDown('slow');
    //    $('.faqInnerContainer').css('height', 'auto');
    //}
}

function showHideAnswer(id) {

    //var answerDiv = '#headerFaqAnswer' + id;

    $('#headerFaqAnswer' + id).css('height', '100px');
    $('#readFAQShowDiv' + id).show();
    $('#readFAQHideDiv' + id).hide();

}