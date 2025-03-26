# Time-now

## Descrição do Projeto

O **Time-now** é um projeto que desenvolvi durante meu aprendizado em programação. Inicialmente, ele apresentava a hora do computador do usuário, mas com o tempo percebi que poderia torná-lo muito mais útil e interessante. Decidi atualizar o projeto para que ele exiba a hora correta da região de **America/Sao_Paulo** (também conhecida como Brasília), utilizando a API [www.timeapi.io](https://www.timeapi.io).

## Novidades da Versão Atual

- **Fuso Horário Correto**: Agora, o site não exibe apenas a hora do computador do usuário, mas sim a hora atual de Brasília.
- **Armazenamento de Tema**: Anteriormente, o sistema de temas não salvava as preferências do usuário. Agora, implementei o uso do **localStorage** para que o tema escolhido seja salvo e mantenha a preferência do usuário em visitas futuras.
- **Código Aprimorado**: O código foi reestruturado e otimizado para funcionar de maneira mais eficiente e clara.

## Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo do site.
- **CSS**: Estilização e layout do site.
- **JavaScript**: Lógica do funcionamento do site, incluindo a manipulação da API e armazenamento local.

## Funcionamento

- O horário é atualizado continuamente através da função `setInterval()`, que executa a atualização em intervalos regulares, garantindo que o usuário sempre veja a hora correta.

## Como Usar

1. Clone ou faça o download do repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Você verá a hora atual de Brasília e poderá escolher um tema que será salvo automaticamente.

## Contribuições

Sinta-se à vontade para contribuir com o projeto! Se você encontrar algum bug ou tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto é de código aberto e pode ser utilizado e modificado livremente. 

Espero que você goste do **Time-now**!