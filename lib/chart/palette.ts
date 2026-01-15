export const CHART_COLORS = [
  "#FF6384", 
  "#36A2EB", 
  "#FFCE56", 
  "#4BC0C0",
  "#9966FF", 
  "#FF9F40", 
];

const getColors = (n: number) => {
  // se le categorie sono più dei colori, ripeti la palette
  return Array.from({ length: n }, (_, i) => CHART_COLORS[i % CHART_COLORS.length]);
};
