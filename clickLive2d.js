document.getElementById('buneiModel').addEventListener('click', function (event) {
    event.preventDefault();
    config.role = 'bunei';
    var v = new Viewer(config);
});

document.getElementById('angieModel').addEventListener('click', function (event) {
    event.preventDefault();
    config.role = 'Angieeechan';
    var v = new Viewer(config);
});