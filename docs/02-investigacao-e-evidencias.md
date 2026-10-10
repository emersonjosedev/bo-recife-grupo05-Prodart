# 02 — Investigação e evidências

## Método e limite da investigação

Esta versão reúne fontes públicas consultadas em 05/10/2026 e observações do protótipo da equipe. A página específica do BO está identificada no [problema](01-problema.md), mas seu conteúdo integral ainda precisa ser conferido e arquivado pela equipe. Não foram fornecidas entrevistas, observações de campo, dados operacionais ou métricas de uso. Portanto, as causas internas do problema seguem como **hipóteses**, não como diagnóstico confirmado.

## Contexto e tratamento atual

O Prodarte apoia a participação de artesãos em feiras e eventos. Sua página institucional descreve cadastro, avaliação de peças e agendamento conforme disponibilidade ([Prefeitura](https://www2.recife.pe.gov.br/node/11054)); como a página é antiga, os procedimentos atuais devem ser confirmados com a equipe do programa. Em 2025, a Prefeitura promoveu recadastramento para atualizar a base e planejar ações de fomento ([notícia oficial](https://www2.recife.pe.gov.br/noticias/07/10/2025/prefeitura-do-recife-faz-recadastramento-das-artesas-e-dos-artesaos-inscritos-no)). Em 2026, chamadas para São João e Fenearte informaram inscrição por canais digitais e presenciais ([São João](https://www2.recife.pe.gov.br/node/300299); [Fenearte](https://www2.recife.pe.gov.br/noticias/18/05/2026/prodarte-abre-inscricoes-para-selecao-de-expositores-da-fenearte-2026)).

Essas fontes comprovam a existência do programa, de oportunidades e de múltiplos canais. Não comprovam que inexista um sistema interno, que a seleção seja injusta ou que as feiras estejam desatualizadas.

## Soluções e canais existentes

| Solução ou canal | O que foi verificado | Limite para este projeto | Fonte |
|---|---|---|---|
| Página institucional do Prodarte | Descreve o programa e formas de participação. | Procedimentos podem ter mudado desde sua publicação. | [Prefeitura](https://www2.recife.pe.gov.br/node/11054) |
| Chamamentos publicados pela Prefeitura | Divulgam oportunidades e canais de inscrição. | Cada edital tem regras próprias; não se deve substituir o edital pelo protótipo. | [São João 2026](https://www2.recife.pe.gov.br/node/300299), [Fenearte 2026](https://www2.recife.pe.gov.br/noticias/18/05/2026/prodarte-abre-inscricoes-para-selecao-de-expositores-da-fenearte-2026) |
| Recadastramento do Prodarte | Busca atualizar dados dos artesãos. | A fonte não informa a qualidade atual da base nem sua arquitetura. | [Prefeitura](https://www2.recife.pe.gov.br/noticias/07/10/2025/prefeitura-do-recife-faz-recadastramento-das-artesas-e-dos-artesaos-inscritos-no) |
| Protótipo PRODART da equipe | Demonstra busca, cadastro e candidatura em dados fictícios. | Não é serviço oficial, nem evidência de aceitação por usuários. | [Código e plano local](../README.md#protótipo-da-equipe) |

## Quadro de evidências

| Evidência verificável | O que sustenta | O que não permite concluir |
|---|---|---|
| Chamamentos de 2026 oferecem inscrição digital e presencial. | Existem canais diferentes para candidatar-se. | Que esses canais gerem falhas ou exclusão. |
| Recadastramento de 2025 teve objetivo de atualizar a base. | Qualidade cadastral é uma preocupação declarada. | Taxa de desatualização ou duplicidade. |
| Editais têm vagas e curadoria. | Seleção requer regras e decisões específicas por evento. | Que o algoritmo ilustrativo da equipe corresponda às regras oficiais. |
| Protótipo implementa protocolo local no navegador. | A equipe consegue demonstrar um fluxo técnico inicial. | Que candidatura real foi recebida pelo Prodarte. |

## Hipóteses a testar

1. Artesãos se beneficiariam de uma visão única de oportunidades e histórico de candidaturas.
2. A equipe gestora se beneficiaria de uma fonte única para calendário, inscrições e confirmação operacional.
3. O público se beneficiaria de informações de feira com data de atualização e estado de confirmação.

## Investigação pendente

- Entrevistar artesãos, incluindo pessoas que preferem atendimento presencial, e registrar data, perfil e autorização sem publicar dados pessoais.
- Mapear com a gestão o fluxo atual, sistemas usados, regras oficiais, retrabalho e responsáveis pelas atualizações.
- Observar uma inscrição e a divulgação de uma feira; registrar tempos, erros e dúvidas recorrentes.
- Medir linha de base para adoção, prazo de seleção e qualidade das informações antes de propor metas.

## Descoberta até aqui

O atendimento já combina meios digitais e presenciais. A proposta deve preservar essa possibilidade, vincular cada candidatura ao edital correspondente e evitar prometer automatização de seleção antes da validação institucional.
