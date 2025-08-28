import { removerLivro } from './armazenamento.js';

export function excluirLivro(titulo) {
    if (!titulo) return "Informe o título do livro para excluir.";
    const removido = removerLivro(titulo);
    return removido ? `Livro "${titulo}" removido com sucesso!` : `Livro "${titulo}" não encontrado.`;
}