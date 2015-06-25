import angular from 'angular';

const notes = [
  "attend Angular U",
  "have fun writing Angular",
  "Cheers",
  "add more functionality",
];

class NotesService {
    constructor () {
        this.notes = notes;
    }

    add (note) {
        this.notes.push(note);
    }

    remove (index) {
        this.notes.splice(index, 1);
    }
}

export {NotesService};
