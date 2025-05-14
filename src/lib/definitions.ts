export type Filter = {
  value: string;
  label: string;
  items: {
    label: string;
    value: string;
  }[];
};

export type Tab = {
  value: string;
  label: string;
  filters: Filter[];
};
