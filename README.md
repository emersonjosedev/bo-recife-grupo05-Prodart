# PRODART Recife — Grupo 05

Projeto Integrador de Análise e Desenvolvimento de Sistemas, turma **GRA0400102NNA**. O grupo escolheu o BO **Plataforma Digital para Gestão e Promoção do Artesanato de Recife** ([página do desafio](https://coreto.app.emprel.gov.br/banco-de-bo/plataforma-digital-para-gestao-e-promocao-do-artesanato-de-recife-prod)).

| Integrante | GitHub |
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
