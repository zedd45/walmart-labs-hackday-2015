import angular from 'angular';

class NotesService {
    constructor () {
        // Stub a few default notes
        this.notes = [
          "attend Angular U",
          "have fun writing Angular",
          "Cheers",
          "add more functionality",
        ];
    }

    add (note) {
        this.notes.push(note);
    }

    remove (index) {
        this.notes.splice(index, 1);
    }
}

export {NotesService};
