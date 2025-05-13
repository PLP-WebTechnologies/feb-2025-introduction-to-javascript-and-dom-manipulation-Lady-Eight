let isNoteAdded = false;

function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Soil moisture: 65%, Temp: 24°C';
}

function changeStyle() {
    const styleBox = document.getElementById('styleBox');
    styleBox.style.backgroundColor = styleBox.style.backgroundColor === 'lightgreen' ? 'lightblue' : 'lightgreen';
}

function toggleElement() {
    const noteContainer = document.getElementById('noteContainer');
    const toggleButton = document.getElementById('toggleButton');
    
    if (isNoteAdded) {
        const note = document.getElementById('note');
        if (note) note.remove();
        toggleButton.textContent = 'Add Note';
    } else {
        const note = document.createElement('p');
        note.id = 'note';
        note.textContent = 'Reminder: Check irrigation schedule.';
        noteContainer.appendChild(note);
        toggleButton.textContent = 'Remove Note';
    }
    isNoteAdded = !isNoteAdded;
}