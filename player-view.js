const parentElem = document.querySelector('div')

function drawPlayer(player){
    const drawDiv = document.createElement('div');
    parentElem.append(drawDiv);
    const picDraw = document.createElement('img');
    const spanDraw = document.createElement('span');
    const path = `pics/${player.image}`;
    spanDraw.textContent = player.name;
    picDraw.src=path;
    drawDiv.append(spanDraw);
    drawDiv.append(picDraw);
    console.log(player.name);
    
    console.log(path);
}