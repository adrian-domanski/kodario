import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ContactChatSVG = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#contact-form",
        start: "top center",
      },
    });

    tl.from("#left-chat", {
      scale: 0,
      transformOrigin: "right",
    })
      .from("#Ellipse_172", { scale: 0, transformOrigin: "center" })
      .from(["#Path_1953", "#Path_1952"], {
        scale: 0,
        transformOrigin: "left",
        stagger: 0.2,
      })
      .from("#right-chat", { scale: 0, transformOrigin: "left" })
      .from("#Ellipse_175", { scale: 0, transformOrigin: "center" })
      .from(["#Path_1960", "#Path_1959"], {
        scale: 0,
        transformOrigin: "left",
        stagger: 0.2,
      });
  }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 891.297 745.193">
      <g id="contact-svg" transform="translate(0 0)">
        <ellipse
          id="Ellipse_169"
          data-name="Ellipse 169"
          cx="352"
          cy="18"
          rx="352"
          ry="18"
          transform="translate(66.644 709.194)"
          fill="#f2f2f2"
        />
        <path
          id="Path_1943"
          data-name="Path 1943"
          d="M778.65,250.35h-4V140.8a63.4,63.4,0,0,0-63.4-63.4H479.162a63.4,63.4,0,0,0-63.4,63.4V741.779a63.4,63.4,0,0,0,63.4,63.4H711.249a63.4,63.4,0,0,0,63.4-63.4V328.326h4Z"
          transform="translate(-154.353 -77.403)"
          fill="#3f3d56"
        />
        <path
          id="Path_1944"
          data-name="Path 1944"
          d="M761.156,141.247v600.09a47.35,47.35,0,0,1-47.349,47.35h-233.2a47.351,47.351,0,0,1-47.35-47.349V141.247A47.351,47.351,0,0,1,480.605,93.9H508.9a22.507,22.507,0,0,0,20.83,30.99h132.96a22.507,22.507,0,0,0,20.83-30.99h30.29a47.351,47.351,0,0,1,47.35,47.349Z"
          transform="translate(-154.353 -77.403)"
          fill="#fff"
        />
        <path
          id="Path_1945"
          data-name="Path 1945"
          d="M686.03,400q-2.325,1.215-4.73,2.3-2.19.99-4.45,1.86c-.55.21-1.11.42-1.67.63a89.525,89.525,0,0,1-13.6,3.75q-3.435.675-6.96,1.06-2.91.33-5.88.47c-1.41.07-2.82.1-4.24.1a89.845,89.845,0,0,1-16.76-1.57c-1.44-.26-2.85-.57-4.26-.91a88.778,88.778,0,0,1-19.67-7.26c-.56-.28-1.12-.58-1.68-.87-.83-.44-1.64-.9-2.45-1.38.39-.54.81-1.07,1.24-1.59a53.034,53.034,0,0,1,78.87-4.1,54.276,54.276,0,0,1,5.06,5.86C685.26,398.893,685.65,399.443,686.03,400Z"
          transform="translate(-154.353 -77.403)"
          fill="#f2a30a"
        />
        <circle
          id="Ellipse_170"
          data-name="Ellipse 170"
          cx="43.91"
          cy="43.91"
          r="43.91"
          transform="translate(448.233 190.854)"
          fill="#2f2e41"
        />
        <circle
          id="Ellipse_171"
          data-name="Ellipse 171"
          cx="32.681"
          cy="32.681"
          r="32.681"
          transform="translate(443.792 237.057) rotate(-28.663)"
          fill="#a0616a"
        />
        <path
          id="Path_1946"
          data-name="Path 1946"
          d="M676.839,306.906a44.448,44.448,0,0,1-25.4,7.85,27.238,27.238,0,0,0,10.8,4.442,89.628,89.628,0,0,1-36.61.206,23.7,23.7,0,0,1-7.664-2.632,9.7,9.7,0,0,1-4.731-6.327c-.8-4.589,2.772-8.757,6.488-11.567a47.858,47.858,0,0,1,40.217-8.036c4.492,1.161,8.993,3.123,11.911,6.731s3.782,9.17,1,12.885Z"
          transform="translate(-154.353 -77.403)"
          fill="#2f2e41"
        />
        <path
          id="Path_1947"
          data-name="Path 1947"
          d="M644.5,230.173A89.987,89.987,0,0,0,597.66,397l.58.34q.72.435,1.44.84c.81.48,1.62.94,2.45,1.38.56.29,1.12.59,1.68.87a88.776,88.776,0,0,0,19.67,7.26c1.41.34,2.82.65,4.26.91a89.839,89.839,0,0,0,16.76,1.57c1.42,0,2.83-.03,4.24-.1q2.97-.135,5.88-.47,3.525-.39,6.96-1.06a89.528,89.528,0,0,0,13.6-3.75c.56-.21,1.12-.42,1.67-.63q2.265-.87,4.45-1.86,2.4-1.08,4.73-2.3a90.791,90.791,0,0,0,37.04-35.97c.04-.08.09-.16.13-.24a90,90,0,0,0-78.7-133.62Zm77.06,132.45c-.08.14-.15.28-.23.41a88.172,88.172,0,0,1-36.48,35.32q-2.3,1.2-4.67,2.25c-1.31.59-2.65,1.15-4,1.67-.57.22-1.15.44-1.73.64a85.726,85.726,0,0,1-11.73,3.36,84.686,84.686,0,0,1-8.95,1.41c-1.85.2-3.73.34-5.62.41-1.21.05-2.43.08-3.65.08a86.764,86.764,0,0,1-16.22-1.51,85.627,85.627,0,0,1-9.63-2.36,88.469,88.469,0,0,1-13.99-5.67c-.52-.27-1.04-.54-1.55-.82-.73-.39-1.47-.79-2.19-1.22-.54-.3-1.08-.62-1.61-.94-.31-.18-.62-.37-.93-.56a88.068,88.068,0,1,1,123.18-32.47Z"
          transform="translate(-154.353 -77.403)"
          fill="#3f3d56"
        />
        <path
          id="Path_1948"
          data-name="Path 1948"
          d="M624.26,268.863c-.472-4.968-6.558-8.026-11.318-6.526s-7.884,6.293-8.829,11.193a16.057,16.057,0,0,0,2.165,12.122c2.406,3.462,6.827,5.623,10.95,4.744,4.707-1,7.968-5.6,8.9-10.321s.007-9.589-.919-14.312Z"
          transform="translate(-154.353 -77.403)"
          fill="#2f2e41"
        />
        <path
          id="Path_1949"
          data-name="Path 1949"
          d="M691.242,275.96c-.472-4.968-6.558-8.026-11.318-6.526s-7.884,6.293-8.829,11.193a16.057,16.057,0,0,0,2.165,12.122c2.406,3.462,6.827,5.623,10.95,4.744,4.707-1,7.968-5.6,8.9-10.321s.007-9.589-.919-14.312Z"
          transform="translate(-154.353 -77.403)"
          fill="#2f2e41"
        />
        <g id="left-chat">
          <path
            id="Path_1950"
            data-name="Path 1950"
            d="M488.936,356.142a4.475,4.475,0,0,1-3.307-1.464l-49.621-54.134a6.02,6.02,0,0,0-4.426-1.947H169.362a15.026,15.026,0,0,1-15.009-15.009V189.025a15.026,15.026,0,0,1,15.009-15.009H509.087A15.026,15.026,0,0,1,524.1,189.025v94.563A15.026,15.026,0,0,1,509.087,298.6h-9.631a6.012,6.012,0,0,0-6,6v47.033a4.474,4.474,0,0,1-2.87,4.2A4.525,4.525,0,0,1,488.936,356.142Z"
            transform="translate(-154.353 -77.403)"
            fill="#fff"
          />
          <path
            id="Path_1951"
            data-name="Path 1951"
            d="M488.936,356.142a4.475,4.475,0,0,1-3.307-1.464l-49.621-54.134a6.02,6.02,0,0,0-4.426-1.947H169.362a15.026,15.026,0,0,1-15.009-15.009V189.025a15.026,15.026,0,0,1,15.009-15.009H509.087A15.026,15.026,0,0,1,524.1,189.025v94.563A15.026,15.026,0,0,1,509.087,298.6h-9.631a6.012,6.012,0,0,0-6,6v47.033a4.474,4.474,0,0,1-2.87,4.2A4.525,4.525,0,0,1,488.936,356.142ZM169.362,176.016a13.024,13.024,0,0,0-13.009,13.009v94.562A13.024,13.024,0,0,0,169.362,296.6H431.581a8.024,8.024,0,0,1,5.9,2.6L487.1,353.326a2.5,2.5,0,0,0,4.347-1.691V304.6a8.014,8.014,0,0,1,8-8h9.632A13.024,13.024,0,0,0,522.1,283.587V189.025a13.024,13.024,0,0,0-13.009-13.009Z"
            transform="translate(-154.353 -77.403)"
            fill="#3f3d56"
          />
        </g>
        <circle
          id="Ellipse_172"
          data-name="Ellipse 172"
          cx="13.134"
          cy="13.134"
          r="13.134"
          transform="translate(23.682 112.059)"
          fill="#f2a30a"
        />
        <path
          id="Path_1952"
          data-name="Path 1952"
          d="M493.764,275.269H184.684a7,7,0,1,1,0-14.009h309.08a7,7,0,1,1,0,14.009Z"
          transform="translate(-154.353 -77.403)"
          fill="#e6e6e6"
        />
        <path
          id="Path_1953"
          data-name="Path 1953"
          d="M393.073,245.5H184.684a7,7,0,0,1,0-14.009H393.073a7,7,0,0,1,0,14.009Z"
          transform="translate(-154.353 -77.403)"
          fill="#e6e6e6"
        />
        <g id="right-chat">
          <path
            id="Path_1954"
            data-name="Path 1954"
            d="M709.419,676.831a4.474,4.474,0,0,1-2.87-4.2V625.6a6.012,6.012,0,0,0-6-6h-9.631A15.026,15.026,0,0,1,675.9,604.588V510.025a15.026,15.026,0,0,1,15.009-15.009H1030.64a15.026,15.026,0,0,1,15.009,15.009v94.562A15.026,15.026,0,0,1,1030.64,619.6H768.419a6.021,6.021,0,0,0-4.426,1.947l-49.622,54.133a4.475,4.475,0,0,1-3.307,1.464,4.524,4.524,0,0,1-1.645-.311Z"
            transform="translate(-154.353 -77.403)"
            fill="#fff"
          />
          <path
            id="Path_1955"
            data-name="Path 1955"
            d="M709.419,676.831a4.474,4.474,0,0,1-2.87-4.2V625.6a6.012,6.012,0,0,0-6-6h-9.631A15.026,15.026,0,0,1,675.9,604.588V510.025a15.026,15.026,0,0,1,15.009-15.009H1030.64a15.026,15.026,0,0,1,15.009,15.009v94.562A15.026,15.026,0,0,1,1030.64,619.6H768.419a6.021,6.021,0,0,0-4.426,1.947l-49.622,54.133a4.475,4.475,0,0,1-3.307,1.464,4.524,4.524,0,0,1-1.645-.311ZM690.913,497.016A13.024,13.024,0,0,0,677.9,510.025v94.563A13.024,13.024,0,0,0,690.913,617.6h9.631a8.014,8.014,0,0,1,8,8v47.033a2.5,2.5,0,0,0,4.347,1.691l49.622-54.133a8.024,8.024,0,0,1,5.9-2.6h262.22a13.024,13.024,0,0,0,13.009-13.009V510.025a13.024,13.024,0,0,0-13.009-13.009Z"
            transform="translate(-154.353 -77.403)"
            fill="#3f3d56"
          />
        </g>
        <path
          id="Path_1956"
          data-name="Path 1956"
          d="M603.53,706.113a89.069,89.069,0,0,1-93.65,1.49,54.131,54.131,0,0,1,9.4-12.65,53.433,53.433,0,0,1,83.91,10.57C603.3,705.713,603.42,705.913,603.53,706.113Z"
          transform="translate(-154.353 -77.403)"
          fill="#f2a30a"
        />
        <circle
          id="Ellipse_173"
          data-name="Ellipse 173"
          cx="44.202"
          cy="44.202"
          r="44.202"
          transform="translate(354.241 492.486)"
          fill="#2f2e41"
        />
        <circle
          id="Ellipse_174"
          data-name="Ellipse 174"
          cx="32.898"
          cy="32.898"
          r="32.898"
          transform="translate(357.818 565.175) rotate(-61.337)"
          fill="#ffb8b8"
        />
        <path
          id="Path_1957"
          data-name="Path 1957"
          d="M522.25,608.8a44.744,44.744,0,0,0,25.571,7.9,27.419,27.419,0,0,1-10.868,4.471,90.225,90.225,0,0,0,36.853.207,23.852,23.852,0,0,0,7.715-2.65,9.764,9.764,0,0,0,4.762-6.369c.809-4.619-2.791-8.816-6.531-11.644a48.176,48.176,0,0,0-40.484-8.09c-4.522,1.169-9.053,3.144-11.99,6.776s-3.807,9.231-1.009,12.971Z"
          transform="translate(-154.353 -77.403)"
          fill="#2f2e41"
        />
        <path
          id="Path_1958"
          data-name="Path 1958"
          d="M555.5,721.173a89.972,89.972,0,1,1,48.571-14.219A89.972,89.972,0,0,1,555.5,721.173Zm0-178a88.008,88.008,0,1,0,88,88,88.01,88.01,0,0,0-88-88Z"
          transform="translate(-154.353 -77.403)"
          fill="#3f3d56"
        />
        <circle
          id="Ellipse_175"
          data-name="Ellipse 175"
          cx="13.134"
          cy="13.134"
          r="13.134"
          transform="translate(550.682 432.059)"
          fill="#f2a30a"
        />
        <path
          id="Path_1959"
          data-name="Path 1959"
          d="M1020.76,595.269H711.684a7,7,0,1,1,0-14.009h309.08a7,7,0,0,1,0,14.009Z"
          transform="translate(-154.353 -77.403)"
          fill="#e6e6e6"
        />
        <path
          id="Path_1960"
          data-name="Path 1960"
          d="M920.073,565.5H711.684a7,7,0,1,1,0-14.009H920.073a7,7,0,0,1,0,14.009Z"
          transform="translate(-154.353 -77.403)"
          fill="#e6e6e6"
        />
        <ellipse
          id="Ellipse_176"
          data-name="Ellipse 176"
          cx="24.504"
          cy="2.72"
          rx="24.504"
          ry="2.72"
          transform="translate(530.14 602.941)"
          fill="#f2f2f2"
        />
        <ellipse
          id="Ellipse_177"
          data-name="Ellipse 177"
          cx="24.504"
          cy="2.72"
          rx="24.504"
          ry="2.72"
          transform="translate(311.14 282.941)"
          fill="#f2f2f2"
        />
      </g>
    </svg>
  );
};

export default ContactChatSVG;