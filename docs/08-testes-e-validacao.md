# 08 — Testes e validação

## Estado atual

O protótipo original inclui um teste de fumaça automatizado que verifica arquivos, renderização inicial, candidatura e cadastro. Ele usa elementos DOM simulados e dados fictícios; não substitui teste em navegador, acessibilidade ou validação com usuários. Nenhum resultado de entrevista ou piloto foi fornecido.

## Cenários para a AV2

| ID | Cenário | Resultado esperado | Evidência a registrar |
|---|---|---|---|
| T01 | Buscar feira por bairro e filtrar categoria | Só aparecem feiras compatíveis; seleção mostra detalhes. | Captura e navegador usado. |
| T02 | Cadastrar perfil com e sem consentimento | Apenas o perfil autorizado aparece no guia local. | Captura antes/depois. |
| T03 | Candidatar perfil elegível | Protocolo aparece e permanece no histórico após recarregar. | Protocolo fictício e captura. |
| T04 | Repetir candidatura ou usar categoria incompatível | A ação fica indisponível; não surge segundo registro. | Contagem de registros locais. |
| T05 | Navegar por teclado e em tela estreita | Controles acessíveis e fluxo concluído. | Dispositivo, resolução e problemas. |

## Métricas propostas

1. **Conclusão de tarefa:** participantes que concluíram cadastro e candidatura sem ajuda ÷ participantes que tentaram. Registrar também os motivos de falha.
2. **Tempo de tarefa:** mediana dos minutos entre abrir a oportunidade e obter o protocolo, com e sem atendimento assistido.
3. **Compreensão:** participantes que identificam corretamente se a inscrição é demonstrativa e onde consultariam as regras ÷ participantes entrevistados.

Para um piloto real, acrescentar prazo entre encerramento e resultado, adoção por elegíveis e proporção de feiras com dados confirmados no prazo. Essas métricas exigem linha de base e dados reais autorizados.

## Protocolo de validação

Definir perfis de participantes, obter autorização para o teste, usar dados fictícios, registrar data e versão do protótipo, aplicar T01–T05 e coletar dúvidas sem nomes ou contatos no repositório. Comparar as métricas com a linha de base, corrigir os problemas e repetir os cenários afetados. **Não há valores medidos nesta versão.**
