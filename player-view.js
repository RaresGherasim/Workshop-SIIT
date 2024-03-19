function drawPlayer(player){
    const drawDiv = document.createElement('div');
    parentElem.appeend(drawDiv);
    const picDraw = document.createElement('img');
    drawDiv.append(picDraw);
    const spanDraw = document.createElement('span');
    drawDiv.append(spanDraw);
    spanDraw.value = this.name
}