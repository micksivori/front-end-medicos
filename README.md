# Documentação

Olá avaliadores, irei guia-los a como instalar e executar o projeto.
Tambem irei apresentar detalhadamente as tecnologias que utilizei e o porque.

## Instalação, execução, testes via scripts

Dentro do diretório frontend execute os seguintes comandos:

### `npm install -g @angular/cli`

Esse comando irá instalar todas as dependencias do projeto em sua maquina.

### `ng serve`

Após a instalação das dependecias da aplição, rode mais esse comando, para a executar a aplicação

### `ng test`

Para rodar os testes desenvolvidos na aplicação, rode apenas esse comando que irá abrir uma nova interface. E assim demonstrar o que está sendo rodado e testado.

# Tecnologias utilizadas.

## 1. Framework Angular

Escolhi esse framework, por ser a que domino.

Falando em arquitetura de pastas, segui o que considero o mais ideal, todos os projetos que desenvolvo, a separação e organização ficam melhor distribuidas, e acredito que seja mais rapida para utilização, caso precise criar um novo aquivo ou buscar um que ja exista.

No projeto para garantir a tipagem da minha variavel, utilizei o model, para garantir que a variavel irá receber o tipo certo e que isso não seja variavel.

## 2. Bootstrap

### npm install --save bootstrap@4

Instalação do bootstrap e suas dependencias na sua aplicação.


Para tratar resposividade, e maior agilidade na organização dos elementos em tela, usei a biblioteca do bootstrap, que me permite acelerar o desenvolvimento, pois atraves dela ja tenho breakpoints pré-definidos e outros alinhamentos como margin, pading, container, row ... que me permite ja ir montando tudo isso em tela de forma mais dinamica, e estilizando via a propriedade Class do item.

## 3. CSS

para criar a estilização da aplicação utilizei css por ser padrão do Angular, e que considero mais tranquilo tambem a questão de trabalhar com alguns conseitos customizaveis, utilizei a pasta styles que é a padrão do Angular para ser feitas as modificações necessarias na view, como ela é uma pasta global ficou de mais facil uso.

## 4. LocalStorage

Obtei por usar o localStorage nesse projeto, por ser um projeto simples e com poucos itens para se alocar, o localStorage se encaixou muito bem e também por causa da sua simplicidade e facil implimentação.

