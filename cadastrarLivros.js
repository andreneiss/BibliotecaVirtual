import { adicionarLivro } from './armazenamento.js';

export function cadastrarLivro(titulo, autor, ano, quantidade) {
    if (!titulo || !autor || !ano || !quantidade) {
        return "Todos os campos devem ser preenchidos!";
    }
    adicionarLivro({ titulo, autor, ano, quantidade: Number(quantidade) });
    return `Livro "${titulo}" cadastrado com sucesso!`;
}