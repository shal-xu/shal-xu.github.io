$(window).on('load', function() {
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

  const menuItems = [
    {
      name: 'Wonton Noodle Soup with Bok Choy',
      image:
        'https://seonkyounglongest.com/wp-content/uploads/2018/12/Wonton-Noodle-Soup-2.jpg'
    },
    {
      name: 'Century Egg, Pork and Asparagus Porridge',
      image:
        'https://tasteasianfood.com/wp-content/uploads/2015/12/porridge-700x450-.jpg'
    },
    {
      name: 'Fried Breadsticks',
      image: 'https://i.ytimg.com/vi/wbAEtf3gVYo/maxresdefault.jpg'
    },
    {
      name: 'Spiced Sunflower Seeds',
      image:
        'https://image.made-in-china.com/2f0j00qNjaWgJwknuU/601-Sunflower-Seeds-New-Crop.jpg'
    },
    {
      name: ' Asian Pancakes',
      image:
        'https://i.pinimg.com/originals/82/b3/e1/82b3e1cbaadac3c85c2a7bba5003ed96.jpg'
    },
    {
      name: ' Soymilk',
      image:
        'https://previews.123rf.com/images/winnond/winnond1207/winnond120700005/14260943-soy-milk-with-raw-soy-beans-background.jpg'
    },
    {
      name: 'Homemade Apple Sauce',
      image:
        'https://www.seriouseats.com/recipes/images/2014/12/20141203-latke-vicky-wasik-31-1500x1125.jpg'
    },
    {
      name: '  Taro Bun',
      image:
        'https://www.unfamiliarchina.com/images/dim-sum/sweet-yam-taro-buns.jpg'
    },
    {
      name: '  Egg Tarts',
      image:
        'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Traditional-egg-tart-CMS.jpg'
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
