<?php

// ------------------------------------------------------------------------------
//   Model methods
// ------------------------------------------------------------------------------

class Registro {
    private $contacto;
    
    public function __construct() {
        $this->contacto = new Contacto();
    }
    
    public function load() {
        $f3 = Base::instance();
        
        $this->contacto->campana = $f3->get('POST.campana');
        $this->contacto->fecha = $f3->get('POST.fecha');
        $this->contacto->hora = $f3->get('POST.hora');
        $this->contacto->telefono = $f3->get('POST.telefono');
        $this->contacto->llamadaEstablecida = $f3->get('POST.llamadaEstablecida');
        $this->contacto->nombre = $f3->get('POST.nombre');
        $this->contacto->apellido = $f3->get('POST.apellido');
        $this->contacto->dni = $f3->get('POST.dni');
        $this->contacto->genero = $f3->get('POST.genero');
        $this->contacto->edad = $f3->get('POST.edad');
        $this->contacto->email = $f3->get('POST.email');
        $this->contacto->celular = $f3->get('POST.celular');
        $this->contacto->duracionLlamada = $f3->get('POST.duracionLlamada');
        $this->contacto->bajoMensaje = $f3->get('POST.bajoMensaje');
        $this->contacto->temasConversacion = $f3->get('POST.temasConversacion');
        $this->contacto->temasInforme = $f3->get('POST.temasInforme');
        $this->contacto->enviarInforme = $f3->get('POST.enviarInforme');
        $this->contacto->textoInforme = $f3->get('POST.textoInforme');
        $this->contacto->anecdotario = $f3->get('POST.anecdotario');
        $this->contacto->grabacionDisponible = $f3->get('POST.grabacionDisponible');
        $this->contacto->resultadoLlamada = $f3->get('POST.resultadoLlamada');
        $this->contacto->observaciones = $f3->get('POST.observaciones');
        $this->contacto->voluntario = $f3->get('POST.voluntario');
        $this->contacto->sugerencia = $f3->get('POST.sugerencia');
        $this->contacto->textoSugerencia = $f3->get('POST.textoSugerencia');
        
        return $this; // for chaining purposes
    }
    
    public function cleanup() {
        $f3 = Base::instance();
        
        $this->contacto->campana = $f3->clean(addslashes(trim($this->contacto->campana)));
        $this->contacto->fecha = $f3->clean(addslashes(trim($this->contacto->fecha)));
        $this->contacto->hora = $f3->clean(addslashes(trim($this->contacto->hora)));
        $this->contacto->telefono = $f3->clean(addslashes(trim($this->contacto->telefono)));
        $this->contacto->nombre = $f3->clean(addslashes(trim($this->contacto->nombre)));
        $this->contacto->apellido = $f3->clean(addslashes(trim($this->contacto->apellido)));
        $this->contacto->dni = $f3->clean(addslashes(trim($this->contacto->dni)));
        $this->contacto->email = $f3->clean(addslashes(trim($this->contacto->email)));
        $this->contacto->celular = $f3->clean(addslashes(trim($this->contacto->celular)));
        $this->contacto->duracionLlamada = $f3->clean(addslashes(trim($this->contacto->duracionLlamada)));
        $this->contacto->textoInforme = $f3->clean(addslashes(trim($this->contacto->textoInforme)));
        $this->contacto->observaciones = $f3->clean(addslashes(trim($this->contacto->observaciones)));
        $this->contacto->textoSugerencia = $f3->clean(addslashes(trim($this->contacto->textoSugerencia)));
        
        return $this; // for chaining purposes
    }
    
    public function insert() {
        $f3 = Base::instance();
        $db = $f3->get('DB');
        $registro = new DB\SQL\Mapper($db, 'Contactos');
        
        $registro->campana = $this->contacto->campana;
        $registro->fecha = $this->contacto->fecha != '' ? date("Y-m-d", strtotime(str_replace('/', '-', $this->contacto->fecha))) : null;
        $registro->hora = $this->contacto->hora != '' ? $this->contacto->hora : null;
        $registro->telefono = $this->contacto->telefono;
        $registro->llamadaEstablecida = $this->contacto->llamadaEstablecida;
        $registro->nombre = $this->contacto->nombre != '' ? $this->contacto->nombre : null;
        $registro->apellido = $this->contacto->apellido != '' ? $this->contacto->apellido : null;
        $registro->dni = $this->contacto->dni != '' ? intval($this->contacto->dni) : null ;
        $registro->genero = $this->contacto->genero;
        $registro->edad = $this->contacto->edad;
        $registro->email = $this->contacto->email != '' ? $this->contacto->email : null;
        $registro->celular = $this->contacto->celular != '' ? $this->contacto->celular : null;
        $registro->duracionLlamada = $this->contacto->duracionLlamada != '' ? $this->contacto->duracionLlamada : null;
        $registro->bajoMensaje = $this->contacto->bajoMensaje;
        $registro->temasConversacion = $this->contacto->temasConversacion != null ? implode(', ', $this->contacto->temasConversacion) : null;
        $registro->temasInforme = $this->contacto->temasConversacion != null ? implode(', ', $this->contacto->temasConversacion) : null;
        $registro->enviarInforme = $this->contacto->enviarInforme;
        $registro->textoInforme = $this->contacto->textoInforme != '' ? $this->contacto->textoInforme : null;
        $registro->anecdotario = $this->contacto->anecdotario;
        $registro->grabacionDisponible = $this->contacto->grabacionDisponible;
        $registro->resultadoLlamada = $this->contacto->resultadoLlamada;
        $registro->observaciones = $this->contacto->observaciones != '' ? $this->contacto->observaciones : null;
        $registro->voluntario = $this->contacto->voluntario;
        $registro->sugerencia = $this->contacto->sugerencia;
        $registro->textoSugerencia = $this->contacto->textoSugerencia;
        $registro->guardado = date('Y-m-d H:i:s');
        
        $registro->save();
    }
}

?>