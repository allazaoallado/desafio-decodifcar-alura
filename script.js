window.addEventListener("load", function() {
var teste = document.getElementById("texto").readOnly = true;
});
gatificar = () => {
    codificarTexto = (texto) =>{

        return texto.replace(/M/g, 'Miiaaamiu_!')
                  .replace(/A/g, 'Miiiau_!')
                  .replace(/B/g, 'Miiaauu_!')
                  .replace(/C/g, 'Miaaaau_!')
                  .replace(/Ç/g, 'Miaaaau_!')
                  .replace(/D/g, 'Miauuuu_!')
                  .replace(/E/g, 'Mmiauu_!')
                  .replace(/F/g, 'Miiauuu_!')
                  .replace(/G/g, 'Mmmiaau_!')
                  .replace(/H/g, 'Miaaau_!')
                  .replace(/I/g, 'Mmmiau_!')
                  .replace(/J/g, 'Miaauu_!')
                  .replace(/K/g, 'Mmiiaua_!')
                  .replace(/L/g, 'Miiaau_!')
                  .replace(/N/g, 'Miauuu_!')
                  .replace(/O/g, 'Mmmiaaa_!')
                  .replace(/P/g, 'Miiaaau_!')
                  .replace(/Q/g, 'Miaam_!')
                  .replace(/R/g, 'Miiaaa_!')
                  .replace(/S/g, 'Miaaae_!')
                  .replace(/T/g, 'Miaiau_!')
                  .replace(/U/g, 'Mmiiaa_!')
                  .replace(/V/g, 'Miaaaa_!')
                  .replace(/W/g, 'Miaaeu_!')
                  .replace(/X/g, 'Miaou_!')
                  .replace(/Y/g, 'Miiiaau_!')
                  .replace(/Z/g, 'Miaaiu_!')
                  .replace(' ', '*')
                  .replace(/_/g, '')
                  .replace('*', ' ')

      }
    input = document.getElementById('escreva')
    p = document.getElementById('texto')

    return   p.innerHTML = `${(codificarTexto(input.value.toUpperCase()))}`
}




humanizar = () => {
  codificarTexto = (texto) =>{

    return texto.replace(/!/g,'')
                .replace(/´/g,'')
                .replace(/miiiau/g, 'A')
                .replace(/miiaauu/g, 'B')
                .replace(/miaaaau/g, 'C')
                .replace(/miauuuu/g, 'D')
                .replace(/mmiauu/g , 'E')
                .replace(/miiauuu/g, 'F')
                .replace(/mmmiaau/g, 'G')
                .replace(/miaaau/g, 'H')
                .replace(/mmmiau/g, 'I')
                .replace(/miaauu/g, 'J')
                .replace(/mmiiaua/g, 'K')
                .replace(/miiaau/g , 'L')
                .replace(/miiaaamiu/g , 'M')
                .replace(/miauuu/g, 'N')
                .replace(/mmmiaaa/g, 'O')
                .replace(/miiaaau/g, 'P')
                .replace(/miaam/g, 'Q')
                .replace(/miiaaa/g, 'R')
                .replace(/miaaae/g, 'S')
                .replace(/miaiau/g, 'T')
                .replace(/mmiiaa/g, 'U')
                .replace(/miaaaa/g, 'V')
                .replace(/miaaeu/g, 'W')
                .replace(/miaou/g, 'X')
                .replace(/miiiaau/g, 'Y')
                .replace(/miaaiu/g, 'Z')


  }
input = document.getElementById('escreva')
p = document.getElementById('texto')
return p.innerHTML = `${codificarTexto(input.value.toLowerCase()).toUpperCase()}`
}


function copiarTexto() {
  // Seleciona o conteúdo do textarea
  const textarea = document.getElementById('texto');
  textarea.select();
  p = document.getElementById('texto')
  // Copia o conteúdo selecionado para a área de transferência
  document.execCommand('copy');
  alert('Copiado!')
}