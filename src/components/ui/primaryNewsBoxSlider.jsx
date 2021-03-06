import React from "react";
import Flickity from "react-flickity-component";
import PropTypes from "prop-types";
import "./primaryNewsBoxSlider.css";
import {LABEL_STORIES} from "../../constants";

function PrimaryNewsBoxSlider(props) {
  const { nbrOfNews, layout } = props;

  const styleContent = {
    transform: {
      transformOrigin: "center 50% 0px",
      transform: "matrix(1, 0, 0, 1, 0, 0)"
    },
    link: {
      position: "absolute; left: 0%"
    }
  };

  const createNewsItem = () => {
    const items = [];
    for (let r = 0; r < nbrOfNews; r++) {
      items.push(
        <a
          key={`${r}`}
          className="link-reset feed-item carousel-cell news-feed-item"
          href={`${layout.qHyperCube.qDataPages[0].qMatrix[r][4].qText}`}
          style={styleContent.link}
        >
          <div
            data-3dhover=""
            className="feed-item-info"
            style={{
              backgroundImage: `url('${
                layout.qHyperCube.qDataPages[0].qMatrix[r][5].qText
              }')`
            }}
            data-flickity-bg-lazyload={`${
              layout.qHyperCube.qDataPages[0].qMatrix[r][5].qText
            }`}
          >
            <span className="story-preview-title">
              {layout.qHyperCube.qDataPages[0].qMatrix[r][2].qText}
            </span>
            <aside className="story-preview-data">
              {layout.qHyperCube.qDataPages[0].qMatrix[r][1].qText}
            </aside>
          </div>
        </a>
      );
    }
    return items;
  };

  return (
    <div
      style={styleContent.transform}
    >
      <aside className="info-label-slider">{LABEL_STORIES}</aside>
      <div id="feed">
        <Flickity>{createNewsItem()}</Flickity>
      </div>
    </div>
  );
}

PrimaryNewsBoxSlider.propTypes = {
  layout: PropTypes.object.isRequired,
  nbrOfNews: PropTypes.number
};

PrimaryNewsBoxSlider.defaultProps = {
  nbrOfNews: 10
};

export default PrimaryNewsBoxSlider;
