// Fonction pour formater les durées en min et secondes
function formatDisplay(int) {
  const minutes = Math.floor(int / 60); // On calcule les minutes
  const seconds = int - minutes * 60 // puis les secondes
  if (!minutes) return `${seconds}s`; // s'il y a moins d'une minute, on ne laisse que les secondes
  if (!seconds) return `${minutes}min`; // s'il y a moins d'une minute, on ne laisse que les secondes
  return `${minutes}min ${seconds}s`;
}

export default formatDisplay;
