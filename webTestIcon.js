(function() {
  document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector('#webTestIcon')) {
      //浮動位置
      var boxStyleContent = '';
      var webTestIcon = document.querySelector('#webTestIcon');
      var offsetX = webTestIcon.getAttribute('offsetX');
      var offsetY = webTestIcon.getAttribute('offsetY');
      boxStyleContent += 'position: fixed;';
      boxStyleContent += 'z-index: 999;';
      boxStyleContent += 'color: #fff;';
      (offsetX === 'left') ? (boxStyleContent += 'left: 0;') : (boxStyleContent += 'right: 0;');
      (offsetY === 'top') ? (boxStyleContent += 'top: 0;') : (boxStyleContent += 'bottom: 0;');
      webTestIcon.setAttribute('style', boxStyleContent);
      
      //三角形區塊
      var colorBoxStyleContent = ''
      var textStyleContent = ''
      var colorBox = document.createElement("dev");
      colorBoxStyleContent += 'width: 0;'
      colorBoxStyleContent += 'height: 0;'
      colorBoxStyleContent += 'display: block;'
      colorBoxStyleContent += 'border-style: solid;'
      textStyleContent += 'position: absolute;'
      if(offsetX === 'left'&& offsetY === 'top') {
        colorBoxStyleContent += 'border-width: 100px 100px 0 0;'
        colorBoxStyleContent += 'border-color: #000 transparent transparent transparent;'
        textStyleContent += 'top: 11px;'
        textStyleContent += 'left: 7px;'
        textStyleContent += 'transform: rotate(-45deg);'
      } else if(offsetX === 'left'&& offsetY === 'bottom') {
        colorBoxStyleContent += 'border-width: 100px 0 0 100px;'
        colorBoxStyleContent += 'border-color: transparent transparent transparent #000;'
        textStyleContent += 'top: 33px;'
        textStyleContent += 'left: 7px;'
        textStyleContent += 'transform: rotate(45deg);'
      } else if(offsetX === 'right'&& offsetY === 'top') {
        colorBoxStyleContent += 'border-width: 0 100px 100px 0;'
        colorBoxStyleContent += 'border-color: transparent  #000 transparent transparent;'
        textStyleContent += 'top: 16px;'
        textStyleContent += 'left: 28px;'
        textStyleContent += 'transform: rotate(45deg);'
      } else if(offsetX === 'right'&& offsetY === 'bottom'){
        colorBoxStyleContent += 'border-width: 0 0 100px 100px;'
        colorBoxStyleContent += 'border-color: transparent  transparent #000 transparent;'
        textStyleContent += 'top: 34px;'
        textStyleContent += 'left: 25px;'
        textStyleContent += 'transform: rotate(-45deg);'
      }
      colorBox.setAttribute('style', colorBoxStyleContent)
      webTestIcon.appendChild(colorBox);
      
       //文字區塊
      var para = document.createElement("p");
      var node = document.createTextNode("測試平台");
      para.appendChild(node);
      para.setAttribute('style', textStyleContent)
      webTestIcon.appendChild(para);
    }
  })
})();