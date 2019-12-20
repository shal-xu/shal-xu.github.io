$(window).on('load', function() {
  const setActiveTab = index => {
    $('.highlight').css('left', `calc(${index * 33 + 16.5}% - 67px)`);
    $('nav > button')
      .not()
      .css('color', 'white');
    $('nav>button')
      .eq(index)
      .css(
        'color',
        `rgba(${255 - index * 10},${208 - 69 * index},${18 - 6 * index},1)`
      );
    $('.page').css('transform', `translate(${-1 * index}00%)`);
  };

  $('nav > button').each((index, element) =>
    $(element).click(() => setActiveTab(index))
  );

  $('#rsvp').click(() => setActiveTab(2));

  setActiveTab(0);

  $('.sparkle').sparkleh({
    count: 80,
    color: ['gold', 'white', 'red'],
    speed: 0.5,
    overlap: 60
  });

  const menuItems = [
    {
      name: 'Wonton Noodle Soup with Bok Choy',
      image: 'images/wonton-noodle-soup.jpg'
    },
    {
      name: 'Century Egg and Pork Porridge',
      image: 'images/porridge.jpg'
    },
    {
      name: 'Fried Breadsticks',
      image: 'images/fried-breadsticks.jpg'
    },
    {
      name: 'Spiced Sunflower Seeds',
      image: 'images/sunflower-seeds.jpg'
    },
    {
      name: 'Asian Pancakes',
      image: 'images/asian-pancakes.jpg'
    },
    {
      name: 'Soymilk',
      image: 'images/soymilk.jpg'
    },
    {
      name: 'Homemade Apple Sauce',
      image: 'images/apple-sauce.jpg'
    },
    {
      name: 'Taro Bun',
      image: 'images/taro-buns.jpg'
    },
    {
      name: 'Egg Tarts',
      image: 'images/egg-tarts.jpg'
    },
    {
      name: 'Boiled Lettuce with Oyster Sauce',
      image: 'images/lettuce.jpg'
    }
  ];

  menuItems.forEach(item =>
    $('#menu-items').append(
      `
      <div class="item">
        <div
          class="background"
          style="background-image:url(${item.image})"
        ></div>

       ${item.name}
      </div>`
    )
  );
});
