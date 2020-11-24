import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SocialsSVG = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#undraw_Social_media_re_w12q",
      },
    });

    tl.from("#socials-bush", { scale: 0, transformOrigin: "bottom" })
      .from("#social-guy", { x: 30, opacity: 0, duration: 1 })
      .from("#social-girl", { x: -30, opacity: 0, duration: 1 }, "-=1")
      .from(["#c-facebook", "#c-pinterest"], {
        scale: 0,
        transformOrigin: "center",
      })
      .from(["#c-twitter", "#c-linkdin"], {
        scale: 0,
        transformOrigin: "center",
      })
      .from("#c-insta", { scale: 0, transformOrigin: "center" });
  }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.874 343.563">
      <g id="undraw_Social_media_re_w12q" transform="translate(-0.005)">
        <g id="socials-bush">
          <path
            id="Path_1901"
            data-name="Path 1901"
            d="M610.946,653.048a54.794,54.794,0,0,1-11.749,6.411c-1.091.436-2.187.842-3.3,1.212H538.98c-.23-.4-.454-.806-.685-1.212-4.617-8.265-8.8-16.851-9.992-26.188-1.424-11.21,2.569-23.9,12.44-29.412a19.747,19.747,0,0,1,4.084-1.709c.588-.182,1.188-.327,1.794-.454a21.339,21.339,0,0,1,24.813,27.74c8.368-8.58,6.8-22.492,3.92-34.12s-6.392-24.57-.509-35.017c3.266-5.811,9.016-9.416,15.463-10.87.2-.042.4-.085.594-.121a31.148,31.148,0,0,1,22.377,3.92C625.616,561,631.947,575.738,634,590.171,637.316,613.4,629.984,639.324,610.946,653.048Z"
            transform="translate(-326.696 -317.108)"
            fill="#f2f2f2"
          />
          <path
            id="Path_1902"
            data-name="Path 1902"
            d="M560.808,643.574a47.96,47.96,0,0,1,4.145,29.866,49.265,49.265,0,0,1-9.065,20.493c-.309.412-.624.818-.945,1.212h-2.248c.346-.394.685-.8,1.006-1.212a46.386,46.386,0,0,0,.848-57.309c.588-.182,1.188-.327,1.794-.454a48.445,48.445,0,0,1,4.466,7.4Z"
            transform="translate(-336.418 -351.583)"
            fill="#fff"
          />
          <path
            id="Path_1903"
            data-name="Path 1903"
            d="M626.784,616.2a52.952,52.952,0,0,1-3.654,14.918,45.977,45.977,0,0,1-7.138,11.658,58.823,58.823,0,0,1-22.625,16.312q-.945.4-1.909.763c-1.115.436-2.242.836-3.375,1.212h-6.138c1.448-.364,2.89-.77,4.314-1.212a72,72,0,0,0,9.883-3.9,54.876,54.876,0,0,0,20.529-16.839c5.75-7.938,8.289-17.481,8.725-27.182a114.78,114.78,0,0,0-3.26-31.048,130.167,130.167,0,0,0-10.949-29.83.936.936,0,0,1,.37-1.236.81.81,0,0,1,.594-.121.694.694,0,0,1,.46.388c.6,1.169,1.188,2.339,1.751,3.52a132.109,132.109,0,0,1,10.319,30.951C626.76,594.886,627.875,605.689,626.784,616.2Z"
            transform="translate(-347.945 -317.503)"
            fill="#fff"
          />
        </g>
        <g id="c-twitter">
          <path
            id="Path_1905"
            data-name="Path 1905"
            d="M391.684,281.4a25.449,25.449,0,1,1,25.449-25.449A25.449,25.449,0,0,1,391.684,281.4Zm0-49.686a24.237,24.237,0,1,0,24.237,24.237,24.237,24.237,0,0,0-24.237-24.237Z"
            transform="translate(-262.94 -191.72)"
            fill="#3f3d56"
          />
          <path
            id="Path_1909"
            data-name="Path 1909"
            d="M414.5,258.24l3.03-.606a28.409,28.409,0,0,1-3.03,3.03h0a12.2,12.2,0,0,0,0,1.818c-5.817,24.964-27.267,13.936-27.267,13.936,7.817.182,8.483-3.03,8.483-3.03-4.544-.667-5.453-3.636-5.453-3.636a1.872,1.872,0,0,0,2.424-.606,5.5,5.5,0,0,1-4.242-6.059,6.3,6.3,0,0,0,2.969,1.151c-.545-.667-5.15-6.181-2.363-9.028,0,0,3.393,6.059,12.3,6.6l.606-.121a4.758,4.758,0,0,1-.121-1.333A6.362,6.362,0,0,1,408.2,254c4.242,0,5.15,2.424,5.15,2.424l3.03-1.818C416.32,254.6,416.017,257.634,414.5,258.24Z"
            transform="translate(-271.216 -200.98)"
            fill="#3f3d56"
          />
        </g>
        <g id="social-girl">
          <path
            id="Path_1910"
            data-name="Path 1910"
            d="M555.8,522.9l6.671,3.27L578.255,502l-9.845-4.826Z"
            transform="translate(-219.021 -195.92)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1911"
            data-name="Path 1911"
            d="M747.763,701.163,760.9,707.6h0a9.323,9.323,0,0,1,4.267,12.475l-.133.272-21.508-10.543Z"
            transform="translate(-411.619 -377.194)"
            fill="#2f2e41"
          />
          <path
            id="Path_1912"
            data-name="Path 1912"
            d="M664.892,539.808h7.429l3.534-28.653H664.891Z"
            transform="translate(-262.011 -201.43)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1913"
            data-name="Path 1913"
            d="M857.531,716.94h14.63a9.323,9.323,0,0,1,9.323,9.323v.3H857.531Z"
            transform="translate(-456.545 -383.411)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_167"
            data-name="Ellipse 167"
            cx="14.882"
            cy="14.882"
            r="14.882"
            transform="translate(372.042 110.865)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1914"
            data-name="Path 1914"
            d="M818.209,636.361a2.727,2.727,0,0,1-2.721-2.608l-5.753-76.566a.909.909,0,0,0-1.714-.392l-36.8,70.253a2.74,2.74,0,0,1-3.635,1.174l-10.258-5.129a2.732,2.732,0,0,1-1.226-3.645l21.958-44.494,14.544-33.329c5.614-11.058,11.575-16.756,18.224-17.421,6.822-.681,14.107,4.009,22.275,14.341l.067.084v.107l-1.212,93.53a2.714,2.714,0,0,1-2.472,2.711l-11.011,1.373Q818.342,636.361,818.209,636.361Z"
            transform="translate(-416.465 -307.434)"
            fill="#2f2e41"
          />
          <path
            id="Path_1915"
            data-name="Path 1915"
            d="M801.886,516.892a6.509,6.509,0,0,0,1.435-9.877l2.244-59.294-10.907,1.359-.92,57.684a6.545,6.545,0,0,0,8.147,10.128Z"
            transform="translate(-430.669 -277.321)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1916"
            data-name="Path 1916"
            d="M808.579,447.668,793.932,446a2.919,2.919,0,0,1-2.491-3.651l3.781-14.2a8.106,8.106,0,0,1,16.1,1.878l.5,14.64a2.919,2.919,0,0,1-3.247,3Z"
            transform="translate(-430.462 -266.784)"
            fill="#f2a30a"
          />
          <path
            id="Path_1917"
            data-name="Path 1917"
            d="M898.391,400.23a6.393,6.393,0,0,0-.145.994L872.216,416.24,865.89,412.6l-6.745,8.83,10.574,7.536a4.847,4.847,0,0,0,5.816-.142l26.841-21.175a6.361,6.361,0,1,0-3.984-7.417Z"
            transform="translate(-457.181 -256.671)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1918"
            data-name="Path 1918"
            d="M863.03,423.009l-8.413,10.9a2.727,2.727,0,0,1-4.123.226l-9.524-9.89a7.573,7.573,0,1,1,9.287-11.964l11.945,6.679a2.727,2.727,0,0,1,.827,4.045Z"
            transform="translate(-448.864 -262.729)"
            fill="#f2a30a"
          />
          <path
            id="Path_1919"
            data-name="Path 1919"
            d="M857.082,496.736l-16.15-78.667a14.752,14.752,0,0,0-16.875-11.584l-5.386.9a14.444,14.444,0,0,0-9.38,5.852h0a20.172,20.172,0,0,0-3.013,17.154l8.915,31.905-6.616,34.182a2.421,2.421,0,0,0,2.719,2.86c3.312-.474,8.772-1.15,15.042-1.519l3.4-13.1,1.382,12.9c7.7-.216,16.065.162,22.963,1.954a2.426,2.426,0,0,0,3-2.827Z"
            transform="translate(-436.054 -260.99)"
            fill="#f2a30a"
          />
          <path
            id="Path_1920"
            data-name="Path 1920"
            d="M808.943,356.622c3.825,2.618,8.847,5.309,12.754,2.521a7.109,7.109,0,0,0,2.333-8.2c-1.871-5.35-7.01-7.7-11.925-9.51-6.389-2.347-13.346-4.214-19.942-2.533s-12.425,8.067-11.234,14.768c.957,5.389,6.041,9.874,5.319,15.3-.726,5.461-6.867,8.335-12.289,9.311s-11.489,1.29-15.385,5.184c-4.971,4.968-3.729,13.847.948,19.093s11.735,7.623,18.574,9.239c9.061,2.141,18.862,3.267,27.468-.287s15.3-13.121,12.81-22.092c-1.053-3.789-3.534-6.992-5.931-10.11s-4.825-6.378-5.74-10.2a10.607,10.607,0,0,1,1.916-9.28,2.688,2.688,0,0,0,.36-3.143Z"
            transform="translate(-416.292 -234.185)"
            fill="#2f2e41"
          />
        </g>
        <g id="c-insta">
          <path
            id="Path_1906"
            data-name="Path 1906"
            d="M573.684,217.4a25.449,25.449,0,1,1,25.449-25.449A25.449,25.449,0,0,1,573.684,217.4Zm0-49.686a24.237,24.237,0,1,0,24.237,24.237A24.237,24.237,0,0,0,573.684,167.712Z"
            transform="translate(-334.661 -166.5)"
            fill="#3f3d56"
          />
          <path
            id="Path_1921"
            data-name="Path 1921"
            d="M587.528,186.059a6.417,6.417,0,0,1,6.4,6.4V205.25a6.417,6.417,0,0,1-6.4,6.4H574.734a6.417,6.417,0,0,1-6.4-6.4V192.456a6.417,6.417,0,0,1,6.4-6.4h12.794m0-2.559H574.734a8.983,8.983,0,0,0-8.956,8.956V205.25a8.983,8.983,0,0,0,8.956,8.956h12.794a8.983,8.983,0,0,0,8.956-8.956V192.456a8.983,8.983,0,0,0-8.956-8.956Z"
            transform="translate(-341.574 -173.199)"
            fill="#3f3d56"
          />
          <path
            id="Path_1922"
            data-name="Path 1922"
            d="M603.6,195.79a1.915,1.915,0,1,1,.008,0Z"
            transform="translate(-355.725 -176.533)"
            fill="#3f3d56"
          />
          <path
            id="Path_1923"
            data-name="Path 1923"
            d="M586.124,198.728a5.118,5.118,0,1,1-5.118,5.118,5.118,5.118,0,0,1,5.118-5.118m0-2.559a7.677,7.677,0,1,0,7.677,7.677,7.677,7.677,0,0,0-7.677-7.677Z"
            transform="translate(-346.566 -178.192)"
            fill="#3f3d56"
          />
        </g>
        <g id="social-guy">
          <path
            id="Path_1924"
            data-name="Path 1924"
            d="M158.466,533.958l-7.231-1.7,3.13-28.7,10.672,2.515Z"
            transform="translate(-59.595 -198.435)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1925"
            data-name="Path 1925"
            d="M344.088,724.077l-23.314-5.493.069-.295a9.323,9.323,0,0,1,11.212-6.937h0l14.24,3.355Z"
            transform="translate(-245.025 -381.111)"
            fill="#2f2e41"
          />
          <path
            id="Path_1926"
            data-name="Path 1926"
            d="M202.54,535.5h-7.429l-3.534-28.653h10.964Z"
            transform="translate(-75.493 -199.731)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1927"
            data-name="Path 1927"
            d="M392.983,726.254H369.031v-.3a9.323,9.323,0,0,1,9.323-9.323h14.63Z"
            transform="translate(-264.042 -383.288)"
            fill="#2f2e41"
          />
          <path
            id="Path_1928"
            data-name="Path 1928"
            d="M447.572,491.592a6.509,6.509,0,0,0-3.172-9.464L422.65,426.974l-12.1,7.346,25.184,51.9a6.545,6.545,0,0,0,11.838,5.367Z"
            transform="translate(-280.403 -269.145)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1929"
            data-name="Path 1929"
            d="M424.348,427.525l-13.824,5.117a2.919,2.919,0,0,1-3.869-2.136l-3.027-14.381a8.106,8.106,0,1,1,15.22-5.583l7.047,12.843a2.919,2.919,0,0,1-1.546,4.14Z"
            transform="translate(-277.479 -260.574)"
            fill="#f2a30a"
          />
          <path
            id="Path_1930"
            data-name="Path 1930"
            d="M381.409,636.709l-.109,0-10.529-.421a2.711,2.711,0,0,1-2.617-2.762l.808-58.169a.909.909,0,0,0-1.813-.108L361.04,633.48a2.735,2.735,0,0,1-2.263,2.405l-.037.006-9.885-.777a2.726,2.726,0,0,1-3.137-2.711l.591-98.633,48.505,3.07-10.695,97.44a2.736,2.736,0,0,1-2.71,2.429Z"
            transform="translate(-254.854 -311.23)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_168"
            data-name="Ellipse 168"
            cx="14.882"
            cy="14.882"
            r="14.882"
            transform="translate(102.806 106.673)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1931"
            data-name="Path 1931"
            d="M391.83,488.555q-.1,0-.206-.007l-44.829-3.28a2.726,2.726,0,0,1-2.527-2.777L345.45,426.2a25.394,25.394,0,1,1,50.68,1.688c-.784,8.676-1.407,46.578-1.58,57.988a2.724,2.724,0,0,1-2.72,2.682Z"
            transform="translate(-254.283 -258.602)"
            fill="#f2a30a"
          />
          <path
            id="Path_1932"
            data-name="Path 1932"
            d="M282.754,391.5a6.382,6.382,0,0,1,.145.994l26.029,15.016,6.327-3.642L322,412.7l-10.574,7.536a4.848,4.848,0,0,1-5.816-.142l-26.841-21.175a6.361,6.361,0,1,1,3.984-7.417Z"
            transform="translate(-225.096 -253.231)"
            fill="#ffb8b8"
          />
          <path
            id="Path_1933"
            data-name="Path 1933"
            d="M334.669,412.066a2.724,2.724,0,0,1,1.34-1.833l11.945-6.679a7.573,7.573,0,1,1,9.287,11.963l-9.524,9.889a2.727,2.727,0,0,1-4.123-.226l-8.413-10.9a2.724,2.724,0,0,1-.513-2.212Z"
            transform="translate(-250.479 -259.289)"
            fill="#f2a30a"
          />
          <path
            id="Path_1934"
            data-name="Path 1934"
            d="M384.12,366.216A13.555,13.555,0,0,1,372.7,359.8c-.131-.205-.847-1.257-1.677-2.475-2.331-3.423-2.877-4.237-2.924-4.356-.631-1.627-2.633-2.256-4.2-2.5-.293-.045-.589-.085-.887-.125-2.209-.3-4.493-.6-5.745-3.03-.919-1.782-2.421-9.037-1.267-10.81,1.446-2.224,4.224-1.5,6.91-.8a11.8,11.8,0,0,0,4.911.614c6.138-1.277,13.094-2.724,19.238,1.017a16.581,16.581,0,0,1,7.675,14.674c-.167,6.523-3.011,11.671-7.61,13.773l-.957.279-.538.066A13.323,13.323,0,0,1,384.12,366.216Z"
            transform="translate(-258.741 -232.879)"
            fill="#2f2e41"
          />
        </g>
        <g id="c-pinterest">
          <path
            id="Path_1908"
            data-name="Path 1908"
            d="M945.684,384.4a25.449,25.449,0,1,1,25.449-25.449A25.449,25.449,0,0,1,945.684,384.4Zm0-49.686a24.237,24.237,0,1,0,24.237,24.237A24.237,24.237,0,0,0,945.684,334.712Z"
            transform="translate(-481.254 -232.31)"
            fill="#3f3d56"
          />
          <path
            id="Path_1935"
            data-name="Path 1935"
            d="M952.852,348.3a16.69,16.69,0,0,0-6.7,31.976,14.781,14.781,0,0,1,.29-3.829c.32-1.356,2.146-9.1,2.146-9.1a6.372,6.372,0,0,1-.536-2.637c0-2.473,1.43-4.321,3.218-4.321a2.232,2.232,0,0,1,2.25,2.5c0,1.527-.976,3.807-1.475,5.923a2.58,2.58,0,0,0,2.637,3.211c3.159,0,5.29-4.06,5.29-8.873,0-3.658-2.466-6.392-6.944-6.392a7.908,7.908,0,0,0-8.218,7.994,4.81,4.81,0,0,0,1.1,3.271.816.816,0,0,1,.238.931c-.082.305-.261,1.043-.343,1.341a.573.573,0,0,1-.834.417c-2.332-.954-3.42-3.5-3.42-6.377,0-4.738,4-10.423,11.928-10.423,6.37,0,10.564,4.612,10.564,9.559,0,6.549-3.643,11.436-9.007,11.436a4.789,4.789,0,0,1-4.075-2.079s-.969,3.844-1.177,4.589A13.872,13.872,0,0,1,948.113,381a16.691,16.691,0,1,0,4.738-32.7Z"
            transform="translate(-487.531 -238.141)"
            fill="#3f3d56"
          />
        </g>
        <g id="c-linkdin">
          <path
            id="Path_1907"
            data-name="Path 1907"
            d="M767.684,283.4a25.449,25.449,0,1,1,25.449-25.449A25.449,25.449,0,0,1,767.684,283.4Zm0-49.686a24.237,24.237,0,1,0,24.237,24.237A24.237,24.237,0,0,0,767.684,233.712Z"
            transform="translate(-411.11 -192.509)"
            fill="#3f3d56"
          />
          <path
            id="Path_1936"
            data-name="Path 1936"
            d="M788.461,253.587,767,246.983a2.2,2.2,0,0,0-2.814,1.327l-6.618,21.512a2.367,2.367,0,0,0,1.52,2.88l21.458,6.6a2.248,2.248,0,0,0,2.741-1.569l6.618-21.512a2.063,2.063,0,0,0-1.441-2.636ZM766.175,270.2l-3.685-1.134,3.525-11.456,3.685,1.134Zm2.346-13.725-.026-.008a2.1,2.1,0,1,1,.026.008Zm11.12,17.868-3.684-1.134,1.927-6.264c.462-1.5.241-2.691-1.092-3.1a2.108,2.108,0,0,0-2.308.779,2.6,2.6,0,0,0-.406.866l-2.008,6.525-3.685-1.134,3.525-11.456,3.685,1.134-.49,1.594a3.9,3.9,0,0,1,3.9-.84c2.419.744,3.758,2.9,2.7,6.338Z"
            transform="translate(-417.116 -198.165)"
            fill="#3f3d56"
          />
        </g>
        <g id="c-facebook">
          <path
            id="Path_1904"
            data-name="Path 1904"
            d="M221.684,416.4a25.449,25.449,0,1,1,25.449-25.449A25.449,25.449,0,0,1,221.684,416.4Zm0-49.686a24.237,24.237,0,1,0,24.237,24.237A24.237,24.237,0,0,0,221.684,366.712Z"
            transform="translate(-195.948 -244.92)"
            fill="#3f3d56"
          />
          <path
            id="Path_1937"
            data-name="Path 1937"
            d="M244.051,396.847a16.637,16.637,0,1,0-19.236,16.435V401.658H220.59v-4.81h4.225v-3.666c0-4.169,2.484-6.473,6.284-6.473a25.564,25.564,0,0,1,3.725.325v4.095h-2.1a2.406,2.406,0,0,0-2.712,2.6v3.121h4.614l-.737,4.81h-3.877v11.626a16.641,16.641,0,0,0,14.038-16.437Z"
            transform="translate(-201.679 -250.718)"
            fill="#3f3d56"
            fillRule="evenodd"
          />
        </g>
        <path
          id="Path_1938"
          data-name="Path 1938"
          d="M685.362,732.106a.608.608,0,0,1-.606.606H196.376a.606.606,0,0,1,0-1.212h488.38A.608.608,0,0,1,685.362,732.106Z"
          transform="translate(-195.765 -389.149)"
          fill="#3f3d56"
        />
      </g>
    </svg>
  );
};

export default SocialsSVG;
