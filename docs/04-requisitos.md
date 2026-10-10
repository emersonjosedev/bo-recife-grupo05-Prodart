# 04 — Requisitos

**Legenda:** P = demonstrado no protótipo local; M = requisito proposto para MVP operacional; F = evolução posterior. Os requisitos M e F ainda precisam de validação com usuários e gestão.

## Requisitos funcionais

| ID | Requisito verificável | Etapa |
|---|---|---|
| RF01 | O sistema deve listar feiras e permitir busca por nome, bairro ou local e filtro por categoria. | P |
| RF02 | O sistema deve exibir data, horário, local, categorias e estado de atualização de cada feira. | P |
| RF03 | O sistema deve permitir cadastro básico de artesão e registrar autorização separada para exibir seu perfil ao público. | P |
| RF04 | O sistema deve listar oportunidades compatíveis com a categoria do artesão. | P |
| RF05 | O sistema deve impedir segunda candidatura do mesmo artesão à mesma oportunidade e gerar protocolo consultável. | P |
| RF06 | O sistema operacional deve persistir cadastros, editais e candidaturas em banco compartilhado e vincular cada candidatura à versão do edital. | M |
| RF07 | O sistema operacional deve restringir dados pessoais e ações de gestão conforme o perfil autenticado. | M |
| RF08 | A equipe deve poder registrar decisão, justificativa e autor da alteração; o candidato deve poder consultar o resultado. | F |
| RF09 | A equipe deve poder confirmar local, horário e escala antes da publicação no guia. | F |

## Requisitos não funcionais

| ID | Categoria | Requisito verificável |
|---|---|---|
| RNF01 | Privacidade | Perfis públicos só aparecem mediante autorização; CPF, endereço e documentos não devem aparecer no guia. |
| RNF02 | Integridade | O sistema operacional deve preservar versão do edital e histórico de alterações críticas. |
| RNF03 | Usabilidade | Busca, cadastro e candidatura devem funcionar em tela de celular e informar erros em linguagem clara. |
| RNF04 | Acessibilidade | Controles devem ter rótulos, foco visível e navegação por teclado; verificar em teste manual. |
| RNF05 | Desempenho | Definir meta com base em teste no ambiente de hospedagem escolhido; ainda não há medição confiável. |
| RNF06 | Continuidade | O sistema operacional deve ter backup e procedimento de restauração testado antes do piloto real. |

## Critérios de aceite do fluxo demonstrativo

- [ ] Ao digitar um bairro existente, a lista e os marcadores exibem somente feiras correspondentes.
- [ ] Ao cadastrar um artesão com consentimento, o perfil aparece no guia local; sem consentimento, não aparece.
- [ ] Ao candidatar um perfil elegível, surge protocolo e a candidatura aparece no histórico após recarregar o navegador.
- [ ] A segunda candidatura do mesmo perfil à mesma feira fica indisponível.
- [ ] A interface deixa evidente que dados, candidaturas e pontuação são demonstrativos.

Os critérios de aceite operacionais de RF06–RF09 serão definidos após validação das regras do Prodarte. Os testes estão planejados em [08-testes-e-validacao.md](08-testes-e-validacao.md).
