import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Easy",
    Svg: require("@site/static/img/easy-to-easy.svg").default,
    description: (
      <>EasyORM was designed to enable quick database setup and easy querying</>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        EasyORM was designed to let you focus on your business logic while we
        take care of the persistence layer
      </>
    ),
  },
  {
    title: "Documentation",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        EasyORM is easy to understand and use for your application with detailed
        documentation
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
