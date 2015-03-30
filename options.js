$('input').each(function () {
    $(this).after($(this).val());
});

function save_options() {
    var cursorType = $('input[name="cursor"]:checked').val();
    chrome.storage.sync.set({
        cursorType: cursorType
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    alert('hi');
    chrome.storage.sync.get({
        cursorType: 'auto'
    }, function (items) {
        $('input[value="' + items.cursorType + '"]'.checked);
        console.log($('input[value="' + items.cursorType + '"]').prop('checked', true));
        var cursorType = items.cursorType;
        alert(cursorType);
    });
}

document.addEventListener('DOMContentLoaded', restore_options);

$('#save').click(save_options);