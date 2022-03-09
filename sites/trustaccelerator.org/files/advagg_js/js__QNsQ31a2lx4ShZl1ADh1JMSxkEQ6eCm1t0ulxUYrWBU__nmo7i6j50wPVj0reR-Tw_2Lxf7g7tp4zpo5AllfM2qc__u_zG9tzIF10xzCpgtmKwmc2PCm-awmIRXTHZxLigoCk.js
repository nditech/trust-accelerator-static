/* Source and licensing information for the line(s) below can be found at https://trustaccelerator.ndi.org/profiles/dkan/modules/contrib/panopoly_widgets/panopoly-widgets.js. */
(function($){if(Drupal.overlay)Drupal.overlay.getDisplacement=function(region){var displacement=0,lastDisplaced=$('.overlay-displace-'+region+':last');if(lastDisplaced.length){displacement=lastDisplaced.offset().top+lastDisplaced.outerHeight();var cssBoxShadowValue=lastDisplaced.css('box-shadow'),boxShadow=(typeof cssBoxShadowValue!=='undefined'&&cssBoxShadowValue!=='none');if(!boxShadow&&/DXImageTransform\.Microsoft\.Shadow/.test(lastDisplaced.css('filter'))){displacement-=lastDisplaced[0].filters.item('DXImageTransform.Microsoft.Shadow').strength;displacement=Math.max(0,displacement)}};return displacement}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://trustaccelerator.ndi.org/profiles/dkan/modules/contrib/panopoly_widgets/panopoly-widgets.js. */
/* Source and licensing information for the line(s) below can be found at https://trustaccelerator.ndi.org/profiles/dkan/modules/contrib/panopoly_widgets/panopoly-widgets-spotlight.js. */
Drupal.settings.spotlight_settings=Drupal.settings.spotlight_settings||{};(function($){Drupal.behaviors.panopolySpotlight={attach:function(context,settings){if($('.field-name-field-basic-spotlight-items',context).length)$('.field-name-field-basic-spotlight-items',context).each(function(){var rotation_time=$(this).find('.panopoly-spotlight-buttons-wrapper').data('rotation-time'),$widget=$(this),$slides=$widget.find('.panopoly-spotlight'),$controls=$widget.find('.panopoly-spotlight-buttons-wrapper li'),current=0,timer=null
function start(){if(timer===null)timer=setTimeout(rotate,rotation_time)}
function stop(){if(timer!==null){clearTimeout(timer);timer=null}}
function rotate(){current++;if(current>=$controls.length)current=0;$controls.eq(current).children('a').trigger('click.panopoly-widgets-spotlight')};$widget.find('.panopoly-spotlight-buttons-wrapper').css('display','block');$slides.hide();$slides.eq(0).show();$controls.eq(0).addClass('active');$controls.once('panopoly-spotlight').children('a').bind('click.panopoly-widgets-spotlight',function(event){var selector=$(this).attr('href');if(selector.indexOf('#')===0){event.preventDefault();$controls.removeClass('active');$(this).parent().addClass('active');$slides.hide();$slides.filter(selector).show();if(timer!==null){stop();start()};return false}});$widget.find('.panopoly-spotlight-pause-play').once('panopoly-spotlight').bind('click.panopoly-widgets-spotlight',function(event){event.preventDefault();if($(this).hasClass('paused')){start();$(this).text(Drupal.t('Pause'));$(this).removeClass('paused')}else{stop();$(this).text(Drupal.t('Play'));$(this).addClass('paused')}});if($widget.find('.panopoly-spotlight-previous').length&&$widget.find('.panopoly-spotlight-next').length){$widget.find('.panopoly-spotlight-previous').once('panopoly-spotlight').bind('click.panopoly-widgets-spotlight',function(event){event.preventDefault();$widget.find('.panopoly-spotlight-pause-play:not(.paused)').trigger('click.panopoly-widgets-spotlight');var activeControl=$($controls.filter('.active'));if(activeControl.prev().length!=0){activeControl.prev().children('a').trigger('click.panopoly-widgets-spotlight')}else $controls.last().children('a').trigger('click.panopoly-widgets-spotlight')});$widget.find('.panopoly-spotlight-next').once('panopoly-spotlight').bind('click.panopoly-widgets-spotlight',function(event){event.preventDefault();$widget.find('.panopoly-spotlight-pause-play:not(.paused)').trigger('click.panopoly-widgets-spotlight');var activeControl=$($controls.filter('.active'));if(activeControl.next().length!=0){activeControl.next().children('a').trigger('click.panopoly-widgets-spotlight')}else $controls.first().children('a').trigger('click.panopoly-widgets-spotlight')})};start()})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://trustaccelerator.ndi.org/profiles/dkan/modules/contrib/panopoly_widgets/panopoly-widgets-spotlight.js. */
