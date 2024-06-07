document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('card').classList.toggle('flip-card');
    });
});