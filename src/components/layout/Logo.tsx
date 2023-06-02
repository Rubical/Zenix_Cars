"use client";

import React, { FC } from "react";

interface ILogo {
  carColor: string;
  textColor: string;
}

const Logo: FC<ILogo> = ({ carColor, textColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="body_1"
      width="180px"
      height="50px"
    >
      <g transform="matrix(0.2395288 0 0 0.24056606 0 0)">
        <g>
          <path
            d="M301.5 14.5C 311.833 14.5 322.167 14.5 332.5 14.5C 344.961 16.1471 357.628 16.8138 370.5 16.5C 371.833 16.5 373.167 16.5 374.5 16.5C 378.881 18.2105 383.547 18.8772 388.5 18.5C 389.167 18.5 389.833 18.5 390.5 18.5C 400.227 22.3482 410.227 25.6815 420.5 28.5C 439.697 36.6136 456.364 48.4469 470.5 64C 479.349 64.6963 488.182 64.5296 497 63.5C 499.3 63.4944 501.466 63.9944 503.5 65C 505.736 68.0353 507.402 71.3686 508.5 75C 507.529 76.4813 506.196 77.3146 504.5 77.5C 505.63 74.8633 505.63 72.1967 504.5 69.5C 501.833 69.5 499.167 69.5 496.5 69.5C 497.041 72.6516 496.041 75.1516 493.5 77C 477.17 77.4999 460.837 77.6666 444.5 77.5C 444.5 76.5 444.5 75.5 444.5 74.5C 455.881 74.8555 467.215 74.3555 478.5 73C 476.574 72.5776 475.574 71.4109 475.5 69.5C 472.167 69.5 468.833 69.5 465.5 69.5C 465.5 70.8333 465.5 72.1667 465.5 73.5C 449.109 73.9491 432.775 73.2824 416.5 71.5C 416.624 70.8933 416.957 70.56 417.5 70.5C 423.31 71.4896 429.31 71.8229 435.5 71.5C 445.008 72.8225 454.675 72.8225 464.5 71.5C 464.376 70.8933 464.043 70.56 463.5 70.5C 458.101 59.5993 450.101 51.0993 439.5 45C 423.461 36.4103 406.461 31.077 388.5 29C 387.299 29.9025 386.465 31.0692 386 32.5C 382.37 41.9045 378.87 51.2378 375.5 60.5C 375.925 55.3984 376.925 50.3984 378.5 45.5C 373.453 45.3375 368.453 45.6708 363.5 46.5C 366.081 38.8372 369.081 31.3372 372.5 24C 331.515 20.8429 290.515 20.6762 249.5 23.5C 245.486 23.3345 241.486 23.5012 237.5 24C 236.944 24.3826 236.611 24.8826 236.5 25.5C 235.833 25.5 235.167 25.5 234.5 25.5C 226.307 26.008 218.64 28.3413 211.5 32.5C 210.702 32.0431 210.369 31.3764 210.5 30.5C 216.215 26.4787 222.549 23.812 229.5 22.5C 242.739 21.2365 255.739 19.2365 268.5 16.5C 268.833 16.5 269.167 16.5 269.5 16.5C 280.376 16.7581 291.042 16.0915 301.5 14.5zM475.5 69.5C 480.985 68.3483 486.651 68.1816 492.5 69C 495.341 72.1588 494.674 74.4922 490.5 76C 489.207 76.49 487.873 76.6567 486.5 76.5C 485.833 75.1667 484.833 74.1667 483.5 73.5C 480.833 72.1667 478.167 70.8333 475.5 69.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
          />
        </g>
        <g>
          <path
            d="M234.5 25.5C 218.89 29.9716 204.557 37.1383 191.5 47C 181.804 54.1758 172.137 61.3425 162.5 68.5C 161.711 68.7828 161.044 69.2828 160.5 70C 163.146 70.4974 165.813 70.6641 168.5 70.5C 157.109 71.5383 145.442 72.5383 133.5 73.5C 140.736 72.0551 148.069 70.5551 155.5 69C 172.492 54.1774 190.826 41.344 210.5 30.5C 210.369 31.3764 210.702 32.0431 211.5 32.5C 218.64 28.3413 226.307 26.008 234.5 25.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
          />
        </g>
        <g>
          <path
            d="M375.5 60.5C 374.833 63.8333 374.167 67.1667 373.5 70.5C 373.253 72.9752 372.587 72.9752 371.5 70.5C 343.767 68.8592 316.1 69.5259 288.5 72.5C 295.601 70.7453 302.934 69.5786 310.5 69C 323.345 68.0769 336.178 67.2436 349 66.5C 351.057 67.1397 353.223 66.9731 355.5 66C 358.845 59.8039 361.511 53.3039 363.5 46.5C 368.453 45.6708 373.453 45.3375 378.5 45.5C 376.925 50.3984 375.925 55.3984 375.5 60.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
          />
        </g>
        <g>
          <path
            d="M639.5 65.5C 649.839 65.3335 660.172 65.5002 670.5 66C 672.148 71.8128 671.315 77.3128 668 82.5C 665.293 84.9363 662.127 86.4363 658.5 87C 649.756 87.9095 641.089 87.5762 632.5 86C 629.497 77.5101 631.83 70.6768 639.5 65.5z"
            stroke="none"
            fill={textColor}
            fillRule="nonzero"
            fillOpacity="0.92941177"
          />
        </g>
        <g>
          <path
            d="M416.5 60.5C 417.777 61.6936 418.444 63.3603 418.5 65.5C 418.493 67.3693 418.16 69.036 417.5 70.5C 416.957 70.56 416.624 70.8933 416.5 71.5C 432.775 73.2824 449.109 73.9491 465.5 73.5C 465.5 72.1667 465.5 70.8333 465.5 69.5C 468.833 69.5 472.167 69.5 475.5 69.5C 475.574 71.4109 476.574 72.5776 478.5 73C 467.215 74.3555 455.881 74.8555 444.5 74.5C 444.5 75.5 444.5 76.5 444.5 77.5C 460.837 77.6666 477.17 77.4999 493.5 77C 496.041 75.1516 497.041 72.6516 496.5 69.5C 499.167 69.5 501.833 69.5 504.5 69.5C 505.63 72.1967 505.63 74.8633 504.5 77.5C 504.47 78.4972 504.97 79.1639 506 79.5C 509.471 80.3711 512.638 81.7045 515.5 83.5C 513.073 83.477 510.74 82.977 508.5 82C 448.501 81.5 388.501 81.3333 328.5 81.5C 333.25 79.9692 338.25 79.3025 343.5 79.5C 347.514 79.6655 351.514 79.4988 355.5 79C 354.833 78.6667 354.167 78.3333 353.5 78C 346.986 77.18 340.653 77.3467 334.5 78.5C 333.833 78.5 333.167 78.5 332.5 78.5C 326.129 78.4882 319.796 78.9882 313.5 80C 311.881 80.2355 310.881 81.0689 310.5 82.5C 299 83.8736 287.667 86.2069 276.5 89.5C 280.185 87.3804 284.185 85.5471 288.5 84C 274.833 83.3333 261.167 83.3333 247.5 84C 243.727 85.3536 240.06 86.8536 236.5 88.5C 234.899 87.9653 234.399 86.9653 235 85.5C 237.185 84.3305 239.351 83.1638 241.5 82C 196.167 81.3333 150.833 81.3333 105.5 82C 104.095 83.2692 102.429 83.7692 100.5 83.5C 100.5 83.1667 100.5 82.8333 100.5 82.5C 101.167 82.5 101.5 82.1667 101.5 81.5C 111.67 76.9574 122.337 74.2907 133.5 73.5C 145.442 72.5383 157.109 71.5383 168.5 70.5C 168.5 70.1667 168.5 69.8333 168.5 69.5C 204.711 65.3587 241.044 63.6921 277.5 64.5C 282.349 65.1665 287.349 65.8332 292.5 66.5C 285.904 68.3785 279.237 70.0452 272.5 71.5C 271.287 71.7472 270.62 72.4138 270.5 73.5C 266.232 75.0896 261.899 76.5896 257.5 78C 258.167 78.1667 258.833 78.3333 259.5 78.5C 269.021 75.7293 278.688 73.7293 288.5 72.5C 316.1 69.5259 343.767 68.8592 371.5 70.5C 372.587 72.9752 373.253 72.9752 373.5 70.5C 376.391 71.4025 379.391 71.7359 382.5 71.5C 382.401 68.7628 382.735 66.0961 383.5 63.5C 385.092 64.6016 385.925 63.935 386 61.5C 392.027 56.9198 398.86 55.4198 406.5 57C 409.758 58.4665 413.092 59.6332 416.5 60.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
          />
        </g>
        <g>
          <path
            d="M276.5 89.5C 265.933 94.3047 255.099 98.638 244 102.5C 237.336 101.279 230.836 99.4457 224.5 97C 222.167 96.8333 219.833 96.6667 217.5 96.5C 201.846 97.383 186.18 97.7163 170.5 97.5C 150.16 97.6884 129.827 98.1884 109.5 99C 129.842 99.6526 150.175 99.4859 170.5 98.5C 187.188 98.7903 203.855 98.457 220.5 97.5C 224.797 98.2655 228.797 99.5989 232.5 101.5C 182.506 100.768 132.506 100.435 82.5 100.5C 77.5 100.833 72.5 101.167 67.5 101.5C 66.0319 104.154 64.3652 106.487 62.5 108.5C 65.161 98.8396 70.8276 91.5063 79.5 86.5C 83.3746 86.1042 87.2079 85.4375 91 84.5C 91.5 84.8333 92 85.1667 92.5 85.5C 91.3523 87.1487 90.019 88.6487 88.5 90C 89.1079 90.8699 89.9412 91.3699 91 91.5C 93.3495 89.3178 95.5162 86.9845 97.5 84.5C 98.609 84.4431 99.609 84.1098 100.5 83.5C 102.429 83.7692 104.095 83.2692 105.5 82C 150.833 81.3333 196.167 81.3333 241.5 82C 239.351 83.1638 237.185 84.3305 235 85.5C 234.399 86.9653 234.899 87.9653 236.5 88.5C 240.06 86.8536 243.727 85.3536 247.5 84C 261.167 83.3333 274.833 83.3333 288.5 84C 284.185 85.5471 280.185 87.3804 276.5 89.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
          />
        </g>
        <g>
          <path
            d="M328.5 81.5C 388.501 81.3333 448.501 81.5 508.5 82C 510.74 82.977 513.073 83.477 515.5 83.5C 518.167 84.1667 519.833 85.8333 520.5 88.5C 458.833 89.1667 397.167 89.8333 335.5 90.5C 328.887 91.2804 325.053 94.947 324 101.5C 315.349 109.147 309.516 118.481 306.5 129.5C 306.398 124.908 307.398 120.575 309.5 116.5C 301.187 115.335 292.853 115.168 284.5 116C 284.026 117.729 283.026 118.895 281.5 119.5C 281.372 117.345 281.872 115.345 283 113.5C 294.488 97.4988 309.654 86.8322 328.5 81.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
          />
        </g>
        <g>
          <path
            d="M345.5 97.5C 371.835 97.3334 398.169 97.5 424.5 98C 426.187 99.913 426.687 102.08 426 104.5C 422.333 114.833 418.667 125.167 415 135.5C 412.889 139.944 409.389 142.444 404.5 143C 390.425 142.859 376.592 143.693 363 145.5C 359.963 153.737 356.796 161.904 353.5 170C 356.76 170.784 359.927 170.617 363 169.5C 365.275 162.674 367.942 156.007 371 149.5C 372.41 148.213 373.91 147.046 375.5 146C 385.833 145.333 396.167 145.333 406.5 146C 408.444 148.153 408.944 150.653 408 153.5C 405.197 161.578 402.197 169.578 399 177.5C 397.457 179.378 395.624 180.878 393.5 182C 367.167 182.667 340.833 182.667 314.5 182C 312.813 180.087 312.313 177.92 313 175.5C 317.606 161.68 322.606 148.013 328 134.5C 329.41 133.213 330.91 132.046 332.5 131C 347.511 130.833 362.511 130.333 377.5 129.5C 379.833 123.5 382.167 117.5 384.5 111.5C 381.572 110.516 378.572 110.183 375.5 110.5C 372.875 124.585 364.375 130.252 350 127.5C 345.083 127.577 340.25 127.077 335.5 126C 334.02 124.701 333.354 123.034 333.5 121C 334.75 114.08 337.084 107.58 340.5 101.5C 342.21 100.113 343.877 98.7794 345.5 97.5z"
            stroke="none"
            fill={textColor}
            fillRule="nonzero"
            fillOpacity="0.9607843"
          />
        </g>
        <g>
          <path
            fill={textColor}
            d="M 439.5,97.5 C 465.835,97.3334 492.169,97.5 518.5,98C 519,98.5 519.5,99 520,99.5C 520.215,102.803 520.382,105.97 520.5,109C 519.667,109.833 518.833,110.667 518,111.5C 514.132,124.115 509.299,136.281 503.5,148C 501.192,149.867 498.525,150.867 495.5,151C 482.167,151.333 468.833,151.667 455.5,152C 453.073,157.777 450.74,163.61 448.5,169.5C 451.5,170.833 454.5,170.833 457.5,169.5C 458.719,162.879 462.052,157.712 467.5,154C 477.833,153.333 488.167,153.333 498.5,154C 499.358,155.57 500.025,157.237 500.5,159C 498.697,167.093 495.364,174.427 490.5,181C 476.757,182.15 462.924,182.65 449,182.5C 435.833,182.333 422.667,182.167 409.5,182C 407.522,179.503 407.022,176.669 408,173.5C 416.333,150.5 424.667,127.5 433,104.5C 434.694,101.642 436.861,99.309 439.5,97.5 Z M 470.5,110.5 C 473.518,110.335 476.518,110.502 479.5,111C 475.472,119.918 472.139,129.084 469.5,138.5C 466.5,138.5 463.5,138.5 460.5,138.5C 463.634,129.098 466.968,119.764 470.5,110.5 Z"
          />
        </g>

        <g>
          <path
            d="M538.5 97.5C 560.836 97.3334 583.169 97.5 605.5 98C 611.242 102.238 612.742 107.738 610 114.5C 603.136 132.757 596.47 151.09 590 169.5C 588.733 173.869 586.567 177.703 583.5 181C 574.602 182.609 565.602 182.942 556.5 182C 552.624 179.612 550.624 176.112 550.5 171.5C 557.1 151.366 564.1 131.366 571.5 111.5C 570 111.167 568.5 110.833 567 110.5C 565.019 110.629 563.353 111.296 562 112.5C 555.109 133.178 547.443 153.511 539 173.5C 535.579 177.458 531.412 180.292 526.5 182C 518.5 182.667 510.5 182.667 502.5 182C 500.522 179.503 500.022 176.669 501 173.5C 508.803 151.756 516.803 130.09 525 108.5C 528.819 103.833 533.319 100.166 538.5 97.5z"
            stroke="none"
            fill={textColor}
            fillRule="nonzero"
            fillOpacity="0.9647059"
          />
        </g>
        <g>
          <path
            d="M627.5 97.5C 637.839 97.3335 648.172 97.5002 658.5 98C 659.718 99.4382 660.385 101.105 660.5 103C 651.748 127.796 642.581 152.962 633 178.5C 631.421 180.041 629.587 181.208 627.5 182C 617.5 182.667 607.5 182.667 597.5 182C 596.02 180.701 595.354 179.034 595.5 177C 603.563 152.702 612.063 128.536 621 104.5C 622.694 101.642 624.861 99.309 627.5 97.5z"
            stroke="none"
            fill={textColor}
            fillRule="nonzero"
            fillOpacity="0.9647059"
          />
        </g>
        <g>
          <path
            d="M672.5 97.5C 682.839 97.3335 693.172 97.5002 703.5 98C 705.444 100.153 705.944 102.653 705 105.5C 702.025 114.094 698.858 122.594 695.5 131C 698.76 131.784 701.927 131.617 705 130.5C 708.274 120.678 711.941 111.011 716 101.5C 717.41 100.213 718.91 99.0458 720.5 98C 730.833 97.3333 741.167 97.3333 751.5 98C 753.444 100.153 753.944 102.653 753 105.5C 749.667 114.833 746.333 124.167 743 133.5C 740.984 135.684 738.817 137.684 736.5 139.5C 738.395 141.867 738.895 144.534 738 147.5C 734.47 156.423 731.137 165.423 728 174.5C 727.117 177.102 725.617 179.269 723.5 181C 717.772 182.123 711.939 182.623 706 182.5C 700.833 182.333 695.667 182.167 690.5 182C 688.556 179.847 688.056 177.347 689 174.5C 691.975 165.906 695.142 157.406 698.5 149C 695.24 148.216 692.073 148.383 689 149.5C 685.726 159.322 682.059 168.989 678 178.5C 676.59 179.787 675.09 180.954 673.5 182C 663.167 182.667 652.833 182.667 642.5 182C 640.522 179.503 640.022 176.669 641 173.5C 644.295 162.773 648.462 152.44 653.5 142.5C 655.028 141.139 656.695 139.972 658.5 139C 656.496 136.159 655.996 132.993 657 129.5C 660 121.167 663 112.833 666 104.5C 667.694 101.642 669.861 99.309 672.5 97.5z"
            stroke="none"
            fill={textColor}
            fillRule="nonzero"
            fillOpacity="0.9647059"
          />
        </g>
        <g>
          <path
            d="M232.5 101.5C 232.833 101.5 233.167 101.5 233.5 101.5C 234.246 103.343 235.579 104.676 237.5 105.5C 236.224 108.303 236.224 110.97 237.5 113.5C 238.2 116.971 240.2 118.971 243.5 119.5C 254.172 119.314 264.839 118.981 275.5 118.5C 275.508 121.545 275.841 124.545 276.5 127.5C 276.5 128.167 276.5 128.833 276.5 129.5C 275.532 131.607 275.198 133.941 275.5 136.5C 274.566 135.432 274.232 134.099 274.5 132.5C 256.488 132.167 238.488 132.5 220.5 133.5C 219.561 137.765 219.228 142.098 219.5 146.5C 219.167 146.5 218.833 146.5 218.5 146.5C 218.788 140.771 218.454 135.104 217.5 129.5C 218.025 128.808 218.692 128.308 219.5 128C 222.482 127.502 225.482 127.335 228.5 127.5C 235.494 126.704 242.494 125.871 249.5 125C 241.295 124.415 233.295 124.915 225.5 126.5C 222.428 126.817 219.428 126.484 216.5 125.5C 213.466 118.595 209.8 112.095 205.5 106C 166.152 105.6 126.818 106.267 87.5 108C 79.8333 114.333 72.8333 121.333 66.5 129C 63.854 129.497 61.1873 129.664 58.5 129.5C 55.9272 128.445 53.2605 128.278 50.5 129C 53.2066 129.395 55.8733 129.895 58.5 130.5C 61.3965 130.125 64.0632 130.625 66.5 132C 65.5442 135.394 65.2108 138.894 65.5 142.5C 64.7561 139.64 64.0894 136.64 63.5 133.5C 54.1904 132.502 44.8571 132.168 35.5 132.5C 35.5 129.5 35.5 126.5 35.5 123.5C 35.5 122.833 35.5 122.167 35.5 121.5C 36.8195 120.058 38.4862 119.392 40.5 119.5C 45.246 119.888 49.9127 119.888 54.5 119.5C 58.0658 116.3 60.7325 112.634 62.5 108.5C 64.3652 106.487 66.0319 104.154 67.5 101.5C 72.5 101.167 77.5 100.833 82.5 100.5C 132.506 100.435 182.506 100.768 232.5 101.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
            fillOpacity="0.99607843"
          />
        </g>
        <g>
          <path
            d="M306.5 129.5C 306.435 132.428 305.768 135.095 304.5 137.5C 303.699 135.958 303.366 134.292 303.5 132.5C 295.804 132.169 288.138 132.503 280.5 133.5C 279.942 136.127 278.942 138.46 277.5 140.5C 278.3 133.365 279.633 126.365 281.5 119.5C 283.026 118.895 284.026 117.729 284.5 116C 292.853 115.168 301.187 115.335 309.5 116.5C 307.398 120.575 306.398 124.908 306.5 129.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
            fillOpacity="0.99607843"
          />
        </g>
        <g>
          <path
            d="M35.5 132.5C 44.8571 132.168 54.1904 132.502 63.5 133.5C 64.0894 136.64 64.7561 139.64 65.5 142.5C 66.3108 153.811 66.9775 165.144 67.5 176.5C 117.997 177.499 168.664 177.832 219.5 177.5C 219.5 167.167 219.5 156.833 219.5 146.5C 219.228 142.098 219.561 137.765 220.5 133.5C 238.488 132.5 256.488 132.167 274.5 132.5C 274.232 134.099 274.566 135.432 275.5 136.5C 275.334 141.179 275.501 145.845 276 150.5C 277.079 147.937 277.579 145.271 277.5 142.5C 277.5 141.833 277.5 141.167 277.5 140.5C 278.942 138.46 279.942 136.127 280.5 133.5C 288.138 132.503 295.804 132.169 303.5 132.5C 303.366 134.292 303.699 135.958 304.5 137.5C 302.458 151.985 301.124 166.485 300.5 181C 212.501 181.5 124.501 181.667 36.5 181.5C 35.5 181.5 34.5 181.5 33.5 181.5C 31.8967 181.688 30.5634 181.188 29.5 180C 30.0279 176.951 31.0279 174.118 32.5 171.5C 33.1499 171.196 33.8165 170.863 34.5 170.5C 35.4991 157.851 35.8324 145.184 35.5 132.5z"
            stroke="none"
            fill={carColor}
            fillRule="nonzero"
            fillOpacity="0.99607843"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
