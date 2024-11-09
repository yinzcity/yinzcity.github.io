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

    document.getElementById('work').onclick = function() { toggleVisible('workmenu'); };
    document.getElementById('workmenu').style.display = 'none';
    
    document.getElementById('sketch').onclick = function() { toggleVisible('sketchmenu'); };
    document.getElementById('sketchmenu').style.display = 'none';
};
