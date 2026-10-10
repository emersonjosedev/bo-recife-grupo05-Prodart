# 03 — Proposta de solução

## Nome e resumo

**PRODART Recife.** Plataforma proposta com um portal para o artesão consultar oportunidades e acompanhar candidaturas e um guia público para localizar feiras. O protótipo atual demonstra esses dois caminhos com dados fictícios. A solução operacional depende de validação com o Prodarte e seus usuários.

## Público e usuários

| Usuário | Ação prevista |
|---|---|
| Artesão | Atualiza cadastro, consulta edital, candidata-se e acompanha protocolo e resultado. |
| Gestor e equipe de campo | Publicam edital, conferem dados, registram decisão, escala e presença. |
| Morador ou visitante | Busca feira e consulta local, data, categorias e perfis autorizados. |

## Proposta de valor

Uma fonte de dados compartilhada entre oportunidades e guia público pode reduzir divergências e tornar regras e atualizações rastreáveis. O benefício real será avaliado por testes e indicadores; ainda não foi comprovado.

## Fluxos principais

```text
Artesão → consulta oportunidade e edital → envia candidatura → recebe protocolo
        → acompanha situação → consulta decisão e recurso (futuro)

Equipe → publica edital → confere inscrições → registra decisão e escala
       → confirma informações da feira → alimenta o guia (futuro)

Público → busca feira → vê informações e horário da última atualização
```

## Funcionalidades essenciais

| ID | Funcionalidade | Problema relacionado | Prioridade | Situação |
|---|---|---|---|---|
| F01 | Busca e filtro de feiras com detalhes | Descoberta das feiras | Alta | Protótipo funcional com dados fictícios |
| F02 | Cadastro básico e consentimento de perfil público | Identificação e divulgação autorizada | Alta | Protótipo local |
| F03 | Consulta de oportunidades e candidatura com protocolo | Acompanhamento da participação | Alta | Protótipo local |
| F04 | Publicação de edital e critérios versionados | Clareza das regras | Alta | Proposta, não implementada |
| F05 | Gestão de decisões, recurso e escala auditável | Explicação dos resultados | Média | Proposta, não implementada |
| F06 | Confirmação operacional das feiras | Confiabilidade do guia | Média | Proposta, não implementada |

## Diferencial e limites

A proposta relaciona o fluxo do artesão ao guia público por meio de dados confirmados, com protocolo e versão de edital. Os canais oficiais atuais continuam válidos. O algoritmo de pontuação exibido no protótipo é **apenas exemplo para debate**; não representa regra do Prodarte e não decide vagas reais.

## Funcionalidades futuras

Autenticação e perfis de acesso, análise de recursos, atendimento assistido, confirmação de presença e barraca, auditoria, indicadores e integração institucional.
