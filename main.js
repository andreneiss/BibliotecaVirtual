import { cadastrarLivro } from './cadastrarLivros.js';
import { listarTodos } from './listarLivros.js';
import { totalDeLivros } from './calcularTotal.js';
import { gerarRelatorio } from './gerarRelatorio.js';
import { excluirLivro } from './excluirLivros.js';

export function executarAcao(acao, ...params) {
    switch(acao) {
        case 'cadastrar': return cadastrarLivro(...params);
        case 'listar': return listarTodos();
        case 'total': return totalDeLivros();
        case 'relatorio': return gerarRelatorio();
        case 'excluir': return excluirLivro(...params);
        default: return "Ação desconhecida!";
    }
}

// Tornar a função visível no HTML
globalThis.executarAcao = executarAcao;