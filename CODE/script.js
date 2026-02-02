let users = [];
let editId = null;

function addUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (!name || !age) return alert("Fill all fields");

    users.push({ id: Date.now(), name, age });
    showToast("User Added");
    displayUsers();
}

function displayUsers() {
    const box = document.getElementById("users");
    box.innerHTML = "";

    users.forEach(user => {
        box.innerHTML += `
            <div class="user">
                <span>${user.name} - ${user.age}</span>
                <div>
                    <button onclick="editUser(${user.id})">✏️</button>
                    <button onclick="deleteUser(${user.id})">❌</button>
                </div>
            </div>
        `;
    });
}

function deleteUser(id) {
    users = users.filter(u => u.id !== id);
    showToast("User Deleted");
    displayUsers();
}

function editUser(id) {
    const user = users.find(u => u.id === id);
    editId = id;

    document.getElementById("editName").value = user.name;
    document.getElementById("editAge").value = user.age;
    document.getElementById("modal").style.display = "block";
}

function updateUser() {
    const name = document.getElementById("editName").value;
    const age = document.getElementById("editAge").value;

    const user = users.find(u => u.id === editId);
    user.name = name;
    user.age = age;

    document.getElementById("modal").style.display = "none";
    showToast("User Updated");
    displayUsers();
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    setTimeout(() => toast.innerText = "", 2000);
}
