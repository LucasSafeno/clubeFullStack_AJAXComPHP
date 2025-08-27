<?php

namespace app\models;

class User extends Model
{
  protected $table = "users";

  public function create($name, $email)
  {
    $sql = "INSERT INTO {$this->table} (user, email) VALUES (:name, :email)";
    $create = $this->connection->prepare($sql);
    $create->bindValue(":name", $name);
    $create->bindValue(":email", $email);
    $create->execute();

    return $this->connection->lastInsertId();
  }
}
