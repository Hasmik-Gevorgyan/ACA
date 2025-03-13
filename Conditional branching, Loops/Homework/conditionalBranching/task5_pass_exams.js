function passOrFail(mark1, mark2, mark3) {
    const marks = [mark1, mark2, mark3];
    const average = (mark1 + mark2 + mark3) / 3;
    const failedMarks = marks.filter(mark => mark < 40);
    
    if(failedMarks.length > 1 || (failedMarks.length === 1 && average < 50)) return 'Not passed'
    return 'Passed';
}

console.log(passOrFail(65, 70, 60))
console.log(passOrFail(10, 85, 75))
console.log(passOrFail(35, 25, 40))
console.log(passOrFail(20, 40, 40))