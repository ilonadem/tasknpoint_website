function main() {
  setupTabs();
}

function setupTabs() {
  $('#tabs li').on('click', function () {
    let tab = $(this).data('tab');

    $('#tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tabs-content div').removeClass('is-active');
    $('div[data-content="' + tab + '"]').addClass('is-active');
  });
}

$(document).ready(main);
