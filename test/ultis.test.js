import { test } from "node:test";
import assert from "node:assert/strict";
import { STAGES, progress, statusMessage } from "../src/utils.js";

test("STAGES tem as 5 etapas da pipeline", () => {
  assert.deepEqual(STAGES, ["Build", "Sonar", "Trivy", "Push", "Deploy"]);
});

test("progress calcula a porcentagem", () => {
  assert.equal(progress(1, 5), 20);
  assert.equal(progress(5, 5), 100);
});

test("progress protege contra valores inválidos", () => {
  assert.equal(progress(1, 0), 0);
  assert.equal(progress(-3, 5), 0);
  assert.equal(progress(9, 5), 100);
});

test("statusMessage cobre os três estados", () => {
  assert.equal(statusMessage(0, 5), "Pipeline ainda não iniciada.");
  assert.equal(statusMessage(2, 5), "Etapa 2 de 5 concluída.");
  assert.equal(statusMessage(5, 5), "Pipeline concluída com sucesso!");
});