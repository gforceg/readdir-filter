export class Test {
  feature: string;
  test = (args: string): boolean => {
    return !!args;
  };
}
