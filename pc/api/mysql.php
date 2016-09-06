<?php
class mysql
{
    static private $_instance;
    static private $_connectSource;
    private $_dbConfig = array(
        'host' =>'127.0.0.1',
        'user' =>'root',
        'password'=>'091501100486',
        'database'=>'questionnaires'
    );

    private function __construct(){
    }
    static public function connect(){

    }
}