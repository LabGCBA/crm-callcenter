<?php

// ------------------------------------------------------------------------------
//   Data API
// ------------------------------------------------------------------------------

class Api {
    
    // JSON
    public static function json() {
        if (Backend::login()) {
            $f3 = Base::instance();
            $db = $f3->get('DB');
            
            $rows = array_values($db->exec('SELECT * FROM Contactos'));
            $registros = count($rows);
            
            $count = array_values($db->exec('SELECT * FROM Contactos WHERE llamadaEstablecida LIKE ' . "'Si'"));
            $llamadasConcretadas = count($count); 
            
            $result = ['registros' => $registros, 'llamadasConcretadas' => $llamadasConcretadas,  'data' => $rows];
            
            echo json_encode($result);
        }
        else die('No autorizado.');
    }

    // CSV
    public static function csv() {
        if (Backend::login()) {
            $f3 = Base::instance();
            $db = $f3->get('DB');
            $contactos = new DB\SQL\Mapper($db, 'Contactos');
            
            if ($f3->exists('PARAMS.date') && !$f3->exists('PARAMS.dateTo')) {
                $date = $f3->clean(addslashes(date("Y-m-d", strtotime($f3->get('PARAMS.date')))));
                
                $query = "SELECT * FROM Contactos WHERE fecha = '" . $date . "'";
            }
            else if ($f3->exists('PARAMS.dateFrom') && $f3->exists('PARAMS.dateTo')) {
                $dateFrom = $f3->clean(addslashes(date("Y-m-d", strtotime($f3->get('PARAMS.dateFrom')))));
                $dateTo = $f3->clean(addslashes(date("Y-m-d", strtotime($f3->get('PARAMS.dateTo')))));
                
                $query = "SELECT * FROM Contactos WHERE fecha >= '" . $dateFrom . "' AND fecha <= '" . $dateTo . "'";
            }
            else {
                $query = 'SELECT * FROM Contactos';
            }
            
            $rows = array_values($db->exec($query));
            $headers = array_values($contactos->fields());
            $num_fields = count($rows); 
            
            $fp = fopen('php://output', 'w'); 
            
            if ($fp) 
            {     
                header('Content-Type: text/csv');
                header('Content-Disposition: attachment; filename="callcenter.csv"');
                header('Pragma: no-cache');    
                header('Expires: 0');
                
                fputs($fp, "\xEF\xBB\xBF"); // UTF-8 BOM -> así aparezcan los carácteres especiales
                fputcsv($fp, $headers); 
                
                foreach ($rows as $row) 
                {
                    fputcsv($fp, array_values($row)); 
                }
            }
        }
        
        else die('No autorizado.');   
    }
    
    // XLSX
    public static function xlsx() {
        $f3 = Base::instance();
        
        if (Backend::login()) {
            require_once('PHPExcel.php');
        
            $db = $f3->get('DB');
            $contactos = new DB\SQL\Mapper($db, 'Contactos');
            
            if ($f3->exists('PARAMS.date') && !$f3->exists('PARAMS.dateTo')) {
                $date = $f3->clean(addslashes(date("Y-m-d", strtotime($f3->get('PARAMS.date')))));
                
                $query = "SELECT * FROM Contactos WHERE fecha = '" . $date . "'";
            }
            else if ($f3->exists('PARAMS.dateFrom') && $f3->exists('PARAMS.dateTo')) {
                $dateFrom = $f3->clean(addslashes(date("Y-m-d", strtotime($f3->get('PARAMS.dateFrom')))));
                $dateTo = $f3->clean(addslashes(date("Y-m-d", strtotime($f3->get('PARAMS.dateTo')))));
                
                $query = "SELECT * FROM Contactos WHERE fecha >= '" . $dateFrom . "' AND fecha <= '" . $dateTo . "'";
            }
            else {
                $query = 'SELECT * FROM Contactos';
            }
            
            $rows = $db->exec($query);
            $rows = array_values($rows);
            $headers = array_values($contactos->fields());

            $num_fields = count($rows); 
        
            $objPHPExcel = new PHPExcel();
            $objPHPExcel-> getProperties()
                                ->setCreator("Gobierno de Buenos Aires")
                                ->setLastModifiedBy("Gobierno de Buenos Aires")
                                ->setTitle("CRM Callcenter")
                                ->setDescription("Datos del CRM del Callcenter");
                                
            $i = 2; 
            
            $objPHPExcel->getDefaultStyle()->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
            
            $objPHPExcel->setActiveSheetIndex(0);
            $activeSheet = $objPHPExcel->getActiveSheet();
            $activeSheet->getStyle(1)->getFont()->setBold(true);
            $activeSheet->fromArray($headers, "", 'A1');
            
            foreach ($rows as $row) {                  
                    $activeSheet->fromArray($row, "", 'A'.$i);
                    $i++;
            }
            
            foreach(range('A','Z') as $columnID) {
                $activeSheet->getColumnDimension($columnID)->setAutoSize(true);
            }

            header('Content-Type: application/vnd.ms-excel');
            header('Content-Disposition: attachment;filename="callcenter.xlsx"');
            header('Cache-Control: max-age=0');
                
            $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel,'Excel2007');
            $objWriter->save('php://output');
        }
        else die('No autorizado.');
    }
}

?>