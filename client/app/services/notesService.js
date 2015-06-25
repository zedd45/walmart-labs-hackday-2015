import angular from 'angular';

class NotesService {
    constructor () {
        this.notes = [];
    }

    add (note) {
        this.notes.push(note);
    }

    remote (index) {
        this.notes.splice(index, 1);
    }
}

export {NotesService};
