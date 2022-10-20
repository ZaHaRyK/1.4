const menu = document.querySelector(".menu")


menu.addEventListener("dragover", (event) => {
    event.preventDefault();
})


menu.addEventListener("drop", (event) => {
    event.preventDefault();
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#ADDDD0', '#6F38c5'],
                    ['#6F38c5', '#ADDDD0'],
                    ['#ADDDD0', '#6F38c5'],
                    ['#6F38c5', '#ADDDD0'],
                    ['#ADDDD0', '#6F38c5'],
                    ['#6F38c5', '#ADDDD0'],
                    ['#ADDDD0', '#6F38c5'],
                    ['#6F38c5', '#ADDDD0']
                ]
            }
        }
    });
})