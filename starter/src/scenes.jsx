import React from 'react';

const layouts = {
  desktop: {
    size: [1512, 982],
    layers: [
      ['left-wall', [0, -250, 252, 936], [-868.277, 0, 1119.73, 935.706]],
      ['right-wall', [1312, -243, 200, 936], [0, 0, 1176.07, 935.713]],
      ['sand', [0, 633, 1512, 353], [-459, 0, 2480.28, 488.693]],
    ],
  },
  mobile: {
    size: [393, 852],
    layers: [
      ['left-wall', [-11, -46, 140, 792], [-482.376, 0, 622.07, 791.752]],
      ['right-wall', [286, -37, 107, 805], [0, 0, 629.196, 804.753]],
      ['sand', [0, 591, 393, 265], [-119.304, 0, 644.677, 366.866]],
    ],
  },
};

function rectStyle([left, top, width, height], [parentWidth, parentHeight]) {
  return {
    left: `${left / parentWidth * 100}%`,
    top: `${top / parentHeight * 100}%`,
    width: `${width / parentWidth * 100}%`,
    height: `${height / parentHeight * 100}%`,
  };
}

export function Underwater({ opening = false }) {
  return (
    <div className={opening ? "scene underwater underwater-opening" : "scene underwater"} aria-hidden="true">
      {Object.entries(layouts).map(([device, { size, layers }]) => (
        <div key={device} className={`scene ${device}-art`}>
          {layers.map(([name, box, image]) => (
            <div key={name} className="art-layer" style={rectStyle(box, size)}>
              <img
                alt=""
                src={`${import.meta.env.BASE_URL}assets/${device}-lens-${name}.svg`}
                style={rectStyle(image, box.slice(2))}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Sunset() {
  return <div className="scene sunset" aria-hidden="true" />;
}

export function OpeningScene() {
  return (
    <div className="scene opening">
      <Underwater opening />
      <img className="coral coral-left" src={`${import.meta.env.BASE_URL}assets/coral-left.png`} alt="" />
      <img className="coral coral-right" src={`${import.meta.env.BASE_URL}assets/coral-right.png`} alt="" />
      <div className="opening-copy">
        <h1>The people behind the projects</h1>
        <p>From first hackathons to unforgettable memories, hear how Hack the North has shaped experiences, sparked friendships, and inspired hackers to keep building.</p>
      </div>
    </div>
  );
}
