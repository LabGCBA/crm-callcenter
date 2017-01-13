$(document).ready(function() {
    $('#salir').click(function() {
        logout();
    });
    
    $('#modal-exportar').on('hidden.bs.modal', function () {
       $('.tab-content').find('input').each(function() {
           $(this).val('');
       });
        
       $(".modal-body ul li").each(function() {
           $(this).removeClass('active');
       });
       
       $(".modal-body ul li:first-of-type").addClass('active');
       
       $(".input-group.day").datepicker("update");
       $(".input-group.week").datepicker("update");
       $(".input-group.month").datepicker("update");
       $(".input-group.range").datepicker("update");
    })
    
    $('.input-group.day').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy',
        language: 'es',
        weekStart: 0,
    })
    .on('changeDate', function(e) {
        updateDateUrl($('#dia'));
    })
    .click(function() {
        $('.input-group.day input').focus();
    });
    
    $('.input-group.week').datepicker({
        autoclose: true,
        selectWeek: true,
        format: 'dd/mm/yyyy',
        language: "es",
        weekStart: 0,
        forceParse: false,
    })
    .on('changeDate', function(e) {        
        var week = moment(e.date).week(); // Número de la semana
        var first = moment().day(0).week(week); // De ahí sacamos el primer día de esa semana
        var last = moment().day(6).week(week); // Ahora el último
        var weekRange = first.format("DD/MM/YYYY") + ' ' + '-' + ' ' + last.format("DD/MM/YYYY"); // Y armamos el rango
        
        $('.input-group.week input').val(weekRange);
        updateRangeUrl($('#semana'));
    })
    .click(function() {
        $('.input-group.week input').focus();
    });
    
    $('.input-group.month').datepicker({
        autoclose: true,
        format: 'mm/yyyy',
        minViewMode: 1,
        language: "es",
    })
    .on('changeDate', function(e) {
        updateMonthUrl($('#mes'));
    })
    .click(function() {
        $('.input-group.month input').focus();
    });
    
    $('.input-group.range').datepicker({
        format: 'dd/mm/yyyy',
        language: "es",
        weekStart: 0,
        clearBtn: true,
        forceParse: false,
    })
    .on('changeDate', function(e) {
        if ($('.input-group.range input:last-of-type').val() !== '' || $('.input-group.range input:first-of-type').val() !== '') {
            var first = $('#range-start').val() == '' ? moment(e.date).format("DD/MM/YYYY") : moment($('#range-start').val(), "DD/MM/YYYY"); // De ahí sacamos el primer día
            var last = moment(e.date); // Ahora el último
            var weekRange = first.format("DD/MM/YYYY") + ' ' + '-' + ' ' + last.format("DD/MM/YYYY"); // Y armamos el rango
            
            $('.input-group.range input').val(weekRange);
            updateRangeUrl($('#personalizado'));
        }  
    })
    .on('clearDate', function(e) {
        $('.input-group.range input').val('');
        $('#personalizado').find('.xlsx').attr("href", '#');
        $('#personalizado').find('.csv').attr("href", '#');
    })
    .click(function() {
        $('.input-group.range input').focus();
    });
    
    fetchData();
});

function loadTable(element, data) {
    var tabla = element.DataTable({
                    data: data,
                    columns: [
                        { title: "Campaña" },
                        { title: "Fecha" },
                        { title: "Hora" },
                        { title: "Teléfono" },
                        { title: "Llamó?" },
                        { title: "Nombre" },
                        { title: "Apellido" },
                        { title: "DNI" },
                        { title: "Género" },
                        { title: "Edad" },
                        { title: "Email" },
                        { title: "Celular" },
                        { title: "Duración" },
                        { title: "Mens.?" },
                        { title: "Temas" },
                        { title: "Inf.?" },
                        { title: "Texto" },
                        { title: "Anec.?" },
                        { title: "Grab.?" },
                        { title: "Resultado" },  
                        { title: "Observaciones" },     
                        { title: "Vol.?" },  
                        { title: "Sug.?" },
                        { title: "Texto" },                                
                    ],
                    language: {
                        lengthMenu: "Mostrar _MENU_ registros por página",
                        zeroRecords: "No hay registros en la base de datos",
                        info: "Página _PAGE_ de _PAGES_ - _MAX_ registros en total",
                        infoEmpty: "Mostrando 0 registros de 0 disponibles",
                        infoFiltered: "(filtrado de un total de _MAX_ registros)",
                        search: "Buscar:",
                        paginate: {
                            first:      "Primera",
                            last:       "Última",
                            next:       "Siguiente",
                            previous:   "Previa"
                        },
                    },
                    lengthMenu: [15, 25, 50, 100, 200],
                    scrollX: true,
    });
    
    tabla.on('draw.dt', function () {
        styleButtons();
    });
            
    return tabla;
}

function formatData(data) {
    var objectArray = new Array;
            
    for(var i = 0; i < data.data.length; i++) {
        var dataArray = new Array;
        
        for(var property in data.data[i]) {
            if (property === 'fecha' && data.data[i][property] !== null) {
                data.data[i][property] = data.data[i][property].replace(/\-/g, "/");
            }
            if (property !== 'id' && property !== 'guardado') dataArray.push(data.data[i][property]);
        }
        
        objectArray.push(dataArray);
    }
    
    return objectArray;
}

function loadStats(data) {
    $('.registros').html(data.registros);
    $('.llamadas-concretadas').html(data.llamadasConcretadas);
}

function fetchData() {
    var destination = "api/json";
    var tabla;
    
    $.ajax(destination, {
        success: function(data) {
            loadStats(data);
            data = formatData(data);
            
            tabla = loadTable($("#grid"), data);
            refresh(tabla, 600000); // 10 minutos
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        },
        dataType: 'json',
        method: 'POST',
    });
}

function refresh(tabla, interval) {
    setTimeout(tabla.draw(), interval);
}

function styleButtons() {
    $(".paginate_button a").addClass("btn btn-default");
    $(".paginate_button.active a").addClass("btn btn-primary");
}

function updateDateUrl(element) {
    var date = element.find('input').val().replace(/\//g, "-");
    
    element.find('.xlsx').attr("href", 'api/xlsx' + '/' + date);
    element.find('.csv').attr("href", 'api/csv' + '/' + date);
}

function updateRangeUrl(element) {
    var range = element.find('input:last').val().replace(/\//g, "-");
    var dateFrom = range.split(' - ', 2)[0];
    var dateTo = range.split(' - ', 2)[1];
    
    element.find('.xlsx').attr("href", 'api/xlsx' + '/' + dateFrom + '/' + dateTo);
    element.find('.csv').attr("href", 'api/csv' + '/' + dateFrom + '/' + dateTo);
}

function updateMonthUrl(element) {
    var date = element.find('input:last').val().replace(/\//g, "-");
    var month = moment(date, "MM/YYYY");
    var dateFrom = month.startOf('month').format("DD-MM-YYYY");
    var dateTo = month.endOf('month').format("DD-MM-YYYY");
    
    element.find('.xlsx').attr("href", 'api/xlsx' + '/' + dateFrom + '/' + dateTo);
    element.find('.csv').attr("href", 'api/csv' + '/' + dateFrom + '/' + dateTo);
}

function logout() {
    if (bowser.msie) {
        document.execCommand('ClearAuthenticationCache', false);
        window.location.href = './';
    } 
    else if (bowser.gecko) {
        $.ajax({
            async: false,
            url: location.href,
            type: 'GET',
            username: 'logout'
        })
        .fail(function(){
            window.location.href = './';
        });
    } 
    else if (bowser.webkit) {
        $.ajax({
            type: "GET",
            url: location.href,
            async: false,
            username: "logmeout",
            password: "123456",
            headers: { "Authorization": "Basic xxx" }
        })
        .fail(function(){
            window.location.href = './';
        });
    }
}
