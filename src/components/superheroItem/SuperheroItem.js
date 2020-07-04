import React, { useState } from "react";
import styles from "./superheroItem.module.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import ImageComponent from "../ImageComponent/ImageComponent";

export default function SuperheroItem({ superhero }) {
  const [isModalOpen, setisModalOpen] = useState(false);

  //Generate random animation delay between 300 and 600
  let animationDelay = Math.floor(Math.random() * 4 + 3) * 100;

  const toggleModal = () => {
    setisModalOpen((prev) => !prev);
  };

  return (
    <div
      className={styles.superheroItem}
      data-aos="zoom-in"
      data-aos-delay={animationDelay}
    >
      <ImageComponent imageURL={superhero.image.url} />
      <div className={styles.detailsContainer}>
        <h2>{superhero.name}</h2>

        {/* Button to open details modal */}
        <div className={styles.detailsButton} onClick={() => toggleModal()}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
      </div>

      <DetailsModal
        hero={superhero}
        isOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </div>
  );
}
