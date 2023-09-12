"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ISpace, useSpace } from "@flatfile/react";
// import { config } from "./config";
// import { listener } from "./listener";
import styles from "./page.module.css";

const spaceProps: ISpace = {
  name: "Embedded Space",
  // to test locally add your local vars here
  publishableKey: "pk_3d34f9821645462ca869cc69a9258ef5",
  environmentId: "us_env_Eqdlko0r",
  // workbook: config,
  // themeConfig: makeTheme({ primaryColor: "#546a76", textColor: "#fff" }),
  // sidebarConfig: {
  //   showDataChecklist: false,
  //   showSidebar: false,
  // },
  // listener: listener,
};

const Space = ({
  setShowSpace,
}: {
  setShowSpace: Dispatch<SetStateAction<boolean>>;
}) => {
  const space = useSpace({
    ...spaceProps,
    closeSpace: {
      operation: "contacts:submit",
      onClose: () => setShowSpace(false),
    },
  });
  return space;
};

export default function App() {
  const [showSpace, setShowSpace] = useState(false);

  return (
    <div>
      <div className={styles.description}>
        <button
          onClick={() => {
            setShowSpace(!showSpace);
          }}
        >
          {showSpace === true ? "Close" : "Open and create new"} space
        </button>
      </div>
      {showSpace && (
        <div className={styles.spaceWrapper}>
          <Space setShowSpace={setShowSpace} />
        </div>
      )}
    </div>
  );
}