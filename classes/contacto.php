<?php

// ------------------------------------------------------------------------------
//   Data model
// ------------------------------------------------------------------------------

class Contacto implements JsonSerializable {
    public $campana;
    public $fecha;
    public $hora;
    public $telefono;
    public $llamadaEstablecida;
    public $nombre;
    public $apellido;
    public $dni;
    public $genero;
    public $edad;
    public $email;
    public $celular;
    public $duracionLlamada;
    public $bajoMensaje;
    public $temasConversacion;
    public $enviarInforme;
    public $temasInforme;
    public $textoInforme;
    public $anecdotario;
    public $grabacionDisponible;
    public $resultadoLlamada;
    public $observaciones;
    public $voluntario;
    public $sugerencia;
    public $textoSugerencia;
    
    public function jsonSerialize()
    {
        return json_encode(get_object_vars($this));
    }
}

?>