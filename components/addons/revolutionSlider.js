import $ from "jquery";

export default function initializeSlider() {
  var tpj = $;
  var revapi50;

  function revslider_showDoubleJqueryError(id) {
    console.error("Revolution Slider Error: Double jQuery Error on ID: " + id);
  }

  tpj(document).ready(function () {
    if (tpj("#rev_slider_50_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_50_1");
    } else {
      revapi50 = tpj("#rev_slider_50_1")
        .show()
        .revolution({
          sliderType: "carousel",
          jsFileLocation: "assets/vendor/revolution/js/",
          sliderLayout: "auto",
          dottedOverlay: "none",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            onHoverStop: "off",
          },
          carousel: {
            maxRotation: 8,
            vary_rotation: "off",
            minScale: 20,
            vary_scale: "off",
            horizontal_align: "center",
            vertical_align: "center",
            fadeout: "off",
            vary_fade: "off",
            maxVisibleItems: 3,
            infinity: "on",
            space: -90,
            stretch: "off",
          },
          responsiveLevels: [1240, 1024, 778, 480],
          gridwidth: [800, 600, 400, 320],
          gridheight: [600, 400, 320, 280],
          lazyType: "none",
          shadow: 0,
          spinner: "off",
          stopLoop: "on",
          stopAfterLoops: 0,
          stopAtSlide: 0,
          shuffle: "off",
          autoHeight: "off",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
          },
        });
    }
  });
}
