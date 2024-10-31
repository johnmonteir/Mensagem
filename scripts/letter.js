$(document).ready(function() {
    var envelope = $('#envelope');
    var letter = $('.letter');
    var hearts = $('.hearts div'); // Selecionar os corações
    var btn_open = $("#open");
    var btn_reset = $('#reset');

    // Certifique-se de que a carta esteja inicialmente fechada
    letter.removeClass('read'); // Garante que a carta comece fechada
    hearts.hide(); // Esconde os corações no início

    // Função para abrir o envelope e mostrar os corações
    function openEnvelope() {
        envelope.removeClass('close').addClass('open'); // Abrir envelope

        // Animar os corações com um atraso
        setTimeout(function() {
            hearts.each(function(index) {
                $(this).delay(index * 300).fadeIn(300); // Animar cada coração com um atraso
            });
        }, 400); // Esperar um pouco antes de mostrar os corações
    }

    // Função para expandir a carta e abrir o modal
    function expandLetter() {
        letter.addClass('read'); // Expandir a carta
        setTimeout(function() {
            $('#exampleModal').modal('show'); // Mostrar o modal
        }, 600); // Tempo de espera para abrir o modal
    }

    envelope.click(function() {
        openEnvelope(); // Abrir envelope

        // Esperar para expandir a carta após abrir o envelope
        setTimeout(function() {
            expandLetter(); // Expandir a carta
        }, 3000); // Atraso de 1 segundo para expandir a carta
    });

    btn_open.click(function() {
        openEnvelope(); // Abrir envelope

        // Esperar para expandir a carta após abrir o envelope
        setTimeout(function() {
            expandLetter(); // Expandir a carta
        }, 3000); // Atraso de 1 segundo para expandir a carta
    });

    btn_reset.click(function() {
        close(); // Fechar carta e envelope
    });

    function close() {
        envelope.removeClass('open').addClass('close'); // Fechar envelope
        letter.removeClass('read'); // Reverter a carta
        hearts.hide(); // Esconder os corações
        $('#exampleModal').modal('hide'); // Esconder o modal
    }
});
