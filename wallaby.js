module.exports = function (w) {

  return {
    files: [
      'src/app/name-component/name-component.component.ts',
      'src/app/test/test.component.ts'
    ],

    tests: [
      'src/app/name-component/name-component.component.spec.ts',
      'src/app/test/test.component.spec.ts'
    ],
    testFramework: 'jasmine',
    env: {
        type: 'node'
    }
  };
};

