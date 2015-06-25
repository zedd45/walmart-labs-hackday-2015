// using classes, we make the controller here
// with a createNote method
class NoteMakerController {
    constructor () {
        this.notes = [];
    }

    createNote () {
        this.notes.push(this.newNote);
        this.newNote = "";
    }
}

// noteMakerController.$inject = ['$scope'];

export {NoteMakerController};
