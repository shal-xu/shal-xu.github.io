$('nav > button').each((index, element) =>
  $(element).click(() => {
    $('.highlight').css('left', `calc(${index * 33 + 16.5}% - 67px)`);
    $(element).css(
      'color',
      `rgba(${255 - index * 10},${208 - 69 * index},${18 - 6 * index},1)`
    );
    $('nav > button')
      .not(element)
      .css('color', 'white');
    $('.page').css('transform', `translate(${-1 * index}00%)`);
  })
);

$('#rsvp').click(() => {
  $('.highlight').css('left', `calc(82.5% - 67px)`);
  $(nav > button)[2].css(
    'color',
    `rgba(${255 - 2 * 10},${208 - 69 * 2},${18 - 6 * 2},1)`
  );
  $('nav > button')[0].css('color', 'white');
  $('.page').css('transform', `translate(${-1 * 2}00%)`);
});
