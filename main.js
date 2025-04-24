// Go to CONNECT --> Login --> Registrar --> Course Offered --> Course Section
// Developer Tools (Ctrl+Shift+I) -> Sources -> Left Pane (may be hidden) -> Snippets -> New Snipptes -> Paste code
// Ctrl + Enter to run
// Recommended to REFRESH the webpage before each time before running for a section

// paste after this line the cell content copied from gsheet and remove the quotations ("....") after pasting
section_no = '20';
section_capacity = '25';
theory_day = 'Sunday';
theory_start_time = '03:30 PM';
theory_end_time = '04:50 PM';
theory_room = '09D-17C';
theory_faculty = '';
lab_day = 'Monday';
lab_start_time = '08:00 AM';
lab_end_time = '10:50 AM';
lab_room = 'FT10-01L';
lab_faculty_1 = '';
lab_faculty_2 = '';
mid_exam_date = '02-08-2025';
mid_start_time = '08:30 AM';
mid_end_time = '10:30 AM';
final_exam_date = '20-09-2025';
final_start_time = '08:30 AM';
final_end_time = '10:30 AM';

// Change the following parameters accordingly
course_code = 'CSE250';
degree = 'Undergraduate';
semester = 'SUMMER 2025';

create_course();   // comment out if you are editing (Updating)
await sleep(2000);

////// You can also edit specific pages by simply commenting out the sections related to the other pages.

////////////// Page 1: Section Page //////////////
select_dropdown('academic_degree', degree);
await sleep(2000);
select_dropdown('semester_session', semester);
await sleep(2000);
select_dropdown('course_code', course_code);
await sleep(2000);
select_dropdown('theory_room', theory_room);
await sleep(2000);
insert_section_no(section_no);
insert_section_capacity(section_capacity);
select_custom_time();
turn_on_has_lab();

if (theory_faculty !== '') {
    select_dropdown('theory_faculty', theory_faculty);
    await sleep(2000);
    add_faculty('theory');
    await sleep(2000);
}
next_page_1_3('0');
await sleep(4000);


////////////// Page 2: Schedule Page //////////////
set_time('theory', 'start', theory_start_time);
set_time('theory', 'end', theory_end_time);
select_dropdown('theory_day', theory_day);
await sleep(2000);
add_schedule('theory');
await sleep(2000);

set_time('mid', 'start', mid_start_time);
set_time('mid', 'end', mid_end_time);
set_date('mid', mid_exam_date);
await sleep(2000);

set_time('final', 'start', final_start_time);
set_time('final', 'end', final_end_time);
set_date('final', final_exam_date);
await sleep(2000);
next_page_2_4('1');
await sleep(4000);


////////////// Page 3: Lab Page //////////////
select_dropdown('lab_room', lab_room);
await sleep(2000);

if (lab_faculty_1 !== '') {
    select_dropdown('lab_faculty', lab_faculty_1);
    await sleep(2000);
    add_faculty('lab');
    await sleep(2000);
}
if (lab_faculty_2 !== '') {
    select_dropdown('lab_faculty', lab_faculty_2);
    await sleep(2000);
    add_faculty('lab');
    await sleep(2000);
}
next_page_1_3('1');
await sleep(2000);


////////////// Page 4: Lab Schedule Page //////////////
set_time('lab', 'start', lab_start_time);
set_time('lab', 'end', lab_end_time);
select_dropdown('lab_day', lab_day);
await sleep(2000);
add_schedule('lab');
await sleep(2000);
next_page_2_4('2');
await sleep(3000);

////////////// Page 5: Approval Page //////////////
// CAREFUL, if you uncomment the line below, it will click 'Send For Approval' button
// Once clicked, you cannot edit anything for that section
// To be on the safe side, after running the script, manually click 'Send For Approval'

// send_for_approval();      // CAREFULL: read above if you want to uncomment this line


async function send_for_approval() {
    send_for_approval_button = document.querySelectorAll('button.btn.btn-primary');
    send_for_approval_button[0].click();
    await sleep(2000);
    confirm_button = document.querySelectorAll('button.swal2-confirm');
    confirm_button[0].click();
    await sleep(2000);
}

async function next_page_1_3(index) {
    button = document.querySelectorAll('button.btn.m-1.btn-primary');
    await sleep(1000);
    button[parseInt(index)].click();
}

async function next_page_2_4(index) {
    button = document.querySelectorAll('button.btn.me-2.btn-primary');
    await sleep(1000);
    button[parseInt(index)].click();
}

async function create_course() {
    document.querySelectorAll('button.btn.btn-sm.btn-primary')[0].click();
    await sleep(2000);
}

function select_custom_time() {
    all_radio_buttons = document.querySelectorAll('mat-radio-button');
    all_radio_buttons.forEach(radio_button => {
        if (radio_button.textContent.includes('Custom Time')) {
            input = radio_button.querySelector('input[type="radio"]');
            radio_button.querySelector(`label[for="${input.id}"]`).click();

        }
    });
}

async function add_schedule(theory_or_lab_schedule) {
    let index;
    if (theory_or_lab_schedule == 'theory') {
        index = 0;
    }
    else if (theory_or_lab_schedule == 'lab') {
        index = 1;
    }
    document.querySelectorAll('button.btn.btn-primary.mb-8')[index].click();
}

function add_faculty(theory_or_lab_faculty) {
    let index;
    if (theory_or_lab_faculty == 'theory') {
        index = 0;
    }
    else if (theory_or_lab_faculty == 'lab') {
        index = 1;
    }
    document.querySelectorAll('button.btn.btn-primary.default')[index].click();
}

async function select_dropdown(field_name, selection) {
    const index = {
        academic_degree: 0,
        semester_session: 1,
        course_code: 2,
        theory_room: 3,
        theory_faculty: 4,
        theory_day: 5,
        lab_room: 6,
        lab_faculty: 7,
        lab_day: 8,
    };

    all_menu = document.querySelectorAll('.mat-mdc-select-value');
    menu = all_menu[index[field_name]];
    menu.click();
    await sleep(1000);

    options = document.querySelectorAll('mat-option');
    options.forEach(option => {
        if (option.textContent.includes(selection)) {
            option.click();
        }
    });
}

async function set_time(type, position, time) {
    let index;
    if (type == 'theory' && position == 'start')
        index = 0;
    else if (type == 'theory' && position == 'end')
        index = 1;
    else if (type == 'mid' && position == 'start')
        index = 2;
    else if (type == 'mid' && position == 'end')
        index = 3;
    else if (type == 'final' && position == 'start')
        index = 4;
    else if (type == 'final' && position == 'end')
        index = 5;
    else if (type == 'lab' && position == 'start')
        index = 6;
    else if (type == 'lab' && position == 'end')
        index = 7;

    const [hour_minute, meridian] = time.split(' ');
    const [hour, minute] = hour_minute.split(':');

    if (meridian != 'AM') {
        const am_pm_element = document.querySelectorAll('button.btn.btn-outline-primary');
        am_pm_element[index].click();
        await sleep(200);
    }

    const hour_element = document.querySelectorAll('input[aria-label="Hours"]');
    hour_element[index].value = hour;
    hour_element[index].dispatchEvent(new Event('change', { bubbles: true }));
    await sleep(200);

    const minute_element = document.querySelectorAll('input[aria-label="Minutes"]');
    minute_element[index].value = minute;
    minute_element[index].dispatchEvent(new Event('change', { bubbles: true }));
    await sleep(200);
}

async function set_date(type, date) {
    let index;
    if (type == 'mid') index = 2;
    else if (type == 'final') index = 3;

    const month_names = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [day, month, year] = date.split('-');
    const month_name = month_names[parseInt(month, 10) - 1];

    document.querySelectorAll('button[aria-label="Open calendar"]')[index].click();
    await sleep(200);
    document.querySelector('button.mat-calendar-period-button').click();
    await sleep(200);
    document.querySelector('button[aria-label="' + year + '"]').click();
    await sleep(200);
    document.querySelector('button[aria-label="' + month_name + ' ' + year + '"]').click();
    await sleep(200);
    document.querySelector('button[aria-label="' + date + '"]').click();
    await sleep(200);
}

async function insert_section_no(section_no) {
    labels = document.querySelectorAll('label');
    labels.forEach(label => {
        if (label.textContent.includes('Section Name')) {
            id = label.getAttribute('for');
            field = document.getElementById(id);
            field.value = section_no;
            field.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
    );
    await sleep(2000);
}

async function insert_section_capacity(capacity) {
    labels = document.querySelectorAll('label');
    labels.forEach(label => {
        if (label.textContent.includes('Section Capacity')) {
            id = label.getAttribute('for');
            field = document.getElementById(id);
            field.value = capacity;
            field.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
    );
    await sleep(2000);
}

async function turn_on_has_lab() {
    toggles = document.querySelectorAll('button[role="switch"]');
    toggles.forEach(toggle => {
        id = toggle.getAttribute('aria-labelledby');
        field = document.getElementById(id);

        if (field.textContent.includes('Has Lab')) {
            toggle.click();
        }
    });
    await sleep(2000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}