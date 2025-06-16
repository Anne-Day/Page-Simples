document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    const mensagem = encodeURIComponent(`Olá ${nome}, foi escolhido(a) para uma consultoria exclusica. Aguarde e entraremos em contato em breve.`)
    const link = `https://wa.me/${telefone}?text=${mensagem}`;

    window.open(link,'_blank');
})