# PRODART Recife — Grupo 05

Projeto Integrador de Análise e Desenvolvimento de Sistemas, turma **GRA0400102NNA**. O grupo escolheu o BO **Plataforma Digital para Gestão e Promoção do Artesanato de Recife** ([página do desafio](https://coreto.app.emprel.gov.br/banco-de-bo/plataforma-digital-para-gestao-e-promocao-do-artesanato-de-recife-prod)).

<<<<<<< HEAD
| Integrante | GitHub |
=======
Cada grupo deverá selecionar um **problema real** publicado no **Banco de Oportunidades (BO) da Prefeitura do Recife**, investigar esse problema, propor uma **solução tecnológica** (1ª Avaliação) e, em seguida, desenvolver um **MVP funcional** (2ª Avaliação).

🔗 **Banco de Oportunidades:** <https://bancodeoportunidades.recife.pe.gov.br/>

> **Atenção:** este README deve ser preenchido e mantido atualizado pelo grupo. Substitua os campos vazios pelas informações da equipe.

---

## Identificação da equipe

- Turma:  GRA0400102NNA
- Grupo: 05
- Nome do projeto: PRODART
- BO escolhido: Plataforma Digital para Gestão e Promoção do Artesanato de Recife 
- Link do BO: https://coreto.app.emprel.gov.br/banco-de-bo/plataforma-digital-para-gestao-e-promocao-do-artesanato-de-recife-prod

### Integrantes

| Nome | GitHub |

Ryan Filipe de Oliveira | Ryan7Filipe 

Ricardo Ferreira |  ferreirascdb

Emerson José Souza Vieira |  emersonjosedev

Ystefani Mariana Gomes |

Alexsandro Souza | Alexsandro83

---

## Critério central do projeto

> **Não estamos procurando o projeto tecnicamente mais complexo.**
>
> **Estamos procurando uma solução em que seja possível demonstrar claramente a relação:**

```text
PROBLEMA
   ↓
EVIDÊNCIA
   ↓
SOLUÇÃO
   ↓
IMPLEMENTAÇÃO
   ↓
TESTE
   ↓
RESULTADO
```

---

## Fluxo do projeto

| Etapa | Pergunta central | Resultado |
|---|---|---|
| Escolha do BO | Qual problema real queremos resolver? | BO selecionado |
| Investigação | Por que esse problema existe e quem é afetado? | Diagnóstico |
| **1ª Avaliação** | **O que propomos e por que funcionaria?** | **Projeto da solução** |
| Desenvolvimento | Como transformar a proposta em software? | MVP |
| Testes | A solução realmente atende ao problema? | Evidências |
| **2ª Avaliação** | **A solução funciona na prática?** | **MVP funcional + demonstração** |

```text
PROBLEMA REAL
      ↓
INVESTIGAÇÃO
      ↓
EVIDÊNCIAS
      ↓
PROPOSTA
      ↓
PROTÓTIPO
      ↓
AV1
      ↓
DESENVOLVIMENTO
      ↓
TESTES
      ↓
VALIDAÇÃO
      ↓
MVP FUNCIONAL
      ↓
AV2
```

### Regra principal: não comece programando

Antes de escrever código, o grupo deve compreender:

- qual é o problema;
- quem é afetado;
- por que o problema acontece;
- quais evidências existem;
- como o problema é tratado atualmente;
- qual parte do problema será atacada;
- qual solução tecnológica será proposta.

Na **AV1**, a equipe apresenta o **projeto da solução**. Na **AV2**, a equipe apresenta a **solução funcionando**.

---

# Como começar

Cada equipe deve possuir **seu próprio repositório**, criado a partir deste modelo.

## Opção recomendada — Template Repository

1. Abra o repositório-base do professor: <https://github.com/jamcabral/template-bo-recife>
2. Clique no botão **`Use this template`**.
3. Selecione **`Create a new repository`**.
4. Crie um repositório próprio para o grupo (um integrante cria e adiciona os demais como colaboradores em **Settings → Collaborators**).
5. Utilize um nome no padrão:

   ```text
   bo-recife-grupoXX-nome-projeto
   ```

   Exemplo de formato: `bo-recife-grupo03-agenda-saude` (substitua pelo número e nome do seu grupo).

6. Clone o novo repositório:

   ```bash
   git clone URL_DO_REPOSITORIO_DO_GRUPO
   ```

7. Entre na pasta:

   ```bash
   cd bo-recife-grupoXX-nome-projeto
   ```

8. Comece preenchendo este `README.md` e os arquivos da pasta [`docs/`](docs/).

## Alternativa — Clone manual

Caso o professor determine a clonagem manual, o grupo deverá clonar o repositório-base e, em seguida, trocar o `origin` para o repositório próprio do grupo (criado vazio no GitHub):

```bash
git clone URL_DO_REPOSITORIO_BASE
cd template-bo-recife
git remote remove origin
git remote add origin URL_DO_REPOSITORIO_DO_GRUPO
git push -u origin main
```

> ⚠️ **Os grupos não devem enviar seu trabalho para o repositório-base do professor.**
> Cada equipe deverá possuir seu próprio repositório.

---

## Estrutura do repositório

```text
.
├── README.md             → identificação da equipe e visão geral do projeto
├── ENTREGA.md            → links e versões entregues em cada avaliação
├── CONTRIBUTING.md       → regras de colaboração, commits e segurança
├── LICENSE               → licença do projeto
├── docs/                 → documentação do projeto (AV1 e AV2)
├── src/                  → código-fonte do MVP (AV2)
├── tests/                → testes e cenários de validação
├── data/                 → dados utilizados e sua documentação
├── assets/               → imagens, diagramas e capturas do protótipo
└── .github/              → modelos de issues e pull requests
```

### Documentação (`docs/`)

| Arquivo | Conteúdo | Avaliação principal |
|---|---|---|
| [01-problema.md](docs/01-problema.md) | Problema escolhido e sua delimitação | AV1 |
| [02-investigacao-e-evidencias.md](docs/02-investigacao-e-evidencias.md) | Investigação, evidências, causas e consequências | AV1 |
| [03-proposta-de-solucao.md](docs/03-proposta-de-solucao.md) | Proposta, público-alvo e funcionalidades | AV1 |
| [04-requisitos.md](docs/04-requisitos.md) | Requisitos funcionais e não funcionais | AV1 |
| [05-prototipo.md](docs/05-prototipo.md) | Protótipo navegável e telas | AV1 |
| [06-arquitetura-e-tecnologias.md](docs/06-arquitetura-e-tecnologias.md) | Arquitetura e tecnologias justificadas | AV1 |
| [07-planejamento-do-mvp.md](docs/07-planejamento-do-mvp.md) | Escopo do MVP e cronograma | AV1 |
| [08-testes-e-validacao.md](docs/08-testes-e-validacao.md) | Testes, validação e métricas | AV2 |
| [09-resultados-e-limitacoes.md](docs/09-resultados-e-limitacoes.md) | Resultados, limitações e trabalhos futuros | AV2 |
| [checklist-av1.md](docs/checklist-av1.md) | Checklist de entrega da AV1 | AV1 |
| [checklist-av2.md](docs/checklist-av2.md) | Checklist de entrega da AV2 | AV2 |

---

# 1ª Avaliação — Projeto da Solução

Na AV1, o grupo deverá demonstrar que **compreendeu o problema** e possui uma **proposta tecnicamente viável**.

### Entregas da AV1

1. BO escolhido;
2. análise do problema;
3. público afetado;
4. evidências;
5. proposta;
6. funcionalidades;
7. requisitos;
8. protótipo navegável;
9. arquitetura;
10. tecnologias;
11. escopo do MVP;
12. planejamento.

Os documentos de `docs/01` a `docs/07` concentram as entregas da AV1. Use o [checklist da AV1](docs/checklist-av1.md) para conferir a entrega.

> **AV1 não é uma competição de quantidade de telas ou quantidade de funcionalidades.** Uma solução simples e coerente para um problema bem compreendido vale mais do que uma solução grande sem fundamentação.

---

# 2ª Avaliação — MVP Funcional

Na AV2, a pergunta passa a ser:

**A solução funciona?**

O grupo evolui **o mesmo repositório** da AV1 até chegar a um MVP funcional.

### Entregas da AV2

1. código-fonte (em [`src/`](src/));
2. aplicação executável;
3. fluxo principal funcionando;
4. banco/dados, quando necessários;
5. testes;
6. documentação;
7. validação;
8. métricas;
9. resultados;
10. limitações;
11. demonstração.

Use o [checklist da AV2](docs/checklist-av2.md) para conferir a entrega.

### O que NÃO é considerado MVP funcional

Não será considerado MVP funcional apenas:

- apresentação PowerPoint;
- Canva;
- wireframe;
- Figma;
- Penpot;
- conjunto de imagens;
- documentação;
- telas estáticas sem comportamento.

O MVP precisa possuir **pelo menos um fluxo principal funcional de ponta a ponta**. Exemplo genérico:

```text
Usuário
   ↓
envia informação
   ↓
sistema recebe
   ↓
processa
   ↓
armazena/consulta
   ↓
apresenta resultado
```

### Como executar o projeto

> **Preencher na AV2.** Descreva aqui, passo a passo, como instalar as dependências e executar o MVP. Um avaliador que nunca viu o projeto deve conseguir executá-lo apenas seguindo estas instruções.

**Pré-requisitos:**

-

**Instalação:**

```bash
# comandos de instalação
```

**Execução:**

```bash
# comandos de execução
```

**Variáveis de ambiente (se houver):** documente-as em um arquivo `.env.example`, sem valores reais.

---

## Versionamento das avaliações

Ao concluir cada avaliação, o grupo deve criar uma **tag** (e, se desejar, uma **Release** no GitHub) que **congela exatamente aquilo que foi entregue**. O professor avaliará a versão correspondente à tag informada no [`ENTREGA.md`](ENTREGA.md).

| Avaliação | Tag |
>>>>>>> c3060c7644ec8751e357b8beb230ad4a65fba169
|---|---|
| Ryan Filipe de Oliveira | [Ryan7Filipe](https://github.com/Ryan7Filipe) |
| Ricardo Ferreira | [ferreirascdb](https://github.com/ferreirascdb) |
| Emerson José Souza Vieira | [emersonjosedev](https://github.com/emersonjosedev) |

## Problema e proposta

O Prodarte divulga oportunidades de participação em feiras e eventos e oferece canais digitais e presenciais de inscrição. O projeto investiga como facilitar o acompanhamento das oportunidades pelos artesãos e a consulta confiável às feiras pelo público. Propõe um portal do artesão, um guia público e dados mantidos na origem. A documentação separa [evidências públicas](docs/02-investigacao-e-evidencias.md) das hipóteses que ainda dependem de entrevistas e medições.

## Estado do projeto

Há um **protótipo demonstrativo** navegável com busca de feiras, perfis fictícios, cadastro e candidatura locais com protocolo. Ele não é serviço oficial. Dados e resultados são fictícios e ficam no navegador. O MVP da AV2, com código em `src/`, testes e validação por três métricas, ainda está planejado.

### Protótipo da equipe

Abra [assets/prototipo/index.html](assets/prototipo/index.html) no navegador. Não há instalação nem servidor obrigatório. O [plano de dados e implantação](assets/prototipo/documento/plano-prodart.html) explica governança, seleção, privacidade e indicadores. O teste de fumaça da cópia pode ser executado a partir de `assets/prototipo/` com `node smoke-test.cjs` (Node.js necessário apenas para esse teste).

**Link público para AV1:** pendente. O arquivo local permite revisão, mas o grupo precisa registrar uma URL pública no [ENTREGA.md](ENTREGA.md) antes da entrega.

## Documentação

| Etapa | Arquivo |
|---|---|
| AV1 | [01 Problema](docs/01-problema.md) · [02 Investigação](docs/02-investigacao-e-evidencias.md) · [03 Proposta](docs/03-proposta-de-solucao.md) · [04 Requisitos](docs/04-requisitos.md) · [05 Protótipo](docs/05-prototipo.md) · [06 Arquitetura](docs/06-arquitetura-e-tecnologias.md) · [07 Planejamento](docs/07-planejamento-do-mvp.md) |
| AV2 | [08 Testes e validação](docs/08-testes-e-validacao.md) · [09 Resultados e limitações](docs/09-resultados-e-limitacoes.md) |
| Conferência | [Checklist AV1](docs/checklist-av1.md) · [Checklist AV2](docs/checklist-av2.md) · [Entrega](ENTREGA.md) |

## Próximos passos

Entrevistar artesãos e gestão, medir o processo atual, validar o protótipo, publicar seu link, organizar o código do MVP em `src/`, executar testes e registrar três métricas. Critérios de seleção e uso de dados reais dependem de aprovação institucional. Não incluir senhas nem dados pessoais reais no repositório.

Licença: [MIT](LICENSE).
