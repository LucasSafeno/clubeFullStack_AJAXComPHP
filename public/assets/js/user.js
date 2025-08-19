window.onload = function () {
  var xhttp = new XMLHttpRequest();

  var btn_users = document.querySelector('#btn-users');
  var div_users = document.querySelector('#div-users');

  btn_users.onclick = function () {
    if (xhttp.readyState < 4) {
      div_users.innerHTML = `<i class='fa fa-refresh fa-spin fa-3x fa-fw'></i><span class='sr-only'>Loading..</span>`;
    }

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var users = JSON.parse(this.responseText);

        var table = `<table class='table table-striped'>`;
        table += `<thead><tr><td>ID</td><td>Nome</td><td>E-mail</td></tr><thead>`;
        table += `<tbody>`;
        users.forEach(function (user) {
          table += `<tr>`;

          table += `<td>${user.id}</td>`;
          table += `<td>${user.name}</td>`;
          table += `<td>${user.email}</td>`;

          table += `</td>`;
        });
        table += `</tbody>`;
        table += `</table>`;

        div_users.innerHTML = table;
      }
    };
    xhttp.open('GET', 'ajax/user.php', true);
    xhttp.send();
  };
};
