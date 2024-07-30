let container = document.querySelector("#container");



for (let index = 0; index < 5; index++) {
    let line = document.createElement('div');
    line.setAttribute('class', 'line');
    container.appendChild(line);

    for (let i = 0; i < 5; i++) {
        let element = document.createElement('div')
        element.setAttribute('class', 'collumn');
        line.appendChild(element);
    }
}