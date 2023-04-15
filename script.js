input_gato = document.getElementById('input_gato')
input_gato.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
  });
input_gato.addEventListener("keypress", function(event) {
    const key = event.key.toLowerCase();
    const accents = "áàãâäéèêëíìîïóòõôöúùûü";
    
    if (accents.includes(key)) {
      event.preventDefault();
    }
  });

input_humano = document.getElementById('input_humano')
input_humano.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
  });
  
button_gato = document.getElementById('button_gato')
button_humano = document.getElementById('button_humano')

p_gato = document.getElementById('p_gato')
p_humano = document.getElementById('p_humano')



function aumentarLetra(texto){
    return texto.toLowerCase().split(' ').map(texto => texto.charAt(0).toLocaleUpperCase() + texto.slice(1)).join(' ');
}








gatificar = () => {
    codificarTexto = (texto) =>{

        return texto.replace(/M/g, 'Miiaaamiu_!')
                  .replace(/A/g, 'Miiiau_!')
                  .replace(/B/g, 'Miiaauu_!')
                  .replace(/C/g, 'Miaaaau_!')
                  .replace(/Ç/g, 'Miaaaau_!')
                  .replace(/D/g, 'Miauuuu_!')
                  .replace(/E/g, 'Mmiauu_!')
                  .replace(/F/g, 'miiauuu_!')
                  .replace(/G/g, 'mmmiaau_!')
                  .replace(/H/g, 'miaaau_!')
                  .replace(/I/g, 'mmmiau_!')
                  .replace(/J/g, 'miaauu_!')
                  .replace(/K/g, 'mmiiaua_!')
                  .replace(/L/g, 'Miiaau_!')
                  .replace(/N/g, 'Miauuu_!')
                  .replace(/O/g, 'Mmmiaaa_!')
                  .replace(/P/g, 'miiaaau_!')
                  .replace(/Q/g, 'miaam_!')
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
    input = document.getElementById('input_gato')
    p = document.getElementById('p_gato')

    return   p.innerHTML = `TEXTO: ${(codificarTexto(input.value))}`
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
    input = document.getElementById('input_humano')
    p = document.getElementById('p_humano')
    return p.innerHTML = `TEXTO: ${codificarTexto(input.value.toLowerCase()).toUpperCase()}`

}