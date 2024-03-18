let f,c;
let cel=document.getElementById('cel');
let fah=document.getElementById('fah');
cel.addEventListener('input',function(){
     c=this.value;
    f=(c*9/5)+32;
    if(!Number.isInteger(f)){
        f=f.toFixed(4);
    }
    fah.value=f;

});
fah.addEventListener('input',function(){
    f=this.value;
    c=(f-32)*5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    cel.value=c;

})
