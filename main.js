const users = [
  {
    "name": "Tim Janis",
    "departmentId": 1,
    "equipmentId": 1,
    "id": 1
  },
  {
    "name": "Sally Fields",
    "departmentId": 5,
    "equipmentId": 3,
    "id": 2
  },
  {
    "name": "Billy Bass",
    "departmentId": 2,
    "equipmentId": 2,
    "id": 3
  },
  {
    "name": "June Cleaver",
    "departmentId": 4,
    "equipmentId": 5,
    "id": 4
  },
  {
    "name": "Bobby Bouche",
    "departmentId": 1,
    "equipmentId": 1,
    "id": 5
  },
  {
    "name": "David Hasselhoff",
    "departmentId": 3,
    "equipmentId": 4,
    "id": 6
  }
]
const departments = [
  {
    "departmentId": 1,
    "name": "Information Techonology"
  },
  {
    "departmentId": 2,
    "name": "Accounting"
  },
  {
    "departmentId": 3,
    "name": "Sales"
  },
  {
    "departmentId": 4,
    "name": "Human Resources"
  },
  {
    "departmentId": 5,
    "name": "Marketing"
  }
]
const equipment = [
  {
    "equipmentId": 1,
    "name": "MacBook Pro"
  },
  {
    "equipmentId": 2,
    "name": "Calculator"
  },
  {
    "equipmentId": 3,
    "name": "Ipad"
  },
  {
    "equipmentId": 4,
    "name": "Dell Desktop"
  },
  {
    "equipmentId": 5,
    "name": "HP Laptop"
  }
]

let placeholder = document.querySelector(".employees");

const printToDom = () => {
  for (let i = 0; i < users.length; i++) {
    let temp = document.createElement("article");
    temp.setAttribute("class", "employee");
    temp.innerHTML = `
<header class="employee__name">
    <h1>${users[i].name}</h1>
</header>
<section class="employee__department">
    This employee works in the ${localDepartment(users[i])} department.
</section>
<section class="employee__computer">
    They were issued and are currently using a ${localEquipment(users[i])}.
</section>`;
    placeholder.appendChild(temp);
  }
};

const localDepartment = (employee) => {
  for (let i = 0; i < departments.length; i++) {
    if (employee.departmentId === departments[i].departmentId) {
      employee.department = departments[i].name;
    }
  }
  return employee.department;
};

const localEquipment = (employee) => {
  for (let i = 0; i < equipment.length; i++) {
    if (employee.equipmentId === equipment[i].equipmentId) {
      employee.equipment = equipment[i].name;
    }
  }
  return employee.equipment;
};

printToDom();