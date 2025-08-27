<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha512-6MXa8B6uaO18Hid6blRMetEIoPqHf7Ux1tnyIQdpt9qI5OACx7C+O3IVTr98vwGnlcg0LOLa02i9Y1HpVhlfiw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>AJAX</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
  <div class="container">
    <div class="row">

      <ul class="nav nav-tabs">
        <li class="active"><a href="#home" data-toggle="tab">Users</a></li>
        <li><a href="#menu1" data-toggle="tab">Cadastrar</a></li>
        <li><a href="#menu2" data-toggle="tab">Buscar</a></li>
      </ul>

      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <br>
          <button id="btn-users" class="btn btn-default">Listar users</button>
          <hr>

          <div id="div-users"></div>

        </div>

        <div id="menu1" class="tab-pane fade">
          <br>
          <div id="div-create"> </div>
          <form action="" method="POST" role="form" id="form-cadastrar" enctype="multipart/form-data">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" name="name" placeholder="Name">
            </div>

            <div class="form-group">
              <label for="email">E-mail</label>
              <input type="email" class="form-control" name="email" placeholder="E-mail">
            </div>


            <button type="submit" class="btn btn-primary" id="btn_cadastrar">Cadastrar</button>


          </form>
        </div>
      </div>

      <div id="menu2" class="tab-pane fade">
        <h3>Buscar</h3>
        <p>Em breve...</p>
      </div>
    </div>
  </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha512-3P8rXCuGJdNZOnUx/03c1jOTnMn3rP63nBip5gOP2qmUh5YAdVAvFZ1E+QLZZbC1rtMrQb+mah3AfYW11RUrWA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha512-iztkobsvnjKfAtTNdHkGVjAYTrrtlC7mGp/54c40wowO7LhURYl3gVzzcEqGl/qKXQltJ2HwMrdLcNUdo+N/RQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <script src="assets/js/xhttp.js"></script>
  <script src="assets/js/user.js"></script>
</body>

</html>
