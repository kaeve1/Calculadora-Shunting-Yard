Este é um projeto de calculadora web feito em JavaScript puro como exercício de lógica e parsing de expressões.

A proposta foi ir além de simplesmente calcular resultados e entender como uma expressão matemática pode ser lida e resolvida internamente, por isso optei por não usar eval(). 
No começo usei eval() pela praticidade, mas aprendi que ele executa qualquer código recebido em string, o que é arriscado e tira o controle da lógica. 
Então reescrevi o cálculo usando pilhas de valores e operadores, no modelo de “vagões”, inspirado no algoritmo Shunting Yard, onde a expressão é quebrada em tokens (números e operadores) e processada respeitando prioridade de sinais. 

Implementei prioridade entre +, -, *, /, %, ^, suporte a números decimais, potência e porcentagem, bloqueio de operadores duplicados, tratamento de expressão inválida e divisão por zero com mensagens curtas de erro no display.


O projeto serviu para treinar estrutura de dados, regex, validação de entrada, controle de fluxo e segurança básica de execução. 
A interface é simples e direta, e o código foi organizado para ficar legível e aberto a melhorias futuras como parênteses e modo científico. 
