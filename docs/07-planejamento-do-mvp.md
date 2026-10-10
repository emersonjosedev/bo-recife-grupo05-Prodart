# 07 — Planejamento do MVP

## Recorte

O protótipo atual demonstra um fluxo local: consultar oportunidade → cadastrar perfil de teste → candidatar-se → receber protocolo → consultar histórico. Para a AV2, o MVP deverá manter pelo menos um fluxo de ponta a ponta executável **dentro deste repositório**, com teste reproduzível e documentação. Se a equipe pretender apresentar candidatura oficial ou multiusuário, precisará acrescentar backend, autenticação e banco de dados; o protótipo atual não oferece isso.

## Escopo mínimo da AV2

- Código executável em `src/` com feiras, cadastro de teste, consentimento e candidatura com protocolo.
- Dados fictícios claramente identificados, persistência local documentada e tratamento de candidatura duplicada.
- Testes do fluxo principal, roteiro de validação com usuários e registro dos resultados.
- Três métricas avaliadas conforme [08-testes-e-validacao.md](08-testes-e-validacao.md).

## Fora do MVP demonstrativo

Inscrição oficial, decisão automática de vagas, integração com a Prefeitura, pagamentos e publicação de dados reais de artesãos. Autenticação e banco compartilhado só entram em um piloto institucional aprovado.

## Fluxo mínimo

```text
Perfil de teste + oportunidade disponível
  → verificação de categoria e duplicidade
  → gravação da candidatura no armazenamento local
  → protocolo e histórico consultáveis
```

## Plano de trabalho

| Etapa | Entrega verificável | Situação em 05/10/2026 |
|---|---|---|
| Diagnóstico | Fontes públicas e hipóteses documentadas; entrevistas e linha de base | Parcial |
| Protótipo | Interface navegável e fluxo local | Existe no projeto PRODART; cópia neste repositório em `assets/prototipo/` |
| AV1 | Documentos, link público do protótipo e revisão da equipe | Documentos em elaboração; link público pendente |
| AV2 | Código em `src/`, testes e três métricas avaliadas | Pendente |
| Piloto real | Regras aprovadas, infraestrutura, atendimento assistido e dados reais autorizados | Fora do escopo atual |

## Riscos e respostas

| Risco | Resposta |
|---|---|
| Tratar hipótese como fato | Entrevistar usuários e registrar fontes, medidas e discordâncias. |
| Confundir demonstração com serviço oficial | Rotular dados fictícios e não usar pontuação para vagas reais. |
| Faltar link acessível ao avaliador | Publicar o protótipo e testar em outra máquina antes da AV1. |
| Baixa inclusão digital | Preservar atendimento assistido no desenho e testar em celular. |
| Expor dados pessoais | Usar dados fictícios, separar consentimento e limitar a publicação. |

**Responsáveis individuais e datas de entrega:** a equipe deve defini-los em conjunto; não há informação suficiente para atribuí-los nominalmente.
