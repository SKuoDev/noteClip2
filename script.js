const serviceAreas = [
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "mosquito", label: "Mosquito" },
];

const antSpecies = [
  "White-footed ants",
  "Crazy ants",
  "Bigheaded ants",
  "Ghost ants",
  "Pyramid ants",
  "Fire ants",
  "Carpenter ants",
  "Acrobat ants",
  "Argentine ants",
  "Pharaoh ants",
];

const exteriorSpiderActivity = ["Webs", "Grass/bushes"];
const interiorSpiderActivity = ["Webs", "Corners/closets", "Garage"];

const findingGroups = {
  exterior: [
    {
      id: "exterior-ants",
      kind: "ants",
      label: "Ants",
      subheading: "Ant species",
      options: antSpecies,
    },
    {
      id: "exterior-millipedes",
      kind: "millipedes",
      label: "Millipedes",
    },
    {
      id: "exterior-roaches",
      kind: "roaches",
      label: "Roaches",
    },
    {
      id: "exterior-spiders",
      kind: "spiders",
      label: "Spiders",
      subheading: "Spider activity",
      options: exteriorSpiderActivity,
    },
    {
      id: "exterior-wasps",
      kind: "wasps",
      label: "Wasp nests",
    },
  ],
  interior: [
    {
      id: "interior-ants",
      kind: "ants",
      label: "Ants",
      subheading: "Ant species",
      options: antSpecies,
    },
    {
      id: "interior-roaches",
      kind: "interior-roaches",
      label: "Cockroaches",
      subheading: "Roach type",
      options: ["German roaches", "American roaches", "Smokybrown roaches", "Australian roaches", "Oriental roaches"],
    },
    {
      id: "interior-flies",
      kind: "flies",
      label: "Flies/gnats",
      subheading: "Fly or gnat type",
      options: ["Drain flies", "Fruit flies", "House flies", "Fungus gnats"],
    },
    {
      id: "interior-occasional",
      kind: "occasional",
      label: "Occasional invaders",
      subheading: "Activity type",
      options: ["Earwigs", "Millipedes", "Pill bugs", "Centipedes"],
    },
    {
      id: "interior-pantry",
      kind: "pantry",
      label: "Pantry pests",
      subheading: "Pantry pest type",
      options: ["Pantry moths", "Stored-product beetles"],
    },
    {
      id: "interior-silverfish",
      kind: "silverfish",
      label: "Silverfish",
    },
    {
      id: "interior-spiders",
      kind: "interior-spiders",
      label: "Spiders",
      subheading: "Spider activity",
      options: interiorSpiderActivity,
    },
  ],
  mosquito: [
    {
      id: "mosquito-mms",
      kind: "mosquito-mms",
      label: "MMS",
      subheading: "MMS details",
      options: ["Boxes serviced"],
    },
  ],
};

const conditions = [
  "Mulch against foundation",
  "Moisture near home",
  "Vegetation touching structure",
  "Branches touching roofline",
  "Leaf litter",
  "Stored items or debris",
  "Firewood near structure",
  "Exterior gaps",
  "Door sweep gap",
  "Trash or food source",
  "Gutter or drainage issue",
  "Pool cage or lanai web buildup",
];

const findingDetails = {
  ants: {
    fallbackObservation: "ant activity",
    action: "targeted active ant areas and nearby trailing or nesting zones",
    expectation: "ant activity should decrease as the treatment transfers through the colony",
  },
  spiders: {
    fallbackObservation: "spider activity around the exterior",
    action: "removed accessible webbing and treated common spider harborage areas",
    expectation: "some new webbing can appear between services, but activity should be reduced",
  },
  millipedes: {
    fallbackObservation: "millipede activity around moisture-prone exterior areas",
    action: "treated exterior entry points and shaded moisture-prone areas where millipedes commonly travel",
    expectation: "millipede activity may be more noticeable after wet weather but should taper down as treated areas dry and the service takes effect",
  },
  roaches: {
    fallbackObservation: "roach activity around exterior harborage areas",
    action: "treated exterior harborage points where roaches may shelter or move around the home",
    expectation: "roach sightings should taper down as the treated harborage areas are affected",
  },
  wasps: {
    fallbackObservation: "wasp nesting activity in accessible exterior areas",
    action: "addressed accessible wasp nesting activity where it was safe to treat",
    expectation: "wasp activity around the treated nesting area should slow down over the next few days",
  },
  "interior-roaches": {
    fallbackObservation: "cockroach activity inside the home",
    action: "treated accessible interior harborage areas and common travel points",
    expectation: "interior roach activity should reduce as treated areas are affected",
  },
  flies: {
    fallbackObservation: "fly or gnat activity inside the home",
    action: "treated accessible activity areas and checked likely source points",
    expectation: "activity should improve as source areas are corrected and the service takes effect",
  },
  occasional: {
    fallbackObservation: "occasional invader activity inside the home",
    action: "treated accessible entry points and activity areas",
    expectation: "activity should taper down as treated entry points are affected",
  },
  pantry: {
    fallbackObservation: "pantry pest activity inside the home",
    action: "checked accessible pantry activity areas and treated appropriate cracks, crevices, and nearby hiding spots",
    expectation: "activity should reduce as affected items are removed and treated areas take effect",
  },
  silverfish: {
    fallbackObservation: "silverfish activity inside the home",
    action: "treated accessible cracks, crevices, and hiding areas where silverfish activity was noted",
    expectation: "silverfish activity should gradually reduce as treated areas are affected",
  },
  "interior-spiders": {
    fallbackObservation: "spider activity inside the home",
    action: "removed accessible webbing and treated common interior spider harborage areas",
    expectation: "some webbing can return between services, but interior activity should be reduced",
  },
};

const conditionDetails = {
  "Mulch against foundation": {
    note: "mulch built up close to the foundation",
    guidance: "pulling mulch back slightly from the structure can help reduce moisture and pest pressure",
  },
  "Moisture near home": {
    note: "moisture near the home",
    guidance: "reducing excess moisture will help make the area less attractive to ants, roaches, and occasional invaders",
  },
  "Vegetation touching structure": {
    note: "vegetation touching or close to the structure",
    guidance: "trimming vegetation back from the home helps reduce pest access and sheltered areas",
  },
  "Branches touching roofline": {
    note: "branches close to the roofline",
    guidance: "keeping branches trimmed back can reduce pest access to the home",
  },
  "Leaf litter": {
    note: "leaf buildup around the exterior",
    guidance: "removing leaf litter helps reduce moisture and hiding areas",
  },
  "Stored items or debris": {
    note: "stored items or debris near the structure",
    guidance: "keeping stored items elevated or away from the foundation helps reduce harborage",
  },
  "Firewood near structure": {
    note: "wood materials stored near the structure",
    guidance: "storing wood off the ground and away from the home can reduce pest shelter",
  },
  "Exterior gaps": {
    note: "small exterior gaps or openings",
    guidance: "sealing accessible gaps can help reduce future pest entry",
  },
  "Door sweep gap": {
    note: "a gap around a door sweep or threshold",
    guidance: "repairing the door sweep can help improve exclusion",
  },
  "Trash or food source": {
    note: "trash, food residue, or stored waste that may attract pests",
    guidance: "keeping food sources sealed and cleaned up will help lower pest pressure",
  },
  "Gutter or drainage issue": {
    note: "a gutter or drainage condition creating extra moisture",
    guidance: "correcting drainage can help reduce future pest activity",
  },
  "Pool cage or lanai web buildup": {
    note: "web buildup around the pool cage or lanai",
    guidance: "some webbing can return between services, but treatment and web removal should help reduce buildup",
  },
};

const gateOptions = [
  { id: "none", label: "No gate" },
  { id: "closed", label: "Gate closed" },
  { id: "not-accessed", label: "Gate not accessed" },
];

const state = {
  areas: new Set(),
  findings: new Set(),
  subFindings: {},
  conditions: new Set(),
  conditionsOpen: false,
  gate: "none",
  houseSpecific: "",
};

const issueList = document.querySelector("#issueList");
const exteriorPanel = document.querySelector("#exteriorPanel");
const exteriorIssueList = document.querySelector("#exteriorIssueList");
const interiorPanel = document.querySelector("#interiorPanel");
const interiorIssueList = document.querySelector("#interiorIssueList");
const mosquitoPanel = document.querySelector("#mosquitoPanel");
const mosquitoIssueList = document.querySelector("#mosquitoIssueList");
const conditionsPanel = document.querySelector("#conditionsPanel");
const conditionsToggle = document.querySelector("#conditionsToggle");
const conditionListWrap = document.querySelector("#conditionListWrap");
const conditionList = document.querySelector("#conditionList");
const gateList = document.querySelector("#gateList");
const houseSpecific = document.querySelector("#houseSpecific");
const generatedNote = document.querySelector("#generatedNote");
const copyStatus = document.querySelector("#copyStatus");
const generateButton = document.querySelector("#generateButton");
const copyNoteButton = document.querySelector("#copyNoteButton");
const copyPromptButton = document.querySelector("#copyPromptButton");
const resetButton = document.querySelector("#resetButton");
const topResetButton = document.querySelector("#topResetButton");

function createToggleButton(label, selected, onClick, className = "pill-button") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.setAttribute("aria-pressed", String(selected));
  button.addEventListener("click", onClick);
  return button;
}

function toggleSetValue(set, value) {
  if (set.has(value)) {
    set.delete(value);
    return;
  }
  set.add(value);
}

function getFindingById(findingId) {
  return [...findingGroups.exterior, ...findingGroups.interior, ...findingGroups.mosquito].find((finding) => finding.id === findingId);
}

function getFindingArea(findingId) {
  for (const areaId of Object.keys(findingGroups)) {
    if (findingGroups[areaId].some((finding) => finding.id === findingId)) {
      return areaId;
    }
  }
  return "";
}

function getSubSet(findingId) {
  if (!state.subFindings[findingId]) {
    state.subFindings[findingId] = new Set();
  }
  return state.subFindings[findingId];
}

function clearAreaFindings(areaId) {
  findingGroups[areaId].forEach((finding) => {
    state.findings.delete(finding.id);
    delete state.subFindings[finding.id];
  });
}

function renderFindingGroup(areaId, container) {
  container.innerHTML = "";

  findingGroups[areaId].forEach((finding) => {
    const group = document.createElement("div");
    group.className = "finding-group";

    group.append(
      createToggleButton(finding.label, state.findings.has(finding.id), () => {
        toggleSetValue(state.findings, finding.id);
        if (!state.findings.has(finding.id)) {
          delete state.subFindings[finding.id];
        }
        renderSelections();
        syncOutputs();
      }, "pill-button finding-button"),
    );

    if (finding.options && state.findings.has(finding.id)) {
      const subPanel = document.createElement("div");
      subPanel.className = "sub-panel compact-sub-panel";

      const heading = document.createElement("h3");
      heading.textContent = finding.subheading;
      subPanel.append(heading);

      const subList = document.createElement("div");
      subList.className = "pill-stack";
      subList.setAttribute("aria-label", finding.subheading);

      finding.options.forEach((option) => {
        const subSet = getSubSet(finding.id);
        subList.append(
          createToggleButton(option, subSet.has(option), () => {
            toggleSetValue(subSet, option);
            renderSelections();
            syncOutputs();
          }),
        );
      });

      subPanel.append(subList);
      group.append(subPanel);
    }

    container.append(group);
  });
}

function renderSelections() {
  issueList.innerHTML = "";
  serviceAreas.forEach((area) => {
    issueList.append(
      createToggleButton(area.label, state.areas.has(area.id), () => {
        toggleSetValue(state.areas, area.id);
        if (state.areas.has("mosquito") && area.id === "mosquito") {
          ["exterior", "interior"].forEach((areaToClear) => {
            state.areas.delete(areaToClear);
            clearAreaFindings(areaToClear);
          });
          state.conditions.clear();
          state.conditionsOpen = false;
        }
        if (state.areas.has(area.id) && area.id !== "mosquito") {
          state.areas.delete("mosquito");
          clearAreaFindings("mosquito");
        }
        if (!state.areas.has(area.id)) {
          clearAreaFindings(area.id);
        }
        renderSelections();
        syncOutputs();
      }, "pill-button area-button"),
    );
  });

  exteriorPanel.classList.toggle("is-hidden", !state.areas.has("exterior"));
  interiorPanel.classList.toggle("is-hidden", !state.areas.has("interior"));
  mosquitoPanel.classList.toggle("is-hidden", !state.areas.has("mosquito"));
  conditionsPanel.classList.toggle("is-hidden", state.areas.has("mosquito"));
  renderFindingGroup("exterior", exteriorIssueList);
  renderFindingGroup("interior", interiorIssueList);
  renderFindingGroup("mosquito", mosquitoIssueList);

  conditionsToggle.textContent = state.conditionsOpen
    ? `Hide conducive conditions${state.conditions.size ? ` (${state.conditions.size})` : ""}`
    : `Add conducive conditions${state.conditions.size ? ` (${state.conditions.size})` : ""}`;
  conditionsToggle.setAttribute("aria-expanded", String(state.conditionsOpen));
  conditionListWrap.classList.toggle("is-hidden", !state.conditionsOpen);

  conditionList.innerHTML = "";
  conditions.forEach((condition) => {
    conditionList.append(
      createToggleButton(condition, state.conditions.has(condition), () => {
        toggleSetValue(state.conditions, condition);
        syncOutputs();
        renderSelections();
      }),
    );
  });

  gateList.innerHTML = "";
  gateOptions.forEach((option) => {
    gateList.append(
      createToggleButton(option.label, state.gate === option.id, () => {
        state.gate = option.id;
        syncOutputs();
        renderSelections();
      }, "segment-button"),
    );
  });
}

function getSelectedLabels() {
  const selectedFindings = [...state.findings].map((findingId) => {
    const finding = getFindingById(findingId);
    return {
      id: findingId,
      area: getFindingArea(findingId),
      kind: finding.kind,
      label: finding.label,
      options: [...getSubSet(findingId)],
    };
  });

  return {
    areas: serviceAreas.filter((area) => state.areas.has(area.id)).map((area) => area.label),
    findings: selectedFindings,
    conditions: [...state.conditions],
    gate: gateOptions.find((option) => option.id === state.gate)?.label ?? "No gate",
  };
}

function toSentenceList(items) {
  if (items.length === 0) {
    return "";
  }
  if (items.length === 1) {
    return items[0];
  }
  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function normalizeAntSpecies(species) {
  return species.toLowerCase().replace(/ ants$/, " ant");
}

function normalizeRoachType(type) {
  return type.replace(/ roaches$/i, " roach");
}

function cleanHouseSpecific(text) {
  return text.trim().replace(/[.?!]+$/, "");
}

function capitalizeSentence(text) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

function hashText(text) {
  return [...text].reduce((hash, character) => {
    return (hash * 31 + character.charCodeAt(0)) >>> 0;
  }, 17);
}

function pickVariant(variants, seed, offset = 0) {
  return variants[(seed + offset) % variants.length];
}

function getVariationSeed(labels) {
  return hashText(JSON.stringify({
    areas: labels.areas,
    findings: labels.findings.map((finding) => ({
      id: finding.id,
      options: finding.options,
    })),
    conditions: labels.conditions,
    gate: labels.gate,
    houseSpecific: cleanHouseSpecific(state.houseSpecific),
  }));
}

function shuffleBySeed(items, seed) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = (seed + index * 7) % (index + 1);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getSpiderObservation(finding) {
  const options = finding.options;
  if (finding.area === "interior") {
    if (options.includes("Webs") && options.includes("Corners/closets")) {
      return "spider activity and webbing around interior corners and closet areas";
    }
    if (options.includes("Garage")) {
      return "spider activity in the garage";
    }
    if (options.includes("Webs")) {
      return "spider activity and webbing inside the home";
    }
    return "spider activity inside the home";
  }

  if (options.includes("Webs") && options.includes("Grass/bushes")) {
    return "spider activity around web-prone areas, grass, and bushes";
  }
  if (options.includes("Webs")) {
    return "spider activity and webbing around accessible exterior areas";
  }
  if (options.includes("Grass/bushes")) {
    return "spider activity around grass and bushes";
  }
  return "spider activity around the exterior";
}

function getFindingObservation(finding) {
  if (finding.kind === "ants" && finding.options.length > 0) {
    return `${toSentenceList(finding.options.map(normalizeAntSpecies))} activity ${finding.area === "interior" ? "inside the home" : "around the exterior"}`;
  }

  if (finding.kind === "interior-roaches" && finding.options.length > 0) {
    return `${toSentenceList(finding.options.map(normalizeRoachType))} activity inside the home`;
  }

  if (finding.kind === "spiders" || finding.kind === "interior-spiders") {
    return getSpiderObservation(finding);
  }

  if (finding.options.length > 0) {
    return `${toSentenceList(finding.options.map((option) => option.toLowerCase()))} activity ${finding.area === "interior" ? "inside the home" : "around the exterior"}`;
  }

  return findingDetails[finding.kind]?.fallbackObservation ?? `${finding.label.toLowerCase()} activity`;
}

function getConditionNotes(labels) {
  return labels.conditions.map((condition) => conditionDetails[condition]?.note ?? condition.toLowerCase());
}

function hasSpiderFinding(labels) {
  return labels.findings.some((finding) => finding.kind === "spiders" || finding.kind === "interior-spiders");
}

function getConditionGuidance(labels) {
  return labels.conditions
    .filter((condition) => !(hasSpiderFinding(labels) && condition === "Pool cage or lanai web buildup"))
    .map((condition) => conditionDetails[condition]?.guidance)
    .filter(Boolean)
    .slice(0, 1);
}

function buildObservation(labels, seed) {
  const observed = labels.findings.map(getFindingObservation);

  if (observed.length === 0) {
    observed.push("no major active pest issues");
  }

  const conditionNotes = getConditionNotes(labels);
  const houseDetail = cleanHouseSpecific(state.houseSpecific);
  const opening = pickVariant([
    `I found ${toSentenceList(observed)} during today's service.`,
    `During today's service, I found ${toSentenceList(observed)}.`,
    `Today's inspection showed ${toSentenceList(observed)}.`,
  ], seed);

  const conditionText = conditionNotes.length
    ? pickVariant([
      `I also noted ${toSentenceList(conditionNotes)}.`,
      `I also observed ${toSentenceList(conditionNotes)} that could contribute to pest pressure.`,
      `I noted ${toSentenceList(conditionNotes)} while checking the property.`,
    ], seed, 1)
    : "";

  const houseText = houseDetail
    ? pickVariant([
      `For this home, ${houseDetail}.`,
      `A house-specific note from today's visit: ${houseDetail}.`,
      `I also noted for this home that ${houseDetail}.`,
    ], seed, 2)
    : "";

  return [opening, conditionText, houseText].filter(Boolean).join(" ");
}

function buildTreatment(labels, seed) {
  const hasInterior = labels.findings.some((finding) => finding.area === "interior");
  const hasExterior = labels.findings.some((finding) => finding.area === "exterior") || state.areas.has("exterior");
  const actions = [];

  if (hasExterior) {
    actions.push(pickVariant([
      "completed a thorough exterior service",
      "serviced the exterior perimeter",
      "completed the exterior treatment around the home",
    ], seed, 3));
    actions.push(pickVariant([
      "treated the foundation, entry points, and accessible exterior activity areas",
      "treated accessible entry points, foundation areas, and exterior activity zones",
      "focused treatment around the foundation, entry points, and active exterior areas",
    ], seed, 4));
  }

  if (hasInterior) {
    actions.push(pickVariant([
      "serviced accessible interior areas where activity was noted",
      "treated accessible interior activity areas",
      "checked and serviced the interior areas tied to today's findings",
    ], seed, 5));
  }

  if (actions.length === 0) {
    actions.push(pickVariant([
      "completed the scheduled service and inspected accessible areas",
      "checked accessible service areas and completed the regular treatment",
      "performed the scheduled service and monitored accessible areas",
    ], seed, 6));
  }

  labels.findings.forEach((finding) => {
    const action = findingDetails[finding.kind]?.action;
    if (action && !actions.includes(action)) {
      actions.push(action);
    }
  });

  if (labels.conditions.length > 0) {
    actions.push(pickVariant([
      "checked nearby areas connected to the conditions noted",
      "paid extra attention to areas around the conditions noted",
      "reviewed and treated nearby areas where those conditions may contribute to activity",
    ], seed, 7));
  }

  const gateText = state.gate === "closed"
    ? pickVariant(["Gates were closed when finished.", "I closed the gates before leaving.", "All accessed gates were closed after service."], seed, 8)
    : "";
  const accessText = state.gate === "not-accessed"
    ? pickVariant(["A gated area was not accessed during this visit.", "One gated area was not accessible at the time of service.", "A gated section could not be accessed today."], seed, 9)
    : "";

  const treatmentLead = pickVariant(["I", "For treatment, I", "As part of the service, I"], seed, 10);
  const treatmentSentence = `${treatmentLead} ${toSentenceList(actions)}.`;
  return [treatmentSentence, gateText, accessText].filter(Boolean).join(" ");
}

function buildExpectation(labels, seed) {
  const expectations = [];

  labels.findings.forEach((finding) => {
    const expectation = findingDetails[finding.kind]?.expectation;
    if (expectation && !expectations.includes(expectation)) {
      expectations.push(expectation);
    }
  });

  expectations.push(...getConditionGuidance(labels));

  if (expectations.length === 0) {
    expectations.push("the home looked good overall, and I will continue monitoring on future visits");
  }

  const orderedExpectations = expectations.length > 1 ? shuffleBySeed(expectations, seed) : expectations;
  const sentence = toSentenceList(orderedExpectations);
  return `${capitalizeSentence(sentence)}.`;
}

function hasMmsService(labels) {
  return labels.findings.some((finding) => finding.id === "mosquito-mms");
}

function hasBoxesServiced(labels) {
  return labels.findings.some((finding) => finding.id === "mosquito-mms" && finding.options.includes("Boxes serviced"));
}

function buildMosquitoNote(labels) {
  const seed = getVariationSeed(labels);
  const houseDetail = cleanHouseSpecific(state.houseSpecific);
  const isMms = hasMmsService(labels);
  const boxesServiced = hasBoxesServiced(labels);

  const observation = isMms
    ? pickVariant([
      "I completed the monthly mosquito service today and checked the mosquito-prone areas around the property.",
      "Today's monthly mosquito service focused on the shaded and mosquito-prone areas around the home.",
      "During today's MMS visit, I checked the common mosquito resting and activity areas around the property.",
    ], seed)
    : pickVariant([
      "I noted mosquito activity and mosquito-prone resting areas around the property today.",
      "During today's mosquito service, I checked shaded vegetation and common mosquito resting areas around the home.",
      "Today's mosquito inspection showed conditions where adult mosquitoes can rest around the exterior.",
    ], seed);

  const treatment = isMms
    ? pickVariant([
      "I applied the monthly mosquito treatment to accessible resting areas, vegetation, and shaded zones where mosquitoes commonly harbor.",
      "I completed the MMS treatment around accessible mosquito resting areas and exterior harborage zones.",
      "I serviced the property with the monthly mosquito treatment, focusing on shaded vegetation and areas where mosquitoes are likely to rest.",
    ], seed, 1)
    : pickVariant([
      "I applied a mosquito fogging treatment using an adulticide and growth regulator to accessible mosquito resting areas around the exterior.",
      "I treated accessible exterior mosquito areas with the fogger using an adulticide and growth regulator.",
      "I completed the mosquito fogging service, applying adulticide and growth regulator to accessible resting and harborage areas.",
    ], seed, 1);

  const boxText = boxesServiced
    ? pickVariant([
      "I also serviced the mosquito boxes and checked the water treatment inside.",
      "The mosquito boxes were serviced today, including the water treatment inside the boxes.",
      "I checked and serviced the mosquito boxes as part of today's MMS visit.",
    ], seed, 2)
    : "";

  const houseText = houseDetail
    ? pickVariant([
      `For this home, ${houseDetail}.`,
      `A house-specific note from today's mosquito service: ${houseDetail}.`,
      `I also noted for this mosquito visit that ${houseDetail}.`,
    ], seed, 3)
    : "";

  const expectation = isMms
    ? pickVariant([
      "This monthly service is designed to help keep mosquito pressure reduced between visits, though mosquitoes can continue to move in from nearby standing water, landscaping, or neighboring areas.",
      "The monthly treatment should help reduce mosquito pressure over time, but some activity can return between visits due to weather, standing water, and nearby breeding sources.",
      "You should see mosquito pressure stay more manageable with the recurring service, while keeping standing water reduced will help support the treatment.",
    ], seed, 4)
    : pickVariant([
      "Mosquito activity should be reduced after the treatment has time to work, although some mosquitoes can return from nearby standing water, landscaping, or neighboring areas.",
      "The treatment should help reduce adult mosquito activity and interrupt development, but activity can fluctuate with weather and nearby breeding sources.",
      "You should see activity decrease as the treatment takes effect, and reducing standing water around the property will help improve results.",
    ], seed, 4);

  return [observation, treatment, boxText, houseText, expectation].filter(Boolean).join(" ");
}

function buildNote() {
  const labels = getSelectedLabels();
  if (state.areas.has("mosquito")) {
    return buildMosquitoNote(labels);
  }

  const seed = getVariationSeed(labels);
  const observation = buildObservation(labels, seed);
  const treatment = buildTreatment(labels, seed);
  const expectation = buildExpectation(labels, seed);
  const orders = [
    [observation, treatment, expectation],
    [observation, expectation, treatment],
    [treatment, observation, expectation],
  ];

  return pickVariant(orders, seed, 11).join(" ");
}

function buildPrompt() {
  const labels = getSelectedLabels();
  const details = {
    serviceAreas: labels.areas,
    findings: labels.findings,
    conduciveConditions: labels.conditions,
    gateStatus: labels.gate,
    houseSpecific: state.houseSpecific.trim(),
  };

  return `Rewrite the draft note below into one polished customer-facing pest control service note.

Company voice: friendly, warm, professional, reassuring, and representative of a top-tier service company.
Required content:
- Include what the technician saw.
- Include what the technician did.
- Include what the customer should expect next.
- Keep it to one good paragraph, not headings or bullets.
- Preserve the meaning of the draft note.

Do not invent inaccessible areas, product names, chemical names, guarantees, or severe infestations. Mention gate status only when relevant.

Draft note:
${buildNote()}

Technician inputs:
${JSON.stringify(details, null, 2)}`;
}

function syncOutputs({ regenerate = true } = {}) {
  state.houseSpecific = houseSpecific.value;
  if (regenerate) {
    generatedNote.textContent = buildNote();
  }
}

function setStatus(message, type = "") {
  copyStatus.textContent = message;
  copyStatus.className = `status-pill${type ? ` is-${type}` : ""}`;
}

async function writeToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back to the textarea copy path below.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  const didCopy = document.execCommand("copy");
  textarea.remove();

  if (!didCopy) {
    throw new Error("Copy command failed");
  }
}

async function copyText(text, successMessage) {
  try {
    await writeToClipboard(text);
    setStatus(successMessage, "success");
    window.setTimeout(() => setStatus("Ready"), 1300);
  } catch {
    setStatus("Copy failed", "error");
  }
}

function resetForm() {
  state.areas.clear();
  state.findings.clear();
  state.subFindings = {};
  state.conditions.clear();
  state.conditionsOpen = false;
  state.gate = "none";
  state.houseSpecific = "";
  houseSpecific.value = "";
  renderSelections();
  syncOutputs();
  setStatus("Reset");
  window.setTimeout(() => setStatus("Ready"), 900);
}

conditionsToggle.addEventListener("click", () => {
  state.conditionsOpen = !state.conditionsOpen;
  renderSelections();
});
houseSpecific.addEventListener("input", () => syncOutputs());
generateButton.addEventListener("click", () => {
  syncOutputs();
  setStatus("Generated", "success");
  window.setTimeout(() => setStatus("Ready"), 1100);
});
copyNoteButton.addEventListener("click", () => copyText(generatedNote.textContent, "Note copied"));
copyPromptButton.addEventListener("click", () => copyText(buildPrompt(), "Prompt copied"));
resetButton.addEventListener("click", resetForm);
topResetButton.addEventListener("click", resetForm);

renderSelections();
syncOutputs();
