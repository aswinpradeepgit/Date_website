document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('responseSection').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function(event) {
    const maxX = window.innerWidth - event.target.offsetWidth;
    const maxY = window.innerHeight - event.target.offsetHeight;
    event.target.style.position = 'absolute';
    event.target.style.left = Math.random() * maxX + 'px';
    event.target.style.top = Math.random() * maxY + 'px';
});
