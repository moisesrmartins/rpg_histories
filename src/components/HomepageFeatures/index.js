import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Infinite Word",
    Svg: require("@site/static/img/infinite_logo.svg").default,
    description: (
      <>
        Welcome to the Infinite Word, here you will find several stories and
        texts, everything is made for fun, WELCOME and ENJOY.
      </>
    ),
  },
  {
    title: "The Words",
    Svg: require("@site/static/img/words.svg").default,
    description: (
      <>
        Accessing <code>The Words</code> tab you will find texts and images of
        stories made by me and my friends.
      </>
    ),
  },
  {
    title: "Updates",
    Svg: require("@site/static/img/updates.svg").default,
    description: (
      <>
        Accessing the <code>Updates</code> tab, you will find the changes made
        on the site, everything that has been updated will be there.
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
