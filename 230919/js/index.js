const items = document.querySelectorAll('article');
const rotate = document.querySelector('#rotate');

for(let i=0; i<items.length; i++)
{
    items[i].addEventListener('mouseover', function()
    {
        rotate.style.animationPlayState = "paused";
    });

    items[i].addEventListener('mouseout', function()
    {
        rotate.style.animationPlayState = "running";
    });
}