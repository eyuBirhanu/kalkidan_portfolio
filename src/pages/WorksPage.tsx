// src/pages/WorksPage.tsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import VideoCard from "../components/VideoCard";
// import CtaIllustration from "../components/CtaIllustration";
import useSetTitle from "../hooks/useSetTitle";
import type { Project, ProjectCategory } from "../types";

const allProjects: Project[] = projectsData as Project[];

// --- Data Preparation ---

// Create a list of categories that actually have projects
const categoriesWithContent: (ProjectCategory | "All")[] = ["All"];
const projectsByCategory = allProjects.reduce((acc, project) => {
  if (!acc[project.category]) {
    acc[project.category] = [];
    // Add category to our list only if it's not already there
    if (!categoriesWithContent.includes(project.category)) {
      categoriesWithContent.push(project.category);
    }
  }
  acc[project.category].push(project);
  return acc;
}, {} as Record<ProjectCategory, Project[]>);

// Dynamically create a unique list of clients from the data
const clients = [
  ...new Set(allProjects.map((p) => p.client).filter(Boolean)),
] as string[];

// --- Component ---

export default function WorksPage() {
  useSetTitle("My Works | Kalkidan Birhanu Portfolio");

  // State to manage which filter type and value is active
  const [activeFilter, setActiveFilter] = useState({
    type: "all",
    value: "All",
  });

  const handleFilterClick = (
    type: "all" | "category" | "client",
    value: string
  ) => {
    setActiveFilter({ type, value });
  };

  // Memoized logic to get the projects for the currently active filter
  const filteredProjects = useMemo(() => {
    const { type, value } = activeFilter;
    if (type === "category") {
      return allProjects.filter((p) => p.category === value);
    }
    if (type === "client") {
      return allProjects.filter((p) => p.client === value);
    }
    return []; // Return empty for 'all' as it's handled separately
  }, [activeFilter]);

  // Define the classes for our two different layouts
  const scrollContainerClasses = "flex items-stretch gap-4 overflow-x-auto p-4";
  const gridLayoutClass = "grid grid-cols-responsive gap-4";
  const singleItemScrollContainerClasses = "max-w-xl";
  return (
    <>
      <section className="hero works-hero relative flex items-center justify-center top-0 z-0 w-screen h-[60vh] bg-work-mobile-hero sm:bg-work-desktop-hero bg-cover bg-center">
        <div className="flex items-center justify-center gap-4 flex-col w-11/12 sm:w-9/12 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl  text-primary-white font-Orbitron font-semibold sm:w-11/12">
            Showcasing My <span className="text-accent-color">Creations</span>
          </h1>
          <p className="sm:w-8/12">
            My work ranges from captivating films to impactful commercials,
            showcasing my passion for visual storytelling. Join me on this
            journey, where every frame tells a unique story.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center font-Lato pb-24">
        <div className="w-11/12 my-6 flex flex-col gap-8">
          {/* --- FILTER BUTTONS SECTION --- */}
          <div className="flex flex-col gap-4">
            {/* CATEGORY FILTERS */}
            <div className="works card font-Oxanium text-base sm:text-lg flex gap-4 xl:overflow-x-visible overflow-x-scroll p-2">
              {categoriesWithContent.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    handleFilterClick(
                      category === "All" ? "all" : "category",
                      category
                    )
                  }
                  className={`all-filters text-nowrap px-6 py-2 rounded-lg transition-colors ${
                    activeFilter.value === category
                      ? "bg-white/90 text-light-black font-semibold"
                      : "bg-light-black text-primary-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* CLIENT FILTERS (only shown if there are clients) */}
            {clients.length > 0 && (
              <div className="flex items-center gap-4 border-t border-white/10 pt-4 flex-wrap">
                <p className="font-Oxanium text-base sm:text-lg text-paragraph">
                  Filter by Client:
                </p>
                <div className="flex gap-4 flex-wrap">
                  {clients.map((client) => (
                    <button
                      key={client}
                      onClick={() => handleFilterClick("client", client)}
                      className={`all-filters text-nowrap px-4 py-1.5 rounded-lg transition-colors text-sm sm:text-base ${
                        activeFilter.value === client
                          ? "bg-accent-color/90 text-black font-semibold"
                          : "bg-light-black text-primary-white hover:bg-white/10"
                      }`}
                    >
                      {client}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* --- VIDEO DISPLAY SECTION --- */}
          <div className="flex flex-col gap-12 min-h-[300px]">
            {activeFilter.type === "all" &&
              // RENDER SCROLLING "FILMSTRIPS" FOR "ALL" VIEW
              Object.entries(projectsByCategory).map(
                ([category, projectList]) => (
                  <div key={category} className="flex flex-col gap-2">
                    <h2 className="ps-3 text-lg lg:text-2xl font-Oxanium text-primary-white">
                      {category}
                    </h2>
                    <div
                      className={`${scrollContainerClasses} ${
                        projectList.length === 1
                          ? singleItemScrollContainerClasses
                          : ""
                      }`}
                    >
                      {projectList.map((p) => (
                        <VideoCard key={p.id} project={p} />
                      ))}
                    </div>
                  </div>
                )
              )}

            {activeFilter.type === "category" &&
              // RENDER RESPONSIVE GRID FOR CATEGORY FILTER
              (filteredProjects.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <h2 className="ps-3 text-lg lg:text-2xl font-Oxanium text-primary-white">
                    {activeFilter.value}
                  </h2>
                  <div className={gridLayoutClass}>
                    {filteredProjects.map((p) => (
                      <VideoCard key={p.id} project={p} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  No videos found in this category.
                </div>
              ))}

            {activeFilter.type === "client" &&
              // RENDER SCROLLING "FILMSTRIP" FOR CLIENT FILTER
              (filteredProjects.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <h2 className="ps-3 text-lg lg:text-2xl font-Oxanium text-primary-white">
                    Work for:{" "}
                    <span className="text-accent-color">
                      {activeFilter.value}
                    </span>
                  </h2>
                  <div
                    className={`${scrollContainerClasses} ${
                      filteredProjects.length === 1
                        ? singleItemScrollContainerClasses
                        : ""
                    }`}
                  >
                    {filteredProjects.map((p) => (
                      <VideoCard key={p.id} project={p} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  No videos found for this client.
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex items-center justify-center pt-4 pb-16 h-fit">
        <div className="w-11/12 flex flex-col sm:items-center lg:flex-row-reverse gap-8 lg:justify-center lg:gap-36">
          <div className="flex items-center justify-center">
            <svg
              width="339"
              height="205"
              viewBox="0 0 339 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_54_29)">
                <path
                  d="M339 159.694C339.007 161.06 338.471 162.373 337.509 163.344C336.548 164.315 335.24 164.865 333.873 164.872H108.28C107.603 164.869 106.934 164.732 106.31 164.47C105.686 164.208 105.12 163.825 104.644 163.344C104.167 162.863 103.791 162.294 103.535 161.667C103.279 161.041 103.149 160.37 103.153 159.694V5.6785C103.146 4.31223 103.682 2.99907 104.643 2.02791C105.605 1.05675 106.913 0.507145 108.28 0.5H333.872C334.549 0.503519 335.219 0.640254 335.843 0.902396C336.467 1.16454 337.033 1.54695 337.509 2.02781C337.985 2.50866 338.362 3.07854 338.618 3.70491C338.874 4.33127 339.003 5.00185 339 5.67837V159.694Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M336.339 157.171C336.339 158.499 335.811 159.773 334.871 160.712C333.932 161.651 332.658 162.178 331.329 162.178H110.978C109.65 162.178 108.375 161.651 107.436 160.712C106.496 159.773 105.969 158.499 105.969 157.171V8.27089C105.969 6.9429 106.496 5.66929 107.436 4.73025C108.375 3.79122 109.65 3.26367 110.978 3.26367H331.339C332.666 3.26634 333.938 3.79506 334.875 4.73381C335.812 5.67256 336.339 6.94464 336.339 8.27089V157.171Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M117.745 9.72852H324.797C325.586 9.72852 326.342 10.0416 326.9 10.599C327.457 11.1564 327.771 11.9124 327.771 12.7006V152.164C327.771 152.952 327.457 153.708 326.9 154.266C326.342 154.823 325.586 155.136 324.797 155.136H117.745C116.957 155.136 116.2 154.823 115.643 154.266C115.085 153.708 114.772 152.952 114.772 152.164V12.7006C114.772 11.9124 115.085 11.1564 115.643 10.599C116.2 10.0416 116.957 9.72852 117.745 9.72852Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M120.366 13.0732H321.951C322.74 13.0732 323.496 13.3864 324.054 13.9437C324.611 14.5011 324.925 15.2571 324.925 16.0453V148.067C324.925 148.855 324.611 149.611 324.054 150.168C323.496 150.726 322.74 151.039 321.951 151.039H120.366C119.578 151.039 118.821 150.726 118.264 150.168C117.706 149.611 117.393 148.855 117.393 148.067V16.0453C117.393 15.2571 117.706 14.5011 118.264 13.9437C118.821 13.3864 119.578 13.0732 120.366 13.0732Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M262.699 104.786C261.906 104.786 261.121 104.618 260.396 104.296C260.228 104.221 260.067 104.13 259.916 104.023L245.266 93.7159C244.523 93.1932 243.917 92.4996 243.498 91.6936C243.079 90.8875 242.861 89.9928 242.861 89.0846V75.0278C242.861 74.1197 243.079 73.2249 243.498 72.4189C243.917 71.6128 244.523 70.9192 245.266 70.3965L259.916 60.0893C260.067 59.9828 260.228 59.8915 260.396 59.8167C261.259 59.4332 262.205 59.2713 263.146 59.3458C264.087 59.4202 264.995 59.7286 265.787 60.2429C266.579 60.7572 267.23 61.4612 267.681 62.2908C268.131 63.1204 268.367 64.0493 268.367 64.9933V99.1191C268.367 100.622 267.77 102.063 266.707 103.125C265.644 104.187 264.202 104.784 262.699 104.784L262.699 104.786Z"
                  fill="#3F3D56"
                />
                <path
                  d="M229.911 107.55H189.051C180.715 107.543 173.959 102.157 173.95 95.5114V68.6016C173.959 61.9557 180.715 56.5698 189.051 56.563H230.018C238.295 56.5708 245.002 61.918 245.012 68.5166V95.5114C245.004 102.157 238.248 107.543 229.911 107.55Z"
                  fill="#3F3D56"
                />
                <path
                  d="M302.698 142.55C309.41 142.55 314.85 137.112 314.85 130.404C314.85 123.696 309.41 118.258 302.698 118.258C295.986 118.258 290.546 123.696 290.546 130.404C290.546 137.112 295.986 142.55 302.698 142.55Z"
                  fill="#A9A7BF"
                  fill-opacity="0.5"
                />
                <path
                  d="M309.01 130.186L299.323 124.596C299.285 124.574 299.241 124.562 299.197 124.563C299.153 124.563 299.11 124.574 299.072 124.596C299.033 124.618 299.002 124.65 298.98 124.688C298.957 124.726 298.946 124.77 298.946 124.814V135.993C298.946 136.038 298.957 136.081 298.98 136.119C299.002 136.157 299.033 136.189 299.072 136.211C299.11 136.233 299.153 136.245 299.197 136.245C299.241 136.245 299.285 136.233 299.323 136.211L309.01 130.621C309.048 130.599 309.08 130.568 309.102 130.529C309.124 130.491 309.136 130.448 309.136 130.404C309.136 130.36 309.124 130.316 309.102 130.278C309.08 130.24 309.048 130.208 309.01 130.186L299.323 124.596C299.285 124.574 299.241 124.562 299.197 124.563C299.153 124.563 299.11 124.574 299.072 124.596C299.033 124.618 299.002 124.65 298.98 124.688C298.957 124.726 298.946 124.77 298.946 124.814V135.993C298.946 136.038 298.957 136.081 298.98 136.119C299.002 136.157 299.033 136.189 299.072 136.211C299.11 136.233 299.153 136.245 299.197 136.245C299.241 136.245 299.285 136.233 299.323 136.211L309.01 130.621C309.048 130.599 309.08 130.568 309.102 130.529C309.124 130.491 309.136 130.448 309.136 130.404C309.136 130.36 309.124 130.316 309.102 130.278C309.08 130.24 309.048 130.208 309.01 130.186Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M286.919 178.164C286.927 179.531 286.39 180.844 285.429 181.815C284.467 182.786 283.159 183.336 281.792 183.343H56.1999C55.523 183.339 54.8535 183.202 54.2295 182.94C53.6055 182.678 53.0393 182.296 52.5631 181.815C52.087 181.334 51.7103 180.764 51.4545 180.138C51.1988 179.511 51.0689 178.841 51.0725 178.164V24.1492C51.0653 22.7829 51.6015 21.4698 52.563 20.4986C53.5246 19.5275 54.8327 18.9778 56.1997 18.9707H281.792C282.469 18.9742 283.138 19.111 283.762 19.3731C284.386 19.6352 284.953 20.0177 285.429 20.4985C285.905 20.9794 286.282 21.5492 286.537 22.1756C286.793 22.802 286.923 23.4726 286.919 24.1491V178.164Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M284.258 175.642C284.258 176.97 283.731 178.244 282.791 179.183C281.851 180.122 280.577 180.649 279.249 180.649H58.898C57.5693 180.649 56.295 180.122 55.3555 179.183C54.416 178.244 53.8882 176.97 53.8882 175.642V26.7416C53.8882 25.4136 54.416 24.14 55.3555 23.201C56.295 22.2619 57.5693 21.7344 58.898 21.7344H279.259C280.586 21.737 281.857 22.2658 282.795 23.2045C283.732 24.1433 284.258 25.4153 284.258 26.7416V175.642Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M65.665 28.1992H272.717C273.505 28.1992 274.262 28.5123 274.819 29.0697C275.377 29.6271 275.69 30.3831 275.69 31.1713V170.635C275.69 171.423 275.377 172.179 274.819 172.736C274.262 173.294 273.505 173.607 272.717 173.607H65.665C64.8764 173.607 64.12 173.294 63.5624 172.736C63.0047 172.179 62.6914 171.423 62.6914 170.635V31.1713C62.6914 30.3831 63.0047 29.6271 63.5624 29.0697C64.12 28.5123 64.8764 28.1992 65.665 28.1992Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M68.2859 31.5439H269.871C270.659 31.5439 271.416 31.8571 271.973 32.4145C272.531 32.9718 272.844 33.7278 272.844 34.516V166.538C272.844 167.326 272.531 168.082 271.973 168.639C271.416 169.197 270.659 169.51 269.871 169.51H68.2859C67.4972 169.51 66.7409 169.197 66.1832 168.639C65.6255 168.082 65.3123 167.326 65.3123 166.538V34.516C65.3123 33.7278 65.6255 32.9718 66.1832 32.4145C66.7409 31.8571 67.4972 31.5439 68.2859 31.5439Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M210.619 123.257C209.825 123.256 209.041 123.089 208.316 122.766C208.147 122.692 207.987 122.6 207.836 122.494L193.186 112.187C192.443 111.664 191.836 110.97 191.418 110.164C190.999 109.358 190.78 108.463 190.78 107.555V93.4985C190.78 92.5904 190.999 91.6956 191.418 90.8896C191.836 90.0835 192.443 89.3899 193.186 88.8672L207.836 78.56C207.987 78.4535 208.147 78.3622 208.316 78.2874C209.179 77.9039 210.124 77.742 211.066 77.8165C212.007 77.8909 212.915 78.1993 213.707 78.7136C214.499 79.2279 215.15 79.9319 215.6 80.7615C216.051 81.5911 216.287 82.52 216.287 83.464V117.59C216.287 119.092 215.69 120.533 214.627 121.596C213.564 122.658 212.122 123.255 210.619 123.255L210.619 123.257Z"
                  fill="#3F3D56"
                />
                <path
                  d="M177.831 126.021H136.971C128.634 126.014 121.879 120.628 121.87 113.982V87.0723C121.879 80.4264 128.634 75.0405 136.971 75.0337H177.938C186.215 75.0415 192.922 80.3887 192.932 86.9873V113.982C192.923 120.628 186.167 126.014 177.831 126.021Z"
                  fill="#3F3D56"
                />
                <path
                  d="M250.618 161.02C257.329 161.02 262.77 155.582 262.77 148.874C262.77 142.166 257.329 136.728 250.618 136.728C243.906 136.728 238.465 142.166 238.465 148.874C238.465 155.582 243.906 161.02 250.618 161.02Z"
                  fill="#A9A7BF"
                  fill-opacity="0.65"
                />
                <path
                  d="M256.929 148.657L247.243 143.067C247.205 143.045 247.161 143.033 247.117 143.033C247.073 143.033 247.029 143.045 246.991 143.067C246.953 143.089 246.921 143.121 246.899 143.159C246.877 143.197 246.865 143.24 246.865 143.285V154.464C246.865 154.508 246.877 154.552 246.899 154.59C246.921 154.628 246.953 154.66 246.991 154.682C247.029 154.704 247.073 154.715 247.117 154.715C247.161 154.715 247.205 154.704 247.243 154.682L256.929 149.092C256.968 149.07 256.999 149.038 257.022 149C257.044 148.962 257.055 148.918 257.055 148.874C257.055 148.83 257.044 148.787 257.022 148.749C256.999 148.71 256.968 148.679 256.929 148.657L247.243 143.067C247.205 143.045 247.161 143.033 247.117 143.033C247.073 143.033 247.029 143.045 246.991 143.067C246.953 143.089 246.921 143.121 246.899 143.159C246.877 143.197 246.865 143.24 246.865 143.285V154.464C246.865 154.508 246.877 154.552 246.899 154.59C246.921 154.628 246.953 154.66 246.991 154.682C247.029 154.704 247.073 154.715 247.117 154.715C247.161 154.715 247.205 154.704 247.243 154.682L256.929 149.092C256.968 149.07 256.999 149.038 257.022 149C257.044 148.962 257.055 148.918 257.055 148.874C257.055 148.83 257.044 148.787 257.022 148.749C256.999 148.71 256.968 148.679 256.929 148.657Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M235.847 199.321C235.854 200.688 235.318 202.001 234.357 202.972C233.395 203.943 232.087 204.493 230.72 204.5H5.12747C4.45061 204.496 3.78107 204.36 3.15708 204.098C2.53309 203.835 1.96686 203.453 1.49074 202.972C1.01462 202.491 0.637917 201.921 0.382147 201.295C0.126377 200.669 -0.0034518 199.998 7.05588e-05 199.322V45.3064C-0.00707721 43.9402 0.529097 42.627 1.49064 41.6558C2.45219 40.6847 3.76035 40.1351 5.12733 40.1279H230.72C231.397 40.1314 232.066 40.2682 232.69 40.5303C233.314 40.7925 233.88 41.1749 234.356 41.6557C234.833 42.1366 235.209 42.7065 235.465 43.3328C235.721 43.9592 235.851 44.6298 235.847 45.3063V199.321Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M233.186 196.799C233.186 198.127 232.658 199.401 231.719 200.34C230.779 201.279 229.505 201.806 228.176 201.806H7.8256C6.49692 201.806 5.22265 201.279 4.28313 200.34C3.34361 199.401 2.8158 198.127 2.8158 196.799V47.8988C2.8158 46.5708 3.34361 45.2972 4.28313 44.3582C5.22265 43.4191 6.49692 42.8916 7.8256 42.8916H228.186C229.513 42.8943 230.785 43.423 231.722 44.3617C232.66 45.3005 233.186 46.5726 233.186 47.8988V196.799Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M14.5926 49.3564H221.644C222.433 49.3564 223.189 49.6696 223.747 50.227C224.305 50.7843 224.618 51.5403 224.618 52.3285V191.792C224.618 192.58 224.305 193.336 223.747 193.894C223.189 194.451 222.433 194.764 221.644 194.764H14.5926C13.804 194.764 13.0476 194.451 12.49 193.894C11.9323 193.336 11.619 192.58 11.619 191.792V52.3285C11.619 51.5403 11.9323 50.7843 12.49 50.227C13.0476 49.6696 13.804 49.3564 14.5926 49.3564Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M17.2135 52.7017H218.798C219.189 52.7017 219.575 52.7785 219.936 52.9279C220.297 53.0773 220.625 53.2962 220.901 53.5722C221.177 53.8482 221.396 54.1758 221.546 54.5364C221.695 54.897 221.772 55.2835 221.772 55.6738V187.695C221.772 188.086 221.695 188.472 221.546 188.833C221.396 189.193 221.177 189.521 220.901 189.797C220.625 190.073 220.297 190.292 219.936 190.441C219.575 190.59 219.189 190.667 218.798 190.667H17.2135C16.4248 190.667 15.6685 190.354 15.1108 189.797C14.5532 189.239 14.2399 188.484 14.2399 187.695V55.6738C14.2399 54.8855 14.5532 54.1295 15.1108 53.5722C15.6685 53.0148 16.4248 52.7017 17.2135 52.7017Z"
                  fill="#E8E8E8"
                />
                <path
                  d="M159.546 144.414C158.753 144.413 157.968 144.246 157.244 143.924C157.075 143.849 156.914 143.758 156.764 143.651L142.113 133.344C141.37 132.821 140.764 132.128 140.345 131.321C139.927 130.515 139.708 129.621 139.708 128.713V114.656C139.708 113.748 139.927 112.853 140.345 112.047C140.764 111.241 141.37 110.547 142.113 110.024L156.764 99.7173C156.914 99.6108 157.075 99.5194 157.244 99.4446C158.107 99.0611 159.052 98.8993 159.993 98.9737C160.935 99.0481 161.843 99.3565 162.635 99.8708C163.426 100.385 164.077 101.089 164.528 101.919C164.978 102.748 165.214 103.677 165.214 104.621V138.747C165.214 140.25 164.617 141.691 163.554 142.753C162.491 143.815 161.049 144.412 159.546 144.412L159.546 144.414Z"
                  fill="#FFC800"
                />
                <path
                  d="M126.759 147.178H85.8981C77.5618 147.171 70.8061 141.785 70.7975 135.139V108.23C70.8061 101.584 77.5618 96.1977 85.8981 96.1909H126.865C135.142 96.1987 141.849 101.546 141.859 108.145V135.139C141.851 141.785 135.095 147.171 126.759 147.178Z"
                  fill="#FFC800"
                />
                <path
                  d="M199.545 182.178C206.257 182.178 211.697 176.74 211.697 170.032C211.697 163.324 206.257 157.886 199.545 157.886C192.834 157.886 187.393 163.324 187.393 170.032C187.393 176.74 192.834 182.178 199.545 182.178Z"
                  fill="#3F3D56"
                />
                <path
                  d="M205.857 169.814L196.17 164.224C196.132 164.202 196.089 164.19 196.044 164.19C196 164.19 195.957 164.202 195.919 164.224C195.881 164.246 195.849 164.278 195.827 164.316C195.805 164.354 195.793 164.398 195.793 164.442V175.621C195.793 175.665 195.805 175.709 195.827 175.747C195.849 175.785 195.881 175.817 195.919 175.839C195.957 175.861 196 175.873 196.044 175.873C196.089 175.873 196.132 175.861 196.17 175.839L205.857 170.249C205.895 170.227 205.927 170.196 205.949 170.157C205.971 170.119 205.983 170.076 205.983 170.032C205.983 169.987 205.971 169.944 205.949 169.906C205.927 169.868 205.895 169.836 205.857 169.814L196.17 164.224C196.132 164.202 196.089 164.19 196.044 164.19C196 164.19 195.957 164.202 195.919 164.224C195.881 164.246 195.849 164.278 195.827 164.316C195.805 164.354 195.793 164.398 195.793 164.442V175.621C195.793 175.665 195.805 175.709 195.827 175.747C195.849 175.785 195.881 175.817 195.919 175.839C195.957 175.861 196 175.873 196.044 175.873C196.089 175.873 196.132 175.861 196.17 175.839L205.857 170.249C205.895 170.227 205.927 170.196 205.949 170.157C205.971 170.119 205.983 170.076 205.983 170.032C205.983 169.987 205.971 169.944 205.949 169.906C205.927 169.868 205.895 169.836 205.857 169.814Z"
                  fill="#E8E8E8"
                />
              </g>
              <defs>
                <clipPath id="clip0_54_29">
                  <rect
                    width="339"
                    height="204"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col gap-4 lg:w-5/12 lg:justify-self-start ">
            <h2 className="flex items-center gap-2 font-Oxanium text-white font-semibold text-2xl">
              Hope You like my <span className="text-accent-color">Work</span>
            </h2>
            <p className="w-fit sm:w-96 lg:w-fit">
              I’d love to connect and explore creative possibilities together!
              Whether you have a project in mind, want to collaborate, or share
              ideas, I’m here to help bring your vision to life with compelling
              video content. Feel free to reach out—I’m just a message away!
            </p>
            <Link
              to="/contact"
              className="bg-accent-color text-lg font-Oxanium font-bold w-fit px-10 py-2 text-dark-gray rounded-lg hover:bg-dark-yellow"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
