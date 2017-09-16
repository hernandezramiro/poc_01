
function calculadorAreasGetResult(index){
    var count = index;
    var $txtInstallationTypeVal = $('#txtInstallationType_' + count).val();
    var $numHeightVal = Number($('#numHeight_' + count).val());
    var $numWidthVal = Number($('#numWidth_' + count).val());
    var $numEqualInstallationsVal = Number($('#numEqualInstallations_' + count).val());
    var $numExtraTubosVal = Number($('#numExtraTubos_' + count).val());

    $('#lblReqInstallationType_' + count).css('display', 'none');
    $('#lblReqNumHeight_' + count).css('display', 'none');
    $('#lblReqNumWidth_' + count).css('display', 'none');
    $('#lblReqNumEqualInstallations_' + count).css('display', 'none');
    $('#lblReqNumExtraTubos_' + count).css('display', 'none');


    if($txtInstallationTypeVal.trim() == "") {
        $('#lblReqInstallationType_' + count).css('display', 'block');
    }
    if($numHeightVal <= 0) {
        $('#lblReqNumHeight_' + count).css('display', 'block');
    } 
    if($numWidthVal <= 0) {
        $('#lblReqNumWidth_' + count).css('display', 'block');
    } 
    if($numEqualInstallationsVal <= 0) {
        $('#lblReqNumEqualInstallations_' + count).css('display', 'block');
    } 
    if($numExtraTubosVal <= 0) {
        $('#lblReqNumExtraTubos_' + count).css('display', 'block');
    }

    if($txtInstallationTypeVal.trim() != "" && $numHeightVal > 0 && $numWidthVal > 0 && $numEqualInstallationsVal > 0 && $numExtraTubosVal > 0) {
        
        var auxPer = $numExtraTubosVal / Number(100);
        
        var result = ($numHeightVal*$numWidthVal*$numEqualInstallationsVal) + (($numHeightVal*$numWidthVal*$numEqualInstallationsVal)*auxPer);
        
        var _modifiedTr = '';

        _modifiedTr = '<td>'
                + '<label id="lblInstallationType_' + count + '">' + $txtInstallationTypeVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblHeight_' + count + '">' + $numHeightVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblWidth_' + count + '">' + $numWidthVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblEqualInstallations_' + count + '">' + $numEqualInstallationsVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblExtraTubos_' + count + '">' + $numExtraTubosVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label>' + result + '</label>'
                + '</td>'
                + '<td>'
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all ui-mini"><div class="ui-controlgroup-controls ">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext" onclick="calculadorAreasModifyResult(' + count + ')">Edit</a>'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-last-child" onclick="calculadorAreasDeleteResult(' + count + ')">Delete</a>'
                + '</div></div>'
                + '</td>'

        $('#resultRow_' + count).html(_modifiedTr);

        count = count + 1;

        var _newTr = '<tr id="resultRow_' + count + '">'
                + '<td>'
                + '<input data-clear-btn="true" required="true" name="txtInstallationType" id="txtInstallationType_' + count + '" value="" type="text">'
                + '<p class="lblReqInstallationType" id="lblReqInstallationType_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numHeight" data-clear-btn="true" required="true" name="numHeight" id="numHeight_' + count + '" type="number" step="0.1">'
                + '<p class="lblReqNumHeight" id="lblReqNumHeight_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numWidth" data-clear-btn="true" required="true" name="numWidth" id="numWidth_' + count + '" type="number" step="0.1">'
                + '<p class="lblReqNumWidth" id="lblReqNumWidth_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numEqualInstallations" data-clear-btn="true" required="true" name="numEqualInstallations" id="numEqualInstallations_' + count + '" type="number">'
                + '<p class="lblReqNumEqualInstallations" id="lblReqNumEqualInstallations_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numExtraTubos" data-clear-btn="true" required="true" name="numExtraTubos" id="numExtraTubos_' + count + '" type="number">'
                + '<p class="lblReqNumExtraTubos" id="lblReqNumExtraTubos_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td><label></label></td>'
                + '<td>'
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all ui-mini"><div class="ui-controlgroup-controls ">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext ui-first-child" onclick="calculadorAreasGetResult(' + count + ')">Add</a>'
                + '</div></div>'
                + '</td>'
                + '</tr>';
        
        //$('#resultsTable').append(_newTr);
        $('#resultsTable').append(_newTr).enhanceWithin();
    }
}

function calculadorAreasModifyResult(index) {

    $('.lblReqInstallationType').css('display', 'none');
    $('.lblReqNumHeight').css('display', 'none');
    $('.lblReqNumWidth').css('display', 'none');
    $('.lblReqNumEqualInstallations').css('display', 'none');
    $('.lblReqNumExtraTubos').css('display', 'none');

    var count = index;

    var $lblInstallationTypeVal = $('#lblInstallationType_' + count).text();    
    var $lblHeightVal = Number($('#lblHeight_' + count).text());
    var $lblWidthVal = Number($('#lblWidth_' + count).text());
    var $lblEqualInstallationsVal = Number($('#lblEqualInstallations_' + count).text());
    var $lblExtraTubosVal = Number($('#lblExtraTubos_' + count).text());

    var _modifiedTr = '<td>'
                + '<input data-clear-btn="true" required="true" name="txtInstallationType" id="txtInstallationType_' + count + '" value="' + $lblInstallationTypeVal + '" type="text">'
                + '<p class="lblReqInstallationType" id="lblReqInstallationType_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numHeight" data-clear-btn="true" required="true" name="numHeight" id="numHeight_' + count + '" value="' + $lblHeightVal + '" type="number" step="0.1">'
                + '<p class="lblReqNumHeight" id="lblReqNumHeight_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numWidth" data-clear-btn="true" required="true" name="numWidth" id="numWidth_' + count + '" value="' + $lblWidthVal + '" type="number" step="0.1">'
                + '<p class="lblReqNumWidth" id="lblReqNumWidth_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numEqualInstallations" data-clear-btn="true" required="true" name="numEqualInstallations" id="numEqualInstallations_' + count + '" value="' + $lblEqualInstallationsVal + '" type="number">'
                + '<p class="lblReqNumEqualInstallations" id="lblReqNumEqualInstallations_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td>'
                + '<input data-wrapper-class="numExtraTubos" data-clear-btn="true" required="true" name="numExtraTubos" id="numExtraTubos_' + count + '" value="' + $lblExtraTubosVal + '" type="number">'
                + '<p class="lblReqNumExtraTubos" id="lblReqNumExtraTubos_' + count + '">Campo requerido</p>'
                + '</td>'
                + '<td><label></label></td>'
                + '<td>'
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all ui-mini"><div class="ui-controlgroup-controls ">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-check ui-btn-icon-notext ui-first-child" onclick="calculadorAreasUpdateResult(' + count + ')">Add</a>'
                + '</div></div>'
                + '</td>';

    //$('#resultsTable').append(_newTr).enhanceWithin();

    $('.ui-icon-plus').prop('disabled', true).addClass('ui-disabled');
    $('.ui-icon-edit').prop('disabled', true).addClass('ui-disabled');
    $('.ui-icon-delete').prop('disabled', true).addClass('ui-disabled');  
    
    $('#resultRow_' + count).html(_modifiedTr).enhanceWithin();
    

}

function calculadorAreasUpdateResult(index){
    var count = index;
    var $txtInstallationTypeVal = $('#txtInstallationType_' + count).val();
    var $numHeightVal = Number($('#numHeight_' + count).val());
    var $numWidthVal = Number($('#numWidth_' + count).val());
    var $numEqualInstallationsVal = Number($('#numEqualInstallations_' + count).val());
    var $numExtraTubosVal = Number($('#numExtraTubos_' + count).val());

    $('#lblReqInstallationType_' + count).css('display', 'none');
    $('#lblReqNumHeight_' + count).css('display', 'none');
    $('#lblReqNumWidth_' + count).css('display', 'none');
    $('#lblReqNumEqualInstallations_' + count).css('display', 'none');
    $('#lblReqNumExtraTubos_' + count).css('display', 'none');


    if($txtInstallationTypeVal.trim() == "") {
        $('#lblReqInstallationType_' + count).css('display', 'block');
    }
    if($numHeightVal <= 0) {
        $('#lblReqNumHeight_' + count).css('display', 'block');
    } 
    if($numWidthVal <= 0) {
        $('#lblReqNumWidth_' + count).css('display', 'block');
    } 
    if($numEqualInstallationsVal <= 0) {
        $('#lblReqNumEqualInstallations_' + count).css('display', 'block');
    } 
    if($numExtraTubosVal <= 0) {
        $('#lblReqNumExtraTubos_' + count).css('display', 'block');
    }

    if($txtInstallationTypeVal.trim() != "" && $numHeightVal > 0 && $numWidthVal > 0 && $numEqualInstallationsVal > 0 && $numExtraTubosVal > 0) {
        
        var auxPer = $numExtraTubosVal / Number(100);
        
        var result = ($numHeightVal*$numWidthVal*$numEqualInstallationsVal) + (($numHeightVal*$numWidthVal*$numEqualInstallationsVal)*auxPer);
        
        var _modifiedTr = '';

        _modifiedTr = '<td>'
                + '<label id="lblInstallationType_' + count + '">' + $txtInstallationTypeVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblHeight_' + count + '">' + $numHeightVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblWidth_' + count + '">' + $numWidthVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblEqualInstallations_' + count + '">' + $numEqualInstallationsVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label id="lblExtraTubos_' + count + '">' + $numExtraTubosVal + '</label>'
                + '</td>'
                + '<td>'
                + '<label>' + result + '</label>'
                + '</td>'
                + '<td>'
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all ui-mini"><div class="ui-controlgroup-controls ">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext" onclick="calculadorAreasModifyResult(' + count + ')">Edit</a>'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext ui-last-child" onclick="calculadorAreasDeleteResult(' + count + ')">Delete</a>'
                + '</div></div>'
                + '</td>'

        $('#resultRow_' + count).html(_modifiedTr);

        $('.ui-icon-plus').prop('disabled', true).removeClass('ui-disabled');
        $('.ui-icon-edit').prop('disabled', true).removeClass('ui-disabled');
        $('.ui-icon-delete').prop('disabled', true).removeClass('ui-disabled');  
    }
}

function calculadorAreasDeleteResult(index) {

    console.log(index);
        var row = document.getElementById('resultRow_' + index);
        row.parentNode.removeChild(row);
}

