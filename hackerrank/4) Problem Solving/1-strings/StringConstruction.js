function stringConstruction(s) {
    let _s = s.split('');
    let p="";
    for(let i in _s){
        if(_s[i] !== _s[i+1]){
               console.log(s[i]);
        }
    }
}