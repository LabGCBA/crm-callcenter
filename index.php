<?php

$f3 = require('lib/base.php');

// ------------------------------------------------------------------------------
//   Config
// ------------------------------------------------------------------------------

$f3->set('AUTOLOAD','classes/');
$f3->set('DEBUG', 0);

$f3->set('DB', new DB\SQL(
            'mysql:host=localhost;port=3306;dbname=crm-callcenter',
            'root', // USER
            'mysql' // PASS
        ));

// ------------------------------------------------------------------------------
//    Routes
// ------------------------------------------------------------------------------

// Frontend

$f3->route('GET @form: /',
    function() {
        echo Template::instance()->render('templates/form.html');
    }
);

$f3->route('GET @datos: /datos',
    function($f3) {
        if (Backend::login()) {
            echo Template::instance()->render('templates/datos.html');
        }
        else {
            echo Template::instance()->render('templates/redirect.html');
        }
    }
);

// Backend

$f3->route('POST @backend: /backend [ajax]','Backend::process');

// Data API

$f3->route('POST @json: /api/json [ajax]', 'Api::json');
$f3->route(['GET @xlsx: /api/xlsx', 'GET @xlsx: /api/xlsx/@date', 'GET @xlsx: /api/xlsx/@dateFrom/@dateTo'], 'Api::xlsx');
$f3->route(['GET @csv: /api/csv', 'GET @csv: /api/csv/@date', 'GET @csv: /api/csv/@dateFrom/@dateTo'], 'Api::csv');

$f3->run();

?>