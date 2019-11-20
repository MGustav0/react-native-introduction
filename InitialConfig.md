# Configurações do projeto

## Padrão de código

```shell
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Para configurar o eslint: ```yarn eslint --init```

1. How would you like to use ESLint? _To check syntax, find problems, and enforce code style_
2. What type of modules does your project use? _JavaScript modules (import/export)_
3. Which framework does your project use? _React_
4. Does your project use TypeScript? _No_
5. Where does your code run? _Unmark all_
6. How would you like to define a style for your project? _Use a popular style guide_
7. Which style guide do you want to follow? _Airbnb_ (<https://github.com/airbnb/javascript>)
8. What format do you want your config file to be in? _JavaScript_
9. Would you like to install them now with npm? _Yes_

Remova o ```package-lock.json``` e execute o ```yarn``` no terminal.

Reconfigure o arquivo ```.eslintrc.js``` como o do projeto.

Usar o **Reactotron** somente em desenvolvimento, mas colocar como produção.

```shell
yarn add reactotron-react-native react-navigation
```

Criar o arquivo em: ```src/config/ReactotronConfig.js``` e setar as configurações de acordo com o arquivo do projeto.

## Sobre o Expo

Serão utilizados apenas partes dele neste projeto, ele não será instalado em sua totalidade.

Para usar o ```react-navigation``` acesse o site da documentação para instalar, neste caso instalei sem o Expo no projeto.
