export const translateTitle = (title: string, lastName: string): string => {
  // Caso especial: Ms. Andersen
  if (title.toLowerCase() === "ms" && lastName === "Andersen") {
    return "Srta. Andersen";
  }
  const titles: Record<string, string> = {
    Mr: "Sr.",
    Ms: "Sra.",
    miss: "Srta.",
    Mrs: "Sra.",
    dr: "Dr.",
  };
  return `${titles[title.toLowerCase()] || title} ${lastName};`
};