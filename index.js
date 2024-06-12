document.addEventListener("DOMContentLoaded", function() {
    const perguntas = document.querySelectorAll('.faq-pergunta');

    perguntas.forEach((pergunta) => {
        pergunta.addEventListener('click', function(e) {
            const faq = e.target.closest('.faq');
            const flechaParaBaixo = pergunta.querySelector('.flecha-para-baixo');

            if (faq) {
                const linha = faq.querySelector('hr');
                const paragrafo = faq.querySelector('p');

                if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
                    linha.style.display = 'block';
                    paragrafo.style.display = 'block';
                    faq.style.height = 'auto';
                    if (flechaParaBaixo) {
                        flechaParaBaixo.style.transform = 'rotate(180deg)';
                    }
                } else {
                    linha.style.display = 'none';
                    paragrafo.style.display = 'none';
                    faq.style.height = 'max-content';
                    if (flechaParaBaixo) {
                        flechaParaBaixo.style.transform = 'rotate(0deg)';
                    }
                }
            }
        });
    });
});
