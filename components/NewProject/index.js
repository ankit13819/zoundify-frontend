import styles from "./NewProject.module.css";
export default function NewProject() {
  return (
    <div className={styles["FullScreenModal-modal"]}>
      <div className={styles.ProjectCreationModalContent}>
        <header className={styles.ProjectCreationNavigationHeader}>
          <div
            className={styles["ProjectCreationNavigationHeader-leftContent"]}>
            <div
              className={`${styles["SubtleIconButton.SubtleIconButton--standardTheme"]} ${styles.ThemeableIconButtonPresentation} ${styles["ThemeableIconButtonPresentation--medium"]} ${styles.SubtleIconButton} ${styles["ThemeableIconButtonPresentation--isEnabled"]} ${styles["ProjectCreationNavigationHeader-backButton"]}`}>
              <svg
                class="Icon BackArrowIcon"
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false">
                <path d="M28,14.5H7.6L15,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0l-10,10c-0.6,0.6-0.6,1.5,0,2.1l10,10c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-7.4-7.4H28c0.8,0,1.5-0.7,1.5-1.5S28.8,14.5,28,14.5z"></path>
              </svg>
            </div>
          </div>
          <div
            className={styles["ProjectCreationNavigationHeader-rightContent"]}>
            <div
              className={`${styles["ThemeableIconButtonPresentation--isEnabled"]} ${styles.ThemeableIconButtonPresentation} ${styles["ThemeableIconButtonPresentation--medium"]} ${styles["SubtleIconButton--standardTheme"]} ${styles.SubtleIconButton} ${styles["ProjectCreationNavigationHeader-closeButton"]}`}>
              <svg
                class="Icon XIcon"
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false">
                <path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div
          className={`${styles["ProjectCreationModalContent-formWithPreviewBody"]} ${styles["ProjectCreationModalContent-body"]} ${styles["Scrollable--vertical"]} ${styles["Scrollable--withCompositingLayer"]}`}>
          <div className={styles.BlankProjectFormWithPreviewStructure}>
            <div
              className={
                styles["BlankProjectFormWithPreviewStructure-container"]
              }>
              <div
                className={`${styles["BlankProjectFormWithPreviewStructure-form"]} ${styles.PotSetupFormStructure}`}>
                <div className={styles["PotSetupFormStructure-header"]}>
                  <h2
                    className={`${styles["TypographyPresentation--h2"]} ${styles.TypographyPresentation} ${styles["TypographyPresentation--fontWeightLight"]} ${styles["TypographyPresentation--colorDefault"]}`}>
                    New Project
                  </h2>
                </div>
                <div
                  className={`${styles["PotSetupFormStructure-row"]} ${styles["FormRowStructure--labelPlacementTop"]} ${styles.FormRowStructure}`}>
                  <div
                    className={`${styles["FormRowStructure--labelPlacementTop"]} ${styles["FormRowStructure-label"]}`}>
                    <label className={styles.LabelPresentation}>
                      Project name
                    </label>
                  </div>
                  <div className={styles["FormRowStructure-contents"]}>
                    <input
                      className={`${styles["ProjectNameInput-underline"]} ${styles["ProjectNameInput-inputInvalid"]} ${styles.SizedTextInput} ${styles["SizedTextInput--medium"]}`}
                      type="text"
                    />
                    <label>
                      <div
                        className={`${styles["TypographyPresentation--s"]} ${styles["ProjectNameInput-errorText"]} ${styles["TypographyPresentation--colorDanger"]} ${styles.TypographyPresentation}`}>
                        Project name is required
                      </div>
                    </label>
                  </div>
                </div>
                <div
                  className={`${styles["PotSetupFormStructure-row"]} ${styles["PrivacyDropdown-holder"]}`}>
                  <div
                    className={`${styles["FormRowStructure--labelPlacementTop"]} ${styles.FormRowStructure}`}>
                    <div
                      className={`${styles["FormRowStructure--labelPlacementTop"]} ${styles["FormRowStructure-label"]}`}>
                      <label className={styles.LabelPresentation}>
                        <span
                          className={`${
                            styles[styles["TypographyPresentation--s"]]
                          } ${
                            styles["TypographyPresentation--fontWeightMedium"]
                          } ${styles.TypographyPresentation} ${
                            styles["TypographyPresentation--colorWeak"]
                          }`}>
                          Privacy
                        </span>
                      </label>
                    </div>
                    <div className={styles["FormRowStructure-contents "]}>
                      <div>
                        <div
                          className={`${styles["SecondaryButton--standardTheme"]} ${styles.SecondaryButton} ${styles.ThemeableRectangularButtonPresentation} ${styles["ThemeableRectangularButtonPresentation--large"]} ${styles["ThemeableRectangularButtonPresentation--isEnabled"]} ${styles["PrivacyDropdown-dropdownButton"]}`}
                          role="button"
                          style={{ borderColor: "#565557" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
