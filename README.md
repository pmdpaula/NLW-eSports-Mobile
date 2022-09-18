# Projeto Mobile NLW eSports - Rocketseat

[repositório](https://github.com/pmdpaula/NLW-eSports-Mobile.git)


## Passos executados nas aulas


### Aula 01 - Base Building
- [Instalação do Expo](https://docs.expo.dev/get-started/installation/)
O Expo será instalado globalmente

```
npm i -g expo-cli
```
- Login na conta Expo  
Pedirá usuário e senha

```
npx expo login
```

- Configuração do projeto
Passaremos por algumas perguntas para configurar o projeto. Cria o projeto com o nome passado no comando.

```
npx create-expo-app mobile
cd mobile
```
- Iniciar o emulador com o Android Studio

- Iniciar o projeto
O Metro Bundler do Expo abrirá para a comunicação com o emulador ou o celular que for usar.

```
npx expo start
```

Com o WSL a comunicação com o expo e o emulador pode não ser automática. Pode-se abrir o expo no emulador e digitar o endereço apresentado com o comando abaixo.


### Aula 02 - High Speed
- [Usando uma font do Google](https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font)  
O comando abaixo instala a fonte ___Inter___
```
npx expo install expo-font @expo-google-fonts/inter
```
> Ao utilizar o comando expo, reinicie e servidor Expo.

  
- [Instalação do React Navigation](https://reactnavigation.org/docs/getting-started/)

```
npx expo install react-native-safe-area-context
```

- [Pacote LinearGradient do Expo](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

```
npx expo install expo-linear-gradient
```


### Aula 03 - To be continued

- [Instalação dos ícones expo](https://github.com/oblador/react-native-vector-icons)  

```
yarn add @expo/vector-icons
```


### Aula 04 - Power Up

- [React Navigation](https://reactnavigation.org/docs/getting-started)

Usado para criar a navegação entre telas

  ```
  yarn add @react-navigation/native

  npx expo install react-native-screens react-native-safe-area-context
  
  ```

- [React Navigation: estratégia de navegação](https://reactnavigation.org/docs/hello-react-navigation)

A instalação é separada pois não vamos usar todas os métodos de navegação.

```
yarn add @react-navigation/native-stack
```

- Adição de biblioteca de ícones
[Phosphor Icons](https://phosphoricons.com/)
[Expo SVG](https://docs.expo.dev/versions/latest/sdk/svg/)


```
yarn add phosphor-react-native
expo install react-native-svg
```

- Copia de texto com clique
[Expo Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)

```
expo install expo-clipboard
```

- Biblioteca de notificações do Expo
[Expo Notification](https://docs.expo.dev/versions/latest/sdk/notifications/)

```
npx expo install expo-notifications
```

<!-- - Criação de módulos
[Expo Modules](https://docs.expo.dev/modules/overview/#2-add-the--expo-modules-core--native)
```
npx expo install expo-modules-core
``` -->

#### Erros
- Erro de validação de notificação  
```Unhandled promise rejection: Error: Error encountered while fetching Expo token, expected an OK response, received: 400 (body: "{"errors":[{"code":"VALIDATION_ERROR"```

___Solução___  
Parar aplicação e executar  
```expo login```
> É preciso uma conta na expo para este login.


***[Teste de notificações](https://expo.dev/notifications)***


### Aula 05 - Final Round
