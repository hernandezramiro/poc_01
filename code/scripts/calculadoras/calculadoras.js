
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
        $('#lblReqInstallationType_' + count).css('display', 'inline-block');
    }
    if($numHeightVal <= 0) {
        $('#lblReqNumHeight_' + count).css('display', 'inline-block');
    } 
    if($numWidthVal <= 0) {
        $('#lblReqNumWidth_' + count).css('display', 'inline-block');
    } 
    if($numEqualInstallationsVal <= 0) {
        $('#lblReqNumEqualInstallations_' + count).css('display', 'inline-block');
    } 
    if($numExtraTubosVal <= 0) {
        $('#lblReqNumExtraTubos_' + count).css('display', 'inline-block');
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
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext" onclick="calculadorAreasModifyResult(' + count + ')">Edit</a>'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext" onclick="calculadorAreasDeleteResult(' + count + ')">Delete</a>'
                + '</div>'
                + '</td>'

        $('#resultRow_' + count).html(_modifiedTr);
        
        count = count + 1;

        var _newTr = '<tr id="resultRow_' + count + '">'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-clear-btn="true" required="true" name="txtInstallationType" id="txtInstallationType_' + count + '" value="" type="text">'
                + '<span class="lblReqInstallationType" id="lblReqInstallationType_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numHeight" data-clear-btn="true" required="true" name="numHeight" id="numHeight_' + count + '" type="number" step="0.1">'
                + '<span class="lblReqNumHeight" id="lblReqNumHeight_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numWidth" data-clear-btn="true" required="true" name="numWidth" id="numWidth_' + count + '" type="number" step="0.1">'
                + '<span class="lblReqNumWidth" id="lblReqNumWidth_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numEqualInstallations" data-clear-btn="true" required="true" name="numEqualInstallations" id="numEqualInstallations_' + count + '" type="number">'
                + '<span class="lblReqNumEqualInstallations" id="lblReqNumEqualInstallations_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numExtraTubos" data-clear-btn="true" required="true" name="numExtraTubos" id="numExtraTubos_' + count + '" type="number">'
                + '<span class="lblReqNumExtraTubos" id="lblReqNumExtraTubos_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td><label></label></td>'
                + '<td>'
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext" onclick="calculadorAreasGetResult(' + count + ')">Add</a>'
                + '</div>'
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
                + '<div class="divInternalForInputs">'
                + '<input data-clear-btn="true" required="true" name="txtInstallationType" id="txtInstallationType_' + count + '" value="' + $lblInstallationTypeVal + '" type="text">'
                + '<span class="lblReqInstallationType" id="lblReqInstallationType_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numHeight" data-clear-btn="true" required="true" name="numHeight" id="numHeight_' + count + '" value="' + $lblHeightVal + '" type="number" step="0.1">'
                + '<span class="lblReqNumHeight" id="lblReqNumHeight_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numWidth" data-clear-btn="true" required="true" name="numWidth" id="numWidth_' + count + '" value="' + $lblWidthVal + '" type="number" step="0.1">'
                + '<span class="lblReqNumWidth" id="lblReqNumWidth_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numEqualInstallations" data-clear-btn="true" required="true" name="numEqualInstallations" id="numEqualInstallations_' + count + '" value="' + $lblEqualInstallationsVal + '" type="number">'
                + '<span class="lblReqNumEqualInstallations" id="lblReqNumEqualInstallations_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td>'
                + '<div class="divInternalForInputs">'
                + '<input data-wrapper-class="numExtraTubos" data-clear-btn="true" required="true" name="numExtraTubos" id="numExtraTubos_' + count + '" value="' + $lblExtraTubosVal + '" type="number">'
                + '<span class="lblReqNumExtraTubos" id="lblReqNumExtraTubos_' + count + '">*</span>'
                + '</div>'
                + '</td>'
                + '<td><label></label></td>'
                + '<td>'
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-check ui-btn-icon-notext" onclick="calculadorAreasUpdateResult(' + count + ')">Add</a>'
                + '</div>'
                + '</td>';

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
        $('#lblReqInstallationType_' + count).css('display', 'inline-block');
    }
    if($numHeightVal <= 0) {
        $('#lblReqNumHeight_' + count).css('display', 'inline-block');
    } 
    if($numWidthVal <= 0) {
        $('#lblReqNumWidth_' + count).css('display', 'inline-block');
    } 
    if($numEqualInstallationsVal <= 0) {
        $('#lblReqNumEqualInstallations_' + count).css('display', 'inline-block');
    } 
    if($numExtraTubosVal <= 0) {
        $('#lblReqNumExtraTubos_' + count).css('display', 'inline-block');
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
                + '<div data-role="controlgroup" data-type="horizontal" data-mini="true">'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext" onclick="calculadorAreasModifyResult(' + count + ')">Edit</a>'
                + '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext" onclick="calculadorAreasDeleteResult(' + count + ')">Delete</a>'
                + '</div>'
                + '</td>'

        $('.ui-icon-plus').prop('disabled', true).removeClass('ui-disabled');
        $('.ui-icon-edit').prop('disabled', true).removeClass('ui-disabled');
        $('.ui-icon-delete').prop('disabled', true).removeClass('ui-disabled');
        
        $('#resultRow_' + count).html(_modifiedTr).enhanceWithin();
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

var window_width = 0;
var _auxCountMoscasDomesticaLength = 0;

$(window).on('resize', function(){
    console.log('Resize');
    window_width = Number($(window).width());

    if(window_width > 0 && _auxCountMoscasDomesticaLength > 0) {
        if(window_width == 768 && Number(_auxCountMoscasDomesticaLength) >= 20) {
            console.log('768-19');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaAmplia')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaCompacta');
        } else if(window_width == 768 && Number(_auxCountMoscasDomesticaLength) <= 19) {
            console.log('768-20');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaCompacta')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaAmplia');
        }
        else if(window_width == 1024 && _auxCountMoscasDomesticaLength >= 29) {
            console.log('1024-29');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaAmplia')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaCompacta');
        } else if(window_width == 1024 && _auxCountMoscasDomesticaLength <= 28) {
            console.log('1024-28');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaCompacta')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaAmplia');
        } else {
            console.log('else');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaCompacta')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaAmplia');
        }
    }
});

function getReproduccionDomestica() {

    var auxRows = 13;

    for(i=1; i < auxRows; i++) {
        var row = document.getElementById('rowDomestica' + i);
        
        if(row != null) {
            row.parentNode.removeChild(row);
        }
    }

    $('#tableResultsDomestica').css('display', 'none');

    var $domRepDiasVal = Number($('#domesticaRepDias').val());
    var $domRepHuevosVal = Number($('#domesticaRepHuevos').val());
    var $domRepSuperVal = Number($('#domesticaRepSuper').val());
    var $domesticaRepHemIniVal = Number($('#domesticaRepHemIni').val());

    $('#lblReqDomesticaRepDias').css('display', 'none');
    $('#lblReqDomesticaRepHuevos').css('display', 'none');
    $('#lblReqDomesticaRepSuper').css('display', 'none');
    $('#lblReqDomesticaRepHemIni').css('display', 'none');

    if($domRepDiasVal <= 0) {
        $('#lblReqDomesticaRepDias').css('display', 'inline-block');
    } 
    if($domRepHuevosVal <= 0) {
        $('#lblReqDomesticaRepHuevos').css('display', 'inline-block');
    } 
    if($domRepSuperVal <= 0) {
        $('#lblReqDomesticaRepSuper').css('display', 'inline-block');
    }
    if($domesticaRepHemIniVal <= 0) {
        $('#lblReqDomesticaRepHemIni').css('display', 'inline-block');
    } 
    
    if($domRepDiasVal > 0 && $domRepHuevosVal > 0 && $domRepSuperVal > 0 && $domesticaRepHemIniVal > 0) {
        var _auxPer = $domRepSuperVal  / Number(100);
        
        var _resultsContent = '<tbody>';//
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = $domesticaRepHemIniVal;
        var _auxCountMoscas = 0;

        for(i=1; i < auxRows; i++) {
            _auxDias = $domRepDiasVal * i;

            _auxCountMoscas = _auxCountHembras * $domRepHuevosVal * _auxPer;

            _auxTr = '<tr id="rowDomestica' + i + '">'
                + '<th><b class="ui-table-cell-label">Días</b>' + _auxDias + '</th>'//
                + '<td><b class="ui-table-cell-label">Hembras iniciales</b>' + _auxCountHembras.toLocaleString('en-US') + '</td>'
                + '<td><b class="ui-table-cell-label">Moscas nacidas</b>' + _auxCountMoscas.toLocaleString('en-US') + '</td>'
                + '<td><b class="ui-table-cell-label">Moscas macho</b>' + Number((_auxCountMoscas*0.5)).toLocaleString('en-US') + '</td>'
                + '<td><b class="ui-table-cell-label">Moscas hembra</b>' + (_auxCountMoscas*0.5).toLocaleString('en-US') + '</td>'
                + '</tr>';
            
            _resultsContent = _resultsContent + _auxTr;
            _auxTr = '';
            _auxCountHembras = (_auxCountMoscas*0.5);
        }

        _resultsContent = _resultsContent + '</tbody>'; //

        //$('#tableReproduccionDomestica').append(_resultsContent).enhanceWithin();
        //$('#tableReproduccionDomestica').css('display', 'block');

        window_width = Number($(window).width());
        _auxCountMoscasDomesticaLength = Number(_auxCountMoscas).toLocaleString().length;

        if(window_width == 768 && Number(_auxCountMoscasDomesticaLength) >= 20) {
            console.log('768-19');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaAmplia')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaCompacta');
        } else if(window_width == 768 && Number(_auxCountMoscasDomesticaLength) <= 19) {
            console.log('768-20');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaCompacta')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaAmplia');
        }
        else if(window_width == 1024 && _auxCountMoscasDomesticaLength >= 29) {
            console.log('1024-29');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaAmplia')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaCompacta');
        } else if(window_width == 1024 && _auxCountMoscasDomesticaLength <= 28) {
            console.log('1024-28');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaCompacta')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaAmplia');
        } else {
            console.log('else');
            $('#tableResultsDomestica').removeClass('tableResultsDomesticaCompacta')
            $('#tableResultsDomestica').addClass('tableResultsDomesticaAmplia');
        }
        
        $('#tableResultsDomestica').append(_resultsContent).enhanceWithin();
        $('#tableResultsDomestica').css('display', 'block');
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
    var $establoRepHemIniVal = Number($('#establoRepHemIni').val());
    
    $('#lblReqEstabloRepDias').css('display', 'none');
    $('#lblReqEstabloRepHuevos').css('display', 'none');
    $('#lblReqEstabloRepSuper').css('display', 'none');
    $('#lblReqEstabloRepHemIni').css('display', 'none');
    
    if($establoRepDiasVal <= 0) {
        $('#lblReqEstabloRepDias').css('display', 'inline-block');
    } 
    if($establoRepHuevosVal <= 0) {
        $('#lblReqEstabloRepHuevos').css('display', 'inline-block');
    } 
    if($establoRepSuperVal <= 0) {
        $('#lblReqEstabloRepSuper').css('display', 'inline-block');
    }
    if($establoRepHemIniVal <= 0) {
        $('#lblReqEstabloRepHemIni').css('display', 'inline-block');
    } 
        
    if($establoRepDiasVal > 0 && $establoRepHuevosVal > 0 && $establoRepSuperVal > 0 && $establoRepHemIniVal > 0) {
        
        var _resultsContent = '';
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = $establoRepHemIniVal;
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
    var $cuernoRepHemIniVal = Number($('#cuernoRepHemIni').val());
    
    $('#lblReqCuernoRepDias').css('display', 'none');
    $('#lblReqCuernoRepHuevos').css('display', 'none');
    $('#lblReqCuernoRepSuper').css('display', 'none');
    $('#lblReqCuernoRepHemIni').css('display', 'none');
    
    if($cuernoRepDiasVal <= 0) {
        $('#lblReqCuernoRepDias').css('display', 'inline-block');
    } 
    if($cuernoRepHuevosVal <= 0) {
        $('#lblReqCuernoRepHuevos').css('display', 'inline-block');
    } 
    if($cuernoRepSuperVal <= 0) {
        $('#lblReqCuernoRepSuper').css('display', 'inline-block');
    }
    if($cuernoRepHemIniVal <= 0) {
        $('#lblReqCuernoRepHemIni').css('display', 'inline-block');
    } 
        
    if($cuernoRepDiasVal > 0 && $cuernoRepHuevosVal > 0 && $cuernoRepSuperVal > 0 && $cuernoRepHemIniVal > 0) {
        
        var _resultsContent = '';
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = $cuernoRepHemIniVal;
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
    var $caraRepHemIniVal = Number($('#caraRepHemIni').val());
        
    $('#lblReqCaraRepDias').css('display', 'none');
    $('#lblReqCaraRepHuevos').css('display', 'none');
    $('#lblReqCaraRepSuper').css('display', 'none');
    $('#lblReqCaraRepHemIni').css('display', 'none');
        
    if($caraRepDiasVal <= 0) {
        $('#lblReqCaraRepDias').css('display', 'inline-block');
    } 
    if($caraRepHuevosVal <= 0) {
        $('#lblReqCaraRepHuevos').css('display', 'inline-block');
    } 
    if($caraRepSuperVal <= 0) {
        $('#lblReqCaraRepSuper').css('display', 'inline-block');
    }
    if($caraRepHemIniVal <= 0) {
        $('#lblReqCaraRepHemIni').css('display', 'inline-block');
    } 
            
    if($caraRepDiasVal > 0 && $caraRepHuevosVal > 0 && $caraRepSuperVal > 0 && $caraRepHemIniVal > 0) {
            
        var _resultsContent = '';
        var _auxTr = '';
        var _auxDias = 0;
        var _auxCountHembras = $caraRepHemIniVal;
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

function getBeneficioLeche() {
    var resultRabonLeche_01, resultRabonLeche_02, resultRabonLeche_03, resultRabonLeche_04, resultRabonLeche_05, resultRabonLeche_06, 
        resultRabonLeche_07, resultRabonLeche_08, resultRabonLeche_09, resultRabonLeche_10, resultRabonLeche_11, resultRabonLeche_12, 
        resultRabonLeche_13, resultRabonLeche_14, resultRabonLeche_15, resultRabonLeche_16, resultRabonLeche_17, resultRabonLeche_18, 
        resultRabonLeche_19, resultRabonLeche_20, resultRabonLeche_21, resultRabonLeche_22, resultRabonLeche_23, resultRabonLeche_24, 
        resultRabonLeche_25, resultRabonLeche_26;
    
    var $txtLecheExplotacionNombreVal = $('#txtLecheExplotacionNombre').val().trim();
    var $txtLecheExplotacionContactoVal = $('#txtLecheExplotacionContacto').val().trim();
    var $txtLecheRabonFechaVal = $('#txtLecheRabonFecha').val().trim();
    var $txtLecheBayerAsesorVal = $('#txtLecheBayerAsesor').val().trim();
    var $lechePerdidaLitrosVal = Number($('#lechePerdidaLitros').val());
    var $lechePrecioMercadoVal = Number($('#lechePrecioMercado').val());
    var $lecheDiasTratamientoVal = Number($('#lecheDiasTratamiento').val());
    
    $('#reqTxtLecheExplotacionNombre').css('display', 'none');
    $('#reqTxtLecheExplotacionContacto').css('display', 'none');
    $('#reqTxtLecheRabonFecha').css('display', 'none');
    $('#reqTxtLecheBayerAsesor').css('display', 'none');
    $('#reqLechePerdidaLitros').css('display', 'none');
    $('#reqLechePrecioMercado').css('display', 'none');
    $('#reqLecheDiasTratamiento').css('display', 'none');

    if($txtLecheExplotacionNombreVal == "") {
        $('#reqTxtLecheExplotacionNombre').css('display', 'inline-block');
    } 
    if($txtLecheExplotacionContactoVal == "") {
        $('#reqTxtLecheExplotacionContacto').css('display', 'inline-block');
    } 
    if($txtLecheRabonFechaVal == "") {
        $('#reqTxtLecheRabonFecha').css('display', 'inline-block');
    } 
    if($txtLecheBayerAsesorVal == "") {
        $('#reqTxtLecheBayerAsesor').css('display', 'inline-block');
    }   
    if($lechePerdidaLitrosVal <= 0) {
        $('#reqLechePerdidaLitros').css('display', 'inline-block');
    } 
    if($lechePrecioMercadoVal <= 0) {
        $('#reqLechePrecioMercado').css('display', 'inline-block');
    } 
    if($lecheDiasTratamientoVal <= 0) {
        $('#reqLecheDiasTratamiento').css('display', 'inline-block');
    }

    if($txtLecheExplotacionNombreVal != "" && $txtLecheExplotacionContactoVal != "" && $txtLecheRabonFechaVal != "" && $txtLecheBayerAsesorVal != ""
        && $lechePerdidaLitrosVal > 0 && $lechePrecioMercadoVal > 0 && $lecheDiasTratamientoVal > 0) {
        
        if(globalResultRabon_02 > 0 && globalRabonPrecio > 0 && globalRabonAlimentoFinal_Kg > 0 && globalRabonNoAnimales > 0){
        
            resultRabonLeche_01 = $lechePerdidaLitrosVal * $lecheDiasTratamientoVal;
            resultRabonLeche_02 = $lechePrecioMercadoVal * $lechePerdidaLitrosVal;
            resultRabonLeche_03 = resultRabonLeche_02 * $lecheDiasTratamientoVal;
            resultRabonLeche_04 = globalResultRabon_02;
            resultRabonLeche_05 = globalRabonPrecio/72.5;
            resultRabonLeche_06 = resultRabonLeche_05/1000;
            resultRabonLeche_07 = resultRabonLeche_06*resultRabonLeche_04;
            resultRabonLeche_08 = resultRabonLeche_07/1000;
            resultRabonLeche_09 = globalRabonAlimentoFinal_Kg;
            resultRabonLeche_10 = resultRabonLeche_09 * resultRabonLeche_08;
            resultRabonLeche_11 = resultRabonLeche_10 * $lecheDiasTratamientoVal;
            resultRabonLeche_12 = resultRabonLeche_02;
            resultRabonLeche_13 = resultRabonLeche_03;
            resultRabonLeche_14 = resultRabonLeche_10;
            resultRabonLeche_15 = resultRabonLeche_11;
            resultRabonLeche_16 = resultRabonLeche_12;
            resultRabonLeche_17 = resultRabonLeche_13;
            resultRabonLeche_18 = resultRabonLeche_16 - resultRabonLeche_14;
            resultRabonLeche_19 = resultRabonLeche_17 - resultRabonLeche_15;
            resultRabonLeche_20 = globalRabonNoAnimales;
            resultRabonLeche_21 = resultRabonLeche_14 * resultRabonLeche_20;
            resultRabonLeche_22 = resultRabonLeche_15 * resultRabonLeche_20;
            resultRabonLeche_23 = resultRabonLeche_16 * resultRabonLeche_20;
            resultRabonLeche_24 = resultRabonLeche_17 * resultRabonLeche_20;
            resultRabonLeche_25 = resultRabonLeche_23 - resultRabonLeche_21;
            resultRabonLeche_26 = resultRabonLeche_24 - resultRabonLeche_22;

            $('#lecheResult_01').html('<b>' + resultRabonLeche_01 + ' Litros </b>');
            $('#lecheResult_02').html('<b>-$' + resultRabonLeche_02.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_03').html('<b>-$' + resultRabonLeche_03.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_04').html('<b>' + resultRabonLeche_04.toLocaleString('en-US') + ' grs. </b>');
            $('#lecheResult_05').html('<b>$' + resultRabonLeche_05.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_06').html('<b>$' + resultRabonLeche_06.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_07').html('<b>$' + resultRabonLeche_07.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_08').html('<b>$' + resultRabonLeche_08.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_09').html('<b>' + resultRabonLeche_09.toLocaleString('en-US') + ' kgs.</b>');
            $('#lecheResult_10').html('<b>$' + resultRabonLeche_10.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_11').html('<b>$' + resultRabonLeche_11.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_12').html('<b>-$' + resultRabonLeche_12.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_13').html('<b>-$' + resultRabonLeche_13.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_14').html('<b>$' + resultRabonLeche_14.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_15').html('<b>$' + resultRabonLeche_15.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_16').html('<b>-$' + resultRabonLeche_16.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_17').html('<b>-$' + resultRabonLeche_17.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_18').html('<b>$' + resultRabonLeche_18.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_19').html('<b>$' + resultRabonLeche_19.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_20').html('<b>' + resultRabonLeche_20.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_21').html('<b>$' + resultRabonLeche_21.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_22').html('<b>$' + resultRabonLeche_22.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_23').html('<b>-$' + resultRabonLeche_23.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_24').html('<b>-$' + resultRabonLeche_24.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_25').html('<b>$' + resultRabonLeche_25.toLocaleString('en-US') + ' </b>');
            $('#lecheResult_26').html('<b>$' + resultRabonLeche_26.toLocaleString('en-US') + ' </b>');
        } else {
            for(i=1; i < 27; i++) {
                if(i < 10) {
                    $('#lecheResult_0' + i).html('');
                }
                else {
                    $('#lecheResult_' + i).html('');
                }
            }

            alert('Debe completar la calculadora de dosificación de Rabon 97.3');
        }
    }
    else {
        for(i=1; i < 27; i++) {
            if(i < 10) {
                $('#lecheResult_0' + i).html('');
            }
            else {
                $('#lecheResult_' + i).html('');
            }
        }
    }
}

///////////////////////////
// DOSIFICACION RABON - ENDS
///////////////////////////


///////////////////////////
// IMPACTO ECONOMICO MOSCAS - BEGINS
///////////////////////////

function getImpactoEconomicoMoscas() {

    var row = document.getElementById('rowImpactoMoscasResult');
    
    if(row != null) {
        row.parentNode.removeChild(row);
    }
    
    $('#resultsImpactoMoscasTable').css('display', 'none');
    
    var $impactoMoscasEstabloVal = $('#impactoMoscasEstablo').val().trim();
    var $impactoMoscasVacasVal = Number($('#impactoMoscasVacas').val());
    var $impactoMoscasProduccionVal = Number($('#impactoMoscasProduccion').val());
    var $impactoMoscasDisminucionVal = Number($('#impactoMoscasDisminucion').val());
    var $impactoMoscasPrecioLecheVal = Number($('#impactoMoscasPrecioLeche').val());
    var $impactoMoscasDiasVal = Number($('#impactoMoscasDias').val());
    
    $('#reqImpactoMoscasEstablo').css('display', 'none');
    $('#reqImpactoMoscasVacas').css('display', 'none');
    $('#reqImpactoMoscasProduccion').css('display', 'none');
    $('#reqImpactoMoscasDisminucion').css('display', 'none');
    $('#reqImpactoMoscasPrecioLeche').css('display', 'none');
    $('#reqImpactoMoscasDias').css('display', 'none');

    
    if($impactoMoscasEstabloVal == "") {
        $('#reqImpactoMoscasEstablo').css('display', 'inline-block');
    } 
    if($impactoMoscasVacasVal <= 0) {
        $('#reqImpactoMoscasVacas').css('display', 'inline-block');
    } 
    if($impactoMoscasProduccionVal <= 0) {
        $('#reqImpactoMoscasProduccion').css('display', 'inline-block');
    } 
    if($impactoMoscasDisminucionVal <= 0) {
        $('#reqImpactoMoscasDisminucion').css('display', 'inline-block');
    } 
    if($impactoMoscasPrecioLecheVal <= 0) {
        $('#reqImpactoMoscasPrecioLeche').css('display', 'inline-block');
    } 
    if($impactoMoscasDiasVal <= 0) {
        $('#reqImpactoMoscasDias').css('display', 'inline-block');
    } 
        
    if($impactoMoscasEstabloVal != "" && $impactoMoscasVacasVal > 0 && $impactoMoscasProduccionVal > 0
        && $impactoMoscasDisminucionVal > 0 && $impactoMoscasPrecioLecheVal > 0 && $impactoMoscasDiasVal > 0) {
        
        var _disminucionVacaDia = 0;
        var _disminucionTodasVacasDia = 0;
        var _impactoTodasVacasDia = 0;
        var _impactoTodasVacasTemp = 0;

        _disminucionVacaDia = ($impactoMoscasProduccionVal * $impactoMoscasDisminucionVal) / 100;
        _disminucionTodasVacasDia = _disminucionVacaDia * $impactoMoscasVacasVal;
        _impactoTodasVacasDia = _disminucionTodasVacasDia * $impactoMoscasPrecioLecheVal;
        _impactoTodasVacasTemp = _impactoTodasVacasDia * $impactoMoscasDiasVal;
        
        _auxTr = '<tr id="rowImpactoMoscasResult">'
                + '<td>' + _disminucionVacaDia.toLocaleString('en-US') + '</td>'
                + '<td>' + _disminucionTodasVacasDia.toLocaleString('en-US') + '</td>'
                + '<td>$ ' + _impactoTodasVacasDia.toLocaleString('en-US') + '</td>'
                + '<td>$ ' + _impactoTodasVacasTemp.toLocaleString('en-US') + '</td>'
                + '</tr>';
        
        $('#resultsImpactoMoscasTable').append(_auxTr).enhanceWithin();
        $('#resultsImpactoMoscasTable').css('display', 'block');
    }
}

///////////////////////////
// IMPACTO ECONOMICO MOSCAS - ENDS
///////////////////////////