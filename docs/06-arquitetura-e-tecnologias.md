# 06 — Arquitetura e tecnologias

## Arquitetura atual do protótipo

```text
Navegador
  ├─ index.html + styles.css → interface pública e portal demonstrativo
  ├─ app.js → filtros, cadastro, candidatura e renderização
  └─ localStorage → cadastros e candidaturas somente neste navegador
```

O código está em [assets/prototipo](../assets/prototipo/). Não há backend, API, banco de dados ou autenticação. O mapa é uma ilustração em HTML/CSS. O plano associado também está no diretório do protótipo.

## Arquitetura proposta para uso operacional

```text
Navegador público / portal autenticado
            ↓ HTTPS
API de cadastro, editais, candidaturas e feiras
            ↓
Banco relacional + trilha de auditoria + cópias de segurança
            ↑
Gestão valida editais; equipe de campo confirma dados da feira
```

**Decisões ainda abertas:** linguagem e framework do backend, provedor de hospedagem, banco específico e integração com autenticação municipal. A equipe deve fechar essas escolhas após levantar requisitos institucionais; esta documentação não afirma que a Prefeitura adotou essa arquitetura.

## Tecnologias

| Camada | Tecnologia atual ou proposta | Justificativa |
|---|---|---|
| Interface demonstrativa | HTML, CSS e JavaScript sem framework | Executa diretamente no navegador e permite testar fluxos cedo. |
| Persistência demonstrativa | `localStorage` | Guarda dados de teste localmente; não serve para operação compartilhada. |
| Backend operacional | A definir | Necessário para autenticação, regras, protocolo e auditoria confiáveis. |
| Banco operacional | Relacional, produto a definir | Relaciona artesão, edital, candidatura, decisão, feira e presença. |
| Hospedagem | A definir | Exige análise de segurança, manutenção e custos com o órgão responsável. |

## Entidades previstas

| Entidade | Campos essenciais |
|---|---|
| Artesão | ID, nome público, contato restrito, categoria, situação cadastral, consentimento. |
| Feira e edição | ID, local, data, horário, capacidade, estado e última confirmação. |
| Edital | ID, versão, prazo, vagas, categorias, critérios e recurso. |
| Candidatura | ID, protocolo, artesão, edital/versão, envio e situação. |
| Avaliação e escala | Critério, justificativa, avaliador, posição e histórico. |
| Presença | Feira, data, artesão, confirmação e responsável. |

Dados pessoais e operações administrativas devem ficar em camadas restritas. O guia público deve publicar apenas informações autorizadas e confirmadas.
