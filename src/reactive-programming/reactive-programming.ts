interface Observable<T> {
  subscribe: (o: Subscriber<T>) => Subscription;
}

interface Subscription {
  unsubscribe: () => void;
}

interface Subscriber<T> {
  onNext?: (value: T) => void;
  onComplete?: () => void;
}

interface Observer<T> {
  next: (value: T) => void;
  complete: () => void;
}

/**
 * https://www.codewars.com/kata/5c8f822533a2b7336aeee2de
 */
export const create = <T>(f: (o: Observer<T>) => void): Observable<T> => {
  return {
    subscribe: (subscriber: Subscriber<T>): Subscription => {
      let completed = false;

      f({
        next: (value: T): void => {
          !completed && subscriber.onNext && subscriber.onNext(value);
        },

        complete: (): void => {
          if (!completed) {
            completed = true;
            subscriber.onComplete && subscriber.onComplete();
          }
        }
      });

      return {
        unsubscribe: (): void => {
          completed = true;
        }
      };
    }
  };
};
