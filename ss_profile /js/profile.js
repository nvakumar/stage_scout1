document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-profile-btn");
    const nameField = document.getElementById("profile-name");
    const roleField = document.getElementById("profile-role");
    const bioField = document.getElementById("profile-bio");

    const skillActing = document.getElementById("skill-acting");
    const skillPerformance = document.getElementById("skill-performance");
    const skillVoice = document.getElementById("skill-voice");

    editButton.addEventListener("click", function () {
        if (editButton.innerText === "Edit Profile") {
            // Convert profile text into input fields
            nameField.innerHTML = `<input type="text" id="name-input" value="${nameField.innerText}" class="input-field">`;
            roleField.innerHTML = `<input type="text" id="role-input" value="${roleField.innerText}" class="input-field">`;
            bioField.innerHTML = `<textarea id="bio-input" class="input-field">${bioField.innerText}</textarea>`;

            // Convert skill percentages into input fields (inside progress bars)
            skillActing.innerHTML = `<input type="number" id="acting-input" value="${parseInt(skillActing.innerText)}" class="input-field" min="0" max="100"> %`;
            skillPerformance.innerHTML = `<input type="number" id="performance-input" value="${parseInt(skillPerformance.innerText)}" class="input-field" min="0" max="100"> %`;
            skillVoice.innerHTML = `<input type="number" id="voice-input" value="${parseInt(skillVoice.innerText)}" class="input-field" min="0" max="100"> %`;

            editButton.innerText = "Save Profile"; // Change button text
        } else {
            // Save edited values
            const updatedName = document.getElementById("name-input").value;
            const updatedRole = document.getElementById("role-input").value;
            const updatedBio = document.getElementById("bio-input").value;

            const updatedActing = document.getElementById("acting-input").value;
            const updatedPerformance = document.getElementById("performance-input").value;
            const updatedVoice = document.getElementById("voice-input").value;

            nameField.innerText = updatedName;
            roleField.innerText = updatedRole;
            bioField.innerText = updatedBio;

            skillActing.innerText = `${updatedActing}%`;
            skillPerformance.innerText = `${updatedPerformance}%`;
            skillVoice.innerText = `${updatedVoice}%`;

            skillActing.style.width = updatedActing + "%";
            skillPerformance.style.width = updatedPerformance + "%";
            skillVoice.style.width = updatedVoice + "%";

            editButton.innerText = "Edit Profile"; // Change button text back
        }
    });
});