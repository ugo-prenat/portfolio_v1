import React, { useEffect } from 'react';
import Aos from 'aos';

import css from '../../styles/projects.module.css';

export default function ProjectCard(props) {
  const project = props.data;

  useEffect(() => Aos.init({ duration: 400 }));

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`${100 * props.index}`}
      data-aos-once={true}
      data-aos-offset={-10}
      className={`${css.project} ${project.projectLink && css.hasProjectLink}`}
    >
      <a
        href={project.projectLink}
        target="_blank"
        rel="noreferrer"
        className={css.projectLinkContainer}
      >
        <div className={css.cardTop}>
          <div className={css.projectHeader}>
            <img
              className={css.logo}
              src={project.logo}
              alt={`${project.title} logo`}
            />

            <div className={css.titleAndLaunch}>
              <p className={css.title}>{project.title}</p>

              {project.launchDate ? (
                <div className={css.projectStatus}>
                  <svg className={css.rocket} viewBox="0 0 256 256">
                    <path
                      d="M101.6 187.1c-5.4 16.4-18.4 28.4-37.5 34.8a91.8 91.8 0 0 1-26.6 4.6a8 8 0 0 1-8-8a91.8 91.8 0 0 1 4.6-26.6c6.4-19.1 18.4-32.1 34.8-37.5a8 8 0 1 1 5.1 15.1c-19.7 6.6-25.8 27.9-27.7 40.2c12.3-1.9 33.6-8 40.2-27.7a8 8 0 0 1 15.1 5.1zm99.9-76.1l-8.9 9v61.3a16.2 16.2 0 0 1-4.7 11.3l-32.4 32.3a15.6 15.6 0 0 1-11.3 4.7a14.7 14.7 0 0 1-4.6-.7a16 16 0 0 1-11.1-12.2l-7.9-39.5l-41.8-41.8l-39.5-7.9a16 16 0 0 1-12.2-11.1a15.9 15.9 0 0 1 4-15.9l32.3-32.4a16.2 16.2 0 0 1 11.3-4.7H136l9-8.9c28.6-28.6 57.9-27.8 69.2-26.1a15.7 15.7 0 0 1 13.4 13.4c1.7 11.3 2.5 40.6-26.1 69.2zm-159.1.8l37.7 7.5L120 79.4H74.7zM94.1 128l33.9 33.9l62.2-62.2c7.8-7.8 25.6-28.8 21.6-55.5c-26.7-4-47.7 13.8-55.5 21.6zm82.5 8l-39.9 39.9l7.5 37.7l32.4-32.3z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p>{project.launchDate}</p>
                </div>
              ) : (
                <div className={css.projectStatus}>
                  <svg
                    className={css.tools}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="tools"
                    role="img"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M225.1 378.1c-5.346-9.277-17.67-11.48-25.24-3.91l-91.57 91.55c-15.01 15-38.9 18.79-56.54 6.984c-23.71-15.88-26.04-48.76-6.967-67.97l134.8-134.8c6.242-6.238 6.229-16.36-.0313-22.59C173.3 241.2 163.2 241.2 156.1 247.4l-134.7 134.7c-29.62 29.62-29.62 77.86 0 107.5c16.64 16.78 39.93 24.7 63.89 21.57c17.43-2.273 33.27-11.36 45.7-23.79l90.54-90.52c4.883-4.883 6.32-12.52 2.857-18.49C225.2 378.3 225.1 378.2 225.1 378.1zM259.8 88.66c4.697-7.82 10.35-15.14 16.98-21.8c22.75-22.62 52.62-34.87 83.87-34.87c6.875 0 13.75 .625 20.62 1.75l-69.25 69.48l13.75 82.98l83.12 13.75l69.37-69.23c6.625 38.12-5.373 76.73-33.12 104.5c-4.432 4.434-9.207 8.426-14.23 12c-7.775 5.527-8.24 16.98-1.475 23.7c5.625 5.594 14.65 6.258 21.07 1.602c6.045-4.383 11.82-9.293 17.26-14.81c37.75-37.74 52.62-91.35 39.62-143.2c-2.25-9.492-9.625-16.99-19.12-19.62s-19.62 0-26.62 7l-63.87 63.86L353.5 158.3l-7.373-44.12l63.87-63.98c6.873-6.871 9.623-16.99 6.998-26.49c-2.623-9.496-10.25-16.74-19.75-19.12c-51.62-12.88-105.2 1.875-143.1 39.61c-8.27 8.348-15.16 17.61-20.98 27.39c-3.791 6.367-3.049 14.45 2.191 19.68C242.5 98.44 254.6 97.3 259.8 88.66zM63.1 431.9c0 8.746 7.25 15.1 16 15.1s15.1-7.25 15.1-15.1s-7.248-15.1-15.1-15.1S63.1 423.1 63.1 431.9zM502.6 389.4l-124.4-124.5c-15.62-15.62-36.12-23.37-56.62-23.37c-15.38 0-30.88 4.371-44.12 13.25L191.1 169.3l.002-73.35l-127.1-95.99L0 63.1l96 127.1l73.37-.0289l85.5 85.48c-20.62 31.12-17.12 73.23 10.25 100.7l124.5 124.5C395.7 508.8 403.1 512 412.2 512c8.123 0 16.37-3.125 22.5-9.375l67.1-67.98C515.1 422.1 515.1 401.9 502.6 389.4zM159.1 159.1h-47.1L42.25 66.98L66.1 42.24l92.1 69.73V159.1zM412.1 479.9l-124.4-124.5c-9.123-9.125-14.12-21.12-14.12-33.87c0-12.88 5-24.87 14.12-33.87c9-9.125 21-14.12 33.88-14.12c12.75 0 24.88 4.996 33.87 14.12l124.5 124.3L412.1 479.9z"
                    />
                  </svg>
                  <p>En développement</p>
                </div>
              )}
            </div>
          </div>

          <p className={css.description}>{project.description}</p>
        </div>

        <div className={css.cardBottom}>
          <div
            className={css.technologies}
            onClick={() => {
              if (project.projectLink)
                window.open(project.projectLink, '_blank');
            }}
          >
            {project.technologies.map((technology, index) => {
              return (
                <p className={css.technology} key={index}>
                  {technology}
                </p>
              );
            })}
          </div>

          <div className={css.links}>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66a1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22a2.75 2.75 0 0 1-.41-2.06a3.71 3.71 0 0 0 0-1.41a7.65 7.65 0 0 0-2.09 1.09a1 1 0 0 1-.84.15a10.15 10.15 0 0 0-5.52 0a1 1 0 0 1-.84-.15a7.4 7.4 0 0 0-2.11-1.09a3.52 3.52 0 0 0 0 1.41a2.84 2.84 0 0 1-.43 2.08a4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66a1 1 0 0 1-.21 1a2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09a3.9 3.9 0 0 0-1.16-.88a1 1 0 1 1 .5-1.94a4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33a.85.85 0 0 0 .13-.62a5.69 5.69 0 0 1 .33-3.21a1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57a5.71 5.71 0 0 1 .33 3.22a.75.75 0 0 0 .11.57a6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"
                  />
                </svg>
              </a>
            )}
            {project.projectLink && (
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                {/* <p>{ project.projectLink.replace(/(^\w+:|^)\/\//, '') }</p> */}
                <svg
                  className={css.projectLinkSvg}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm10-3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L19 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" />
                  </g>
                </svg>
              </a>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
