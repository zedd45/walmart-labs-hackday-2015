// using classes, we make the controller here
// with a createNote method
class NoteMakerController {
    constructor (NotesService) {
        this.NotesService = NotesService;
    }

    createNote () {
        this.NotesService.add(this.newNote);
        this.newNote = "";
    }
}

NoteMakerController.$inject = ['NotesService'];

export {NoteMakerController};
