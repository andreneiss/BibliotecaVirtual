import { listarLivros, totalLivros } from './armazenamento.js';

export function gerarRelatorio() {
    const lista = listarLivros();
    const total = totalLivros();
    return `📑 Relatório da Biblioteca\n\n${lista}\n\nTotal de exemplares: ${total}`;
}