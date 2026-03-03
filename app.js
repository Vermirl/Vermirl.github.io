// Simple CV data model (stored in localStorage)
const KEY = "cv_profile_v1";

const defaultData = {
  fullName: "nguyen van tuan",
  studentId: "23810320200",
  birthDate: "02/01/2026",
  className: "D18QTNAM",
  faculty: "adadwadw",
  email: "tuancoio984@gmail.com",
  phone: "0984585234",
  address: "diachi: adawdwaasasd",
  about: "adads",
  school: "adwadw",
  major: "adasd",
  gpa: "awdawd",
  cert: "adwadw",
  techSkills: "awsdwadwadw",
  softSkills: "awdawdadw",
  languages: "adwadsa",
  careerGoal: "awsdawdawd",
  hobbies: ["adwadws"]
};

function loadData() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : defaultData;
  } catch {
    return defaultData;
  }
}

function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "";
}

function render(data) {
  setText("fullName", data.fullName);
  setText("studentId", data.studentId);
  setText("birthDate", data.birthDate);
  setText("className", data.className);
  setText("faculty", data.faculty);
  setText("email", data.email);
  setText("phone", data.phone);
  setText("address", data.address);
  setText("about", data.about);

  setText("school", data.school);
  setText("major", data.major);
  setText("gpa", data.gpa);
  setText("cert", data.cert);

  setText("techSkills", data.techSkills);
  setText("softSkills", data.softSkills);
  setText("languages", data.languages);

  setText("careerGoal", data.careerGoal);

  // hobbies
  const ul = document.getElementById("hobbies");
  ul.innerHTML = "";
  (data.hobbies || []).forEach(h => {
    const li = document.createElement("li");
    li.textContent = h;
    ul.appendChild(li);
  });
}

function openModal(data) {
  document.getElementById("modal").classList.remove("hidden");

  document.getElementById("iFullName").value = data.fullName;
  document.getElementById("iStudentId").value = data.studentId;
  document.getElementById("iBirthDate").value = data.birthDate;
  document.getElementById("iClassName").value = data.className;
  document.getElementById("iFaculty").value = data.faculty;

  document.getElementById("iEmail").value = data.email;
  document.getElementById("iPhone").value = data.phone;
  document.getElementById("iAddress").value = data.address;

  document.getElementById("iSchool").value = data.school;
  document.getElementById("iMajor").value = data.major;
  document.getElementById("iGpa").value = data.gpa;
  document.getElementById("iCert").value = data.cert;

  document.getElementById("iTechSkills").value = data.techSkills;
  document.getElementById("iSoftSkills").value = data.softSkills;
  document.getElementById("iLanguages").value = data.languages;

  document.getElementById("iAbout").value = data.about;
  document.getElementById("iCareerGoal").value = data.careerGoal;
  document.getElementById("iHobbies").value = (data.hobbies || []).join("\n");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function getFormData(prev) {
  const hobbiesRaw = document.getElementById("iHobbies").value || "";
  const hobbies = hobbiesRaw
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);

  return {
    ...prev,
    fullName: document.getElementById("iFullName").value.trim(),
    studentId: document.getElementById("iStudentId").value.trim(),
    birthDate: document.getElementById("iBirthDate").value.trim(),
    className: document.getElementById("iClassName").value.trim(),
    faculty: document.getElementById("iFaculty").value.trim(),
    email: document.getElementById("iEmail").value.trim(),
    phone: document.getElementById("iPhone").value.trim(),
    address: document.getElementById("iAddress").value.trim(),
    school: document.getElementById("iSchool").value.trim(),
    major: document.getElementById("iMajor").value.trim(),
    gpa: document.getElementById("iGpa").value.trim(),
    cert: document.getElementById("iCert").value.trim(),
    techSkills: document.getElementById("iTechSkills").value.trim(),
    softSkills: document.getElementById("iSoftSkills").value.trim(),
    languages: document.getElementById("iLanguages").value.trim(),
    about: document.getElementById("iAbout").value.trim(),
    careerGoal: document.getElementById("iCareerGoal").value.trim(),
    hobbies
  };
}

function downloadCSV(filename, rows) {
  const escape = (v) => {
    const s = String(v ?? "");
    if (s.includes('"') || s.includes(",") || s.includes("\n")) {
      return `"${s.replaceAll('"', '""')}"`;
    }
    return s;
  };

  const csv = rows.map(r => r.map(escape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportProfileToCSV(data) {
  const rows = [
    ["Field", "Value"],
    ["FullName", data.fullName],
    ["StudentId", data.studentId],
    ["BirthDate", data.birthDate],
    ["ClassName", data.className],
    ["Faculty", data.faculty],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Address", data.address],
    ["About", data.about],
    ["School", data.school],
    ["Major", data.major],
    ["GPA", data.gpa],
    ["Certificate", data.cert],
    ["TechnicalSkills", data.techSkills],
    ["SoftSkills", data.softSkills],
    ["Languages", data.languages],
    ["CareerGoal", data.careerGoal],
    ["Hobbies", (data.hobbies || []).join(" | ")]
  ];
  downloadCSV("cv_profile.csv", rows);
}

let data = loadData();
render(data);

// Buttons
document.getElementById("btnEdit").addEventListener("click", () => openModal(data));
document.getElementById("btnExport").addEventListener("click", () => exportProfileToCSV(data));
document.getElementById("btnSave").addEventListener("click", () => {
  data = getFormData(data);
  saveData(data);
  render(data);
  closeModal();
});

// Close modal actions
document.querySelectorAll("[data-close='1']").forEach(el => {
  el.addEventListener("click", () => closeModal());
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});