
document.getElementById('downloadButton').addEventListener('click', function() {
    var pdfPath = this.dataset.src;

    var link = document.createElement('a');
    link.href = pdfPath;

    link.download = './Curriculum.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});

// scripst.js

function mostrar(id) {
    document.getElementById(id).style.display = "block";
}

function ocultar(id) {
    document.getElementById(id).style.display = "none";
}
