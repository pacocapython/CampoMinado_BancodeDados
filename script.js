    const minefield = document.getElementById('minefield');
    
    // Lista expandida para 100 itens, apenas com HTML
   const items = [
  { type: 'html', name: 'SELECT', answer: 'Recupera dados de uma ou mais tabelas (SELECT * FROM usuarios).' },
  { type: 'html', name: 'INSERT', answer: 'Adiciona novos registros (INSERT INTO tabela ...).' },
  { type: 'html', name: 'UPDATE', answer: 'Atualiza registros existentes (UPDATE tabela SET ...).' },
  { type: 'html', name: 'DELETE', answer: 'Exclui registros (DELETE FROM tabela WHERE ...).' },
  { type: 'html', name: 'CREATE', answer: 'Cria novos objetos, como bancos de dados ou tabelas (CREATE TABLE ...).' },
  { type: 'html', name: 'ALTER', answer: 'Modifica a estrutura de uma tabela existente (ALTER TABLE ...).' },
  { type: 'html', name: 'DROP', answer: 'Exclui objetos (tabelas, índices, bancos de dados).' },
  { type: 'html', name: 'WHERE', answer: 'Filtra resultados com base em condições específicas.' },
  { type: 'html', name: 'JOIN', answer: 'Combina linhas de duas ou mais tabelas relacionadas (INNER JOIN).' },
  { type: 'html', name: 'ORDER BY', answer: 'Ordena o conjunto de resultados (ascendente ou descendente).' },
  { type: 'html', name: 'GROUP BY', answer: 'Agrupa linhas que têm os mesmos valores em colunas específicas.' },
  { type: 'html', name: 'HAVING', answer: 'Filtra grupos criados pelo GROUP BY com base em condições.' },
  { type: 'html', name: 'LIMIT', answer: 'Restringe o número de registros retornados na consulta.' },
  { type: 'html', name: 'DISTINCT', answer: 'Remove registros duplicados do resultado da consulta.' },
  { type: 'html', name: 'LIKE', answer: 'Busca por um padrão específico em uma coluna (ex: LIKE "%valor%").' },
  { type: 'html', name: 'IN', answer: 'Verifica se um valor corresponde a qualquer item em uma lista.' },
  { type: 'html', name: 'BETWEEN', answer: 'Filtra valores dentro de um intervalo inclusivo.' },
  { type: 'html', name: 'AS', answer: 'Cria um alias (apelido temporário) para tabelas ou colunas.' },
  { type: 'html', name: 'COUNT', answer: 'Função de agregação que conta o número de linhas retornadas.' },
  { type: 'html', name: 'SUM', answer: 'Função de agregação que calcula a soma dos valores de uma coluna.' },
  { type: 'html', name: 'AVG', answer: 'Função de agregação que calcula a média aritmética de uma coluna.' },
  { type: 'html', name: 'MAX', answer: 'Função de agregação que retorna o valor máximo de uma coluna.' },
  { type: 'html', name: 'MIN', answer: 'Função de agregação que retorna o valor mínimo de uma coluna.' },
  { type: 'html', name: 'TRUNCATE', answer: 'Remove todas as linhas de uma tabela rapidamente sem apagar a estrutura.' },
  { type: 'html', name: 'UNION', answer: 'Combina os resultados de duas ou mais consultas SELECT em um único conjunto.' }
];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(items);

    items.forEach((item, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = index + 1;
        cell.dataset.name = item.name;
        cell.dataset.answer = item.answer;
        cell.dataset.type = item.type;

        cell.addEventListener('click', function() {
            if (this.classList.contains('revealed')) return;
            
            if (this.classList.contains('named')) {
                this.classList.remove('named', 'type-html');
                this.classList.add('revealed');
                this.textContent = this.dataset.answer;
                return;
            }
            
            this.classList.add('named', 'type-html');
            this.textContent = this.dataset.name;
        });

        minefield.appendChild(cell);
    });