let App = () => {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <speech-recognition></speech-recognition>
      </div>
    `
  }
}

export {App};
