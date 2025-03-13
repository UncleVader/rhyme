const GreenTickIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='2' y='2' width='16' height='16' rx='8' fill='#1E8E4F' />
      <g filter='url(#filter0_d_66_1784)'>
        <path
          d='M14.2929 8.63551L9.24256 13.6855C8.86858 14.0595 8.26193 14.0595 7.88759 13.6855L5.28059 11.0783C4.90647 10.7042 4.90647 10.0975 5.28059 9.72337C5.65479 9.34917 6.26139 9.34917 6.63542 9.72323L8.56528 11.6531L12.9378 7.28054C13.312 6.90635 13.9187 6.90663 14.2927 7.28054C14.6668 7.65466 14.6668 8.26118 14.2929 8.63551Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_66_1784'
          x='4.34146'
          y='6.56098'
          width='11.3293'
          height='8.7221'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='0.219512' dy='0.439024' />
          <feGaussianBlur stdDeviation='0.439024' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_66_1784'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_66_1784'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default GreenTickIcon;
