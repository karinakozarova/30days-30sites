  //Capture the click event on a location
  $("#location-bar a").click(function(event) {
      event.preventDefault();

      var $this = $(this),
          $li = $this.parent(),
          selectedMap = $this.attr("href"),
          selectedLocation = $this.data('location');

      $li.addClass('active').siblings('li').removeClass('active');

      //Update #map bkimage with the image from the location
      $('#map').css('background-image', 'url(' + selectedMap + ')');
      //update tooltip 'address'
      $('.selectedLocation').text(selectedLocation);
  });
