
///////////////////////////
// CALCULADOR DE AREAS - BEGINS
///////////////////////////

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

///////////////////////////
// CALCULADOR DE AREAS - ENDS
///////////////////////////


///////////////////////////
// CAPACIDAD REPRODUCTIVA MOSCAS - BEGINS
///////////////////////////

function getReproduccionDomestica() {

    var auxRows = 13;

    for(i=1; i < auxRows; i++) {
        var row = document.getElementById('rowDomestica' + i);
        
        if(row != null) {
            row.parentNode.removeChild(row);
        }
    }

    $('#tableReproduccionDomestica').css('display', 'none');

    var $domRepDiasVal = Number($('#domesticaRepDias').val());
    var $domRepHuevosVal = Number($('#domesticaRepHuevos').val());
    var $domRepSuperVal = Number($('#domesticaRepSuper').val());

    $('#lblReqDomesticaRepDias').css('display', 'none');
    $('#lblReqDomesticaRepHuevos').css('display', 'none');
    $('#lblReqDomesticaRepSuper').css('display', 'none');

    if($domRepDiasVal <= 0) {
        $('#lblReqDomesticaRepDias').css('display', 'block');
    } 
    if($domRepHuevosVal <= 0) {
        $('#lblReqDomesticaRepHuevos').css('display', 'block');
    } 
    if($domRepSuperVal <= 0) {
        $('#lblReqDomesticaRepSuper').css('display', 'block');
    } 
    
    if($domRepDiasVal > 0 && $domRepHuevosVal > 0 && $domRepSuperVal > 0) {
        var _auxPer = $domRepSuperVal  / Number(100);
        
        var _resultsContent = '';
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = 1;
        var _auxCountMoscas = 0;

        for(i=1; i < auxRows; i++) {
            _auxDias = $domRepDiasVal * i;

            _auxCountMoscas = _auxCountHembras * $domRepHuevosVal * _auxPer;

            _auxTr = '<tr id="rowDomestica' + i + '">'
                + '<td>' + _auxDias + '</td>'
                + '<td>' + _auxCountHembras.toLocaleString('en-US') + '</td>'
                + '<td>' + _auxCountMoscas.toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '</tr>';
            
            _resultsContent = _resultsContent + _auxTr;
            _auxTr = '';
            _auxCountHembras = (_auxCountMoscas*0.5);
        }

        $('#tableReproduccionDomestica').append(_resultsContent).enhanceWithin();
        $('#tableReproduccionDomestica').css('display', 'block');
    }
}

function getReproduccionEstablo() {
    
    var auxRows = 13;

    for(i=1; i < auxRows; i++) {
        var row = document.getElementById('rowEstablo' + i);
            
        if(row != null) {
            row.parentNode.removeChild(row);
        }
    }
    
    $('#tableReproduccionEstablo').css('display', 'none');
    
    var $establoRepDiasVal = Number($('#establoRepDias').val());
    var $establoRepHuevosVal = Number($('#establoRepHuevos').val());
    var $establoRepSuperVal = Number($('#establoRepSuper').val());
    
    $('#lblReqEstabloRepDias').css('display', 'none');
    $('#lblReqEstabloRepHuevos').css('display', 'none');
    $('#lblReqEstabloRepSuper').css('display', 'none');
    
    if($establoRepDiasVal <= 0) {
        $('#lblReqEstabloRepDias').css('display', 'block');
    } 
    if($establoRepHuevosVal <= 0) {
        $('#lblReqEstabloRepHuevos').css('display', 'block');
    } 
    if($establoRepSuperVal <= 0) {
        $('#lblReqEstabloRepSuper').css('display', 'block');
    } 
        
    if($establoRepDiasVal > 0 && $establoRepHuevosVal > 0 && $establoRepSuperVal > 0) {
        
        var _resultsContent = '';
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = 1;
        var _auxCountMoscas = 0;
        var _auxPer = $establoRepSuperVal  / Number(100);
    
        for(i=1; i < auxRows; i++) {
            _auxDias = $establoRepDiasVal * i;
    
            _auxCountMoscas = _auxCountHembras * $establoRepHuevosVal * _auxPer;
    
            _auxTr = '<tr id="rowEstablo' + i + '">'
                + '<td>' + _auxDias + '</td>'
                + '<td>' + _auxCountHembras.toLocaleString('en-US') + '</td>'
                + '<td>' + _auxCountMoscas.toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '</tr>';
                
            _resultsContent = _resultsContent + _auxTr;
            _auxTr = '';
            _auxCountHembras = (_auxCountMoscas*0.5);
        }
    
        $('#tableReproduccionEstablo').append(_resultsContent).enhanceWithin();
        $('#tableReproduccionEstablo').css('display', 'block');
    }
}

function getReproduccionCuerno() {

    var auxRows = 7;
    
    for(i=1; i < auxRows; i++) {
        var row = document.getElementById('rowCuerno' + i);
            
        if(row != null) {
            row.parentNode.removeChild(row);
        }
    }
    
    $('#tableReproduccionCuerno').css('display', 'none');
    
    var $cuernoRepDiasVal = Number($('#cuernoRepDias').val());
    var $cuernoRepHuevosVal = Number($('#cuernoRepHuevos').val());
    var $cuernoRepSuperVal = Number($('#cuernoRepSuper').val());
    
    $('#lblReqCuernoRepDias').css('display', 'none');
    $('#lblReqCuernoRepHuevos').css('display', 'none');
    $('#lblReqCuernoRepSuper').css('display', 'none');
    
    if($cuernoRepDiasVal <= 0) {
        $('#lblReqCuernoRepDias').css('display', 'block');
    } 
    if($cuernoRepHuevosVal <= 0) {
        $('#lblReqCuernoRepHuevos').css('display', 'block');
    } 
    if($cuernoRepSuperVal <= 0) {
        $('#lblReqCuernoRepSuper').css('display', 'block');
    } 
        
    if($cuernoRepDiasVal > 0 && $cuernoRepHuevosVal > 0 && $cuernoRepSuperVal > 0) {
        
        var _resultsContent = '';
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = 1;
        var _auxCountMoscas = 0;
        var _auxPer = $cuernoRepSuperVal  / Number(100);
    
        for(i=1; i < auxRows; i++) {
            _auxDias = $cuernoRepDiasVal * i;
    
            _auxCountMoscas = _auxCountHembras * $cuernoRepHuevosVal * _auxPer;
    
            _auxTr = '<tr id="rowCuerno' + i + '">'
                + '<td>' + _auxDias + '</td>'
                + '<td>' + _auxCountHembras.toLocaleString('en-US') + '</td>'
                + '<td>' + _auxCountMoscas.toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '</tr>';
                
            _resultsContent = _resultsContent + _auxTr;
            _auxTr = '';
            _auxCountHembras = (_auxCountMoscas*0.5);
        }
    
        $('#tableReproduccionCuerno').append(_resultsContent).enhanceWithin();
        $('#tableReproduccionCuerno').css('display', 'block');
    }
}

function getReproduccionCara() {
    
    var auxRows = 11;
        
    for(i=1; i < auxRows; i++) {
        var row = document.getElementById('rowCara' + i);
                
        if(row != null) {
            row.parentNode.removeChild(row);
        }
    }
        
    $('#tableReproduccionCara').css('display', 'none');
        
    var $caraRepDiasVal = Number($('#caraRepDias').val());
    var $caraRepHuevosVal = Number($('#caraRepHuevos').val());
    var $caraRepSuperVal = Number($('#caraRepSuper').val());
        
    $('#lblReqCaraRepDias').css('display', 'none');
    $('#lblReqCaraRepHuevos').css('display', 'none');
    $('#lblReqCaraRepSuper').css('display', 'none');
        
    if($caraRepDiasVal <= 0) {
        $('#lblReqCaraRepDias').css('display', 'block');
    } 
    if($caraRepHuevosVal <= 0) {
        $('#lblReqCaraRepHuevos').css('display', 'block');
    } 
    if($caraRepSuperVal <= 0) {
        $('#lblReqCaraRepSuper').css('display', 'block');
    } 
            
    if($caraRepDiasVal > 0 && $caraRepHuevosVal > 0 && $caraRepSuperVal > 0) {
            
        var _resultsContent = '';
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = 1;
        var _auxCountMoscas = 0;
        var _auxPer = $caraRepSuperVal  / Number(100);
        
        for(i=1; i < auxRows; i++) {
            _auxDias = $caraRepDiasVal * i;
        
            _auxCountMoscas = _auxCountHembras * $caraRepHuevosVal * _auxPer;
        
            _auxTr = '<tr id="rowCara' + i + '">'
                + '<td>' + _auxDias + '</td>'
                + '<td>' + _auxCountHembras.toLocaleString('en-US') + '</td>'
                + '<td>' + _auxCountMoscas.toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '<td>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '</tr>';
                    
            _resultsContent = _resultsContent + _auxTr;
            _auxTr = '';
            _auxCountHembras = (_auxCountMoscas*0.5);
        }
        
        $('#tableReproduccionCara').append(_resultsContent).enhanceWithin();
        $('#tableReproduccionCara').css('display', 'block');
    }
}

///////////////////////////
// CAPACIDAD REPRODUCTIVA MOSCAS - ENDS
///////////////////////////


///////////////////////////
// DOSIFICACION RABON - BEGINS
///////////////////////////

var globalResultRabon_02 = 0;
var globalRabonPrecio = 0;
var globalRabonAlimentoFinal_Kg = 0;
var globalRabonNoAnimales = 0;

function getRabonDose() {

    var constDoseRabon = 1.54;
    var constWeightRabon = 72500;

    var resultRabon_01 = 0;
    var resultRabon_02 = 0;
    var resultRabon_03 = 0;
    var resultRabon_04 = 0;
    var resultRabon_05 = 0;
    var resultRabon_06 = 0;
    var resultRabon_07 = 0;
    var resultRabon_08 = 0;
    var resultRabon_09 = 0;

    var $txtExplotacionNombreVal = $('#txtExplotacionNombre').val().trim();
    var $txtExplotacionContactoVal = $('#txtExplotacionContacto').val().trim();
    var $txtRabonFechaVal = $('#txtRabonFecha').val().trim();
    var $txtBayerAsesorVal = $('#txtBayerAsesor').val().trim();
    var $rabonNoAnimales = Number($('#rabonNoAnimales').val());
    var $rabonPesoAnimal = Number($('#rabonPesoAnimal').val());
    var $rabonPrecio = Number($('#rabonPrecio').val());
    var $rabonAlimentoFinal_Kg = Number($('#rabonAlimentoFinal-Kg').val());
    var $rabonSalComun_g = Number($('#rabonSalComun-g').val());

    $('#reqTxtExplotacionNombre').css('display', 'none');
    $('#reqTxtExplotacionContacto').css('display', 'none');
    $('#reqTxtRabonFecha').css('display', 'none');
    $('#reqTxtBayerAsesor').css('display', 'none');
    $('#reqRabonNoAnimales').css('display', 'none');
    $('#reqRabonPesoAnimal').css('display', 'none');
    $('#reqRabonPrecio').css('display', 'none');
    $('#reqRabonAlimentoFinal-Kg').css('display', 'none');
    $('#reqRabonSalComun-g').css('display', 'none');

    
    if($txtExplotacionNombreVal == "") {
        $('#reqTxtExplotacionNombre').css('display', 'inline-block');
    } 
    if($txtExplotacionContactoVal == "") {
        $('#reqTxtExplotacionContacto').css('display', 'inline-block');
    } 
    if($txtRabonFechaVal == "") {
        $('#reqTxtRabonFecha').css('display', 'inline-block');
    } 
    if($txtBayerAsesorVal == "") {
        $('#reqTxtBayerAsesor').css('display', 'inline-block');
    } 
    if($rabonNoAnimales <= 0) {
        $('#reqRabonNoAnimales').css('display', 'inline-block');
    } 
    if($rabonPesoAnimal <= 0) {
        $('#reqRabonPesoAnimal').css('display', 'inline-block');
    } 
    if($rabonPrecio <= 0) {
        $('#reqRabonPrecio').css('display', 'inline-block');
    } 
    if($rabonAlimentoFinal_Kg <= 0) {
        $('#reqRabonAlimentoFinal-Kg').css('display', 'inline-block');
    } 
    if($rabonSalComun_g <= 0) {
        $('#reqRabonSalComun-g').css('display', 'inline-block');
    } 

    if($txtExplotacionNombreVal != "" && $txtExplotacionContactoVal != "" && $txtRabonFechaVal != "" && $txtBayerAsesorVal != ""
            && $rabonNoAnimales > 0 && $rabonPesoAnimal > 0 && $rabonPrecio > 0) {

        resultRabon_01 = $rabonPesoAnimal * constDoseRabon;

        $('#resultRabon-01').html('<b>' + resultRabon_01.toLocaleString('en-US') + ' mg </b>');

        if($rabonAlimentoFinal_Kg > 0 && $rabonSalComun_g > 0) {
            resultRabon_06 = (resultRabon_01 * $rabonNoAnimales)/1000;
            resultRabon_04 = $rabonAlimentoFinal_Kg * $rabonNoAnimales;
            resultRabon_05 = ($rabonSalComun_g * $rabonNoAnimales)/1000;
            
            resultRabon_02 = resultRabon_06/(resultRabon_04/1000);
            resultRabon_03 = (resultRabon_06/(resultRabon_05/1000))/1000;
            
            resultRabon_07 = constWeightRabon / resultRabon_06;

            resultRabon_08 = resultRabon_07/30;

            resultRabon_09 = (($rabonPrecio/constWeightRabon) * resultRabon_06) / $rabonNoAnimales;

            $('#resultRabon-02').html('<b>' + resultRabon_02.toLocaleString('en-US')+ ' g </b>');
            $('#resultRabon-03').html('<b>' + resultRabon_03.toLocaleString('en-US') + ' kg </b>');
            $('#resultRabon-04').html('<b>' + resultRabon_04.toLocaleString('en-US') + ' kg </b>');
            $('#resultRabon-05').html('<b>' + resultRabon_05.toLocaleString('en-US') + ' kg </b>');
            $('#resultRabon-06').html('<b>' + resultRabon_06.toLocaleString('en-US') + ' g </b>');
            $('#resultRabon-07').html('<b>' + resultRabon_07.toLocaleString('en-US') + ' días </b>');
            $('#resultRabon-08').html('<b>' + resultRabon_08.toLocaleString('en-US') + ' meses </b>');
            $('#resultRabon-09').html('<b>$ ' + resultRabon_09.toLocaleString('en-US') + ' pesos </b>');

            globalResultRabon_02 = resultRabon_02;
            globalRabonPrecio = $rabonPrecio;
            globalRabonAlimentoFinal_Kg = $rabonAlimentoFinal_Kg;
            globalRabonNoAnimales = $rabonNoAnimales;

        }
        else {
            $('#resultRabon-02').html('');
            $('#resultRabon-03').html('');
            $('#resultRabon-04').html('');
            $('#resultRabon-05').html('');
            $('#resultRabon-06').html('');
            $('#resultRabon-07').html('');
            $('#resultRabon-08').html('');
            $('#resultRabon-09').html('');

            globalResultRabon_02 = 0;
            globalRabonPrecio = 0;
            globalRabonAlimentoFinal_Kg = 0;
            globalRabonNoAnimales = 0;
        }
    }
    else {
        $('#resultRabon-01').html('');
        $('#resultRabon-02').html('');
        $('#resultRabon-03').html('');
        $('#resultRabon-04').html('');
        $('#resultRabon-05').html('');
        $('#resultRabon-06').html('');
        $('#resultRabon-07').html('');
        $('#resultRabon-08').html('');
        $('#resultRabon-09').html('');

        globalResultRabon_02 = 0;
        globalRabonPrecio = 0;
        globalRabonAlimentoFinal_Kg = 0;
        globalRabonNoAnimales = 0;
    }

    
}

function getBeneficioCarne() {
    var resultRabonCarne_01, resultRabonCarne_02, resultRabonCarne_03, resultRabonCarne_04, resultRabonCarne_05, resultRabonCarne_06, 
        resultRabonCarne_07, resultRabonCarne_08, resultRabonCarne_09, resultRabonCarne_10, resultRabonCarne_11, resultRabonCarne_12, 
        resultRabonCarne_13, resultRabonCarne_14, resultRabonCarne_15, resultRabonCarne_16, resultRabonCarne_17, resultRabonCarne_18, 
        resultRabonCarne_19, resultRabonCarne_20, resultRabonCarne_21, resultRabonCarne_22, resultRabonCarne_23, resultRabonCarne_24, 
        resultRabonCarne_25, resultRabonCarne_26;
    
    var $txtCarneExplotacionNombreVal = $('#txtCarneExplotacionNombre').val().trim();
    var $txtCarneExplotacionContactoVal = $('#txtCarneExplotacionContacto').val().trim();
    var $txtCarneRabonFechaVal = $('#txtCarneRabonFecha').val().trim();
    var $txtCarneBayerAsesorVal = $('#txtCarneBayerAsesor').val().trim();
    var $carnePerdidaGramosVal = Number($('#carnePerdidaGramos').val());
    var $carnePrecioMercadoVal = Number($('#carnePrecioMercado').val());
    var $carneDiasTratamientoVal = Number($('#carneDiasTratamiento').val());
    
    $('#reqTxtCarneExplotacionNombre').css('display', 'none');
    $('#reqTxtCarneExplotacionContacto').css('display', 'none');
    $('#reqTxtCarneRabonFecha').css('display', 'none');
    $('#reqTxtCarneBayerAsesor').css('display', 'none');
    $('#reqCarnePerdidaGramos').css('display', 'none');
    $('#reqCarnePrecioMercado').css('display', 'none');
    $('#reqCarneDiasTratamiento').css('display', 'none');

    if($txtCarneExplotacionNombreVal == "") {
        $('#reqTxtCarneExplotacionNombre').css('display', 'inline-block');
    } 
    if($txtCarneExplotacionContactoVal == "") {
        $('#reqTxtCarneExplotacionContacto').css('display', 'inline-block');
    } 
    if($txtCarneRabonFechaVal == "") {
        $('#reqTxtCarneRabonFecha').css('display', 'inline-block');
    } 
    if($txtCarneBayerAsesorVal == "") {
        $('#reqTxtCarneBayerAsesor').css('display', 'inline-block');
    }   
    if($carnePerdidaGramosVal <= 0) {
        $('#reqCarnePerdidaGramos').css('display', 'inline-block');
    } 
    if($carnePrecioMercadoVal <= 0) {
        $('#reqCarnePrecioMercado').css('display', 'inline-block');
    } 
    if($carneDiasTratamientoVal <= 0) {
        $('#reqCarneDiasTratamiento').css('display', 'inline-block');
    }

    if($txtCarneExplotacionNombreVal != "" && $txtCarneExplotacionContactoVal != "" && $txtCarneRabonFechaVal != "" && $txtCarneBayerAsesorVal != ""
        && $carnePerdidaGramosVal > 0 && $carnePrecioMercadoVal > 0 && $carneDiasTratamientoVal > 0) {
        
        if(globalResultRabon_02 > 0 && globalRabonPrecio > 0 && globalRabonAlimentoFinal_Kg > 0 && globalRabonNoAnimales > 0){
        
            resultRabonCarne_01 = ($carnePerdidaGramosVal * $carneDiasTratamientoVal)/1000;
            resultRabonCarne_02 = ($carnePrecioMercadoVal/1000) * $carnePerdidaGramosVal;
            resultRabonCarne_03 = resultRabonCarne_02 * $carneDiasTratamientoVal;
            resultRabonCarne_04 = globalResultRabon_02;
            resultRabonCarne_05 = globalRabonPrecio/72.5;
            resultRabonCarne_06 = resultRabonCarne_05/1000;
            resultRabonCarne_07 = resultRabonCarne_06*resultRabonCarne_04;
            resultRabonCarne_08 = resultRabonCarne_07/1000;
            resultRabonCarne_09 = globalRabonAlimentoFinal_Kg;
            resultRabonCarne_10 = resultRabonCarne_09 * resultRabonCarne_08;
            resultRabonCarne_11 = resultRabonCarne_10 * $carneDiasTratamientoVal;
            resultRabonCarne_12 = resultRabonCarne_02;
            resultRabonCarne_13 = resultRabonCarne_03;
            resultRabonCarne_14 = resultRabonCarne_10;
            resultRabonCarne_15 = resultRabonCarne_11;
            resultRabonCarne_16 = resultRabonCarne_12;
            resultRabonCarne_17 = resultRabonCarne_13;
            resultRabonCarne_18 = resultRabonCarne_16 - resultRabonCarne_14;
            resultRabonCarne_19 = resultRabonCarne_17 - resultRabonCarne_15;
            resultRabonCarne_20 = globalRabonNoAnimales;
            resultRabonCarne_21 = resultRabonCarne_14 * resultRabonCarne_20;
            resultRabonCarne_22 = resultRabonCarne_15 * resultRabonCarne_20;
            resultRabonCarne_23 = resultRabonCarne_16 * resultRabonCarne_20;
            resultRabonCarne_24 = resultRabonCarne_17 * resultRabonCarne_20;
            resultRabonCarne_25 = resultRabonCarne_23 - resultRabonCarne_21;
            resultRabonCarne_26 = resultRabonCarne_24 - resultRabonCarne_22;

            $('#carneResult_01').html('<b>' + resultRabonCarne_01 + ' kgs. </b>');
            $('#carneResult_02').html('<b>-$' + resultRabonCarne_02.toLocaleString('en-US') + ' </b>');
            $('#carneResult_03').html('<b>-$' + resultRabonCarne_03.toLocaleString('en-US') + ' </b>');
            $('#carneResult_04').html('<b>' + resultRabonCarne_04.toLocaleString('en-US') + ' grs. </b>');
            $('#carneResult_05').html('<b>$' + resultRabonCarne_05.toLocaleString('en-US') + ' </b>');
            $('#carneResult_06').html('<b>$' + resultRabonCarne_06.toLocaleString('en-US') + ' </b>');
            $('#carneResult_07').html('<b>$' + resultRabonCarne_07.toLocaleString('en-US') + ' </b>');
            $('#carneResult_08').html('<b>$' + resultRabonCarne_08.toLocaleString('en-US') + ' </b>');
            $('#carneResult_09').html('<b>' + resultRabonCarne_09.toLocaleString('en-US') + ' kgs.</b>');
            $('#carneResult_10').html('<b>$' + resultRabonCarne_10.toLocaleString('en-US') + ' </b>');
            $('#carneResult_11').html('<b>$' + resultRabonCarne_11.toLocaleString('en-US') + ' </b>');
            $('#carneResult_12').html('<b>-$' + resultRabonCarne_12.toLocaleString('en-US') + ' </b>');
            $('#carneResult_13').html('<b>-$' + resultRabonCarne_13.toLocaleString('en-US') + ' </b>');
            $('#carneResult_14').html('<b>$' + resultRabonCarne_14.toLocaleString('en-US') + ' </b>');
            $('#carneResult_15').html('<b>$' + resultRabonCarne_15.toLocaleString('en-US') + ' </b>');
            $('#carneResult_16').html('<b>-$' + resultRabonCarne_16.toLocaleString('en-US') + ' </b>');
            $('#carneResult_17').html('<b>-$' + resultRabonCarne_17.toLocaleString('en-US') + ' </b>');
            $('#carneResult_18').html('<b>$' + resultRabonCarne_18.toLocaleString('en-US') + ' </b>');
            $('#carneResult_19').html('<b>$' + resultRabonCarne_19.toLocaleString('en-US') + ' </b>');
            $('#carneResult_20').html('<b>' + resultRabonCarne_20.toLocaleString('en-US') + ' </b>');
            $('#carneResult_21').html('<b>$' + resultRabonCarne_21.toLocaleString('en-US') + ' </b>');
            $('#carneResult_22').html('<b>$' + resultRabonCarne_22.toLocaleString('en-US') + ' </b>');
            $('#carneResult_23').html('<b>-$' + resultRabonCarne_23.toLocaleString('en-US') + ' </b>');
            $('#carneResult_24').html('<b>-$' + resultRabonCarne_24.toLocaleString('en-US') + ' </b>');
            $('#carneResult_25').html('<b>$' + resultRabonCarne_25.toLocaleString('en-US') + ' </b>');
            $('#carneResult_26').html('<b>$' + resultRabonCarne_26.toLocaleString('en-US') + ' </b>');
        } else {
            for(i=1; i < 27; i++) {
                if(i < 10) {
                    $('#carneResult_0' + i).html('');
                }
                else {
                    $('#carneResult_' + i).html('');
                }
            }

            alert('Debe completar la calculadora de dosificación de Rabon 97.3');
        }
    }
    else {
        for(i=1; i < 27; i++) {
            if(i < 10) {
                $('#carneResult_0' + i).html('');
            }
            else {
                $('#carneResult_' + i).html('');
            }
        }
    }




}

///////////////////////////
// DOSIFICACION RABON - ENDS
///////////////////////////
