import React, { useEffect } from "react";
import gsap from "gsap";

const OfferSVG = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
    });

    tl.from("#girl", { opacity: 0, x: 100 }, "+=.2")
      .from("#circle-on-hand", {
        opacity: 0,
      })
      .from(
        [
          "#Path_1521",
          "#Path_1520",
          "#Rectangle_84",
          "#Rectangle_83",
          "#Rectangle_82",
        ],
        { scale: 0, stagger: 0.1 }
      )
      .from(["#Path_1511", "#Path_1510", "#Path_1509"], {
        scale: 0,
        transformOrigin: "center",
        stagger: 0.2,
      })
      .from(
        [
          "#Ellipse_107",
          "#Ellipse_106",
          "#Ellipse_105",
          "#Ellipse_104",
          "#Ellipse_103",
        ],
        {
          scale: 0,
          transformOrigin: "center",
          stagger: 0.2,
        }
      );
  }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 601.576 530.124">
      <g id="offer-svg" transform="translate(0)">
        <g id="flowe-circles">
          <circle
            id="Ellipse_103"
            data-name="Ellipse 103"
            cx="8.328"
            cy="8.328"
            r="8.328"
            transform="translate(286.384 347.544)"
            fill="#ee5849"
          />
          <circle
            id="Ellipse_104"
            data-name="Ellipse 104"
            cx="8.328"
            cy="8.328"
            r="8.328"
            transform="translate(312.649 378.294)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_105"
            data-name="Ellipse 105"
            cx="8.328"
            cy="8.328"
            r="8.328"
            transform="translate(294.712 398.794)"
            fill="#ee5849"
          />
          <circle
            id="Ellipse_106"
            data-name="Ellipse 106"
            cx="8.328"
            cy="8.328"
            r="8.328"
            transform="translate(316.493 416.091)"
            fill="#ee5849"
          />
          <circle
            id="Ellipse_107"
            data-name="Ellipse 107"
            cx="8.328"
            cy="8.328"
            r="8.328"
            transform="translate(288.306 442.998)"
            fill="#3f3d56"
          />
        </g>
        <g id="flower-base">
          <path
            id="Path_1509"
            data-name="Path 1509"
            d="M598.743,771.624c-.147-.24-3.614-6.029-4.815-18.048-1.1-11.027-.393-29.614,9.246-55.542,18.262-49.118-4.209-88.749-4.438-89.143l1.109-.643c.058.1,5.856,10.2,9.282,26.294a114.712,114.712,0,0,1-4.751,63.939c-18.231,49.034-4.677,72.246-4.538,72.476Z"
            transform="translate(-296.891 -241.807)"
            fill="#3f3d56"
          />
          <path
            id="Path_1510"
            data-name="Path 1510"
            d="M608.769,843.625s-8.328-20.5,16.656-35.875Z"
            transform="translate(-301.885 -313.502)"
            fill="#3f3d56"
          />
          <path
            id="Path_1511"
            data-name="Path 1511"
            d="M574.947,851.045s-3.79-21.8-33.126-21.613Z"
            transform="translate(-278.305 -321.293)"
            fill="#3f3d56"
          />
        </g>
        <rect
          id="Rectangle_66"
          data-name="Rectangle 66"
          width="1.281"
          height="160.748"
          transform="translate(104.444 293.115)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_67"
          data-name="Rectangle 67"
          width="1.281"
          height="210.217"
          transform="translate(143.523 268.38)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_68"
          data-name="Rectangle 68"
          width="1.281"
          height="224.222"
          transform="translate(182.602 261.378)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_69"
          data-name="Rectangle 69"
          width="1.281"
          height="210.217"
          transform="translate(221.68 268.38)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_70"
          data-name="Rectangle 70"
          width="1.281"
          height="160.748"
          transform="translate(260.759 293.115)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_71"
          data-name="Rectangle 71"
          width="197.443"
          height="1.281"
          transform="translate(84.521 319.676)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_72"
          data-name="Rectangle 72"
          width="224.222"
          height="1.281"
          transform="translate(71.131 372.849)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_73"
          data-name="Rectangle 73"
          width="197.443"
          height="1.281"
          transform="translate(84.521 426.021)"
          fill="#3f3d56"
        />
        <circle
          id="sun-behind"
          cx="112.111"
          cy="112.111"
          r="112.111"
          transform="translate(377.354 96.736)"
          fill="#ee5849"
        />
        <rect
          id="Rectangle_74"
          data-name="Rectangle 74"
          width="1.281"
          height="160.748"
          transform="translate(298.556 186.77)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_75"
          data-name="Rectangle 75"
          width="1.281"
          height="210.217"
          transform="translate(337.635 162.035)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_76"
          data-name="Rectangle 76"
          width="1.281"
          height="224.222"
          transform="translate(376.713 155.033)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_77"
          data-name="Rectangle 77"
          width="1.281"
          height="210.217"
          transform="translate(415.792 162.035)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_78"
          data-name="Rectangle 78"
          width="1.281"
          height="160.748"
          transform="translate(454.871 186.77)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_79"
          data-name="Rectangle 79"
          width="197.443"
          height="1.281"
          transform="translate(278.632 213.331)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_80"
          data-name="Rectangle 80"
          width="224.222"
          height="1.281"
          transform="translate(265.243 266.503)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_81"
          data-name="Rectangle 81"
          width="197.443"
          height="1.281"
          transform="translate(278.632 319.676)"
          fill="#3f3d56"
        />
        <g id="girl">
          <path
            id="Path_1512"
            data-name="Path 1512"
            d="M823.458,69.328h0c-30.84,0-55.84,27.745-55.84,61.97v43.484h13.374l7.743-16.111L786.8,174.782h85.96l7.039-14.646-1.76,14.646h9.678V140.639C887.716,101.255,858.946,69.328,823.458,69.328Z"
            transform="translate(-359.448 -48.137)"
            fill="#2f2e41"
          />
          <path
            id="Path_1513"
            data-name="Path 1513"
            d="M809.449,189.368s17.429,40.668-5.81,48.8l23.239,76.688,39.506-2.324,10.457-25.562-2.324-38.344-3.486-25.562s-24.4,5.81-22.077-37.182Z"
            transform="translate(-372.394 -90.023)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1514"
            data-name="Path 1514"
            d="M740.006,265.608s-38.344-3.486-34.858,24.4,6.972,33.7,6.972,33.7l3.486,41.83-20.915,12.781H674.938s-60.42,13.943-30.21,29.048S685.4,395.744,685.4,395.744s55.773,0,59.259-9.3S740.006,265.608,740.006,265.608Z"
            transform="translate(-312.246 -118.623)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1515"
            data-name="Path 1515"
            d="M914.277,245.909s36.02-12.781,38.344,15.105,2.324,30.21,2.324,30.21l6.971,39.506s13.943,34.858,13.943,45.315,10.457,42.991,10.457,42.991,13.943,45.315-1.162,44.153-17.429-48.8-17.429-48.8l-31.372-62.744-9.3-38.344Z"
            transform="translate(-412.153 -110.544)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1516"
            data-name="Path 1516"
            d="M798.154,251.261h-9.3l-1.162,48.8s-15.105,20.915,3.486,39.506l4.648,30.21,84.821-3.486,5.81-31.372s11.619-25.562-4.648-48.8L866.707,238.48h-8.133s18.838,69.458-20.915,70.878C805.125,310.52,798.154,251.261,798.154,251.261Z"
            transform="translate(-364.584 -108.925)"
            fill="#fff"
          />
          <path
            id="Path_1517"
            data-name="Path 1517"
            d="M894.767,608.894a291.761,291.761,0,0,1-93.776,70.13c-.013-58.144.673-105.371.673-105.371s-4.933,49.905-11.2,110.067a289.842,289.842,0,0,1-113.11,22.819c-.692,0-1.384,0-2.076-.013,31.968-114.866,78.6-246.516,79.887-250.148.01-.025.018-.051.026-.077L758,446.922l1.2-3.991,1.256-4.183,1.7-5.689,75.524-2.319,2.114,4.747,7.182,16.163a6.238,6.238,0,0,1,1.762.826C862.336,461.4,879.474,529.513,894.767,608.894Z"
            transform="translate(-326.266 -178.017)"
            fill="#2f2e41"
          />
          <path
            id="Path_1518"
            data-name="Path 1518"
            d="M888.947,416.225l-91.793,3.486s-4.189,31.372,0,31.372c1.162,0,96.44,8.134,95.278-5.81S888.947,416.225,888.947,416.225Z"
            transform="translate(-369.394 -172.8)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_109"
            data-name="Ellipse 109"
            cx="32.648"
            cy="32.648"
            r="32.648"
            transform="translate(422.366 47.358)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1519"
            data-name="Path 1519"
            d="M844.515,89.36c-5.607-7.219-13.876-11.792-23.108-11.792h-1.1c-21.138,0-38.273,19.127-38.273,42.722h7.083l1.144-8.706,1.677,8.706h42.007l3.519-7.366-.88,7.366h8.264q5.784,28.727-16.622,57.453h14.078l7.039-14.732-1.76,14.732h26.835l5.279-33.883C879.7,118.485,864.957,96.968,844.515,89.36Z"
            transform="translate(-364.631 -51.098)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_110"
            data-name="Ellipse 110"
            cx="20.915"
            cy="20.915"
            r="20.915"
            transform="translate(466.685)"
            fill="#2f2e41"
          />
        </g>
        <circle
          id="circle-on-hand"
          cx="10.515"
          cy="10.515"
          r="10.515"
          transform="translate(324.293 256.552)"
          fill="#ee5849"
        />
        <g id="brars-background">
          <path
            id="Path_1520"
            data-name="Path 1520"
            d="M394.032,364.973H164.8V272.44H355.477Z"
            transform="translate(-59.226 -97.906)"
            fill="#efefef"
          />
          <path
            id="Path_1521"
            data-name="Path 1521"
            d="M509.834,390.52H251.517V276.957H462.989l.179.434Zm-256.915-1.4h254.82L462.051,278.359H252.919Z"
            transform="translate(-173.979 -122.752)"
            fill="#3f3d56"
          />
        </g>
        <g id="bars">
          <rect
            id="Rectangle_82"
            data-name="Rectangle 82"
            width="114.264"
            height="10.515"
            transform="translate(143.433 189.255)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_83"
            data-name="Rectangle 83"
            width="114.264"
            height="10.515"
            transform="translate(143.433 210.986)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_84"
            data-name="Rectangle 84"
            width="114.264"
            height="10.515"
            transform="translate(143.433 232.718)"
            fill="#3f3d56"
          />
        </g>
        <path
          id="Path_1522"
          data-name="Path 1522"
          d="M138.171,613.971a7.688,7.688,0,1,1,7.688-7.688,7.688,7.688,0,0,1-7.688,7.688Zm0-14.094a6.406,6.406,0,1,0,6.406,6.406A6.406,6.406,0,0,0,138.171,599.877Z"
          transform="translate(-130.483 -238.338)"
          fill="#2f2e41"
        />
        <path
          id="Path_1523"
          data-name="Path 1523"
          d="M557.217,163.792H544.57V151.145h12.647Zm-11.674-.973h10.7v-10.7h-10.7Z"
          transform="translate(-279.292 -77.539)"
          fill="#3f3d56"
        />
        <path
          id="Path_1524"
          data-name="Path 1524"
          d="M186.116,164.939l-8.626-9.248,9.248-8.626,8.626,9.248Zm-7.251-9.2,7.3,7.826,7.826-7.3-7.3-7.826Z"
          transform="translate(-147.376 -76.073)"
          fill="#2f2e41"
        />
      </g>
    </svg>
  );
};

export default OfferSVG;
