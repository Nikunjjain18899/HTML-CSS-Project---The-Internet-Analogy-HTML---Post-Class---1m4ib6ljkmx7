const contents= document.querySelectorAll('.content');
const listitem= document.querySelectorAll('nav ul li');

listitem.forEach((item, idx)=>{
    item.addEventListener('click' ,()=>{
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        contents[idx].classList.add('show');
    });
});

function hideAllContents(){
    contents.forEach(contents=> contents.classList.remove('show'))
};

function hideAllItems(){
    contents.forEach(item=> item.classList.remove('active'))
};
