/*window.addEventListener('load', function() {
      if(localStorage.getItem('funcionarios')) {
        funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
        exibirFuncionarios();
      }
});*/

  let funcionarios = [];

    document.getElementById("btnCadastrar").addEventListener("click", function() {
      cadastrarFuncionario() 
    });

    function cadastrarFuncionario() {
      
      let nome = document.getElementById("nome").value;
      let cargo = document.getElementById("cargo").value;
      let departamento = document.getElementById("departamento").value;
      let idade = document.getElementById("idade").value;
      let salario = document.getElementById("salario").value;

      let funcionario = {
        nome: nome,
        cargo: cargo,
        departamento: departamento,
        idade: idade,
        salario: salario
      };
      

      funcionarios.push(funcionario);
      salvarNoCache();
      exibirFuncionarios();
      limparCampos();
    }

    function exibirFuncionarios() {
      let listaFuncionarios = document.getElementById("listaFuncionarios");
      listaFuncionarios.innerHTML = "";

      for (let i = 0; i < funcionarios.length; i++) {
        let funcionario = funcionarios[i];
        let itemLista = document.createElement("div");
        itemLista.textContent = 
        "Nome: " + funcionario.nome + 
        ", Cargo: " + funcionario.cargo +
        ", Departamento: " + funcionario.departamento +
        ", Idade: " + funcionario.idade + 
        ", Salário: " + funcionario.salario;
        listaFuncionarios.appendChild(itemLista);
      }
    }

    function salvarNoCache() {
      localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    }

    function limparCampos() {
      document.getElementById("nome").value = "";
      document.getElementById("cargo").value = "";
      document.getElementById("idade").value = "";
      document.getElementById("salario").value = "";
    }

