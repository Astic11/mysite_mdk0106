// google-sheet.js
// ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА ВАШУ ИЗ APPS SCRIPT!
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbykoLMUdLfReBI6Jc0WT84xOKAAsUgU1IFgpI7i7ccW7PeqEFZkqi5yVCxW_wO9BPX3/exec";

async function sendToGoogleSheet(data) {
    try {
        const response = await fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        console.log('✅ Данные отправлены в Google Sheets');
        return true;
    } catch (error) {
        console.error('❌ Ошибка отправки:', error);
        return false;
    }
}

async function sendRegistration(userName, userAge, userGender) {
    return await sendToGoogleSheet({
        name: userName,
        age: userAge,
        gender: userGender,
        test: "📝 РЕГИСТРАЦИЯ",
        result: "Новый пользователь",
        description: `Зарегистрирован ${new Date().toLocaleString()}`
    });
}

async function sendTestResult(userName, userAge, userGender, testName, result, description) {
    return await sendToGoogleSheet({
        name: userName,
        age: userAge,
        gender: userGender || "Не указан",
        test: testName,
        result: result,
        description: description.substring(0, 500)
    });
}