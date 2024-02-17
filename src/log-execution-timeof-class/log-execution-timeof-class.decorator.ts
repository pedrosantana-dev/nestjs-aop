import { SetMetadata } from '@nestjs/common';
import { LogExecutionTimeofMethods } from 'src/log-execution-timeof-methods/log-execution-timeof-methods.decorator';

export const LogExecutionTimeofClass = () => {
  return function (constructor: any) {
    Object.getOwnPropertyNames(constructor.prototype).forEach((method) => {
      if (method !== 'constructor') {
        const descriptor = Object.getOwnPropertyDescriptor(
          constructor.prototype,
          method,
        );
        if (descriptor && typeof descriptor.value === 'function') {
          Object.defineProperty(
            constructor.prototype,
            method,
            LogExecutionTimeofMethods()(
              constructor.prototype,
              method,
              descriptor,
            ) || descriptor,
          );
        }
      }
    });
  };
};
