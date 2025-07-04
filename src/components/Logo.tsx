interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      width="70"
      height="34"
      viewBox="0 0 70 34"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16.2872 12.4854C16.1502 12.4854 16.0311 12.5336 15.9301 12.6302C15.8357 12.729 15.7886 12.847 15.7886 12.984V23.2966C15.7886 23.4336 15.8357 23.5526 15.9301 23.6537C16.0311 23.748 16.1502 23.7952 16.2872 23.7952C16.422 23.7952 16.5365 23.748 16.6308 23.6537C16.7319 23.5526 16.7824 23.4336 16.7824 23.2966V12.984C16.7824 12.847 16.7319 12.729 16.6308 12.6302C16.5365 12.5336 16.422 12.4854 16.2872 12.4854ZM26.3067 14.965V12.984C26.3067 12.847 26.2562 12.729 26.1551 12.6302C26.0608 12.5336 25.9451 12.4854 25.8081 12.4854C25.6733 12.4854 25.5576 12.5336 25.4611 12.6302C25.3622 12.729 25.3128 12.847 25.3128 12.984V14.965C25.3128 15.7061 25.0512 16.3373 24.5278 16.8584C24.0023 17.3839 23.3723 17.6467 22.6378 17.6467H18.6657C18.531 17.6467 18.4131 17.695 18.312 17.7916C18.2176 17.8859 18.1705 18.0005 18.1705 18.1352C18.1705 18.279 18.2176 18.398 18.312 18.4923C18.4131 18.5867 18.531 18.6338 18.6657 18.6338H22.6378C23.3723 18.6338 24.0023 18.8977 24.5278 19.4256C25.0512 19.9466 25.3128 20.5766 25.3128 21.3156V23.2966C25.3128 23.4336 25.3622 23.5526 25.4611 23.6537C25.5576 23.748 25.6733 23.7952 25.8081 23.7952C25.9451 23.7952 26.0608 23.748 26.1551 23.6537C26.2562 23.5526 26.3067 23.4336 26.3067 23.2966V21.3156C26.3067 20.6463 26.1382 20.0275 25.8013 19.4592C25.4757 18.9022 25.0343 18.4609 24.4773 18.1352C25.0343 17.8163 25.4757 17.3783 25.8013 16.8213C26.1382 16.2463 26.3067 15.6275 26.3067 14.965ZM37.2493 17.6467H28.7223V16.1542C28.7223 15.4153 28.9828 14.7853 29.5039 14.2642C30.0317 13.7364 30.6629 13.4725 31.3973 13.4725H34.5777C35.3121 13.4725 35.9421 13.7364 36.4677 14.2642C36.9888 14.7853 37.2493 15.4153 37.2493 16.1542V17.6467ZM34.5777 12.4854H31.3973C30.3843 12.4854 29.5196 12.8436 28.8031 13.5601C28.0867 14.2788 27.7284 15.1435 27.7284 16.1542V23.2966C27.7284 23.4336 27.7756 23.5526 27.8699 23.6537C27.971 23.748 28.0889 23.7952 28.2237 23.7952C28.3607 23.7952 28.4763 23.748 28.5707 23.6537C28.6718 23.5526 28.7223 23.4336 28.7223 23.2966V18.6338H37.2493V23.2966C37.2493 23.4336 37.2998 23.5526 37.4009 23.6537C37.4953 23.748 37.6109 23.7952 37.7479 23.7952C37.8849 23.7952 38.0006 23.748 38.0949 23.6537C38.196 23.5526 38.2465 23.4336 38.2465 23.2966V16.1542C38.2465 15.1435 37.8883 14.2788 37.1718 13.5601C36.4531 12.8436 35.5884 12.4854 34.5777 12.4854ZM49.6878 23.7952H40.1635C40.0265 23.7952 39.9086 23.748 39.8098 23.6537C39.7132 23.5526 39.6649 23.4336 39.6649 23.2966V12.984C39.6649 12.847 39.7132 12.729 39.8098 12.6302C39.9086 12.5336 40.0265 12.4854 40.1635 12.4854C40.3005 12.4854 40.4162 12.5336 40.5105 12.6302C40.6116 12.729 40.6621 12.847 40.6621 12.984V22.8013H49.6878C49.8225 22.8013 49.9371 22.8519 50.0314 22.9529C50.1325 23.0473 50.183 23.1618 50.183 23.2966C50.183 23.4336 50.1325 23.5526 50.0314 23.6537C49.9371 23.748 49.8225 23.7952 49.6878 23.7952ZM65.2325 18.1352C66.1691 17.531 66.6374 16.6731 66.6374 15.5613C66.6374 14.7145 66.3353 13.9891 65.7311 13.3849C65.1314 12.7852 64.4082 12.4854 63.5615 12.4854H56.6145C56.4797 12.4854 56.3618 12.5336 56.2608 12.6302C56.1664 12.729 56.1193 12.847 56.1193 12.984C56.1193 13.121 56.1664 13.2366 56.2608 13.331C56.3618 13.4253 56.4797 13.4725 56.6145 13.4725H63.5615C64.1364 13.4725 64.6249 13.6769 65.027 14.0856C65.4358 14.4944 65.6401 14.9863 65.6401 15.5613C65.6401 16.1363 65.4358 16.627 65.027 17.0335C64.6249 17.4423 64.1364 17.6467 63.5615 17.6467H56.6145C56.4797 17.6467 56.3618 17.695 56.2608 17.7916C56.1664 17.8859 56.1193 18.0005 56.1193 18.1352C56.1193 18.279 56.1664 18.398 56.2608 18.4923C56.3618 18.5867 56.4797 18.6338 56.6145 18.6338H63.5615C64.1364 18.6338 64.6249 18.8382 65.027 19.247C65.4358 19.6558 65.6401 20.1477 65.6401 20.7226C65.6401 21.2954 65.4358 21.7861 65.027 22.1949C64.6249 22.5992 64.1364 22.8013 63.5615 22.8013H56.6145C56.4797 22.8013 56.3618 22.8519 56.2608 22.9529C56.1664 23.0473 56.1193 23.1618 56.1193 23.2966C56.1193 23.4336 56.1664 23.5526 56.2608 23.6537C56.3618 23.748 56.4797 23.7952 56.6145 23.7952H63.5615C64.4082 23.7952 65.1314 23.4931 65.7311 22.8889C66.3353 22.2915 66.6374 21.5694 66.6374 20.7226C66.6374 19.6086 66.1691 18.7461 65.2325 18.1352ZM68.5544 23.7952C68.4174 23.7952 68.2994 23.748 68.2006 23.6537C68.104 23.5526 68.0557 23.4336 68.0557 23.2966C68.0557 23.1618 68.104 23.0473 68.2006 22.9529C68.2994 22.8519 68.4174 22.8013 68.5544 22.8013C68.6914 22.8013 68.807 22.8519 68.9014 22.9529C69.0024 23.0473 69.053 23.1618 69.053 23.2966C69.053 23.4336 69.0024 23.5526 68.9014 23.6537C68.807 23.748 68.6914 23.7952 68.5544 23.7952Z" />
      <path d="M29.9891 24.992C28.2359 27.6804 25.5807 29.6948 22.5285 30.7328C19.4763 31.7707 16.1665 31.7698 13.1148 30.7302C10.0632 29.6907 7.44114 27.6708 5.65731 24.9855C3.87348 22.3001 3.02806 19.1001 3.25281 15.8841C3.47756 12.668 4.75985 9.61672 6.89984 7.20557C9.03984 4.79442 11.9173 3.15891 15.0839 2.5539C18.2505 1.94889 21.5283 2.40837 24.4064 3.86074C27.2846 5.31311 29.7428 7.67368 30.996 10.5834L29.9845 10.547C28.3904 7.79732 26.5752 6.18231 23.9128 4.83886C21.2505 3.49542 18.2186 3.0704 15.2895 3.63004C12.3604 4.18967 9.69876 5.70252 7.71926 7.93283C5.73976 10.1631 4.55364 12.9856 4.34575 15.9604C4.13786 18.9352 4.91987 21.8953 6.56991 24.3792C8.21996 26.8632 10.6454 28.7315 13.4681 29.6931C16.2909 30.6547 19.3525 30.6556 22.1758 29.6955C24.999 28.7354 27.0686 27.3046 29.0004 24.9591L29.9891 24.992Z" />
      <path d="M24.7599 25.1862C23.2133 26.6705 21.0247 27.5751 18.8229 27.8372C16.6212 28.0994 14.3917 27.687 12.4294 26.6545C10.4672 25.6219 8.86465 24.018 7.83381 22.0549C6.80298 20.0918 6.39243 17.8619 6.65648 15.6604C6.92054 13.4589 7.84676 11.3894 9.3126 9.72568C10.7784 8.062 12.7148 6.88255 14.8656 6.34336C17.0164 5.80417 19.2801 5.93065 21.3575 6.70606C23.4348 7.48148 25.321 8.87472 26.4991 10.6859L25.6779 10.6586C24.3052 9.00954 22.9918 8.1927 21.0703 7.47544C19.1487 6.75818 17.0547 6.64118 15.0653 7.13994C13.0758 7.63869 11.2847 8.72968 9.92877 10.2686C8.57287 11.8075 7.71612 13.7218 7.47187 15.7582C7.22761 17.7946 7.60737 19.8572 8.56089 21.6731C9.51442 23.489 10.9968 24.9726 12.8119 25.9277C14.6269 26.8828 16.6892 27.2643 18.7258 27.0218C20.7625 26.7793 21.8776 26.289 23.6003 25.1664L24.7599 25.1862Z" />
    </svg>
  );
}
