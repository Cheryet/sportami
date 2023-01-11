// import React, { useState, useCallback, useEffect } from "react";

// function Filter({ setShowFilter, showFilter }) {
//   const [filter, setFilter] = useState(-1);

//   function toggleFilter(index) {
//     setFilter(index);
//   }

//   // const [location, setLocation] = useState(null); // CHECK BOX (location, gender, sport, skill)
//   // const [gender, setGender] = useState(null); // CHECK BOX (location, gender, sport, skill)
//   // const [sport, setSport] = useState(null); // CHECK BOX (location, gender, sport, skill)
//   // const [skill, setSkill] = useState(null); // CHECK BOX (location, gender, sport, skill)
//   // const [age, setAge] = useState(null); // RANGE SLIDER (age)

//   // const handleLocationChange = useCallback((value) => setLocation(value), []);
//   // const handleGenderChange = useCallback((value) => setGender(value), []);
//   // const handleSportChange = useCallback((value) => setSport(value), []);
//   // const handleSkillChange = useCallback((value) => setSkill(value), []);
//   // const handleAgeChange = useCallback((value) => setAge(value), []);

//   // const handleLocationRemove = useCallback(() => setLocation(null), []);
//   // const handleGenderRemove = useCallback(() => setGender(null), []);
//   // const handleSportRemove = useCallback(() => setSport(null), []);
//   // const handleSkillRemove = useCallback(() => setSkill(null), []);
//   // const handleAgeRemove = useCallback(() => setAge(null), []);

//   // const handleFiltersClearAll = useCallback(() => {
//   //   handleLocationRemove();
//   //   handleGenderRemove();
//   //   handleSportRemove();
//   //   handleSkillRemove();
//   //   handleAgeRemove();
//   // }, [
//   //   handleLocationRemove,
//   //   handleGenderRemove,
//   //   handleSportRemove,
//   //   handleSkillRemove,
//   //   handleAgeRemove,
//   // ]);

//   // const filters = [
//   //   {
//   //     key: "location",
//   //     label: "Location",
//   //     filter: (
//   //       <ChoiceList
//   //         title="Location"
//   //         titleHidden
//   //         choices={[
//   //           { label: "Lethbridge", value: "lethbridge" },
//   //           { label: "Oakville", value: "oakville" },
//   //           { label: "Vancouver", value: "vancouver" },
//   //         ]}
//   //         selected={location || []}
//   //         onChange={handleLocationChange}
//   //         allowMultiple
//   //       />
//   //     ),
//   //     shortcut: true,
//   //   },
//   //   {
//   //     key: "gender",
//   //     label: "Gender",
//   //     filter: (
//   //       <ChoiceList
//   //         title="Gender"
//   //         titleHidden
//   //         choices={[
//   //           { label: "Male", value: "male" },
//   //           { label: "Female", value: "female" },
//   //           { label: "Other", value: "other" },
//   //         ]}
//   //         selected={gender || []}
//   //         onChange={handleGenderChange}
//   //         allowMultiple
//   //       />
//   //     ),
//   //     shortcut: true,
//   //   },
//   //   {
//   //     key: "sport",
//   //     label: "Sport",
//   //     filter: (
//   //       <ChoiceList
//   //         title="Sport"
//   //         titleHidden
//   //         choices={[
//   //           { label: "Golf", value: "lethbridge" },
//   //           { label: "Tennis", value: "oakville" },
//   //           { label: "Bowling", value: "vancouver" },
//   //           { label: "Squash", value: "vancouver" },
//   //           { label: "Ping Pong", value: "ping pong" },
//   //           { label: "Pickleball", value: "pickleball" },
//   //         ]}
//   //         selected={sport || []}
//   //         onChange={handleSportChange}
//   //         allowMultiple
//   //       />
//   //     ),
//   //     shortcut: true,
//   //   },
//   //   {
//   //     key: "skill",
//   //     label: "Skill",
//   //     filter: (
//   //       <ChoiceList
//   //         title="Skill"
//   //         titleHidden
//   //         choices={[
//   //           { label: "Beginner", value: "beginner" },
//   //           { label: "Intermediate", value: "intermediate" },
//   //           { label: "Advanced", value: "advanced" },
//   //         ]}
//   //         selected={location || []}
//   //         onChange={handleSkillChange}
//   //         allowMultiple
//   //       />
//   //     ),
//   //     shortcut: true,
//   //   },
//   //   {
//   //     key: "age",
//   //     label: "Age",
//   //     filter: (
//   //       <RangeSlider
//   //         label="Age"
//   //         labelHidden
//   //         value={age || [0, 25]}
//   //         prefix="0"
//   //         output
//   //         min={0}
//   //         max={100}
//   //         step={1}
//   //         onChange={handleAgeChange}
//   //       />
//   //     ),
//   //   },
//   // ];

//   // const appliedFilters = [];
//   // if (!isEmpty(location)) {
//   //   const key = "location";
//   //   appliedFilters.push({
//   //     key,
//   //     label: disambiguateLabel(key, location),
//   //     onRemove: handleLocationRemove,
//   //   });
//   // }
//   // if (!isEmpty(gender)) {
//   //   const key = "gender";
//   //   appliedFilters.push({
//   //     key,
//   //     label: disambiguateLabel(key, gender),
//   //     onRemove: handleGenderRemove,
//   //   });
//   // }
//   // if (!isEmpty(sport)) {
//   //   const key = "sport";
//   //   appliedFilters.push({
//   //     key,
//   //     label: disambiguateLabel(key, sport),
//   //     onRemove: handleSportRemove,
//   //   });
//   // }
//   // if (!isEmpty(skill)) {
//   //   const key = "skill";
//   //   appliedFilters.push({
//   //     key,
//   //     label: disambiguateLabel(key, skill),
//   //     onRemove: handleSkillRemove,
//   //   });
//   // }
//   // if (!isEmpty(age)) {
//   //   const key = "age";
//   //   appliedFilters.push({
//   //     key,
//   //     label: disambiguateLabel(key, age),
//   //     onRemove: handleAgeRemove,
//   //   });
//   // }

// function disambiguateLabel(key, value) {
//   switch (key) {
//     case "location":
//       return value.map((val) => `Opponent ${val}`).join(", ");
//     case "gender":
//       return value.map((val) => `Opponent ${val}`).join(", ");
//     case "sport":
//       return value.map((val) => `Opponent ${val}`).join(", ");
//     case "skill":
//       return value.map((val) => `Opponent ${val}`).join(", ");
//     case "age":
//       return `Opponent age is between ${value[0]} and ${value[1]} years`;
//     default:
//       return value;
//   }
// }

// function isEmpty(value) {
//   if (Array.isArray(value)) {
//     return value.length === 0;
//   } else {
//     return value === "" || value == null;
//   }
// }

// export default Filter;
