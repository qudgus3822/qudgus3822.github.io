import React from "react";
import { content } from "../../types";
const AccordionItem = ({
  title,
  children,
  index,
  currentTab,
  accodionClickHandler,
}: {
  title: string;
  children: content[];
  index: number;
  currentTab: number;
  accodionClickHandler: (index: number) => void;
}) => {
  return (
    <div className="accordion-item">
      <h5 className="accordion-header m-0" id="headingProjectFour">
        <button
          onClick={(e) => {
            accodionClickHandler(index);
          }}
          className={`accordion-button fw-semibold ${
            currentTab !== index ? "collapsed" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseProjectFour"
          aria-expanded="false"
          aria-controls="collapseProjectFour"
        >
          {title}
        </button>
      </h5>
      <div
        id="collapseProjectFour"
        className={`accordion-collapse collapse ${
          currentTab === index ? "show" : ""
        }`}
        aria-labelledby="headingProjectFour"
        data-bs-parent="#accordionFront"
      >
        <div className="accordion-body">
          <ul>
            {children &&
              children.length > 0 &&
              children.map((child, index) => {
                return (
                  <li key={index}>
                    {child.link ? (
                      <a href={child.link}>{child.content}</a>
                    ) : (
                      child.content
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
