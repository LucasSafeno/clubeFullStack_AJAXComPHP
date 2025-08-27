var btn_users = document.querySelector('#btn-users');
var div_users = document.querySelector('#div-users');
var form_cadastrar = document.querySelector('#form-cadastrar');
var div_create = document.querySelector('#div-create');

form_cadastrar.onsubmit = function (event) {
  event.preventDefault();

  xmlHttpPost('ajax/create', function () {
    beforeSend(function () {
      div_create.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only"> Loading</span>`;
    });

    success(function () {});
  });
};

window.onload = function () {
  btn_users.onclick = function () {
    xmlHttpGet(
      'ajax/user',
      function () {
        beforeSend(function () {
          div_users.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only"> Loading</span>`;
        });

        success(function () {
          console.log(JSON.parse(xhttp.responseText));

          var users = JSON.parse(xhttp.responseText);
          var table = `<table class="table table-striped">`;

          table += `<thead><tr><td>ID</td><td>Name</td><td>Email</td></tr></thead>`;

          table += `<tbody>`;

          users.forEach(function (user) {
            table += `<tr>`;
            table += `<td>${user.id}</td>`;
            table += `<td>${user.name}</td>`;
            table += `<td>${user.email}</td>`;
            table += `</tr>`;
          });

          table += `</tbody></table>`;

          div_users.innerHTML = table;
        });

        // Trata o erro, caso ocorra.
        error(function () {
          div_users.innerHTML = 'Ocorreu um erro';
        });
      },
      '?id=1'
    );
  };
};
