/* eslint-disable no-nested-ternary */
export default function convertToInternationalCurrency(labelValue) {
  return Math.abs(Number(labelValue)) >= 1.0e+9

    ? `${(Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2)}B`
  // Six Zero pour Millions
    : Math.abs(Number(labelValue)) >= 1.0e+6

      ? `${(Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2)}M`
    // Trois Zero pour Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? `${(Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2)}K`

        : Math.abs(Number(labelValue));
}
