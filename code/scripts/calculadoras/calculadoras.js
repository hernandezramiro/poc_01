
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