<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <meta name="description" content="CRM Callcenter">
        <meta name="author" content="Buenos Aires Ciudad">
        
        <title>Buenos Aires Ciudad</title>
        
        <link rel="shortcut icon" href="assets/bastrap3/favicon.ico">
        <link rel="apple-touch-icon-precomposed" href="assets/bastrap3/favicon.ico">
        <link rel="stylesheet" href="assets/bastrap3/bootstrap.min.css">
        <link rel="stylesheet" href="assets/bastrap3/bastrap.css">
        
        <!-- STYLES -->
        <link rel="stylesheet" href="assets/css/combined-form.css">
        
        <!--[if lt IE 9]>
            <script src="bastrap3/ba-modernizr.js"></script>
        <!--[endif]-->
    </head>
    <body>
        
        <!-- BRANDING -->
        <header class="navbar navbar-primary navbar-top" >
            <div class="container">
                <a class="navbar-brand" href="./">
                    <img src="assets/img/logoba.png" alt="Buenos Aires Ciudad">
                </a>
            </div>
        </header>
        
        <div class="container">
            
            <!-- MENÚ -->
            <nav class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <ul class="nav navbar-header navbar-left">
                        <li class="navbar-brand">CRM Callcenter</li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href=".<?php echo \Base::instance()->alias('form'); ?>">Nuevo</a></li>
                        <li><a href=".<?php echo \Base::instance()->alias('datos'); ?>">Datos</a></li>
                    </ul>
                </div>
            </nav>
            
            <!-- MODAL SUCCESS -->
            <div class="col-md-12">
                <div class="modal fade" id="modal-success" tabindex="-1" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" id="modal-title">Éxito</h4>
                            </div>
                            <div class="modal-body">
                                El contacto se cargó correctamente.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal" data-toggle="tooltip" data-placement="bottom" title='o con Esc'>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- TIÍULO -->
                <div class="row title text-center">
                    <h2>Nuevo Registro</h2>
                </div>
            </div>
             
            <form class="form-horizontal" role="form" action="backend" method="POST" id="formulario">
                
                <!-- CAMPANA -->
                <div class="form-group">
                    <label class="col-md-4 control-label">Campaña</label>
                    <div class="col-md-5">
                        <input class="form-control campana" name="campana" placeholder="Campaña" type="text">
                    </div>
                </div>
                
                <!-- FECHA -->
                <div class="form-group">
                    <label class="col-md-4 control-label">Fecha</label>
                    <div class="col-md-5">
                        <div class="input-group date">
                            <input class="form-control fecha" name="fecha" placeholder="Fecha" type="text">
                            <span class="input-group-addon">
                                    <i class="glyphicon glyphicon-calendar"></i>
                            </span>
                        </div>
                    </div>
                </div>
                
                <!-- HORA -->
                <div class="form-group">
                    <label class="col-md-4 control-label">Hora</label>
                    <div class="col-md-5">
                        <div class="input-group bootstrap-timepicker timepicker">
                            <input class="form-control hora time-picker" name="hora" placeholder="Hora" type="text">
                            <span class="input-group-addon">
                                <i class="glyphicon glyphicon-time"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- TELÉFONO -->
                <div class="form-group">
                    <label class="col-md-4 control-label">Teléfono</label>
                    <div class="col-md-5">
                        <input class="form-control telefono" name="telefono" placeholder="Teléfono" type="text">
                    </div>
                </div>
                
                <!-- LLAMADA ESTABLECIDA -->
                <div class="form-group has-button">
                    <label class="col-md-4 control-label">Llamada establecida</label>
                    <div class="btn-group col-md-5">
                        <select class="form-control chosen-select" id="llamada-establecida" name="llamadaEstablecida">
                            <option value="No" selected>No</option>
                            <option value="Si">Si</option>
                        </select>
                    </div>
                </div>
                
                
                <!-- CONTENEDOR COLAPSANTE -->  
                <div class="contenedor-inferior slideUp">
                    
                    <hr class="col-md-7 col-md-offset-2">
                    
                    <!-- NOMBRE -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Nombre</label>
                        <div class="col-md-5">
                            <input class="form-control nombre" name="nombre" placeholder="Nombre" type="text">
                        </div>
                    </div>
                    
                    <!-- APELLIDO -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Apellido</label>
                        <div class="col-md-5">
                            <input class="form-control" name="apellido" placeholder="Apellido" type="text">
                        </div>
                    </div>
                    
                    <!-- DNI -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">DNI</label>
                        <div class="col-md-5">
                            <input class="form-control" name="dni" placeholder="DNI" type="text">
                        </div>
                    </div>
                    
                    <!-- GÉNERO -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Género</label>
                        <div class="col-md-5">
                            <select class="form-control chosen-select genero" name="genero">
                                <option value="Masculino" selected>Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- EDAD -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Edad entre</label>
                        <div class="col-md-5">
                            <select class="form-control chosen-select edad" name="edad">
                                <option value="-18" selected>-18</option>
                                <option value="18-30">18-30</option>
                                <option value="31-49">31-49</option>
                                <option value="50-65">50-65</option>
                                <option value="+65">+65</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- EMAIL-->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Email</label>
                        <div class="col-md-5">
                            <input class="form-control" name="email" placeholder="Email" type="text">
                        </div>
                    </div>
                    
                    <!-- CELULAR -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Celular</label>
                        <div class="col-md-5">
                            <input class="form-control" name="celular" placeholder="Celular" type="text">
                        </div>
                    </div>
                    
                    <!-- DURACIÓN DE LA LLAMADA -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Duración de la llamada</label>
                        <div class="col-md-5">
                            <div class="input-group bootstrap-timepicker timepicker">
                                <input class="form-control time-picker" name="duracionLlamada" placeholder="Duración" type="text">
                                <span class="input-group-addon">
                                    <i class="glyphicon glyphicon-time"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- BAJÓ EL MENSAJE -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Se bajó el mensaje?</label>
                        <div class="col-md-5">
                            <select class="form-control chosen-select"bajo-mensaje" name="bajoMensaje">
                                <option value="No" selected>No</option>
                                <option value="Si">Si</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- TEMAS DE CONVERSACIÓN -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Temas de conversación</label>
                        <div class="col-md-5 temas-conversacion">
                            <div class="col-md-3">
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Basura"> Basura
                                </div>
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Veredas"> Veredas
                                </div>
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Poda"> Poda
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Seguridad"> Seguridad
                                </div>
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Bacheo"> Bacheo
                                </div>
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Espacios Verdes"> Espacios Verdes
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Obras"> Obras
                                </div>
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Alumbrado"> Alumbrado
                                </div>
                                <div class="checkbox">
                                    <input name="temasConversacion[]" type="checkbox" value="Otros"> Otros
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- ENVIAR INFORME -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Enviar informe</label>
                        <div class="col-md-5">
                            <select class="form-control" name="enviarInforme" id="enviar-informe">
                                <option value="No" selected>No</option>
                                <option value="Si">Si</option>
                            </select>
                        </div>   
                        <div class="col-md-5 col-md-offset-4 texto-informe slideUp">
                            <div class="temas-informe">
                                <div class="col-md-5">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Dengue"> Dengue
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="EcoBici"> EcoBici
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Educación"> Educación
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Espacios Públicos"> Espacios Públicos
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Espacios Verdes"> Espacios Verdes
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Eventos"> Eventos
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Hospitales, especialidades y turnos"> Hospitales, especialidades y turnos
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Info General"> Info General
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Metrobus"> Metrobus
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Obras"> Obras
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Poda"> Poda
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Reciclado"> Reciclado
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Residuos/Recolección"> Residuos/Recolección
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Reuniones Vecinos"> Reuniones Vecinos
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Salud"> Salud
                                    </div>                                    
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Seguridad"> Seguridad
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Talleres"> Talleres
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Tercera Edad"> Tercera Edad
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Trabajo"> Trabajo
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Trámites"> Trámites
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Traspaso Policía"> Traspaso Policía
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Turnos"> Turnos
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Viviendas"> Vivienda
                                    </div>
                                    <div class="checkbox">
                                        <input name="temasInforme[]" type="checkbox" value="Voluntariado"> Voluntariado
                                    </div>
                                </div>                                    
                            </div>

                            <textarea class="form-control texto-informe" maxlength="200" name="textoInforme" rows="5"></textarea>
                        </div>        
                    </div>
                    
                    <!-- ANECDOTARIO -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Anecdotario</label>
                        <div class="col-md-5">
                            <select class="form-control chosen-select anecdotario" name="anecdotario">
                                <option value="No" selected>No</option>
                                <option value="Si">Si</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- GRABACIÓN DISPONIBLE -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Grabación disponible</label>
                        <div class="col-md-5">
                            <select class="form-control chosen-select grabacion-disponible" name="grabacionDisponible">
                                <option value="No" selected>No</option>
                                <option value="Si">Si</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- RESULTADO DE LA LLAMADA -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Resultado de la llamada</label>
                        <div class="col-md-5">
                            <select class="form-control chosen-select resultado-llamada" name="resultadoLlamada">
                                <option value="Positivo">Positivo</option>
                                <option value="Neutro" selected>Neutro</option>
                                <option value="Negativo">Negativo</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- OBSERVACIONES -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Observaciones</label>
                        <div class="col-md-5">
                            <textarea class="form-control observaciones" maxlength="200" name="observaciones" rows="5"></textarea>
                        </div>
                    </div>
                    
                    <!-- VOLUNTARIO -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Voluntario</label>
                        <div class="col-md-5">
                            <select class="form-control chosen-select voluntario" name="voluntario">
                                <option value="No" selected>No</option>
                                <option value="Si">Si</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- SUGERENCIA -->
                    <div class="form-group has-button">
                        <label class="col-md-4 control-label">Enviar sugerencia</label>
                        <div class="col-md-5">
                            <select class="form-control" name="enviarSugerencia" id="enviar-sugerencia">
                                <option value="No" selected>No</option>
                                <option value="Si">Si</option>
                            </select>
                        </div>  
                        <div class="col-md-5 col-md-offset-4 texto-sugerencia slideUp">
                            <textarea class="form-control texto-sugerencia" maxlength="200" name="textoSugerencia" rows="5"></textarea>
                        </div> 
                    </div>
                </div>
               
                <!-- BOTÓN GUARDAR -->
                <div class="form-group">
                    <div class="col-md-5 col-md-offset-4" id="enviar">
                        <button class="btn btn-lg btn-primary btn-block btn-submit" type="submit">Guardar</button>
                    </div>
                </div> 
            </form>
                
        </div>
                
        <script src="assets/js/combined-form.js"></script>
        
    </body>
</html> 