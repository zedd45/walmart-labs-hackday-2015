import angular from 'angular';

class NotesService {
    constructor () {
        // this.notes = [];
        this.notes = ["hello", "hi"];
    }

    add (note) {
        this.notes.push(note);
    }

    remove (index) {
        this.notes.splice(index, 1);
    }
}

export {NotesService};
