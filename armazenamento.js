export const livros = [];

export function adicionarLivro(livro) {
    livros.push(livro);
}

export function removerLivro(titulo) {
    const index = livros.findIndex(l => l.titulo === titulo);
    if (index !== -1) {
        livros.splice(index, 1);
        return true;
    }
    return false;
}

export function listarLivros() {
    if (livros.length === 0) return "Nenhum livro cadastrado.";
    return livros.map(l => `${l.titulo} - ${l.autor} (${l.ano}) [${l.quantidade} exemplares]`).join("\n");
}

export function totalLivros() {
    return livros.reduce((total, l) => total + Number(l.quantidade), 0);
}