  document.querySelectorAll('.dec').forEach(function(button) {  
    button.addEventListener('click', function() {
        var row = button.closest('tr');
         var qtyCell = row.querySelector('.count');
         var current = parseInt(qtyCell.textContent);
         if (current > 0) {
            current= current - 1;
             if (current === 0) {
                qtyCell.textContent = 'SOLD OUT';
                qtyCell.style.color = 'red';
                button.disabled = true;
                button.style.backgroundColor = 'gray';
             } else {
                qtyCell.textContent = current;
             }
            }
    });
});
