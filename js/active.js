const config = {
    type: "carousel",
    autoplay: 2000 | true,
    activeNav: true,

    gap: 10,

    breakpoints: {
      2400: {
        perView: 3,
      },
      1800: {
        perView: 3,
      },
      800: {
        perView: 1,
      },
      600: {
        perView: 1,
      },
    },
  };
  new Glide(".glide", config).mount();