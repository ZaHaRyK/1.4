function js(){
  const block = document.querySelector("#div2")
  block.remove();
}
let itHidden = false
function css_js(){ 
  const block = document.querySelector("#div3")
    if(itHidden){
      block.classList.remove('div3');
      block.classList.add('hidden');
      itHidden = false
    }else{
      block.classList.remove('hidden');
      block.classList.add('div3');
      itHidden = true
    }
}