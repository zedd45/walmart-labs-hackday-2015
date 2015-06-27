let App = () => {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <speech-recognition></speech-recognition>
        <club-listing></club-listing>
        <product-listing></product-listing>
      </div>
    `
  }
}

export {App};
