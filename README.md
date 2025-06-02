🧾 Projeto HashForms

HashForms é um sistema web de formulário para coleta de dados pessoais e endereço, com validação inteligente dos campos, aplicação de cupons de desconto e simulação de compra. Ideal para páginas de checkout ou pré-cadastro com foco em experiência do usuário e segurança.

📑 Tabela de Conteúdos:

•
📦 Instalação

•
🚀 Uso

•
✨ Funcionalidades

•
🛠️ Tecnologias e Dependências

•
⚙️ Estrutura de Arquivos

•
📸 Capturas de Tela

•
🐞 Possíveis Problemas

•
👤 Autor

•
📄 Licença
<hr>

📦 Instalação:

Clone o repositório e abra o arquivo index.html em seu navegador:

Bash


git clone https://github.com/marcelloprado/hashforms.git
cd hashforms

<hr>
🚀 Uso: <br/><br/>

Para utilizar o HashForms, siga estes passos:

1. Preencha os campos do formulário com seus dados pessoais (nome, CPF, telefone, endereço, etc.).

2. O sistema validará as informações em tempo real conforme você digita.

3. Utilize a seção "Aplicar cupom de desconto" para inserir códigos promocionais válidos (ex: DESCONTO10, DESCONTO20).

4. Observe o valor total da compra ser atualizado automaticamente no resumo.

5. Os dados inseridos são temporariamente armazenados no localStorage do seu navegador para persistência durante a sessão.

<hr>
✨ Funcionalidades: <br/><br/>
O HashForms oferece as seguintes funcionalidades principais:

•
Validação Completa de Campos:

•
Nome: Aceita apenas letras.

•
CPF e Telefone: Exigem exatamente 11 dígitos numéricos.

•
CEP: Exige exatamente 8 dígitos numéricos.

•
Estado: Valida se a sigla informada corresponde a um estado brasileiro válido.



•
Aplicação de Cupons de Desconto:

•
Suporte integrado para os cupons: DESCONTO10, DESCONTO20, DESCONTO50.

•
Cálculo e exibição dinâmica do preço final com o desconto aplicado.



•
Interface Intuitiva e Responsiva:

•
Design adaptável para diferentes tamanhos de tela (desktop, tablets, mobile).



•
Armazenamento Local:

•
Os dados do formulário são salvos no localStorage para evitar perda de informação ao recarregar a página.



•
Feedback Visual e Segurança:

•
Mensagens claras indicam o status da validação e a aplicação de descontos, além de dicas de segurança.

<hr>
🛠️ Tecnologias e Dependências: <br/><br/>

Este projeto foi construído utilizando as seguintes tecnologias:

•
Frontend: HTML5, CSS3, JavaScript (Vanilla JS)

•
Ícones: Boxicons (via CDN)

•
Imagens: Hospedadas via CDN (Cloudfront)

•
Armazenamento: localStorage API do navegador

Não há dependências externas de bibliotecas JavaScript ou frameworks, mantendo o projeto leve e focado em tecnologias web padrão.
<hr>
⚙️ Estrutura de Arquivos: <br/><br/>

A estrutura de arquivos do projeto é organizada da seguinte forma:

Plain Text


📁 hashforms/
├── index.html       # Arquivo principal da aplicação
├── style.css        # Folha de estilos CSS
├── formulario.js    # Lógica de validação do formulário
├── desconto.js      # Lógica de aplicação de cupons
└── safe.jpg         # Imagem de segurança (exemplo)

<hr>
📸 Capturas de Tela: <br/><br/>
💡 

<hr>
🐞 Possíveis Problemas <br/><br/>

Encontrou algum problema? Aqui estão algumas verificações comuns:

•
Formulário não funciona: Certifique-se de que o JavaScript está habilitado nas configurações do seu navegador.

•
Desconto não aplicado: Verifique se o código do cupom inserido é válido (DESCONTO10, DESCONTO20, DESCONTO50) e se foi digitado corretamente.

•
Dados sumiram: O localStorage pode ser limpo ao fechar o navegador, limpar o cache ou usar o modo de navegação anônima. Os dados são armazenados apenas temporariamente.
<hr>
👤 Autor: <br/><br/>

Marcello Prado

•
GitHub: https://github.com/marcelloprado
