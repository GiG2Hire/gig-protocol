export const FREELANCER = "Freelancer";
export const CLIENT = "Client";
export const STATUS_200 = 200;
export const SENTIMENT_TO_CODE_MAPPING = {
  negative: ["5", "Not good. Review all tasks."],
  "slightly negative": ["4", "Is everything ok?"],
  neutral: ["3", "Something seems missing..."],
  "slightly positive": ["2", "You are almost there."],
  "very positive": ["1", "Everything seems on track!"],
};
export const enum GIG_COMPLETION_STATUS {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  CANCELLED = "CANCELLED",
  COMPLETE = "COMPLETE",
}

export const enum GIG_TASK_STATUS {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETE = "COMPLETE",
}

export const MONTH_NAMES: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const WEEK_DAYS: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const JOB_CATEGORIES = {
  1001: "Development & IT",
  1002: "Design & Creative",
  1003: "AI services",
  1004: "Sales & Marketing",
  1005: "Admin & Customer Support",
  1006: "Writing & Translation",
};

export const enum GIG_OFFER_STATUS {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}
