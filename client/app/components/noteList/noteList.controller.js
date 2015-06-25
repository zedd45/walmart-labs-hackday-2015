// using classes, we make the controller here
class NoteListController {
    constructor (NotesService) {
        this.NotesService = NotesService;
        console.log("notes service is: ", this.NotesService);
    }
}

NoteListController.$inject = ['NotesService'];

export {NoteListController};
