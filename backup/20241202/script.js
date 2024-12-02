let isHoliday = false; // 휴무일 플래그 초기화

document.getElementById('menuButton').addEventListener('click', function() {
    const menuSection = document.getElementById('menu');
    if (menuSection.style.display === 'none') {
        menuSection.style.display = 'block'; // 메뉴 표시
    } else {
        menuSection.style.display = 'none'; // 메뉴 숨김
    }
});

// 비밀번호 확인 및 버튼 활성화
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const holidayButton = document.getElementById('holidayButton');
    if (password === '1234') { // 'yourPassword'를 원하는 비밀번호로 변경
        holidayButton.disabled = false; // 버튼 활성화
    } else {
        holidayButton.disabled = true; // 버튼 비활성화
    }
});

document.getElementById('holidayButton').addEventListener('click', function() {
    isHoliday = !isHoliday; // 플래그 상태 반전
    if (isHoliday) {
        alert("휴무일로 설정되었습니다."); // 사용자에게 알림
    } else {
        alert("휴무일이 해제되었습니다."); // 사용자에게 알림
    }
});