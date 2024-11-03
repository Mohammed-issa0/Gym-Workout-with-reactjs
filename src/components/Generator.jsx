import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import { motion, transform } from "framer-motion";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <motion.p
          transition={{
            duration: 1,
          }}
          whileInView={{ x: [-100, 0] }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-red-400"
        >
          {index}
        </motion.p>
        <motion.h4
          whileInView={{
            scale: [0.2, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 1,
          }}
          className="text-xl sm:text-2xl md:text-3xl"
        >
          {title}
        </motion.h4>
      </div>
      <motion.p
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        className="text-sm sm:text-base mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default function Generator(props) {
  const {
    muscles,
    setMuscles,
    poison,
    setPoison,
    goal,
    setGoal,
    updateWorkout,
  } = props;
  const [showModal, setShowModal] = useState(false);

  // let showModal = false

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <div className="mainSection">
      <SectionWrapper
        id={"generate"}
        header={"generate your workout"}
        title={["It's", "Huge", "o'clock"]}
      >
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"Select the workout you wish to endure."}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <motion.button
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 2,
                  delay: 1,
                }}
                onClick={() => {
                  setMuscles([]);
                  setPoison(type);
                }}
                className={
                  "bg-red-950 border  duration-200 px-4 hover:border-red-600 py-3 rounded-lg " +
                  (type === poison ? " border-red-600" : " border-red-400")
                }
                key={typeIndex}
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </motion.button>
            );
          })}
        </div>
        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles judged for annihilation."}
        />
        <div className="bg-red-950  border border-solid border-red-400 rounded-lg flex flex-col">
          <button
            onClick={toggleModal}
            className="relative p-3 flex items-center justify-center"
          >
            <p className="capitalize">
              {muscles.length == 0 ? "Select muscle groups" : muscles.join(" ")}
            </p>
            <i className="bx bxs-down-arrow absolute right-3 "></i>
          </button>

          {showModal && (
            <div className="flex flex-col px-3 pb-3">
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    onClick={() => {
                      updateMuscles(muscleGroup);
                    }}
                    key={muscleGroupIndex}
                    className={
                      "hover:text-red-400 duration-200 " +
                      (muscles.includes(muscleGroup) ? " text-red-400" : " ")
                    }
                  >
                    <p className="uppercase">
                      {muscleGroup.replaceAll("_", " ")}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <Header
          index={"03"}
          title={"Become Juggernaut"}
          description={"Select your ultimate objective."}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button
                onClick={() => {
                  setGoal(scheme);
                }}
                className={
                  "bg-red-950 border  duration-200 hover:border-red-600 py-3 rounded-lg px-4 " +
                  (scheme === goal ? " border-red-600" : " border-red-400")
                }
                key={schemeIndex}
              >
                <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
        <Button func={updateWorkout} text={"Formulate"}></Button>
      </SectionWrapper>
    </div>
  );
}
