var btn_users = document.querySelector('#btn-users');
var div_users = document.querySelector('#div-users');

window.onload = function () {
  btn_users.onclick = function () {
    // A função xmlHttpGet inicia a requisição AJAX.
    // O segundo argumento é a função de callback que será executada
    // sempre que o estado da requisição (readyState) mudar.
    xmlHttpGet('ajax/user', function () {
      // Esta função interna agora é o seu onreadystatechange.
      // Ela será chamada múltiplas vezes durante o ciclo de vida da requisição.

      // Mostra o ícone de "loading" enquanto a requisição não estiver completa.
      beforeSend(function () {
        div_users.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only"> Loading</span>`;
      });

      // Quando a requisição for bem-sucedida (readyState 4 e status 200),
      // o conteúdo da div é atualizado com a tabela.
      success(function () {
        var users = JSON.parse(xhttp.responseText);
        var table = `<table class="table table-striped">`;

        table += `<thead><tr><td>ID</td><td>Name</td><td>Email</td></tr></thead>`;

        // Note que aqui faltava um ">" no seu código original
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
    });
  };
};
