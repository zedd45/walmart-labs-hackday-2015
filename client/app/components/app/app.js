import './app.styl';

let App = () => {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div class="container-fluid">
        <nav class="navbar navbar-sams navbar-fixed-top">
          <a class="navbar-brand" href="#">
            <img style="height: 30px" class="img-responsive" alt="Brand" src="/images/logo-large.png">
          </a>
        </nav>
        <speech-recognition></speech-recognition>
        <club-listing></club-listing>
        <product-listing></product-listing>
      </div>
    `
  }
}

export {App};
