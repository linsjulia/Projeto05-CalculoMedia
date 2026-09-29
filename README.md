# 📚 Projeto 05 — Sistema de Média

Aplicação Web desenvolvida para a disciplina de **Desenvolvimento Web III**, utilizando **Node.js + NPM**, sem frameworks.

O sistema recebe as notas **P1** e **P2** diretamente pela URL, calcula a média final e informa se o aluno foi **aprovado ou reprovado**.

---

## 🧮 Como funciona

A média é calculada utilizando a seguinte fórmula:

```text
MÉDIA = (P1 + P2) / 2
```

A situação do aluno é definida de acordo com a média:

| Média |   Situação  |
| :---: | :---------: |
| ≥ 6,0 |  ✅ Aprovado |
| < 6,0 | ❌ Reprovado |

### Exemplo

```text
/media?p1=7.5&p2=5.0
```

Resultado:

```text
P1: 7.5
P2: 5.0
Média: 6.3
Situação: APROVADO
```

---
## 🛠️ Tecnologias

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="50" alt="NPM"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" alt="HTML5"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" alt="CSS3"/>
</p>

**Node.js** • **NPM** • **HTML5** • **CSS3** • **Módulos nativos do Node.js**


O projeto foi desenvolvido **sem frameworks**, utilizando os recursos nativos do Node.js para criação do servidor, leitura de arquivos e tratamento das requisições.

---

## 📁 Estrutura do projeto

```text
Projeto05/
│
├── app.js
├── package.json
├── package-lock.json
│
└── public/
    ├── index.html
    ├── aprovado.html
    ├── reprovado.html
    ├── erro404.html
    │
    └── css/
        └── style.css
```

### `app.js`

Responsável por:

* Criar o servidor HTTP;
* Receber as requisições;
* Ler P1 e P2 pela URL;
* Calcular a média;
* Verificar a situação do aluno;
* Exibir a página correspondente;
* Tratar erros e páginas inexistentes.

### `public/`

Contém as páginas HTML utilizadas pela aplicação.

* `index.html` → página inicial;
* `aprovado.html` → resultado para médias ≥ 6;
* `reprovado.html` → resultado para médias < 6;
* `erro404.html` → página para endereços inexistentes.

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd Projeto05
```

### 3. Instale as dependências

```bash
npm install
```

> O projeto utiliza apenas módulos nativos do Node.js, portanto não possui dependências externas.

### 4. Inicie o servidor

```bash
npm start
```

O servidor será iniciado em:

```text
http://localhost:3000
```

---

## 🔗 Testando a aplicação

### Página inicial

```text
http://localhost:3000/
```

### Aluno aprovado

```text
http://localhost:3000/media?p1=8&p2=7
```

Média:

```text
7.5
```

Resultado:

```text
APROVADO
```

### Aluno reprovado

```text
http://localhost:3000/media?p1=4&p2=5
```

Média:

```text
4.5
```

Resultado:

```text
REPROVADO
```

---

## ⚠️ Tratamento de erros

A aplicação também realiza verificações básicas para evitar entradas inválidas.

São tratados:

* Notas não informadas;
* Valores que não são números;
* Notas menores que 0;
* Notas maiores que 10;
* Páginas inexistentes;
* Erros na leitura dos arquivos.

Exemplo:

```text
/media?p1=abc&p2=5
```

Resultado:

```text
As notas devem estar entre 0 e 10.
```

---

## 🎓 Objetivo acadêmico

Este projeto foi desenvolvido como atividade prática da disciplina de **Desenvolvimento Web III**, com o objetivo de aplicar conceitos de:

* Servidor HTTP com Node.js;
* NPM;
* Rotas;
* Parâmetros de URL;
* Manipulação de arquivos;
* Respostas HTTP;
* HTML e CSS;
* Tratamento básico de erros.

---

## 👩‍💻 Autoria

**Projeto 05 — Desenvolvimento Web III**

Desenvolvido como atividade acadêmica da **FATEC**.

---

<div align="center">


**Desenvolvimento Web III**

</div>
