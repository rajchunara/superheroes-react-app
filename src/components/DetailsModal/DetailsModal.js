import React from "react";

//Import components
import Modal from "react-modal";
import ImageComponent from "../ImageComponent/ImageComponent";
import {
  PowerStats,
  Biography,
  Work,
  Connections,
} from "../HeroDetails/HeroDetails";

//css
import styles from "./detailsModal.module.css";
import "./detailsModalAnimation.css";

Modal.setAppElement("#root");
export default function DetailsModal({ isOpen, hero, toggleModal }) {
  let modalOpenAnimationClass = isOpen ? "modalAnimation" : null;

  console.log(styles[modalOpenAnimationClass]);

  return (
    <div className={`${styles.detailsModalContainer}`}>
      <Modal
        className={styles.modalDetails}
        overlayClassName={styles.overlay}
        isOpen={isOpen}
        onRequestClose={toggleModal}
      >
        {/* close modal button */}
        <div className={styles.closeButton} onClick={toggleModal}>
          <div> x</div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroNameContainer}>
            <div className={styles.heroName}>{hero.name}</div>
          </div>

          <div className={styles.wrapper}>
            {/* Image in modal */}
            <div className={styles.imageWrapper}>
              <ImageComponent imageURL={hero.image.url} />
            </div>

            {/* Information in modal */}
            <div className={styles.infoWrapper}>
              {/* Powerstats */}
              <PowerStats powerstats={hero.powerstats} />

              {/* Biography */}
              <Biography biography={hero.biography} />

              {/* Work */}
              <Work work={hero.work} />

              {/* Connections */}
              <Connections connections={hero.connections} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
