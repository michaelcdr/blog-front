let urlCategorias = 'https://michaelcdrblog.herokuapp.com/categorias';

function obterCategorias()
{
    const myRequest = new Request(urlCategorias, {
        method: 'GET', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } 
    });

    fetch(myRequest)
        .then(response => { return response.json(); })
        .then(dados => {
           console.log(dados);
             
        }).catch(error => {
            console.log(error);
            console.error("Teste...");
        });
}

obterCategorias();