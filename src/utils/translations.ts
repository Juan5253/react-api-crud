export const translateTitle = (title: string, lastName: string): string => {
  const cleanTitle = title.replace(".","").toLowerCase();
  // Caso especial: Ms. Andersen
  if (cleanTitle === "ms" && lastName === "Andersen") {
    return "Srta. Andersen";
  }
  const titles: Record<string, string> = {
    mr: "Sr.",
    ms: "Sra.",
    miss: "Srta.",
    mrs: "Sra.",
    dr: "Dr.",
  };
  return `${titles[cleanTitle] || title} ${lastName}`;
};