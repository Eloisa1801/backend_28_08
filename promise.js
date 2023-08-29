// PROMISE
// O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona
// e seu valor resultante.

// Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada.
// Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação
// assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez
//  de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer
//  o valor em algum momento no futuro.

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true;

      if (sucesso) {
        resolve("Operação concluída com sucesso!");
      } else {
        reject("Algo deu errado na operação!");
      }
    }, 2000);
  });
}

async function executarPromise() {
  try {
    const resultado = await exemploPromise();
    console.log(resultado);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

executarPromise();

//pesquisar/implementar requisição com axios. Fazer requisição placeholder
