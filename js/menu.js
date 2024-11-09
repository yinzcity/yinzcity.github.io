window.onload = function()
{
    var toggleVisible = function(id)
    {
         var obj = document.getElementById(id);
         if (obj.style.display === 'none')
            obj.style.display = 'block';
         else
            obj.style.display = 'none';
    };

    
    document.getElementById('zine').onclick = function() { toggleVisible('zinemenu'); };
    document.getElementById('zinemenu').style.display = 'none';
};
