import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SupportSVG = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#undraw_elements_cipa",
      },
    });

    tl.from("#tree-wood", {
      scale: 0,
      transformOrigin: "bottom",
    })
      .from("#tree-leaves", { scale: 0, transformOrigin: "top" })
      .from(
        [
          "#Rectangle_95",
          "#Rectangle_96",
          "#Rectangle_86",
          "#Rectangle_91",
          "#Ellipse_112",
          "#Rectangle_85",
          "#Rectangle_92",
        ],
        { stagger: 0.5, scale: 0, transformOrigin: "center" }
      );
  }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.313 379.5">
      <g id="undraw_elements_cipa" transform="translate(0)">
        <path
          id="Path_1525"
          data-name="Path 1525"
          d="M278.168,350.848c-14.749,54.76-45.973,102.685-102.685,102.685A102.685,102.685,0,0,1,72.8,350.848c0-56.711,59.774-65.606,102.685-102.685C262.623,172.868,323.972,180.793,278.168,350.848Z"
          transform="translate(-72.799 -131.673)"
          fill="#f2f2f2"
        />
        <circle
          id="Ellipse_112"
          data-name="Ellipse 112"
          cx="32.782"
          cy="32.782"
          r="32.782"
          transform="translate(202.671 18.355)"
          fill="#ff6584"
        />
        <rect
          id="Rectangle_85"
          data-name="Rectangle 85"
          width="17.355"
          height="17.355"
          transform="translate(277.394 5.339)"
          fill="#ff6584"
        />
        <ellipse
          id="Ellipse_113"
          data-name="Ellipse 113"
          cx="81.955"
          cy="11.149"
          rx="81.955"
          ry="11.149"
          transform="translate(21.982 310.921)"
          fill="#3f3d56"
        />
        <rect
          id="Rectangle_86"
          data-name="Rectangle 86"
          width="110.88"
          height="56.404"
          transform="translate(126.983 62.707)"
          fill="#f2a30a"
        />
        <circle
          id="Ellipse_114"
          data-name="Ellipse 114"
          cx="38.085"
          cy="38.085"
          r="38.085"
          transform="translate(61.419 229.509)"
          fill="#2f2e41"
        />
        <rect
          id="Rectangle_87"
          data-name="Rectangle 87"
          width="11.57"
          height="20.73"
          transform="translate(82.149 297.484)"
          fill="#2f2e41"
        />
        <rect
          id="Rectangle_88"
          data-name="Rectangle 88"
          width="11.57"
          height="20.73"
          transform="translate(105.289 297.484)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_115"
          data-name="Ellipse 115"
          cx="9.642"
          cy="3.616"
          rx="9.642"
          ry="3.616"
          transform="translate(82.149 314.839)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_116"
          data-name="Ellipse 116"
          cx="9.642"
          cy="3.616"
          rx="9.642"
          ry="3.616"
          transform="translate(105.289 314.357)"
          fill="#2f2e41"
        />
        <circle
          id="Ellipse_117"
          data-name="Ellipse 117"
          cx="13.016"
          cy="13.016"
          r="13.016"
          transform="translate(87.452 244.936)"
          fill="#fff"
        />
        <circle
          id="Ellipse_118"
          data-name="Ellipse 118"
          cx="4.339"
          cy="4.339"
          r="4.339"
          transform="translate(96.129 253.614)"
          fill="#3f3d56"
        />
        <path
          id="Path_1526"
          data-name="Path 1526"
          d="M201.963,502.769c-3.075-13.772,6.755-27.688,21.956-31.082s30.017,5.019,33.092,18.791-7,18.852-22.2,22.246S205.038,516.54,201.963,502.769Z"
          transform="translate(-139.403 -270.592)"
          fill="#f2a30a"
        />
        <circle
          id="Ellipse_119"
          data-name="Ellipse 119"
          cx="38.085"
          cy="38.085"
          r="38.085"
          transform="translate(48.403 120.076)"
          fill="#2f2e41"
        />
        <rect
          id="Rectangle_89"
          data-name="Rectangle 89"
          width="11.57"
          height="20.73"
          transform="translate(69.132 188.05)"
          fill="#2f2e41"
        />
        <rect
          id="Rectangle_90"
          data-name="Rectangle 90"
          width="11.57"
          height="20.73"
          transform="translate(92.273 188.05)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_120"
          data-name="Ellipse 120"
          cx="9.642"
          cy="3.616"
          rx="9.642"
          ry="3.616"
          transform="translate(69.132 205.405)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_121"
          data-name="Ellipse 121"
          cx="9.642"
          cy="3.616"
          rx="9.642"
          ry="3.616"
          transform="translate(92.273 204.923)"
          fill="#2f2e41"
        />
        <circle
          id="Ellipse_122"
          data-name="Ellipse 122"
          cx="13.016"
          cy="13.016"
          r="13.016"
          transform="translate(74.435 135.502)"
          fill="#fff"
        />
        <circle
          id="Ellipse_123"
          data-name="Ellipse 123"
          cx="4.339"
          cy="4.339"
          r="4.339"
          transform="translate(83.113 144.18)"
          fill="#3f3d56"
        />
        <path
          id="Path_1527"
          data-name="Path 1527"
          d="M174.963,275.769c-3.075-13.772,6.755-27.688,21.956-31.083s30.017,5.019,33.092,18.791-7,18.851-22.2,22.246S178.038,289.54,174.963,275.769Z"
          transform="translate(-125.419 -153.026)"
          fill="#f2a30a"
        />
        <ellipse
          id="Ellipse_124"
          data-name="Ellipse 124"
          cx="19.042"
          cy="5.978"
          rx="19.042"
          ry="5.978"
          transform="matrix(0.357, -0.934, 0.934, 0.357, 109.306, 145.055)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_125"
          data-name="Ellipse 125"
          cx="5.978"
          cy="19.042"
          rx="5.978"
          ry="19.042"
          transform="translate(23.825 137.73) rotate(-64.626)"
          fill="#2f2e41"
        />
        <path
          id="Path_1528"
          data-name="Path 1528"
          d="M213.4,406.971c0,3.728,9.6,11.088,20.248,11.088s20.636-10.494,20.636-14.222-9.986.723-20.636.723S213.4,403.244,213.4,406.971Z"
          transform="translate(-145.616 -235.071)"
          fill="#fff"
        />
        <rect
          id="Rectangle_91"
          data-name="Rectangle 91"
          width="110.88"
          height="56.404"
          transform="translate(137.589 54.512)"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <rect
          id="Rectangle_92"
          data-name="Rectangle 92"
          width="17.355"
          height="17.355"
          transform="translate(283.179 1)"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          id="tree-leaves"
          d="M1014.656,500.441c0,39.448-23.451,53.222-52.38,53.222s-52.38-13.774-52.38-53.222,52.38-89.632,52.38-89.632S1014.656,460.993,1014.656,500.441Z"
          transform="translate(-506.342 -239.453)"
          fill="#f2f2f2"
        />
        <g id="tree-wood">
          <path
            id="Path_1530"
            data-name="Path 1530"
            d="M919.175,491.192l.537-33.015,22.326-40.843L919.8,453l.242-14.845,15.386-29.55L920.1,434.225h0l.434-26.7L937.011,384,920.6,403.328l.271-48.956-1.7,64.809.14-2.674-16.752-25.641,16.483,30.774-1.561,29.818-.046-.792-19.312-26.983,19.253,29.78-.2,3.729-.035.056.016.306L913.2,533.2h5.291l.634-39.075,19.206-29.707Z"
            transform="translate(-465.149 -183.016)"
            fill="#3f3d56"
          />
          <ellipse
            id="Ellipse_126"
            data-name="Ellipse 126"
            cx="18.213"
            cy="5.396"
            rx="18.213"
            ry="5.396"
            transform="translate(432.091 344.79)"
            fill="#3f3d56"
          />
        </g>
        <ellipse
          id="Ellipse_127"
          data-name="Ellipse 127"
          cx="81.955"
          cy="11.149"
          rx="81.955"
          ry="11.149"
          transform="translate(286.648 357.201)"
          fill="#3f3d56"
        />
        <circle
          id="Ellipse_128"
          data-name="Ellipse 128"
          cx="38.085"
          cy="38.085"
          r="38.085"
          transform="translate(331.482 273.138)"
          fill="#2f2e41"
        />
        <rect
          id="Rectangle_93"
          data-name="Rectangle 93"
          width="11.57"
          height="20.73"
          transform="translate(386.922 361.843) rotate(180)"
          fill="#2f2e41"
        />
        <rect
          id="Rectangle_94"
          data-name="Rectangle 94"
          width="11.57"
          height="20.73"
          transform="translate(363.782 361.843) rotate(180)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_129"
          data-name="Ellipse 129"
          cx="9.642"
          cy="3.616"
          rx="9.642"
          ry="3.616"
          transform="translate(345.431 365.703) rotate(-30)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_130"
          data-name="Ellipse 130"
          cx="9.642"
          cy="3.616"
          rx="9.642"
          ry="3.616"
          transform="translate(368.089 365.703) rotate(-30)"
          fill="#2f2e41"
        />
        <circle
          id="Ellipse_131"
          data-name="Ellipse 131"
          cx="13.016"
          cy="13.016"
          r="13.016"
          transform="translate(355.587 288.565)"
          fill="#fff"
        />
        <circle
          id="Ellipse_132"
          data-name="Ellipse 132"
          cx="4.339"
          cy="4.339"
          r="4.339"
          transform="translate(359.831 291.699)"
          fill="#3f3d56"
        />
        <path
          id="Path_1531"
          data-name="Path 1531"
          d="M856.3,593.269c3.075-13.772-6.755-27.688-21.956-31.083s-30.017,5.019-33.092,18.791,7,18.851,22.2,22.246S853.22,607.04,856.3,593.269Z"
          transform="translate(-449.785 -317.463)"
          fill="#f2a30a"
        />
        <ellipse
          id="Ellipse_133"
          data-name="Ellipse 133"
          cx="5.978"
          cy="19.042"
          rx="5.978"
          ry="19.042"
          transform="translate(316.34 296.136) rotate(-66.829)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_134"
          data-name="Ellipse 134"
          cx="5.978"
          cy="19.042"
          rx="5.978"
          ry="19.042"
          transform="translate(387.689 321.687) rotate(-66.829)"
          fill="#2f2e41"
        />
        <rect
          id="Rectangle_95"
          data-name="Rectangle 95"
          width="17.355"
          height="17.355"
          transform="translate(305.355 275.308)"
          fill="#ff6584"
        />
        <rect
          id="Rectangle_96"
          data-name="Rectangle 96"
          width="17.355"
          height="17.355"
          transform="translate(287.036 244.454)"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          id="Path_1532"
          data-name="Path 1532"
          d="M836.556,729.221a8.678,8.678,0,0,1-17.355,0c0-4.792,3.885-5.785,8.678-5.785S836.556,724.429,836.556,729.221Z"
          transform="translate(-459.37 -401.366)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default SupportSVG;
