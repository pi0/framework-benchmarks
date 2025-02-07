/// <reference types="lighthouse/types/global-lh" />

declare module 'lighthouse' {
  function lighthouse(
    url: string,
    options: Partial<LH.CliFlags>
  ): Promise<LH.RunnerResult>;
  export default lighthouse;
}

declare module 'lighthouse/report/generator/report-generator.js' {
  function generateReport(lhr: LH.LHResult, type: string): string;

  export { generateReport };
}
