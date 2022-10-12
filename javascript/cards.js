function places(car1, carryOne){
    for(i=0; i<carryOne.length; i++){
        jup = carryOne[i];
        viewImg = allData[jup]['Media'][0];
        Pname = name(jup);
        spl = viewImg.split('.');
        ftype = spl[spl.length-1]
        if(ftype == "mp4"){
            newA = `<a href="/product.html?name=`+Pname+"&jup="+jup+`" class="cardself">
                <video src="/products/`+jup+`/`+viewImg+`" class="cardIMG"></video>
                <div class="contentCard">
                    <div class="name" style="color:grey;">`+Pname+`</div>
                    <div class="price"><span class="verysmall">₹`+Price(jup)+`<small style="color:grey;"><s>`+Price(jup)*2+`</s> 50% off</small></span></div>
                </div>
            </a>`;
        }
        else{
            newA = `<a href="/product.html?name=`+Pname+"&jup="+jup+`" class="cardself">
                <img src="/products/`+jup+`/`+viewImg+`" alt="" class="cardIMG">
                <div class="contentCard">
                    <div class="name" style="color:grey;">`+Pname+`</div>
                    <div class="price"><span class="verysmall">₹`+Price(jup)+` <small style="color:grey;"><s>`+Price(jup)*2+`</s> 50% off</small></span></div>
                </div>
            </a>`;
        }
        car1.innerHTML += newA
    }
}