import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CodeSVG = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#undraw_code_typing_7jnv",
        start: "center bottom",
      },
    });

    tl.from("#man", { x: -30, opacity: 0, duration: 1 })
      .from(
        "#woman",
        {
          x: 30,
          opacity: 0,
          duration: 1,
        },
        "-=1"
      )
      .from("#dots", { scale: 0, transformOrigin: "center" })
      .from("#flower", { scale: 0, transformOrigin: "bottom" });
  }, []);
  return (
    <svg
      id="undraw_code_typing_7jnv"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400.839 304.422"
    >
      <path
        id="Path_45"
        data-name="Path 45"
        d="M515.226,158.206C497.608,88.928,436.734,38.92,365.279,36.914c-37.775-1.06-77.526,11.468-106.467,55.31-51.736,78.372,3.179,132.529,41.465,158.264a239.561,239.561,0,0,1,49.516,44.5c25.86,30.688,75.61,68.821,134.86,9.072C527.595,260.758,526.961,204.351,515.226,158.206Z"
        transform="translate(-170.76 -36.853)"
        fill="#f2f2f2"
      />
      <path
        id="Path_49"
        data-name="Path 49"
        d="M456.839,786.038c0,6.1-89.731,27.263-200.419,27.263S56,792.142,56,786.038s89.731,5.158,200.419,5.158S456.839,779.934,456.839,786.038Z"
        transform="translate(-56 -508.879)"
        fill="#3f3d56"
      />
      <path
        id="Path_50"
        data-name="Path 50"
        d="M456.839,786.038c0,6.1-89.731,27.263-200.419,27.263S56,792.142,56,786.038s89.731,5.158,200.419,5.158S456.839,779.934,456.839,786.038Z"
        transform="translate(-56 -508.879)"
        opacity="0.1"
      />
      <ellipse
        id="Ellipse_11"
        data-name="Ellipse 11"
        cx="200.419"
        cy="11.053"
        rx="200.419"
        ry="11.053"
        transform="translate(0 266.106)"
        fill="#3f3d56"
      />
      <g id="flower">
        <path
          id="Path_51"
          data-name="Path 51"
          d="M688.7,644.806c0,23.585,14.8,42.669,33.08,42.669"
          transform="translate(-455.6 -420.825)"
          fill="#3f3d56"
        />
        <path
          id="Path_52"
          data-name="Path 52"
          d="M778.487,686.653c0-23.85,16.511-43.148,36.916-43.148"
          transform="translate(-512.31 -420.004)"
          fill="#f2a30a"
        />
        <path
          id="Path_53"
          data-name="Path 53"
          d="M721.229,650.609c0,22.4,9.435,40.531,21.095,40.531"
          transform="translate(-476.146 -424.49)"
          fill="#f2a30a"
        />
        <path
          id="Path_54"
          data-name="Path 54"
          d="M778.487,666.106c0-30.475,19.084-55.134,42.669-55.134"
          transform="translate(-512.31 -399.456)"
          fill="#3f3d56"
        />
      </g>
      <path
        id="Path_55"
        data-name="Path 55"
        d="M759.6,757.094s4.691-.145,6.105-1.151,7.217-2.209,7.567-.594,7.05,8.031,1.754,8.073-12.307-.825-13.718-1.685S759.6,757.094,759.6,757.094Z"
        transform="translate(-500.379 -490.143)"
        fill="#a8a8a8"
      />
      <path
        id="Path_56"
        data-name="Path 56"
        d="M775.118,767.2c-5.3.043-12.307-.825-13.718-1.685-1.075-.655-1.5-3-1.646-4.087l-.157.006s.3,3.784,1.708,4.643,8.421,1.727,13.718,1.685c1.529-.012,2.057-.556,2.028-1.362C776.839,766.882,776.256,767.186,775.118,767.2Z"
        transform="translate(-500.379 -494.479)"
        opacity="0.2"
      />
      <g id="woman">
        <path
          id="Path_46"
          data-name="Path 46"
          d="M719.6,364.593l36.252-36.142L719.6,292.31l11.052-11.016,47.3,47.158-47.3,47.158L719.6,364.593Z"
          transform="translate(-454.486 -177.66)"
          opacity="0.1"
        />
        <path
          id="Path_59"
          data-name="Path 59"
          d="M950.575,345.695S937.086,369.8,936.8,373.246s-.287,3.731-1.435,3.444-16.933-2.009-18.368-1.435-4.3-3.444-4.3-3.444-5.453,5.453-4.3,6.6,4.593,1.722,5.167,3.157,1.435,2.87,4.018,2.583,20.09,4.592,22.386,3.731,2.87-2.3,4.018-2.3,3.444-1.148,3.444-1.435,8.036-15.5,8.036-15.5S964.924,347.991,950.575,345.695Z"
          transform="translate(-594.251 -231.912)"
          fill="#d0cde1"
        />
        <path
          id="Path_60"
          data-name="Path 60"
          d="M950.575,345.695S937.086,369.8,936.8,373.246s-.287,3.731-1.435,3.444-16.933-2.009-18.368-1.435-4.3-3.444-4.3-3.444-5.453,5.453-4.3,6.6,4.593,1.722,5.167,3.157,1.435,2.87,4.018,2.583,20.09,4.592,22.386,3.731,2.87-2.3,4.018-2.3,3.444-1.148,3.444-1.435,8.036-15.5,8.036-15.5S964.924,347.991,950.575,345.695Z"
          transform="translate(-594.251 -231.912)"
          opacity="0.1"
        />
        <path
          id="Path_61"
          data-name="Path 61"
          d="M958.093,294.566a23.88,23.88,0,0,0,.074,4.576c.436,3.3,1.954,6.734.52,9.812-.52,1.117-1.4,2.091-1.882,3.221-1.017,2.393-.1,5.048-.233,7.6a10.439,10.439,0,0,1-5.455,8.264,18.95,18.95,0,0,0,14.034-6.185c3.422-3.665,5.328-8.21,6.757-12.758a27.739,27.739,0,0,0,1.4-6.6,9.514,9.514,0,0,0-.445-3.826A14.581,14.581,0,0,0,970.9,295.3a13.256,13.256,0,0,0-3-3.33,12.057,12.057,0,0,0-6.626-2.052C958.734,290.116,958.2,292.807,958.093,294.566Z"
          transform="translate(-621.339 -196.675)"
          fill="#2f2e41"
        />
        <path
          id="Path_62"
          data-name="Path 62"
          d="M992.792,324.048s3.157,11.193.574,14.35,15.5-1.435,15.5-1.435-8.9-8.9-4.592-14.637Z"
          transform="translate(-647.661 -217.153)"
          fill="#ffb9b9"
        />
        <path
          id="Path_63"
          data-name="Path 63"
          d="M992.792,324.048s3.157,11.193.574,14.35,15.5-1.435,15.5-1.435-8.9-8.9-4.592-14.637Z"
          transform="translate(-647.661 -217.153)"
          opacity="0.1"
        />
        <path
          id="Path_64"
          data-name="Path 64"
          d="M719.6,345.593l36.252-36.142L719.6,273.31l11.052-11.016,47.3,47.158-47.3,47.158L719.6,345.593Z"
          transform="translate(-454.486 -165.66)"
          fill="#f2a30a"
        />
        <path
          id="Path_65"
          data-name="Path 65"
          d="M908.748,694.729v8.323l4.3,5.166,3.731-1.722-1.148-12.054Z"
          transform="translate(-573.949 -438.597)"
          fill="#ffb9b9"
        />
        <path
          id="Path_66"
          data-name="Path 66"
          d="M947.134,749.367s-1.148-4.018-3.157-1.148-4.018,9.184-5.166,9.471-9.184,9.184-1.148,9.184,10.619-3.731,10.619-3.731,8.036-3.157,8.036-3.731-1.148-11.193-1.722-11.193-.861,2.009-2.3,2.009A37.209,37.209,0,0,1,947.134,749.367Z"
          transform="translate(-610.613 -485.486)"
          fill="#2f2e41"
        />
        <path
          id="Path_67"
          data-name="Path 67"
          d="M960.449,698.132l-.287,7.749,6.888,2.87V697.558Z"
          transform="translate(-606.421 -440.565)"
          fill="#ffb9b9"
        />
        <path
          id="Path_68"
          data-name="Path 68"
          d="M1016.425,751.383s-3.731-4.018-5.74-3.157a19.838,19.838,0,0,0-2.87,1.435s-1.148,3.731-1.722,6.888-.861,4.592-1.435,5.74-1.148,5.453,4.592,6.027,7.462-2.583,7.462-2.583l1.435-7.462S1017.574,751.383,1016.425,751.383Z"
          transform="translate(-654.937 -486.067)"
          fill="#2f2e41"
        />
        <path
          id="Path_69"
          data-name="Path 69"
          d="M959.664,497.352s-8.323,18.655-7.175,35.587c0,0-2.87,6.6-1.148,16.933s4.018,31,4.018,31,7.749.861,8.323-.574c0,0,.574-14.35,1.148-14.924s-.287-13.776-1.148-16.359,8.036-28.125,8.036-28.125l-2.3-31.856Z"
          transform="translate(-621.134 -322.44)"
          fill="#2f2e41"
        />
        <path
          id="Path_70"
          data-name="Path 70"
          d="M959.664,497.352s-8.323,18.655-7.175,35.587c0,0-2.87,6.6-1.148,16.933s4.018,31,4.018,31,7.749.861,8.323-.574c0,0,.574-14.35,1.148-14.924s-.287-13.776-1.148-16.359,8.036-28.125,8.036-28.125l-2.3-31.856Z"
          transform="translate(-621.134 -322.44)"
          opacity="0.1"
        />
        <path
          id="Path_71"
          data-name="Path 71"
          d="M968.643,492.268l5.453,11.767s2.583,26.69,4.018,30.134c0,0,.574,9.758,3.157,12.915s4.592,31,4.592,31,7.175,2.009,7.749,0,2.3-15.785,2.3-15.785.574-11.767-2.583-19.516,3.731-35.587,3.731-35.587S1004.23,493.7,993.9,482.8Z"
          transform="translate(-632.409 -318.503)"
          fill="#2f2e41"
        />
        <circle
          id="Ellipse_12"
          data-name="Ellipse 12"
          cx="11.767"
          cy="11.767"
          r="11.767"
          transform="translate(339.679 86.806)"
          fill="#ffb9b9"
        />
        <path
          id="Path_72"
          data-name="Path 72"
          d="M987.366,352.706s-12.341,0-14.063,1.435a2.289,2.289,0,0,1-3.157,0s-4.3.287-5.453,3.731-4.592,8.036-4.592,8.036-5.166,3.731-2.3,13.489.574,25.542.574,25.542-2.3,3.444,0,4.879,3.157,2.009,2.87,3.157,26.117-9.471,26.117-11.48-.574-3.731,0-4.592a4.1,4.1,0,0,0,.574-3.731c-.574-1.435.574-1.722.287-3.157s1.435-12.054,2.583-16.646S991.673,352.993,987.366,352.706Z"
          transform="translate(-625.016 -236.34)"
          fill="#d0cde1"
        />
        <path
          id="Path_73"
          data-name="Path 73"
          d="M900.514,418.51s-11.343-8.612-12.2-5.455,8.323,10.332,8.323,10.332Z"
          transform="translate(-581.636 -274.016)"
          fill="#ffb9b9"
        />
        <path
          id="Path_74"
          data-name="Path 74"
          d="M950.576,356.6s-13.489,24.107-13.776,27.551-.287,3.731-1.435,3.444-16.933-2.009-18.367-1.435-4.3-3.444-4.3-3.444-5.452,5.453-4.3,6.6,4.592,1.722,5.166,3.157,1.435,2.87,4.018,2.583,20.09,4.592,22.386,3.731,2.87-2.3,4.018-2.3,3.444-1.148,3.444-1.435,8.036-15.5,8.036-15.5S964.926,358.9,950.576,356.6Z"
          transform="translate(-594.253 -238.8)"
          fill="#d0cde1"
        />
        <path
          id="Path_75"
          data-name="Path 75"
          d="M978.321,280.8a28.585,28.585,0,0,0-1.066-3.359,6.972,6.972,0,0,1,.794-5.414c1.688-2.726,5-3.933,7.312-6.156a4.154,4.154,0,0,0,1.7,2.827,20.406,20.406,0,0,1,2.6,2.181,8.54,8.54,0,0,1,1.514,3.066,10.773,10.773,0,0,1,.6,4.022,5.043,5.043,0,0,1-1.743,3.574c-.861.68-2.064,1.069-2.479,2.084a3.551,3.551,0,0,0-.138,1.573,31.765,31.765,0,0,1-.362,9.446c-.744,3.075-2.565,6.046-5.42,7.409a21.753,21.753,0,0,0,7.018-.263,7.364,7.364,0,0,0,5.238-4.3,22.773,22.773,0,0,1,.974-3.332c1.392-2.586,5.237-2.7,7.125-4.952a7.609,7.609,0,0,0,1.392-3.2c1.595-6.729.474-13.874-1.953-20.349a14.567,14.567,0,0,0-3.673-6.048,15.144,15.144,0,0,0-5.406-2.7,31.532,31.532,0,0,0-8.673-1.765,11.015,11.015,0,0,0-3.807.444,11.317,11.317,0,0,0-3.35,1.908c-4.634,3.606-7.79,9.369-7.371,15.227a21.327,21.327,0,0,0,3.684,9.882c.675,1.044,2.269,3.269,3.751,2.613C977.924,284.62,978.5,282.056,978.321,280.8Z"
          transform="translate(-632.703 -174.708)"
          fill="#2f2e41"
        />
      </g>
      <g id="dots">
        <path
          id="Path_47"
          data-name="Path 47"
          d="M494.6,427.884h14.737V413.147H494.6Zm73.978-14.737H553.842v14.737h14.737Zm-44.358,14.737h14.737V413.147H524.221Z"
          transform="translate(-333.012 -274.514)"
          opacity="0.1"
        />
        <path
          id="Path_76"
          data-name="Path 76"
          d="M494.6,408.884h14.737V394.147H494.6Zm73.978-14.737H553.842v14.737h14.737Zm-44.358,14.737h14.737V394.147H524.221Z"
          transform="translate(-333.012 -262.514)"
          fill="#f2a30a"
        />
      </g>
      <g id="man">
        <path
          id="Path_48"
          data-name="Path 48"
          d="M284.357,363.593l-36.289-36.142,36.252-36.142-11.053-11.016L226,327.452l47.3,47.158Z"
          transform="translate(-142.737 -177.029)"
          opacity="0.1"
        />
        <ellipse
          id="Ellipse_13"
          data-name="Ellipse 13"
          cx="12.4"
          cy="9.672"
          rx="12.4"
          ry="9.672"
          transform="translate(63.57 68.373)"
          fill="#2f2e41"
        />
        <path
          id="Path_77"
          data-name="Path 77"
          d="M266.227,427.535s11.16.744,13.144-.744,10.416,1.984,11.16,3.968-11.9,2.232-13.888,2.232-11.408,2.976-11.408,2.976Z"
          transform="translate(-188.149 -282.903)"
          fill="#a0616a"
        />
        <path
          id="Path_78"
          data-name="Path 78"
          d="M199.944,741.155s-5.2,13.115-2.487,14.7,31.206.452,31.206.452,4.749-2.94-.678-4.975c0,0-4.523-.226-7.462-2.035a43.24,43.24,0,0,1-6.332-5.2s-.226-4.975-2.035-3.844a4.647,4.647,0,0,0-2.035,3.166Z"
          transform="translate(-144.846 -481.001)"
          fill="#2f2e41"
        />
        <path
          id="Path_79"
          data-name="Path 79"
          d="M199.944,741.155s-5.2,13.115-2.487,14.7,31.206.452,31.206.452,4.749-2.94-.678-4.975c0,0-4.523-.226-7.462-2.035a43.24,43.24,0,0,1-6.332-5.2s-.226-4.975-2.035-3.844a4.647,4.647,0,0,0-2.035,3.166Z"
          transform="translate(-144.846 -481.001)"
          opacity="0.1"
        />
        <path
          id="Path_80"
          data-name="Path 80"
          d="M284.357,344.593l-36.289-36.142,36.252-36.142-11.053-11.016L226,308.452l47.3,47.158Z"
          transform="translate(-142.737 -165.029)"
          fill="#f2a30a"
        />
        <path
          id="Path_81"
          data-name="Path 81"
          d="M177.634,751.867s-5.7,14.384-2.728,16.12,34.223.5,34.223.5,5.208-3.224-.744-5.456c0,0-4.96-.248-8.184-2.232a47.417,47.417,0,0,1-6.944-5.7s-.248-5.456-2.232-4.216a5.1,5.1,0,0,0-2.232,3.472Z"
          transform="translate(-130.556 -487.701)"
          fill="#2f2e41"
        />
        <path
          id="Path_82"
          data-name="Path 82"
          d="M228.354,495.539l-3.472,31.248s-1.24,14.88-4.96,18.1c0,0,0,4.712-1.24,6.2l-1.736,19.592s2.48,7.192,2.232,8.432.992,5.208.744,5.7-11.9,0-11.9,0l2.48-39.927,7.688-55.551Z"
          transform="translate(-152.013 -322.635)"
          fill="#2f2e41"
        />
        <path
          id="Path_83"
          data-name="Path 83"
          d="M228.354,495.539l-3.472,31.248s-1.24,14.88-4.96,18.1c0,0,0,4.712-1.24,6.2l-1.736,19.592s2.48,7.192,2.232,8.432.992,5.208.744,5.7-11.9,0-11.9,0l2.48-39.927,7.688-55.551Z"
          transform="translate(-152.013 -322.635)"
          opacity="0.1"
        />
        <path
          id="Path_84"
          data-name="Path 84"
          d="M200.055,492.421s-2.728,25.544-3.968,31a70.537,70.537,0,0,0-1.488,10.912s-.248,7.936-2.48,10.168a6.7,6.7,0,0,0-1.984,4.96s-2.232,25.048-.992,28.024,2.48,5.456,1.24,7.44-14.88,1.984-14.88.5,0-2.728-.744-3.472,0-5.456,0-5.456-2.976-22.072-.248-28.52,3.968-24.056,3.968-24.056-1.984-20.088-4.464-23.312.5-14.632.5-14.632Z"
          transform="translate(-129.913 -320.509)"
          fill="#2f2e41"
        />
        <path
          id="Path_85"
          data-name="Path 85"
          d="M227.436,275.936a3.334,3.334,0,0,0,1.607,1.369c3.641,2.006,6.689,4.914,9.692,7.789a11.377,11.377,0,0,1,.451-7.694,3.966,3.966,0,0,0,.572-2.59,3.224,3.224,0,0,0-1.258-1.5,38.986,38.986,0,0,0-3.835-2.616c-.929-.556-2.838-2.034-3.9-1.874a9.9,9.9,0,0,1-.716,4.072C229.9,273.207,227.546,276.187,227.436,275.936Z"
          transform="translate(-164.275 -183.348)"
          fill="#a0616a"
        />
        <circle
          id="Ellipse_14"
          data-name="Ellipse 14"
          cx="10.168"
          cy="10.168"
          r="10.168"
          transform="translate(65.678 75.441)"
          fill="#a0616a"
        />
        <path
          id="Path_86"
          data-name="Path 86"
          d="M201.2,303.476s1.736-8.68-3.224-11.656-10.664-6.448-10.664-6.448-1.736-.248-2.48,3.472c0,0-14.136,2.728-15.624,16.12s.992,32.983.992,32.983-2.232,17.112-4.96,26.288c0,0-2.232,1.984,7.688-.992s27.279,8.432,27.279,8.432,1.736-1.736,1.736-2.976,1.984-8.432,1.984-8.432,1.736-30.5,2.48-33.975S203.434,303.972,201.2,303.476Z"
          transform="translate(-124.859 -193.811)"
          fill="#575a89"
        />
        <path
          id="Path_87"
          data-name="Path 87"
          d="M236.312,236.749a4.24,4.24,0,0,1,1.994-.531,3.8,3.8,0,0,0,1.973-.588c.96-.737,1.031-2.162,1.733-3.148,1.017-1.428,3.047-1.6,4.8-1.528a5.317,5.317,0,0,0,3.127-.472,4.7,4.7,0,0,0,1.658-2.771c.369-1.248.608-2.775-.307-3.7-.635-.643-1.639-.77-2.344-1.335a6.2,6.2,0,0,1-1.431-2.387,6.45,6.45,0,0,0-2.077-2.6,7.942,7.942,0,0,0-4.654-1.115,36.434,36.434,0,0,1-4.859.032,14.85,14.85,0,0,0-3.948-.407,5.644,5.644,0,0,0-3.885,2.989,16.7,16.7,0,0,0-1.523,4.823l-.934,4.509a11.9,11.9,0,0,0-.357,4.245c.463,2.924,3.049,5.248,3.228,8.2a5.036,5.036,0,0,1,3.074-3.655.962.962,0,0,1,.626-.076c.257.082.407.339.569.554.425.565,1.759,1.422,2.516,1.021C235.966,238.451,235.461,237.326,236.312,236.749Z"
          transform="translate(-162.862 -150.092)"
          fill="#2f2e41"
        />
        <path
          id="Path_88"
          data-name="Path 88"
          d="M185.49,393.4s-1.736,10.912,5.456,9.92c0,0,3.72-.5,4.216,0s18.848-2.728,21.328-5.456c0,0,2.976-.992,4.464.5s16.368,2.976,11.9-1.488-11.408-5.456-11.408-5.456l-9.424.5s-4.96,1.488-7.936,0-11.408-.992-11.408-.992Z"
          transform="translate(-137.667 -260.428)"
          fill="#a0616a"
        />
        <path
          id="Path_89"
          data-name="Path 89"
          d="M194.272,304.226s-11.16,1.24-11.16,17.36v20.584s6.2-2.728,7.44-2.48,6.2-3.224,6.2-3.224,5.7-13.392,5.208-17.112S201.712,304.722,194.272,304.226Z"
          transform="translate(-136.281 -205.721)"
          fill="#575a89"
        />
        <ellipse
          id="Ellipse_15"
          data-name="Ellipse 15"
          cx="9.548"
          cy="4.96"
          rx="9.548"
          ry="4.96"
          transform="translate(66.298 74.325)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_16"
          data-name="Ellipse 16"
          cx="3.348"
          cy="8.308"
          rx="3.348"
          ry="8.308"
          transform="translate(63.57 71.845)"
          fill="#2f2e41"
        />
      </g>
    </svg>
  );
};

export default CodeSVG;
