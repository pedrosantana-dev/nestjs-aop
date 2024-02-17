import { lastValueFrom } from 'rxjs';

export function LogExecutionTimeofMethods() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const result = await lastValueFrom(originalMethod.apply(this, args));
      const finish = performance.now();
      const delay = finish - start;
      const log = {
        delay,
        method: propertyKey,
        className: this.constructor.name,
      };
      console.log(log);
      return result;
    };

    return descriptor;
  };
}
