import * as s from './styles';

export type LogoProps = {
  color?: 'black' | 'white';
  size?: 'normal' | 'large';
  hideTextOnMobile?: true | false;
};

const Logo = ({
  color = 'black',
  size = 'normal',
  hideTextOnMobile = false
}: LogoProps) => (
  <s.Container color={color} size={size} hideTextOnMobile={hideTextOnMobile}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 144 48"
      role="img"
      aria-label="YLW games"
    >
      <path
        d="M97.164 7l-6.608 12.74v6.804h-3.92V19.74L80 7h4.424l4.2 8.932L92.796 7h4.368zM106.145 23.436h6.44v3.108h-10.36V7h3.92v16.436zM144 7l-5.46 19.544h-4.62l-3.668-13.916-3.836 13.916-4.592.028L116.56 7h4.2l3.444 15.176L128.18 7h4.368l3.752 15.092L139.772 7H144zM85.992 35.594c-.2-.46-.507-.82-.92-1.08-.407-.267-.887-.4-1.44-.4-.52 0-.987.12-1.4.36-.413.24-.74.583-.98 1.03-.24.44-.36.953-.36 1.54 0 .587.12 1.103.36 1.55.24.447.567.79.98 1.03.413.24.88.36 1.4.36.487 0 .923-.103 1.31-.31.393-.213.707-.513.94-.9.24-.393.377-.85.41-1.37h-2.94v-.57h3.68v.51a3.57 3.57 0 01-.5 1.67 3.336 3.336 0 01-2.9 1.6c-.647 0-1.233-.15-1.76-.45a3.363 3.363 0 01-1.25-1.27c-.3-.547-.45-1.163-.45-1.85s.15-1.3.45-1.84a3.27 3.27 0 011.25-1.27 3.433 3.433 0 011.76-.46c.747 0 1.4.187 1.96.56.56.373.967.893 1.22 1.56h-.82zM100.164 38.884h-3.18l-.61 1.66h-.74l2.55-6.9h.79l2.54 6.9h-.74l-.61-1.66zm-.21-.58l-1.38-3.78-1.38 3.78h2.76zM117.268 33.644v6.9h-.7v-5.51l-2.46 5.51h-.51l-2.46-5.49v5.49h-.7v-6.9h.74l2.67 5.98 2.67-5.98h.75zM127.356 34.124v2.61h2.65v.58h-2.65v2.65h2.95v.58h-3.65v-7h3.65v.58h-2.95zM141.605 40.614c-.46 0-.867-.08-1.22-.24a1.99 1.99 0 01-.82-.67 1.757 1.757 0 01-.32-.96h.74c.033.34.183.64.45.9.267.253.657.38 1.17.38.473 0 .847-.12 1.12-.36.28-.247.42-.557.42-.93 0-.3-.077-.54-.23-.72a1.344 1.344 0 00-.57-.41 8.02 8.02 0 00-.94-.3 8.19 8.19 0 01-1.11-.37 1.767 1.767 0 01-.7-.56c-.193-.253-.29-.597-.29-1.03 0-.36.093-.68.28-.96.187-.287.45-.51.79-.67.34-.16.73-.24 1.17-.24.647 0 1.167.16 1.56.48.4.313.63.72.69 1.22h-.76c-.047-.287-.203-.54-.47-.76-.267-.227-.627-.34-1.08-.34-.42 0-.77.113-1.05.34-.28.22-.42.523-.42.91 0 .293.077.53.23.71.153.18.343.317.57.41.233.093.547.193.94.3.453.127.82.253 1.1.38.28.12.517.307.71.56.193.253.29.593.29 1.02 0 .327-.087.637-.26.93-.173.293-.43.53-.77.71-.34.18-.747.27-1.22.27z"
        fill="currentColor"
        className="text"
      />
      <path
        d="M.055 15.125L.019 35.77c-.008 4.796 5.336 7.662 9.327 5.003l20.596-13.722L50.49 40.844c3.982 2.673 9.336-.176 9.344-4.972l.034-19.997c.014-7.881-7.549-13.565-15.116-11.36l-.873.254a50.874 50.874 0 01-29.358-.271C7.351 2.264.068 7.614.055 15.125z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M30.163 27.057l-6.033-4.292a.5.5 0 00-.782.494l1.293 7.298 5.523-3.5z"
        fill="#000000"
        fillOpacity=".15"
      />
      <path
        d="M7.592 7c-5.11 2.755-4.519 5-4.519 7.5M57.274 26v1M3.053 18v2M57.274 30v5"
        stroke="#fff"
        strokeOpacity=".4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.053 15v6M10.04 18h6.025"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        rx="1.506"
        ry="1.5"
        transform="matrix(1 0 0 1 44.723 13.557)"
        fill="#000000"
      />
      <ellipse
        rx="1.506"
        ry="1.5"
        transform="matrix(1 0 0 1 49.743 17.5)"
        fill="#000000"
      />
      <ellipse
        rx="1.506"
        ry="1.5"
        transform="matrix(1 0 0 1 44.723 21.5)"
        fill="#000000"
      />
      <ellipse
        rx="1.506"
        ry="1.5"
        transform="matrix(1 0 0 1 39.703 17.5)"
        fill="#000000"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="29.228"
          y1="-14.198"
          x2="30.641"
          y2="55.884"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCB00" />
        </linearGradient>
      </defs>
    </svg>
  </s.Container>
);

export default Logo;