// src/components/VideoCard.tsx
import type { Project } from "../types";

const Placeholder = () => (
  <div className="flex items-center justify-center flex-col w-full h-full bg-black rounded-lg text-paragraph">
    <svg style={{ display: "none" }}>
      <symbol
        id="play-icon"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_177_20)">
          <path
            d="M3.185 41.9252L35.23 9.88021C34.8725 9.78271 34.515 9.75021 34.125 9.75021H4.875C2.1775 9.75021 0 11.9277 0 14.6252V37.3752C0 39.4877 1.3325 41.2752 3.185 41.9252ZM49.66 13.1627L39 18.4927V15.298L51.5255 2.77246C51.8215 2.46598 51.9853 2.0555 51.9816 1.62943C51.9779 1.20336 51.807 0.795794 51.5057 0.494506C51.2044 0.193218 50.7968 0.0223185 50.3708 0.0186161C49.9447 0.0149137 49.5342 0.178705 49.2278 0.474711L0.47775 49.2247C0.181743 49.5312 0.0179523 49.9417 0.0216547 50.3677C0.0253571 50.7938 0.196257 51.2014 0.497545 51.5027C0.798833 51.804 1.2064 51.9749 1.63247 51.9786C2.05854 51.9823 2.46902 51.8185 2.7755 51.5225L12.0478 42.2502H34.125C36.8225 42.2502 39 40.0727 39 37.3752V33.5077L49.66 38.8377C49.9054 38.9559 50.176 39.0117 50.4481 39.0004C50.7202 38.9891 50.9853 38.9109 51.22 38.7727C51.7075 38.4477 52 37.9277 52 37.3752V14.6252C51.9956 14.346 51.922 14.0722 51.7859 13.8283C51.6498 13.5844 51.4554 13.3781 51.22 13.2277C50.9881 13.082 50.7222 12.9994 50.4486 12.988C50.175 12.9766 49.9032 13.0368 49.66 13.1627Z"
            fill="#E8E8E8"
            fillOpacity="0.5"
          />
        </g>
      </symbol>
    </svg>
    <svg width="48" height="48">
      <use xlinkHref="#play-icon"></use>
    </svg>
    <p className="text-sm text-center w-8/12 mt-2">
      This video has not been uploaded yet.
    </p>
  </div>
);

interface VideoCardProps {
  project: Project;
}

export default function VideoCard({ project }: VideoCardProps) {
  const { embedUrl, title, format } = project;

  const formatClasses: Record<Project["format"], string> = {
    widescreen:
      "flex-shrink-0 w-[80%] sm:w-[45%] lg:w-[32%] min-w-[300px] aspect-video",
    portrait:
      "flex-shrink-0 w-[45%] sm:w-[22%] lg:w-[18%] min-w-[180px] aspect-[9/16]",
    square:
      "flex-shrink-0 w-[45%] sm:w-[22%] lg:w-[18%] min-w-[200px] aspect-square",
  };

  return (
    <div className={formatClasses[format]}>
      {embedUrl ? (
        <iframe
          className="rounded-lg w-full h-full"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
