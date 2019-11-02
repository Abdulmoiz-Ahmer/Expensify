export const setTextFilter = text => ({
  type: "TEXT_FILTER",
  text
});

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
