[![Spaceship Calculator Screenshot](https://github.com/theoxys/WeatherHub/blob/main/src/assets/print.png?raw=true)](https://github.com/theoxys/WeatherHub/blob/main/src/assets/print.png?raw=true)


# WeatherHub

Aplicação construída para obter dados climáticos de cidades em tempo real. A aplicação foi feita consumindo dados da API do OpenWeatherMap (  https://openweathermap.org/  ).

## Sobre a aplicação

A aplicação foi 100% desenvolvida em React utilizando Typescript. Para o gerenciamento de estado dos componentes foram utilizados os React Hooks e para as chamadas na API foi utilizado o Axios. A criação dos estilos dos componentes foi feita utilizando Styled Components e a prototipação de interface foi construida no Figma.

Também foram utilizada outras bibliotecas como Eslint para padronização e organização do código, MomentJS para formatação de unidades de tempo e React-Icons para estilização.

Foi utilizado o Firebase como Baas (Backend as a service) para gerenciar os rankings de pesquisa da aplicação.

## Instalação e Execução

Para executar o projeto é necessário a configuração das variáveis de ambiente como consta no arquivo `.env.example`

#### Comandos para instalação:

    $ npm install

ou caso utilize yarn:

	$ yarn install


#### Comandos para Execução:


	$ npm start

 ou caso utilize yarn:

	$ yarn start



O projeto irá iniciar em:  [http://localhost:3000/](http://localhost:3000/)