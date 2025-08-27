<?php

namespace app\models;

abstract class Model
{
  private $connection;

  public function __construct()
  {
    $this->connection = Connection::connect();
  }

  public function find($field, $value)
  {
    $sql = "SELECT * FROM {$this->table} WHERE  {$field} = ?";

    $find = $this->connection->prepare($sql);
    $find->bindValue(1, $value);
    $find->execute();

    return $find->fetch();
  } //? all

}
