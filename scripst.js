// scripst.js

// function ShowHide() {
//     let containerShow = document.getElementsByClassName("containerShow")[0];
//     if (containerShow.style.visibility === "hidden") {
//         containerShow.style.visibility = "visible";
//     } else {
//         containerShow.style.visibility = "hidden";
//     }
// }

document.getElementById('downloadButton').addEventListener('click', function() {
    var pdfPath = this.dataset.src;

    var link = document.createElement('a');
    link.href = pdfPath;

    link.download = './Curriculum.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});

function mostrar(id) {
    document.getElementById(id).style.display = "block";
}

function ocultar(id) {
    document.getElementById(id).style.display = "none";
}
