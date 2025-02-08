# API Colormind

<img src="https://lh3.googleusercontent.com/proxy/IXjD0gXTBnI603VCezzvR2RvdTSLjrr2zc-SRPjnuK3KvrxUKMvLoA6M438jVV7PO1Rp" alt="Description of the image">



A **API Colormind** é uma ferramenta baseada em inteligência artificial usada para gerar paletas de cores. Ela pode ser muito útil para desenvolvedores e designers que querem criar esquemas de cores harmônicos para seus projetos, como sites, aplicativos, entre outros.

A **API Colormind** oferece várias funcionalidades, como gerar paletas de cores baseadas em tendências de design, em uma imagem ou até mesmo permitir que o usuário insira uma cor base e a API gera paletas complementares. A principal vantagem é que o Colormind usa um modelo de aprendizado profundo treinado em grandes bases de dados de cores para sugerir paletas visualmente agradáveis e harmoniosas.

---

## Funcionamento

 
Este código JavaScript interage com uma API externa para gerar uma paleta de cores com base em alguns dados de entrada. Vamos analisar linha por linha.

```javascript
var url = "http://colormind.io/api/";
```

`url`: Este é o endpoint da API Colormind. É um serviço que gera paletas de cores com base em diferentes dados de entrada.

---
 
```javascript
var http = new XMLHttpRequest();
```
`http`: Cria um novo objeto XMLHttpRequest. Este objeto é usado para fazer requisições HTTP em JavaScript, permitindo que você interaja com APIs.

---

```javascript
var data = {
    model: "default",
    input: [data1, data2, data3, data4, data5]  //N = locker
}
```
`data`: Este é o corpo da requisição que será enviado para a API.

`model`: O tipo de modelo de cor a ser usado. Aqui, está definido como "default", que provavelmente é um modelo de cor pré-definido pela Colormind.

`input`: Este array contém as cores de entrada para a paleta. Os valores (data1, data2, data3, data4, data5) são espaços reservados para as cores que você deseja usar. Esses valores podem ser códigos hexadecimais ou valores RGB.

---

```javascript
http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
    }
}
```

`http.onreadystatechange`: Esta função é chamada sempre que o estado da requisição muda.

A propriedade `readyState` rastreia o status da requisição. O valor 4 significa que a requisição foi concluída.
A propriedade `status` é 200 quando a requisição foi bem-sucedida.

Se ambas as condições forem atendidas, os dados da resposta são analisados no formato JSON e a paleta de cores resultante é extraída de `http.responseTex`t e armazenada na variável palette.

```javascript
function trigger() {
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
}
```

`trigger()`: Esta função é responsável por iniciar a requisição à API.

`http.open("POST", url, true)`: Abre uma requisição POST para o endpoint da API url. O parâmetro true torna a requisição assíncrona.

`http.send(JSON.stringify(data))`: Envia a requisição com o objeto data convertido para uma string JSON. Isso envia o modelo e as cores de entrada para a API.

---

Este script envia uma requisição POST para a API Colormind com algumas cores de entrada e um tipo de modelo.
Quando a resposta é recebida com sucesso (status 200), ele processa os dados e extrai a paleta de cores da resposta da API.
A função trigger() é chamada para enviar a requisição.

* <span style="color: red">OBS</span>
Como a requisição do site es´ta em `http...` o GitHub não permite a execução da API por moitvos de segurança, para usar a API deve-se baixar o projeto e rodar ele na sua máquina.

