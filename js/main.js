var easings_element = document.getElementById('easings');

for(key in easement){
    var easing = easement[key];
    
    var easing_element = document.createElement('div');
    easing_element.setAttribute('class', 'easing easing-'+key);
    
    var easing_header_element = document.createElement('h3');
    easing_header_element.innerHTML = key
    
    var easing_canvas_wrapper = document.createElement('div');
    easing_canvas_wrapper.setAttribute('class', 'easing-graph')
    
    var easing_canvas = document.createElement('canvas');
    var ctx=easing_canvas.getContext("2d");
    var ctx_width = easing_canvas.width;
    var ctx_height = easing_canvas.height;
    ctx.beginPath();
    ctx.moveTo(0, ctx_height);
    for(var x = 0; x < 1; x = x+1/ctx_width){
        ctx.lineTo(x*ctx_width, ctx_height*easing(x));
    }
    ctx.stroke();
    
    easing_element.appendChild(easing_header_element);
    easing_canvas_wrapper.appendChild(easing_canvas);
    easing_element.appendChild(easing_canvas_wrapper);
    
    easings_element.appendChild(easing_element);
}
