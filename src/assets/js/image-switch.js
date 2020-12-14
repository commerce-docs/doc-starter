$('.image-switch').each( function () {
  var $switch = $(this);
  var $imgs = $switch.find('img');
  console.log($imgs);


  var $tabs = $('<div class="spectrum-Tabs spectrum-Tabs--horizontal">');
  var i = 0;
  $imgs.each( function () {
    var text =  $(this).attr('alt');
    var className = 'spectrum-Tabs-item';
    if (i == 0) {
      className += " is-selected";
    } else {
      $(this).hide();
    }
    $tabs.append('<div data-tabid="' + i + '" class="' + className + '"><span class="spectrum-Tabs-itemLabel">' + text + '</span></div>');
    i++;
  });

  $tabs.append('<div class="spectrum-Tabs-selectionIndicator" style=" width: 10px; transform: translate(0,0);"></div>')

  $switch.prepend($tabs);

  // On click 
  $tabs.find('.spectrum-Tabs-itemLabel').on('click', function () {
    var $tab = $(this).parent();
    var id = $tab.data('tabid');
    $imgs.hide();
    

    $($imgs.get(id)).show();
    $tabs.find('div').removeClass('is-selected');
    $tab.addClass('is-selected');
   

    $tabs.find('.spectrum-Tabs-selectionIndicator').css({
      'transform': 'translate(' +  ( $tab.position().left + (  $tab.outerWidth(true) -  $tab.outerWidth()) ) + 'px, 0)',
      'width' : $tab.width() + 'px'
    });
  }).filter(':first').trigger('click');

});