import { create } from "./reactive-programming";

describe("create tests", () => {
  it("should not execute observer function when observable has no subscriptions", () => {
    let called = false;

    const number$ = create(function (observer) {
      called = true;
      observer.next(1);
      observer.next(2);
    });

    expect(called).toEqual(false);
  });
  it("should issue sync values", () => {
    const numbers: number[] = [];

    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
    });

    number$.subscribe({ onNext: (v) => numbers.push(v) });

    expect(numbers).toEqual([1, 2]);
  });
  it("should issue sync values even if the subscription occurs immediately. Async values are not issued", () => {
    const numbers: number[] = [];

    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
      }, 0);
    });

    number$.subscribe({ onNext: (v) => numbers.push(v) }).unsubscribe();

    expect(numbers).toEqual([1, 2]);
  });
  it("should issue async values", (cbk) => {
    const numbers: number[] = [];

    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
      }, 0);
    });

    number$.subscribe({ onNext: (v) => numbers.push(v) });

    setTimeout(() => {
      expect(numbers).toEqual([1, 2, 3]);
      cbk();
    }, 10);
  });
  it("should not issue values after complete", (cbk) => {
    const numbers: number[] = [];
    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
        observer.complete();
        observer.next(4);
      }, 0);
    });

    number$.subscribe({ onNext: (v) => numbers.push(v) });

    setTimeout(() => {
      expect(numbers).toEqual([1, 2, 3]);
      cbk();
    }, 10);
  });
  it("should call onComplete if observable is completed", (cbk) => {
    const numbers: number[] = [];
    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
        observer.complete();
      }, 0);
    });

    number$.subscribe({
      onNext: (v) => numbers.push(v),
      onComplete: () => numbers.push(4)
    });

    setTimeout(() => {
      expect(numbers).toEqual([1, 2, 3, 4]);
      cbk();
    }, 10);
  });
  it("should not call onComplete if observable is not completed", (cbk) => {
    const numbers: number[] = [];
    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
      }, 0);
    });

    number$.subscribe({
      onNext: (v) => numbers.push(v),
      onComplete: () => numbers.push(4)
    });

    setTimeout(() => {
      expect(numbers).toEqual([1, 2, 3]);
      cbk();
    }, 10);
  });
  it("should not call onComplete when unsubscribe before completed", (cbk) => {
    const numbers: number[] = [];
    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
        observer.complete();
      }, 0);
    });

    number$
      .subscribe({
        onNext: (v) => numbers.push(v),
        onComplete: () => numbers.push(4)
      })
      .unsubscribe();

    setTimeout(() => {
      expect(numbers).toEqual([1, 2]);
      cbk();
    }, 10);
  });
  it("should not issue values after unsubscription", (cbk) => {
    const numbers: number[] = [];
    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
      }, 10);
      setTimeout(() => {
        observer.next(4);
      }, 50);
    });

    const subscription = number$.subscribe({ onNext: (v) => numbers.push(v) });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 30);

    setTimeout(() => {
      expect(numbers).toEqual([1, 2, 3]);
      cbk();
    }, 100);
  });
  it("should preserve the subscription order when subscribing two observables", (cbk) => {
    const numbers: Array<{ observable1?: number; observable2?: number }> = [];
    const number$ = create<number>(function (observer) {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
      }, 0);
    });

    number$.subscribe({ onNext: (v) => numbers.push({ observable1: v }) });
    number$.subscribe({ onNext: (v) => numbers.push({ observable2: v }) });

    setTimeout(() => {
      expect(numbers).toEqual([
        { observable1: 1 },
        { observable1: 2 },
        { observable2: 1 },
        { observable2: 2 },
        { observable1: 3 },
        { observable2: 3 }
      ]);
      cbk();
    }, 50);
  });
});
