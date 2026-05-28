const issues = [
  { id: "ants", label: "Ants" },
  { id: "spiders", label: "Spiders" },
  { id: "millipedes", label: "Millipedes" },
  { id: "wasps", label: "Wasp nests" },
  { id: "roaches", label: "Roaches" },
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

const spiderActivity = ["Webs", "Grass/bushes"];

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

const issueDetails = {
  millipedes: {
    observation: "millipede activity around moisture-prone exterior areas",
    action: "treated exterior entry points and shaded moisture-prone areas where millipedes commonly travel",
    expectation: "millipede activity may be more noticeable after wet weather but should taper down as treated areas dry and the service takes effect",
  },
  wasps: {
    observation: "wasp nesting activity in accessible exterior areas",
    action: "addressed accessible wasp nesting activity where it was safe to treat",
    expectation: "wasp activity around the treated nesting area should slow down over the next few days",
  },
  roaches: {
    observation: "roach activity around exterior harborage areas",
    action: "treated exterior harborage points where roaches may shelter or move around the home",
    expectation: "roach sightings should taper down as the treated harborage areas are affected",
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
  issues: new Set(),
  ants: new Set(),
  spiders: new Set(),
  conditions: new Set(),
  gate: "none",
  houseSpecific: "",
};

const issueList = document.querySelector("#issueList");
const antPanel = document.querySelector("#antPanel");
const antList = document.querySelector("#antList");
const spiderPanel = document.querySelector("#spiderPanel");
const spiderList = document.querySelector("#spiderList");
const conditionList = document.querySelector("#conditionList");
const gateList = document.querySelector("#gateList");
const houseSpecific = document.querySelector("#houseSpecific");
const generatedNote = document.querySelector("#generatedNote");
const llmPrompt = document.querySelector("#llmPrompt");
const copyStatus = document.querySelector("#copyStatus");
const generateButton = document.querySelector("#generateButton");
const copyNoteButton = document.querySelector("#copyNoteButton");
const copyPromptButton = document.querySelector("#copyPromptButton");
const resetButton = document.querySelector("#resetButton");

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

function renderSelections() {
  issueList.innerHTML = "";
  issues.forEach((issue) => {
    issueList.append(
      createToggleButton(issue.label, state.issues.has(issue.id), () => {
        toggleSetValue(state.issues, issue.id);
        if (!state.issues.has("ants")) {
          state.ants.clear();
        }
        if (!state.issues.has("spiders")) {
          state.spiders.clear();
        }
        renderSelections();
        syncOutputs();
      }),
    );
  });

  antPanel.classList.toggle("is-hidden", !state.issues.has("ants"));
  antList.innerHTML = "";
  antSpecies.forEach((species) => {
    antList.append(
      createToggleButton(species, state.ants.has(species), () => {
        toggleSetValue(state.ants, species);
        syncOutputs();
        renderSelections();
      }),
    );
  });

  spiderPanel.classList.toggle("is-hidden", !state.issues.has("spiders"));
  spiderList.innerHTML = "";
  spiderActivity.forEach((activity) => {
    spiderList.append(
      createToggleButton(activity, state.spiders.has(activity), () => {
        toggleSetValue(state.spiders, activity);
        syncOutputs();
        renderSelections();
      }),
    );
  });

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
  const issueLabels = issues.filter((issue) => state.issues.has(issue.id)).map((issue) => issue.label);
  return {
    issues: issueLabels,
    ants: [...state.ants],
    spiders: [...state.spiders],
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

function cleanHouseSpecific(text) {
  return text.trim().replace(/[.?!]+$/, "");
}

function capitalizeSentence(text) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

function getSpiderObservation(labels) {
  if (labels.spiders.includes("Webs") && labels.spiders.includes("Grass/bushes")) {
    return "spider activity around web-prone areas, grass, and bushes";
  }
  if (labels.spiders.includes("Webs")) {
    return "spider activity and webbing around accessible exterior areas";
  }
  if (labels.spiders.includes("Grass/bushes")) {
    return "spider activity around grass and bushes";
  }
  return "spider activity around the exterior";
}

function getConditionNotes(labels) {
  return labels.conditions.map((condition) => conditionDetails[condition]?.note ?? condition.toLowerCase());
}

function getConditionGuidance(labels) {
  return labels.conditions
    .filter((condition) => !(state.issues.has("spiders") && condition === "Pool cage or lanai web buildup"))
    .map((condition) => conditionDetails[condition]?.guidance)
    .filter(Boolean)
    .slice(0, 1);
}

function buildObservation(labels) {
  const observed = [];

  labels.issues.forEach((issue) => {
    if (issue === "Ants" && labels.ants.length > 0) {
      observed.push(`${toSentenceList(labels.ants.map(normalizeAntSpecies))} activity`);
      return;
    }
    if (issue === "Spiders" && labels.spiders.length > 0) {
      observed.push(getSpiderObservation(labels));
      return;
    }
    const issueId = issues.find((item) => item.label === issue)?.id;
    observed.push(issueDetails[issueId]?.observation ?? `${issue.toLowerCase()} activity`);
  });

  if (observed.length === 0) {
    observed.push("no major active pest issues");
  }

  const conditionNotes = getConditionNotes(labels);
  const conditionText = conditionNotes.length
    ? ` I also noted ${toSentenceList(conditionNotes)}.`
    : "";

  const houseText = state.houseSpecific.trim() ? ` For this home, ${cleanHouseSpecific(state.houseSpecific)}.` : "";

  return `I found ${toSentenceList(observed)} during today's service.${conditionText}${houseText}`;
}

function buildTreatment(labels) {
  const actions = ["completed a thorough exterior service", "treated the foundation, entry points, and accessible activity areas"];

  if (state.issues.has("ants")) {
    actions.push("targeted active ant areas and nearby trailing or nesting zones");
  }
  if (state.issues.has("spiders")) {
    actions.push("removed accessible webbing and treated common spider harborage areas");
  }
  Object.keys(issueDetails).forEach((issueId) => {
    if (state.issues.has(issueId)) {
      actions.push(issueDetails[issueId].action);
    }
  });
  if (labels.conditions.length > 0) {
    actions.push("checked nearby areas connected to the conditions noted");
  }

  const gateText = state.gate === "closed" ? " Gates were closed when finished." : "";
  const accessText = state.gate === "not-accessed" ? " A gated area was not accessed during this visit." : "";

  return `I ${toSentenceList(actions)}.${gateText}${accessText}`;
}

function buildExpectation(labels) {
  const expectations = [];

  if (state.issues.has("ants")) {
    expectations.push("ant activity should decrease as the treatment transfers through the colony");
  }
  if (state.issues.has("spiders")) {
    expectations.push("some new webbing can appear between services, but activity should be reduced");
  }
  Object.keys(issueDetails).forEach((issueId) => {
    if (state.issues.has(issueId)) {
      expectations.push(issueDetails[issueId].expectation);
    }
  });
  expectations.push(...getConditionGuidance(labels));
  if (expectations.length === 0) {
    expectations.push("the home looked good overall, and I will continue monitoring on future visits");
  }

  const sentence = toSentenceList(expectations);
  return `${capitalizeSentence(sentence)}.`;
}

function buildNote() {
  const labels = getSelectedLabels();
  const observation = buildObservation(labels);
  const treatment = buildTreatment(labels);
  const expectation = buildExpectation(labels);

  return `${observation} ${treatment} ${expectation}`;
}

function buildPrompt() {
  const labels = getSelectedLabels();
  const details = {
    pestIssues: labels.issues,
    antSpecies: labels.ants,
    spiderActivity: labels.spiders,
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
  llmPrompt.value = buildPrompt();
  if (regenerate) {
    generatedNote.value = buildNote();
  }
}

function setStatus(message, type = "") {
  copyStatus.textContent = message;
  copyStatus.className = `status-pill${type ? ` is-${type}` : ""}`;
}

async function writeToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
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
  state.issues.clear();
  state.ants.clear();
  state.spiders.clear();
  state.conditions.clear();
  state.gate = "none";
  state.houseSpecific = "";
  houseSpecific.value = "";
  renderSelections();
  syncOutputs();
  setStatus("Reset");
  window.setTimeout(() => setStatus("Ready"), 900);
}

houseSpecific.addEventListener("input", () => syncOutputs());
generatedNote.addEventListener("input", () => syncOutputs({ regenerate: false }));
generateButton.addEventListener("click", () => {
  syncOutputs();
  setStatus("Generated", "success");
  window.setTimeout(() => setStatus("Ready"), 1100);
});
copyNoteButton.addEventListener("click", () => copyText(generatedNote.value, "Note copied"));
copyPromptButton.addEventListener("click", () => copyText(llmPrompt.value, "Prompt copied"));
resetButton.addEventListener("click", resetForm);

renderSelections();
syncOutputs();
