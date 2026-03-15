function getGreeting() {
    return "Привет! Добро пожаловать в модульное Node.js приложение.";
}

// БЫЛО (ошибка для текущего импорта):
// module.exports = getGreeting;

// СТАЛО (правильно для импорта с {}):
module.exports = { getGreeting };