# 09 — Resultados e limitações

## Resultados verificáveis até 05/10/2026

- Há um protótipo navegável com guia de feiras, perfis de exemplo, cadastro local, candidatura com protocolo e histórico no navegador.
- O plano conceitual descreve dados, seleção, privacidade, indicadores e implantação em etapas.
- O código original contém teste de fumaça para o fluxo local. A execução e o resultado desse teste no repositório de entrega devem ser registrados antes da AV2.

Esses resultados demonstram implementação de interface e lógica local. **Ainda não comprovam** melhoria do serviço público, aceitação pelos artesãos ou funcionamento de inscrição oficial.

## Limitações

- Eventos, vagas, pessoas e pontuações do protótipo são fictícios.
- `localStorage` não permite acesso compartilhado nem garante integridade ou identidade do candidato.
- Não há backend, banco de dados, autenticação, edital oficial versionado ou auditoria real.
- Não há entrevistas, linha de base, métricas medidas ou piloto institucional documentados.
- O mapa é ilustrativo e não deve orientar deslocamento como mapa geográfico preciso.
- O link público do protótipo ainda precisa ser informado.

## Próximos passos

Concluir investigação com usuários e gestão; publicar e revisar o protótipo; portar o fluxo para `src/`; executar testes manuais e automatizados; medir as três métricas; registrar resultados reais aqui. Um serviço operacional exigirá regras aprovadas, proteção de dados, infraestrutura e manutenção institucional.
