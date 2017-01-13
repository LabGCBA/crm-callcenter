function enableFields() {
    $(".genero").removeAttr('disabled');
    $(".edad").removeAttr('disabled');
    $(".bajo-mensaje").removeAttr('disabled');
    $("#enviar-informe").removeAttr('disabled');
    $(".texto-informe").removeAttr('disabled');
    $(".anecdotario").removeAttr('disabled');
    $(".grabacion-disponible").removeAttr('disabled');
    $(".resultado-llamada").removeAttr('disabled');
    $(".observaciones").removeAttr('disabled');
    $(".voluntario").removeAttr('disabled');
    $(".sugerencia").removeAttr('disabled');
}

function disableFields() {
    $(".genero").attr('disabled', 'disabled');
    $(".edad").attr('disabled', 'disabled');
    $(".bajo-mensaje").attr('disabled', 'disabled');
    $("#enviar-informe").attr('disabled', 'disabled');
    $(".texto-informe").attr('disabled', 'disabled');
    $(".anecdotario").attr('disabled', 'disabled');
    $(".grabacion-disponible").attr('disabled', 'disabled');
    $(".resultado-llamada").attr('disabled', 'disabled');
    $(".observaciones").attr('disabled', 'disabled');
    $(".voluntario").attr('disabled', 'disabled');
    $(".sugerencia").attr('disabled', 'disabled');
}

function handleContenedorInferior(form) {
    $("#llamada-establecida").change(function() {
        if ($("#llamada-establecida option:selected").val() === "Si") {
            form.data('formValidation').addField('email', {
                validators: {
                    emailAddress: {
                        message: 'El email no es válido',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('email', true);
                            }
                        },
                    },
                },
            });
            form.data('formValidation').addField('dni', {
                validators: {
                    integer: {
                        message: 'El DNI sólo puede constar de números',
                        thousandsSeparator: '.',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('dni', true);
                            }
                        },
                    },
                    stringLength: {
                        message: 'El DNI debe tener de %s a %s dígitos',
                        trim: true,
                        min: 7,
                        max: 10,
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('dni', true);
                            }
                        },
                    },
                },
            });
            $(".contenedor-inferior").removeClass('slideUp').addClass('slideDown');
            enableFields();
            $('.nombre').focus();
        }
        else {
            $(".contenedor-inferior").removeClass('slideDown').addClass('slideUp')
            
            form.data('formValidation').removeField('email');
            form.data('formValidation').removeField('dni');
            disableFields();
            $('.texto-informe').focus();
        }
    })
}

function handleInforme(form) {
    $("#enviar-informe").change(function() {
        if ($("#enviar-informe option:selected").val() === "Si") {
            form.data('formValidation').addField('textoInforme', {
                validators: {
                    notEmpty: {
                        message: 'El informe no puede estar vacío',
                    },
                },
            });
            
            $(".texto-informe").removeAttr('disabled');
            $(".texto-informe").removeClass('slideUp').addClass('slideDown');
        }
        else {
            $(".texto-informe").removeClass('slideDown').addClass('slideUp');
            $(".texto-informe").next().hide();
            $(".texto-informe").attr('disabled', 'disabled');
            $("#enviar-informe").parents('.form-group').removeClass('has-feedback has-success');
            $("#enviar-informe").parents('.form-group').removeClass('has-feedback has-error');
        }
    });
}

function handleSugerencia(form) {
    $("#enviar-sugerencia").change(function() {
        if ($("#enviar-sugerencia option:selected").val() === "Si") {
            form.data('formValidation').addField('textoSugerencia', {
                validators: {
                    notEmpty: {
                        message: 'La sugerencia no puede estar vacía',
                    },
                },
            });
            
            $(".texto-sugerencia").removeAttr('disabled');
            $(".texto-sugerencia").removeClass('slideUp').addClass('slideDown');
        }
        else {
            $(".texto-sugerencia").removeClass('slideDown').addClass('slideUp');
            $(".texto-sugerencia").next().hide();
            $(".texto-sugerencia").attr('disabled', 'disabled');
            $("#enviar-sugerencia").parents('.form-group').removeClass('has-feedback has-success');
            $("#enviar-sugerencia").parents('.form-group').removeClass('has-feedback has-error');
        }
    });
}

function initValidator(form) {
    var options = {
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            campana: {
                validators: {
                    notEmpty: {
                        message: 'El nombre de la campaña no puede estar vacío',
                    },
                }
            },
            fecha: {
                icon: false,
                validators: {
                    date: {
                        message: 'La fecha no es válida',
                        format: 'DD/MM/YYYY',
                        min: '31/12/2015',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('fecha', true);
                            }
                        }, 
                    },
                },
            },
            hora: {
                icon: false,
                validators: {
                    regexp: {
                        message: 'La hora no es valida',
                        regexp: '^([0-9]|0[0-9]|1?[0-9]|2[0-3]):[0-5]?[0-9]$',
                        onSuccess: function(e, data) {
                            if (data["element"]['0']['value'].length === 0) {
                                form.data('formValidation').resetField('hora', true);
                            }
                        },
                    },
                },
            },
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'El teléfono no puede estar vacío',
                    },
                },
            },
        },
    };
    
    form.formValidation(options)
        .on('success.field.fv', function(e, data) {
            element = $(data.element);
            
            if (element.hasClass('observaciones') || (element.is('#enviarInforme') && element.val() === 'No')) {
                var $parent = data.element.parents('.form-group');
                
                $parent.removeClass('has-feedback has-success');
                data.element.data('fv.icon').hide();
            }

        })
        .on('success.form.fv', function(e) {
                e.preventDefault();
        })
    
    handleContenedorInferior(form);
    handleInforme(form);
    handleSugerencia(form);
}

function send(form, callback) {
    var destination = form.attr("action");
    var data = form.serialize();
    
    $.ajax(destination, {
        success: function(data) {
            callback();
        },
        error: function(xhr, status, error) {
            alert("No se pudo establecer una conexión con el servidor.\nIntente guardar el registro otra vez.")
            $(".btn-submit").enable();
        },
        data: data,
        method: 'POST',
    });
}

$(document).ready(function() {   
    initValidator($('#formulario'));
    
    $('.campana').ftakar({
        saveOnChange: true,
        clearOnSubmit: false,
        savedDataName: 'CRM',
        beforeSave: function(){ },
        onLoad: function() {
            $('.campana').val().length > 0 ? $('.telefono').focus() : $('.campana').focus();
        },
    });
    
    $(".fecha").val(moment().format('DD/MM/YYYY'));
    $(".hora").val(moment().format('HH:mm'));
    $('[data-toggle="tooltip"]').tooltip();
    
    $('.input-group.date').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        language: 'es',
    });
    $('.time-picker').timepicker({
        template: 'dropdown',
        maxHours: 24,
        minuteStep: 1,
        showMeridian: false,
        defaultTime: false,
        explicitMode: true,
    });
    
    $('.campana').val().length > 0 ? $('.telefono').focus() : $('.campana').focus();
    
    $('#modal-success').on('hidden.bs.modal', function () {
        $('#formulario').data('formValidation').destroy();
        
        location.reload();
    });
    
    $("#formulario").submit(function(event) {
        event.preventDefault();
        
        if ($("#llamada-establecida option:selected").val() === "No") {
            disableFields();
        }
        
        if ($("#enviar-informe option:selected").val() === "No") {
            $(".texto-informe").attr('disabled', 'disabled');
        }
        
        if ($(this).data('formValidation').getMessages().length === 0) {
            send($(this), function() {
                $('#modal-success').modal({
                    keyboard: true,
                    show: true,
                });                         
            }); 
        }
        else {
            if ($("#enviar-informe option:selected").val() === "No") {
                $('#enviar-informe').closest('.has-feedback').removeClass('has-feedback has-success');
            }
            if ($(".observaciones").text() === "") {
                $('.observaciones').closest('.has-feedback').removeClass('has-feedback has-success');
                $('.observaciones').next().remove();
            }
        }
    });
});
