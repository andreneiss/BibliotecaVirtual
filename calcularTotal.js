import { totalLivros } from './armazenamento.js';

export function totalDeLivros() {
    return `Total de exemplares: ${totalLivros()}`;
}