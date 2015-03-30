var cursorType = 'auto';

chrome.storage.sync.get("cursorType", function (sync) {
    cursorType = sync.cursorType;
});

$('a').each(function () {
    if ($(this).attr('target') == '_blank') {
        $(this).hover(function () {
            $(this).css('cursor', cursorType);
        }, function () {
            $(this).css('cursor', 'auto');
        });
    }
});