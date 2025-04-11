# tag-me

**tag-me** é uma aplicação React para gerar etiquetas de envio personalizadas para testes, incluindo códigos de rastreamento e informações de remetente e destinatário.

## 💻 Demonstração

Acesse aqui a versão ao vivo:  
🔗 [https://idyllic-profiterole-f864c5.netlify.app](https://idyllic-profiterole-f864c5.netlify.app)

## 🚀 Funcionalidades

- Gerar etiquetas de envio com informações personalizadas.
- Adicionar códigos de rastreamento e códigos de barras.
- Visualizar a etiqueta antes de imprimir.
- Gerar dados aleatórios para testes.
- Imprimir etiquetas diretamente do navegador.

## 🛠️ Tecnologias utilizadas

- **React**
- **TypeScript**
- **SCSS (CSS Modules)**
- **react-barcode**
- **faker.js**
- **Vite**

## 📦 Estrutura do projeto

```plaintext
src/
├── components/
│   ├── LabelForm/         # Formulário para entrada de dados
│   ├── LabelPreview/      # Visualização da etiqueta gerada
│   ├── LabelGenerator/    # Função para imprimir etiquetas
├── styles/                # Estilos globais e modulares
├── types/                 # Definições de tipos TypeScript
```

## Como executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/jfromjefferson/tag-me.git
   cd tag-me
   ```

2. **Instale as dependências**:
   Certifique-se de ter o Node.js instalado. Em seguida, execute:
    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse no Navegador**:
   Abra [http://localhost:5173](http://localhost:5173) para visualizar o projeto.

## Como usar

1. Preencha os campos no formulário.
2. Clique no botão "Imprimir Etiqueta" para abrir a visualização de impressão.
3. Confirme a impressão no navegador.

## Licença

Este projeto está licenciado sob a licença Apache-2.0 license. Consulte o arquivo `LICENSE` para mais detalhes.
