<?php

// ------------------------------------------------------------------------------
//   Data processing
// ------------------------------------------------------------------------------

class Backend {  
    public static function process() {
        $f3 = Base::instance();
        $registro = new Registro();
        
        $registro->load()->cleanup()->insert();
    }
    
    public static function login() {
        $f3 = Base::instance();
        $db = $f3->get('DB');

        $usuarios = new DB\SQL\Mapper($db, 'Usuarios');    
        $auth =  new Auth($usuarios, array('id'=>'user', 'pw'=>'pass'));
               
        $authenticated = $auth->basic(function($password){
            return md5($password);
        });

        return $authenticated ? true : false;
    }
}

?>