let App = () => {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <speech-recognition></speech-recognition>
        <club-listing></club-listing>
      </div>
    `
  }
}

export {App};
