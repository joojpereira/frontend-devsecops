export const STAGES = ["Build", "Sonar", "Trivy", "Push", "Deploy"];

export function progress(done, total) {
  if (total <= 0) return 0;
  const pct = Math.round((done / total) * 100);
  return Math.min(100, Math.max(0, pct));
}

export function statusMessage(done, total) {
  if (done <= 0) return "Pipeline ainda não iniciada.";
  if (done >= total) return "Pipeline concluída com sucesso!";
  return `Etapa ${done} de ${total} concluída.`;
}